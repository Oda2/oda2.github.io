async function loadGitHub() {
  const res = await fetch("https://api.github.com/users/oda2");
  const data = await res.json();

  document.getElementById("avatar").src = data.avatar_url;
  document.getElementById("name").innerText = data.name || "Oda";
  document.getElementById("bio").innerText = data.bio || "";
}

loadGitHub();
setLanguage("pt");