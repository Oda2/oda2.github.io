const username = "oda2";

async function loadProfile() {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  avatar.src = data.avatar_url;
  name.innerText = data.name;
  bio.innerText = data.bio;
}

async function loadRepos() {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=stars`);
  const repos = await res.json();

  const container = document.getElementById("projects");

  repos.slice(0, 6).forEach(repo => {
    const div = document.createElement("div");
    div.className = "project";

    div.innerHTML = `
      <strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong>
      <p>${repo.description || ""}</p>
      ⭐ ${repo.stargazers_count}
    `;

    container.appendChild(div);
  });
}

function loadExperience() {
  const exp = document.getElementById("experience");

  exp.innerHTML = `
    <div>
      <strong>Mercado Livre</strong> — Tech Lead  
      <p>Responsável por sistemas críticos de logística (20k+ RPM), atuando com microservices, SRE, observabilidade e arquitetura distribuída.</p>
    </div>

    <div>
      <strong>Softplan</strong> — Especialista / Senior  
      <p>Atuação em sistemas jurídicos complexos com workflows stateful, Micro Front-Ends e Design System.</p>
    </div>

    <div>
      <strong>OnClick</strong> — Analista  
      <p>Integrações de eCommerce em larga escala com mensageria e sistemas distribuídos.</p>
    </div>
  `;
}

function loadSkills() {
  const skills = [
    "Distributed Systems",
    "SRE / Observability",
    "Go / Node.js",
    "Kubernetes / AWS / GCP",
    "Microservices",
    "High Scale Systems"
  ];

  const ul = document.getElementById("skills");

  skills.forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    ul.appendChild(li);
  });
}

document.getElementById("lang").addEventListener("change", e => {
  applyI18n(e.target.value);
});

applyI18n("pt");
loadProfile();
loadRepos();
loadExperience();
loadSkills();