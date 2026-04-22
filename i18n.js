const translations = {
  pt: {
    title: "Tech Lead | Sistemas Distribuídos | SRE",
    about: "Sobre",
    about_text: "Tech Lead no Mercado Livre focado em sistemas críticos, alta escala e confiabilidade.",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Skills"
  },
  en: {
    title: "Tech Lead | Distributed Systems | SRE",
    about: "About",
    about_text: "Tech Lead at Mercado Livre focused on critical systems, high scale and reliability.",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills"
  },
  es: {
    title: "Tech Lead | Sistemas Distribuidos | SRE",
    about: "Sobre",
    about_text: "Tech Lead enfocado en sistemas críticos, alta escala y confiabilidad.",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Skills"
  }
};

function applyI18n(lang) {
  document.getElementById("title").innerText = translations[lang].title;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerText = translations[lang][el.dataset.i18n];
  });
}