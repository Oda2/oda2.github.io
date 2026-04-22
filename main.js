const username = "oda2";

/* GitHub repos */
async function loadRepos() {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=stars`);
  const repos = await res.json();

  const container = document.getElementById("projects");
  container.innerHTML = "";

  repos
    .filter(r => !r.fork)
    .slice(0, 6)
    .forEach(repo => {
      const div = document.createElement("div");
      div.className = "project";

      div.innerHTML = `
        <strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong>
        <p>${repo.description || ""}</p>
      `;

      container.appendChild(div);
    });
}

/* chart */
const ctx = document.getElementById("chart");
const data = Array.from({length: 20}, () => 20000 + Math.random()*2000);

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: data.map((_, i) => i),
    datasets: [{ data }]
  }
});

setInterval(() => {
  data.shift();
  data.push(20000 + Math.random()*3000);
  chart.data.datasets[0].data = data;
  chart.update();

  document.getElementById("rpm").innerText =
    Math.floor(data[data.length-1]) + " RPM";
}, 2000);

/* terminal */
const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

const commands = {
  help: () => print("help | status | clear"),
  status: () => print("System operational"),
  clear: () => output.innerHTML = ""
};

function print(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  output.appendChild(div);
}

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value;
    print("> " + cmd);
    commands[cmd]?.() || print("unknown command");
    input.value = "";
  }
});

/* init */
document.addEventListener("DOMContentLoaded", () => {
  applyI18n("pt");
  loadRepos();
});