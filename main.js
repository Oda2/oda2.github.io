const username = "oda2";

/* GitHub profile */
async function loadProfile() {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  avatar.src = data.avatar_url;
  name.innerText = data.name;
  bio.innerText = data.bio;
}

/* Repos as logs */
async function loadRepos() {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=stars`);
  const repos = await res.json();

  const container = document.getElementById("projects");

  repos.slice(0, 6).forEach(repo => {
    const div = document.createElement("div");
    div.className = "log-line";

    div.innerHTML = `
      [repo] <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      <span class="log-meta">⭐ ${repo.stargazers_count}</span>
    `;

    container.appendChild(div);
  });
}

/* Experience as services */
function loadExperience() {
  const exp = document.getElementById("experience");

  exp.innerHTML = `
    <div class="service">
      <strong>mercado-envios.outbound</strong>
      <p>Role: Tech Lead | Scale: High | Status: Running</p>
    </div>

    <div class="service">
      <strong>justice-platform.saj</strong>
      <p>Role: Specialist | Domain: Legal Workflows | Status: Stable</p>
    </div>

    <div class="service">
      <strong>ecommerce-integrations</strong>
      <p>Role: Engineer | Domain: Integrations | Status: Completed</p>
    </div>
  `;
}

/* Skills */
function loadSkills() {
  const skills = [
    "Distributed Systems",
    "SRE / Observability",
    "Microservices",
    "Kubernetes / AWS / GCP",
    "Go / Node.js",
    "High Scale Systems"
  ];

  const ul = document.getElementById("skills");

  skills.forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    ul.appendChild(li);
  });
}

/* Fake realtime RPM */
setInterval(() => {
  const rpm = document.getElementById("rpm");
  rpm.innerText = (20000 + Math.floor(Math.random() * 3000)) + " RPM";
}, 3000);

/* Lang */
document.getElementById("lang").addEventListener("change", e => {
  applyI18n(e.target.value);
});

/* Init */
applyI18n("pt");
loadProfile();
loadRepos();
loadExperience();
loadSkills();