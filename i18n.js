const translations = {
  pt: {
    title: "Tech Lead | Sistemas Distribuídos | SRE",
    about: "Sobre",
    about_text: "Responsável por sistemas críticos de logística operando em alta escala (20k+ RPM), com foco em confiabilidade, observabilidade e arquitetura distribuída.",
    experience: "Serviços (Experiência)",
    projects: "Logs (Projetos)",
    skills: "Capabilities"
  },
  en: {
    title: "Tech Lead | Distributed Systems | SRE",
    about: "About",
    about_text: "Responsible for critical logistics systems operating at high scale (20k+ RPM), focused on reliability, observability and distributed architecture.",
    experience: "Services (Experience)",
    projects: "Logs (Projects)",
    skills: "Capabilities"
  },
  es: {
    title: "Tech Lead | Sistemas Distribuidos | SRE",
    about: "Sobre",
    about_text: "Responsable de sistemas críticos de logística en alta escala (20k+ RPM), enfocado en confiabilidad y observabilidad.",
    experience: "Servicios (Experiencia)",
    projects: "Logs (Proyectos)",
    skills: "Capacidades"
  }
};

function applyI18n(lang) {
  document.getElementById("title").innerText = translations[lang].title;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerText = translations[lang][el.dataset.i18n];
  });
}