const translations = {
  pt: {
    title: "Tech Lead | Sistemas Distribuídos",
    experience: "Experiência",
    projects: "Projetos"
  },
  en: {
    title: "Tech Lead | Distributed Systems",
    experience: "Experience",
    projects: "Projects"
  },
  es: {
    title: "Tech Lead | Sistemas Distribuidos",
    experience: "Experiencia",
    projects: "Proyectos"
  }
};

function applyI18n(lang) {
  document.getElementById("title").innerText = translations[lang].title;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerText = translations[lang][el.dataset.i18n];
  });
}