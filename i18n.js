const translations = {
  pt: {
    about_title: "Sobre",
    about_text: "Tech Lead focado em sistemas distribuídos, alta escala e confiabilidade.",
    stack_title: "Stack / Especialidades"
  },
  en: {
    about_title: "About",
    about_text: "Tech Lead focused on distributed systems, high scale and reliability.",
    stack_title: "Stack / Expertise"
  },
  es: {
    about_title: "Sobre",
    about_text: "Tech Lead enfocado en sistemas distribuidos, alta escala y confiabilidad.",
    stack_title: "Stack / Especialidades"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });
}

document.getElementById("lang").addEventListener("change", (e) => {
  setLanguage(e.target.value);
});