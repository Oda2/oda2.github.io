const translations = {
  pt: {
    navAbout: "About",
    navExperience: "Experience",
    about: "About",
    experience: "Experience",
    present: "Atual",
    subtitle: "Tech Lead @ Mercado Livre",
    terminalTitle: "Terminal",
    online: "Online",
    headerTags: ["Observability", "Distributed Systems", "Platform Engineering", "AI-Driven"],
    
    aboutText: `Profissional com atuação focada na construção e operação de sistemas distribuídos de alta escala, com expertise em confiabilidade, resiliência e excelência operacional.`,
    aboutTextFull: `Responsável por aplicações críticas da cadeia logística (Outbound), processando alto volume de requisições em regime 24/7. Minha atuação combina profundidade técnica com liderança, conduzindo decisões arquiteturais e impulsionando times de alta performance.`,

    whereImpactTitle: "Onde Gero Impacto",
    whereImpact: [
      "Construção e evolução de sistemas distribuídos com foco em alta disponibilidade e tolerância a falhas",
      "Atuação forte em observabilidade e operação, incluindo incident response e postmortems",
      "Definição de arquitetura e condução de RFCs alinhadas ao negócio",
      "Tradução de problemas complexos de domínio em soluções técnicas escaláveis",
      "Elevação da qualidade de engenharia (testes, padrões, boas práticas)"
    ],

    leadershipTitle: "Engenharia & Liderança",
    leadership: [
      "Liderança técnica e desenvolvimento de times de alta performance",
      "Forte atuação em SRE mindset e production engineering",
      "Experiência com ambientes multi-região e multi-cloud",
      "Design de sistemas orientados a eventos e alta concorrência",
      "Uso intensivo de IA (Claude, Cursor, ChatGPT) para produtividade"
    ],

    backgroundTitle: "Background",
    backgroundText: "Experiência prévia em sistemas financeiros, fiscais e jurídicos, além de integrações complexas de eCommerce — base que sustenta atuação atual em sistemas distribuídos de missão crítica."
  },
  en: {
    navAbout: "About",
    navExperience: "Experience",
    about: "About",
    experience: "Experience",
    present: "Present",
    subtitle: "Tech Lead @ Mercado Livre",
    terminalTitle: "Terminal",
    online: "Online",
    headerTags: ["Observability", "Distributed Systems", "Platform Engineering", "AI-Driven"],
    
    aboutText: `Professional focused on building and operating high-scale distributed systems, with expertise in reliability, resilience, and operational excellence.`,
    aboutTextFull: `Responsible for critical logistics chain applications (Outbound), processing high request volume in 24/7 regime. Combines technical depth with leadership, driving architectural decisions and high-performance teams.`,

    whereImpactTitle: "Where I Generate Impact",
    whereImpact: [
      "Building and evolving distributed systems focused on high availability and fault tolerance",
      "Strong observability and operation, including incident response and postmortems",
      "Architecture definition and RFC conduction aligned with business",
      "Translating complex domain problems into scalable technical solutions",
      "Elevating engineering quality (tests, standards, best practices)"
    ],

    leadershipTitle: "Engineering & Leadership",
    leadership: [
      "Technical leadership and high-performance team development",
      "Strong SRE mindset and production engineering",
      "Multi-region and multi-cloud environment experience",
      "Event-driven and high-concurrency system design",
      "Intensive use of AI (Claude, Cursor, ChatGPT) for productivity"
    ],

    backgroundTitle: "Background",
    backgroundText: "Previous experience in financial, fiscal, and legal systems, plus complex eCommerce integrations — foundation for current mission-critical distributed systems work."
  },
  es: {
    navAbout: "About",
    navExperience: "Experience",
    about: "About",
    experience: "Experience",
    present: "Actual",
    subtitle: "Tech Lead @ Mercado Livre",
    terminalTitle: "Terminal",
    online: "Online",
    headerTags: ["Observability", "Distributed Systems", "Platform Engineering", "AI-Driven"],
    
    aboutText: `Profesional enfocado en construir y operar sistemas distribuidos de alta escala, con experiencia en confiabilidad, resiliencia y excelencia operacional.`,
    aboutTextFull: `Responsable de aplicaciones críticas de la cadena logística (Outbound), procesando alto volumen de solicitudes en régimen 24/7. Combina profundidad técnica con liderazgo.`,

    whereImpactTitle: "Donde Genero Impacto",
    whereImpact: [
      "Construcción y evolución de sistemas distribuidos con enfoque en alta disponibilidad",
      "Actuación fuerte en observabilidad y operación, incluyendo incident response",
      "Definición de arquitectura y conducción de RFCs alineadas al negocio",
      "Traducción de problemas complejos de dominio en soluciones escalables",
      "Elevación de la calidad de ingeniería (tests, padrões, mejores prácticas)"
    ],

    leadershipTitle: "Ingeniería & Liderazgo",
    leadership: [
      "Liderazgo técnico y desarrollo de equipos de alto rendimiento",
      "Fuerte actuación en mindset SRE y production engineering",
      "Experiencia con ambientes multi-región y multi-cloud",
      "Diseño de sistemas orientados a eventos y alta concurrencia",
      "Uso intensivo de IA (Claude, Cursor, ChatGPT) para productividad"
    ],

    backgroundTitle: "Background",
    backgroundText: "Experiencia previa en sistemas financieros, fiscales y jurídicos, además de integraciones complejas de eCommerce — base para actuación actual en sistemas de misión crítica."
  }
};

function applyI18n(lang) {
  const t = translations[lang];
  if (!t) return;
  
  document.querySelector(".subtitle").innerText = t.subtitle;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerText = t[key];
    }
  });

  const tagsContainer = document.getElementById("header-tags");
  if (tagsContainer && t.headerTags) {
    tagsContainer.innerHTML = t.headerTags.map(tag => `<span class="tag">${tag}</span>`).join("");
  }

  const aboutText = document.getElementById("about-text");
  if (aboutText && t.aboutText) aboutText.innerText = t.aboutText;

  const aboutFull = document.getElementById("about-full");
  if (aboutFull && t.aboutTextFull) aboutFull.innerText = t.aboutTextFull;

  const whereImpactContainer = document.getElementById("where-impact-list");
  if (whereImpactContainer && t.whereImpact) {
    whereImpactContainer.innerHTML = t.whereImpact.map(item => `<li>${item}</li>`).join("");
  }

  const subtitles = document.querySelectorAll(".section-subtitle");
  if (subtitles[0] && t.whereImpactTitle) subtitles[0].innerText = t.whereImpactTitle;

  const leadershipContainer = document.getElementById("leadership-list");
  if (leadershipContainer && t.leadership) {
    leadershipContainer.innerHTML = t.leadership.map(item => `<li>${item}</li>`).join("");
  }
  if (subtitles[1] && t.leadershipTitle) subtitles[1].innerText = t.leadershipTitle;

  const backgroundText = document.getElementById("background-text");
  if (backgroundText && t.backgroundText) backgroundText.innerText = t.backgroundText;
  if (subtitles[2] && t.backgroundTitle) subtitles[2].innerText = t.backgroundTitle;

  const footerContent = document.querySelector(".footer-content");
  if (footerContent && t.online) {
    footerContent.innerHTML = `
      <span>Status: </span>
      <span class="status-indicator"></span>
      <span>${t.online}</span>
    `;
  }
}