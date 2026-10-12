const username = "oda2";

/* ------------------------------------------------------------------ *
 * Career data (language independent structure).
 * Dates are "YYYY-MM"; `end: null` means the role/company is ongoing.
 * Consecutive entries for the same company are merged into a single
 * group on the timeline — only role changes are listed inside it.
 * ------------------------------------------------------------------ */
const career = [
  {
    id: "ml",
    company: "Mercado Livre",
    start: "2021-08",
    end: null,
    current: true,
    roles: [
      { key: "ml2", roleKey: "techLead", start: "2025-07", end: null, current: true },
      { key: "ml1", roleKey: "srEngineer", start: "2021-08", end: "2025-06" }
    ]
  },
  {
    id: "voll",
    company: "VOLL",
    start: "2021-05",
    end: "2021-07",
    roles: [{ key: "voll", roleKey: "specialistDev", start: "2021-05", end: "2021-07" }]
  },
  {
    id: "softplan",
    company: "Softplan",
    start: "2018-10",
    end: "2021-05",
    roles: [
      { key: "sp3", roleKey: "specialistDev", start: "2020-12", end: "2021-05" },
      { key: "sp2", roleKey: "developer", start: "2020-07", end: "2020-12" },
      { key: "sp1", roleKey: "developer", start: "2018-10", end: "2020-07" }
    ]
  },
  {
    id: "onclick",
    company: "OnClick Sistemas",
    start: "2013-06",
    end: "2018-09",
    roles: [{ key: "onclick", roleKey: "systemsAnalyst", start: "2013-06", end: "2018-09" }]
  },
  {
    id: "sypan",
    company: "SYSPAN",
    start: "2012-04",
    end: "2013-06",
    roles: [{ key: "sypan", roleKey: "developer", start: "2012-04", end: "2013-06" }]
  },
  {
    id: "cnpm",
    company: "CNPM Tecnologia",
    start: "2009-12",
    end: "2012-04",
    roles: [{ key: "cnpm", roleKey: "developer", start: "2009-12", end: "2012-04" }]
  }
];

/* ------------------------------------------------------------------ *
 * Certifications (newest first).
 * `url` is optional: when omitted the link is derived from the
 * credential code for known issuers (Udemy). Add `url` to any entry to
 * point it at a specific credential page (Credly, LinkedIn, issuer...).
 * ------------------------------------------------------------------ */
const certifications = [
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", issued: "2026-03" },
  { name: "Master LangChain & Gen AI -Build #16 AI Apps HuggingFace LLM", issuer: "Udemy", issued: "2025-11", credential: "UC-5a8f1fc4-41f9-49ec-bb52-24e84411f005", skills: ["LangChain", "Gen AI"] },
  { name: "IA para Devs", issuer: "Rocketseat", issued: "2025-03", credential: "998ab9e9-e988-4cf8-b1ed-4778f8c05c87" },
  { name: "New Relic APM: Application Performance Management for DevOps", issuer: "Udemy", issued: "2023-03", credential: "UC-9f42d513-8835-43a7-b04a-6185c6dc0a72", skills: ["APM"] },
  { name: "Comunicação Assertiva", issuer: "Udemy", issued: "2023-02", credential: "UC-53ad5530-1a3c-41ce-b3d1-16050c4a5828" },
  { name: "The Complete Introduction to New Relic One (With APM)", issuer: "Udemy", issued: "2022-02", credential: "UC-6d0f497a-f99b-43bd-b35a-99da26cca624", skills: ["APM"] },
  { name: "Inteligência Emocional: Fundamentos e como Desenvolver", issuer: "Udemy", issued: "2022-02", credential: "UC-b4949b33-f983-4c27-86eb-1fea72344206" },
  { name: "Avançando com Go Lang", issuer: "School of Net", issued: "2018-11", credential: "7c3a2b9e-a6b0-488e-92be-f62db558ef64" },
  { name: "Iniciando com Go para Web", issuer: "School of Net", issued: "2018-11", credential: "39d9bba0-e89b-4909-a107-ade9acb331f6" },
  { name: "Iniciando com Istio", issuer: "School of Net", issued: "2018-11", credential: "8a543a73-b7d8-418b-9fe0-3bf9cee9ea4d" },
  { name: "Avançando com React e Redux - Redux Thunks", issuer: "School of Net", issued: "2018-10", credential: "5ba3dfb7-5c4b-440e-9340-40f1b849d2a3" },
  { name: "Progressive Web Apps", issuer: "School of Net", issued: "2018-04", credential: "845b4785-d523-4223-ab6c-0c955d192e69" },
  { name: "PWA com Vue.js", issuer: "School of Net", issued: "2018-04", credential: "e8ebc989-f797-4783-9253-46224b3e3100" },
  { name: "PWA com Vue.js - Parte 2", issuer: "School of Net", issued: "2018-04", credential: "2035a927-e437-4e72-bfab-5a1efe92df84" },
  { name: "Avançando com Jenkins", issuer: "School of Net", issued: "2018-02", credential: "6c219194-e2ae-4083-995d-a5da5b3790ee" },
  { name: "Criando API's com Node.js, GraphQL, JWT, Sequelize e TS", issuer: "Udemy", issued: "2018-02", credential: "UC-KB4MH74N" },
  { name: "MEVN Stack - Mongo, Express, Vue.js e Node.js", issuer: "School of Net", issued: "2017-08", credential: "96dcbc55-14a1-479e-9f04-f2aa584bd4cd" },
  { name: "Nodejs com Firebase", issuer: "School of Net", issued: "2017-05", credential: "774fadf7-3413-4c65-90d7-cfe965e88c51" },
  { name: "Plataforma de Chat com Node.JS e Socket.IO", issuer: "School of Net", issued: "2017-05", credential: "bac880a9-a0a3-40e2-9412-bd30afe09ef3" },
  { name: "Certificação em API's", issuer: "Sensedia", issued: "2017-05" },
  { name: "Autenticação com Vue.js 2", issuer: "School of Net", issued: "2017-04", credential: "df243b72-52c0-4afa-a895-43684a5686f2" },
  { name: "Vue 2.0 com VueX", issuer: "School of Net", issued: "2017-03", credential: "617937d0-2a36-498f-bddf-40bda557631f" },
  { name: "Linux no Terminal", issuer: "School of Net", issued: "2017-03", credential: "42f5b061-0fbf-4236-b0f1-589b0a7279e9" },
  { name: "Introdução ao Ionic 2", issuer: "School of Net", issued: "2017-03", credential: "72b2ad54-d147-47ef-8365-7ee28b4d3979" },
  { name: "HTML 5", issuer: "School of Net", issued: "2017-02", credential: "ff611067-d452-45df-8e11-c68fec6e2110" },
  { name: "Sass", issuer: "School of Net", issued: "2017-02", credential: "19feeddb-4820-4e28-981c-a29fc4d6e2ba" },
  { name: "React Native", issuer: "School of Net", issued: "2017-02", credential: "70312557-bb0e-4c67-ab6f-9a5a077060d2" },
  { name: "ReactJS", issuer: "School of Net", issued: "2017-01", credential: "4d1c154e-e0a8-4b64-9a0a-3973f805aa16" },
  { name: "Ionic 2 com PagSeguro", issuer: "School of Net", issued: "2017-01", credential: "8d311579-1148-4aea-ba97-ef5e25e28721" },
  { name: "Vue.js 2.0", issuer: "School of Net", issued: "2017-01", credential: "242f707b-b859-4f76-99f9-0a222615c584" },
  { name: "Curso de Iniciando com Docker", issuer: "School of Net", issued: "2017-01", credential: "78163905-885c-4276-a0e9-df5ccd364d93" },
  { name: "Curso de Gulp", issuer: "School of Net", issued: "2017-01", credential: "7040c4d4-acda-408a-a0bd-d2d3f416e7b2" },
  { name: "Curso de ES6", issuer: "School of Net", issued: "2017-01" },
  { name: "Curso de Iniciando com Go Lang", issuer: "School of Net", issued: "2017-01", credential: "37101572-fac4-475c-b79b-cbd0651651a2" },
  { name: "Curso Completo do Desenvolvedor NodeJS e MongoDB", issuer: "Udemy", issued: "2017-01", credential: "91NSSKGL" },
  { name: "Curso de Yeoman", issuer: "School of Net", issued: "2016-12", credential: "7ef19bfb-53c6-4bbd-a879-3de9bd420d3c" },
  { name: "Curso de AdonisJs - MVC framework", issuer: "School of Net", issued: "2016-12", credential: "0665176b-65d3-44a7-8fc1-41a4ec6c3ac3" },
  { name: "Curso de Análise de dados com IBM Watson", issuer: "School of Net", issued: "2016-12", credential: "ab1a8040-9f60-4b5a-ac63-ea5897864515" },
  { name: "Curso de Iniciando com Electron", issuer: "School of Net", issued: "2016-12", credential: "12e18bca-a1bd-4ce3-adbf-568c01c8c164" },
  { name: "Curso de Entrega contínua com Heroku", issuer: "School of Net", issued: "2016-12", credential: "83d55f1f-ed16-4d70-b240-5f904185df21" },
  { name: "Curso de Angular 2 - Componentes e Serviços", issuer: "School of Net", issued: "2016-11", credential: "c2e8ed8e-a828-4f70-8874-55155562d120" },
  { name: "Curso de Testes unitários com Node.js", issuer: "School of Net", issued: "2016-11", credential: "c06b6360-aadf-4a7d-8b2c-581d318e1aca" },
  { name: "Curso de Angular 2.0: Primeiros passos", issuer: "School of Net", issued: "2016-11", credential: "8d3c02fc-86bd-4426-b9a4-ecb3c059a55e" },
  { name: "Curso de Express.io", issuer: "School of Net", issued: "2016-11", credential: "879c9831-8af5-4854-9fb9-c59386dd6456" },
  { name: "Curso de Desenvolvimento de Apis com Node.js", issuer: "School of Net", issued: "2016-11", credential: "93eb6ecb-b9c4-4ce9-a8b3-c87fa91a27ff" },
  { name: "Curso de Node.js com Express, Jade e Sequelize", issuer: "School of Net", issued: "2016-11", credential: "7a6467d5-67ec-4310-8be6-cb0fd647261e" },
  { name: "Curso de Typescript", issuer: "School of Net", issued: "2016-11", credential: "fd3ade19-19a6-4180-bba4-6fa4ae27844d" },
  { name: "Autenticação com Node.js e Passport", issuer: "School of Net", issued: "2016-11", credential: "04ea7a2c-d377-4588-acfa-a7eea1ae52c6" },
  { name: "Curso de Javascript Avançado", issuer: "School of Net", issued: "2016-10", credential: "c3f4d68c-50e9-4a95-9df5-5b41b6886bdc" },
  { name: "Curso de Sails", issuer: "School of Net", issued: "2016-10", credential: "2396b365-f6fc-4df6-8590-a3f9d759fc71" },
  { name: "Curso de Node com Express.js", issuer: "School of Net", issued: "2016-10", credential: "9956addc-db31-4bfa-964b-114408fe3ced" },
  { name: "Curso de Javascript Básico", issuer: "School of Net", issued: "2016-09", credential: "e46b3c4d-ce51-4c2e-9338-bbee4b6a4acb" },
  { name: "Curso de Orientação a objetos com javascript", issuer: "School of Net", issued: "2016-09", credential: "9969b3f2-be99-4a89-b1fa-7e14a175e12b" },
  { name: "Fluência Duolingo em Inglês: Elementar (estimativa)", issuer: "Duolingo", issued: "2016-08" },
];

/* ------------------------------------------------------------------ *
 * Education (periods are years only; `logo` is optional — when empty
 * a monogram badge is rendered instead. Drop the image files anywhere
 * and set e.g. logo: "assets/senac.png" to use them).
 * ------------------------------------------------------------------ */
const education = [
  { institution: "Senac Brasil", monogram: "SB", degreeKey: "games", start: "2014", end: "2015" },
  { institution: "Unoeste", monogram: "UN", degreeKey: "multiplatform", start: "2012", end: "2013" },
  { institution: "ETEC - Escola Técnica Estadual de São Paulo", monogram: "ET", degreeKey: "javaWeb", start: "2011", end: "2011" },
  { institution: "FADAP/FAP", monogram: "FA", degreeKey: "networks", start: "2009", end: "2011" },
  { institution: "ETEC - Escola Técnica Estadual de São Paulo", monogram: "ET", degreeKey: "informatics", start: "2008", end: "2009" }
];

/* ------------------------------ utils ----------------------------- */

function parseMonth(value) {
  if (!value) return null;
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

function endMonth(entry) {
  if (entry.end) return parseMonth(entry.end);
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

function monthsBetween(start, end) {
  const from = parseMonth(start);
  const to = end ? parseMonth(end) : endMonth({});
  return Math.max(0, (to.year - from.year) * 12 + (to.month - from.month)) + 1;
}

function formatPeriod(entry, t) {
  const from = parseMonth(entry.start);
  const to = endMonth(entry);
  const fromLabel = `${t.months[from.month - 1]} ${from.year}`;
  const toLabel = entry.end ? `${t.months[to.month - 1]} ${to.year}` : t.present;
  return `${fromLabel} – ${toLabel}`;
}

function formatDuration(start, end, t) {
  const total = monthsBetween(start, end);
  const years = Math.floor(total / 12);
  const months = total % 12;
  if (total === 0) return "";
  if (years === 0) return t.monthsOnly(months);
  return t.yearsMonths(years, months);
}

function totalExperienceLabel(t) {
  const first = career[career.length - 1];
  const total = monthsBetween(first.start, null);
  const years = Math.floor(total / 12);
  const label = years >= 1 ? t.years(years) : t.monthsOnly(total);
  return t.summary(label, career.length);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[ch]);
}

/* ------------------------------ avatar ---------------------------- */

async function loadAvatar() {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data.avatar_url) document.getElementById("avatar-img").src = data.avatar_url;
  } catch (e) {
    console.error("Failed to load avatar:", e);
  }
}

/* ----------------------------- timeline --------------------------- */

const timelineEl = document.getElementById("timeline");

function renderTimeline() {
  if (!timelineEl) return;
  const t = currentLang();

  timelineEl.innerHTML = career.map(group => {
    const isMultiRole = group.roles.length > 1;
    const period = formatPeriod(group, t);
    const duration = formatDuration(group.start, group.end, t);

    const meta = [];
    meta.push(`<span class="group-meta-item">${escapeHtml(duration)}</span>`);
    meta.push(`<span class="group-meta-dot">•</span>`);
    meta.push(`<span class="group-meta-item">${escapeHtml(t.rolesCount(group.roles.length))}</span>`);
    if (isMultiRole) {
      meta.push(`<span class="group-meta-dot">•</span>`);
      meta.push(`<span class="group-meta-item group-promo">${escapeHtml(t.currentRole)}: ${escapeHtml(t.roles[group.roles[0].roleKey])}</span>`);
    }

    const steps = group.roles.map(role => {
      const roleName = t.roles[role.roleKey] || role.roleKey;
      return `
        <li class="role-step${role.current ? " current" : ""}" data-exp="${role.key}" role="button" tabindex="0"
            aria-label="${escapeHtml(`${group.company} — ${roleName}, ${formatPeriod(role, t)}`)}">
          <span class="role-step-rail"><span class="role-step-dot"></span></span>
          <span class="role-step-body">
            <span class="role-step-title">
              ${escapeHtml(roleName)}
              ${role.current ? `<span class="role-step-badge">${escapeHtml(t.currentRole)}</span>` : ""}
            </span>
            <span class="role-step-date">${escapeHtml(formatPeriod(role, t))}</span>
          </span>
        </li>`;
    }).join("");

    return `
      <div class="timeline-item${group.current ? " current" : ""}${isMultiRole ? " multi-role" : ""}">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>${escapeHtml(group.company)}</h3>
            <span class="timeline-date">${escapeHtml(period)}</span>
          </div>
          <div class="timeline-meta">${meta.join("")}</div>
          ${isMultiRole
            ? `<ul class="role-steps">${steps}</ul>`
            : `<ul class="role-steps single">${steps}</ul>`}
        </div>
      </div>`;
  }).join("");

  const summary = document.getElementById("experience-summary");
  if (summary) summary.innerText = totalExperienceLabel(t);
}

/* --------------------------- education ---------------------------- */

const educationEl = document.getElementById("education-list");

function renderEducation() {
  if (!educationEl) return;
  const t = currentLang();

  educationEl.innerHTML = education.map(item => {
    const period = item.start === item.end ? item.start : `${item.start} – ${item.end}`;
    const logo = item.logo
      ? `<span class="edu-logo"><img src="${escapeHtml(item.logo)}" alt="${escapeHtml(item.institution)}" loading="lazy" /></span>`
      : `<span class="edu-logo" aria-hidden="true">${escapeHtml(item.monogram)}</span>`;

    return `
      <li class="edu-item">
        ${logo}
        <div class="edu-body">
          <div class="edu-header">
            <h4 class="edu-institution">${escapeHtml(item.institution)}</h4>
            <span class="edu-date">${escapeHtml(period)}</span>
          </div>
          <span class="edu-degree">${escapeHtml(t.degrees[item.degreeKey] || item.degreeKey)}</span>
        </div>
      </li>`;
  }).join("");

  const summary = document.getElementById("education-summary");
  if (summary) summary.innerText = t.educationCount(education.length);
}

/* ------------------------- certifications ------------------------- */

const certificationsEl = document.getElementById("certifications-list");

/* only build a link when the credential pattern is a known public verifier */
function certUrl(cert) {
  if (cert.url) return cert.url;
  if (cert.credential && /^UC-/i.test(cert.credential)) {
    return `https://www.udemy.com/certificate/${encodeURIComponent(cert.credential)}/`;
  }
  return null;
}

function formatIssued(issued, t) {
  const [year, month] = issued.split("-").map(Number);
  return `${t.months[month - 1]} ${year}`;
}

function renderCertifications() {
  if (!certificationsEl) return;
  const t = currentLang();

  if (certifications.length === 0) {
    certificationsEl.innerHTML = `<li class="cert-empty">${escapeHtml(t.certEmpty)}</li>`;
    return;
  }

  const items = certifications.map(cert => {
    const url = certUrl(cert);
    const issued = formatIssued(cert.issued, t);

    const skills = cert.skills && cert.skills.length
      ? `<span class="cert-skills">${cert.skills.map(s => `<span class="cert-skill">${escapeHtml(s)}</span>`).join("")}</span>`
      : "";

    const credential = cert.credential
      ? `<span class="cert-code" title="${escapeHtml(t.certCode)}">${escapeHtml(cert.credential)}</span>`
      : "";

    const link = url
      ? `<a class="cert-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
           ${escapeHtml(t.certCredential)}
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         </a>`
      : "";

    return `
      <li class="cert-item">
        <span class="cert-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/><polyline points="9 12 11 14 15 10"/></svg>
        </span>
        <div class="cert-body">
          <span class="cert-name">${escapeHtml(cert.name)}</span>
          <span class="cert-meta">${escapeHtml(cert.issuer)} · ${escapeHtml(t.certIssued)} ${escapeHtml(issued)}</span>
          ${skills}
          ${credential}
          ${link}
        </div>
      </li>`;
  }).join("");

  certificationsEl.innerHTML = items;

  const note = document.getElementById("cert-note");
  if (note) {
    const withLink = certifications.filter(c => certUrl(c)).length;
    note.textContent = withLink > 0
      ? t.certNote.replace("{n}", String(withLink))
      : "";
    note.hidden = withLink === 0;
  }
}

/* --------------------------------- tabs --------------------------- */

const TABS = ["experience", "education", "certifications"];
const TAB_STORAGE_KEY = "tab";
let activeTab = "experience";

function getTabMeta(tab) {
  const t = currentLang();
  if (tab === "education") return t.educationCount(education.length);
  if (tab === "certifications") return t.certificationsCount(certifications.length);
  return totalExperienceLabel(t);
}

function updateCardMeta() {
  const meta = document.getElementById("card-meta");
  if (meta) meta.textContent = getTabMeta(activeTab);
}

function setActiveTab(tab, options = {}) {
  if (!TABS.includes(tab)) tab = "experience";
  activeTab = tab;

  TABS.forEach(name => {
    const btn = document.getElementById(`tab-${name}`);
    const panel = document.getElementById(`panel-${name}`);
    const isActive = name === tab;
    if (btn) {
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
      btn.tabIndex = isActive ? 0 : -1;
    }
    if (panel) {
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    }
  });

  updateCardMeta();

  if (options.persist !== false) {
    try {
      localStorage.setItem(TAB_STORAGE_KEY, tab);
    } catch (_) {
      /* ignore storage failures */
    }
  }
}

const tabsEl = document.getElementById("card-tabs");
if (tabsEl) {
  tabsEl.addEventListener("click", e => {
    const btn = e.target.closest(".card-tab");
    if (btn) setActiveTab(btn.dataset.tab);
  });

  tabsEl.addEventListener("keydown", e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = TABS[(TABS.indexOf(activeTab) + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length];
    setActiveTab(next);
    document.getElementById(`tab-${next}`).focus();
  });
}

/* ------------------------- experience modal ----------------------- */

const expModal = document.getElementById("exp-modal");
const expContent = document.getElementById("exp-content");
const SECTION_ORDER = ["impact", "engineering", "leadership", "observability", "domain", "infra"];
let lastExpKey = null;

function findExpContext(key) {
  for (const group of career) {
    const role = group.roles.find(r => r.key === key);
    if (role) return { group, role };
  }
  return null;
}

function openExpModal(expKey) {
  const t = currentLang();
  const exp = t.exp[expKey];
  const ctx = findExpContext(expKey);
  if (!exp || !ctx) return;

  const { group, role } = ctx;
  lastExpKey = expKey;
  const siblings = group.roles.length > 1
    ? `<div class="exp-nav">
         <span class="exp-nav-label">${escapeHtml(group.company)}</span>
         <div class="exp-nav-items">
           ${group.roles.map(r => {
             const label = t.roles[r.roleKey] || r.roleKey;
             return `<button class="exp-nav-item${r.key === expKey ? " active" : ""}" data-exp="${r.key}">${escapeHtml(label)}</button>`;
           }).join("")}
         </div>
       </div>`
    : "";

  let html = `
    ${siblings}
    <div class="exp-log-title">
      <h2>${escapeHtml(group.company)} | ${escapeHtml(t.roles[role.roleKey] || role.roleKey)}</h2>
      <span>${escapeHtml(formatPeriod(role, t))} · ${escapeHtml(formatDuration(role.start, role.end, t))}</span>
    </div>
    <div class="exp-log-line level-info">
      <div class="exp-log-message">${escapeHtml(exp.desc)}</div>
    </div>
  `;

  SECTION_ORDER.forEach(section => {
    if (!exp[section]) return;
    html += `
      <div class="exp-log-section">
        <div class="exp-log-section-title">${escapeHtml(t.expSections[section])}</div>
        <ul class="exp-log-list">${exp[section].map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      </div>`;
  });

  html += `<div class="exp-tags">${exp.tags.map(tag => `<span class="exp-tag">${escapeHtml(tag)}</span>`).join("")}</div>`;

  expContent.innerHTML = html;
  expContent.scrollTop = 0;
  expModal.classList.add("active");

  expContent.querySelectorAll(".exp-nav-item").forEach(btn => {
    btn.addEventListener("click", () => openExpModal(btn.dataset.exp));
  });
}

function closeExpModal() {
  expModal.classList.remove("active");
}

if (timelineEl) {
  timelineEl.addEventListener("click", e => {
    const step = e.target.closest(".role-step");
    if (step) openExpModal(step.dataset.exp);
  });

  timelineEl.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const step = e.target.closest(".role-step");
    if (!step) return;
    e.preventDefault();
    openExpModal(step.dataset.exp);
  });
}

document.getElementById("exp-close").addEventListener("click", closeExpModal);
expModal.querySelector(".terminal-overlay").addEventListener("click", closeExpModal);

/* ------------------------------ terminal -------------------------- */

const modal = document.getElementById("terminal-modal");
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");
const commandHistory = [];
let historyIndex = -1;

function openTerminal() {
  modal.classList.add("active");
  terminalInput.focus();
}

function closeTerminal() {
  modal.classList.remove("active");
}

document.getElementById("terminal-btn").addEventListener("click", openTerminal);
document.getElementById("terminal-close").addEventListener("click", closeTerminal);
modal.querySelector(".terminal-overlay").addEventListener("click", closeTerminal);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (expModal.classList.contains("active")) closeExpModal();
    else if (modal.classList.contains("active")) closeTerminal();
  }
});

function print(msg, cls) {
  const div = document.createElement("div");
  /* textContent (not innerText) so box-drawing alignment is preserved verbatim */
  div.textContent = msg;
  if (cls) div.className = cls;
  terminalOutput.appendChild(div);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

const MAX_BOX_WIDTH = 52;
const MAX_CELL_WIDTH = 34;
const truncate = (str, max = MAX_CELL_WIDTH) => {
  const chars = [...String(str)];
  return chars.length > max ? chars.slice(0, max - 1).join("") + "…" : chars.join("");
};

function printASCIITable(headers, rows) {
  const safeHeaders = headers.map(h => truncate(h));
  const safeRows = rows.map(r => r.map(cell => truncate(cell || "")));
  const colWidths = safeHeaders.map((h, i) => Math.max(h.length, ...safeRows.map(r => (r[i] || "").length)));
  const separator = "+" + colWidths.map(w => "-".repeat(w + 2)).join("+") + "+";

  print(separator);
  print("| " + safeHeaders.map((h, i) => h.padEnd(colWidths[i])).join(" | ") + " |");
  print(separator.replace(/\+/g, "=").replace(/-/g, "="));
  safeRows.forEach(row => {
    print("| " + row.map((cell, i) => cell.padEnd(colWidths[i])).join(" | ") + " |");
  });
  print(separator);
}

function printBox(title, lines, innerWidth = 44) {
  /* hard cap so the box never overflows the terminal panel width */
  const fit = line => truncate(line, MAX_BOX_WIDTH - 3);
  const content = [title, ...lines].map(fit);
  const width = Math.max(Math.min(innerWidth, MAX_BOX_WIDTH - 3), ...content.map(l => [...l].length)) + 2;

  print("╔" + "═".repeat(width) + "╗");
  print("║ " + content[0].padEnd(width - 1) + "║");
  print("╠" + "═".repeat(width) + "╣");
  content.slice(1).forEach(l => print("║ " + l.padEnd(width - 1) + "║"));
  print("╚" + "═".repeat(width) + "╝");
}

const terminalCommands = {
  help: () => {
    const t = currentLang().terminal;
    const lines = [];
    t.help.sections.forEach((section, i) => {
      if (i > 0) lines.push("");
      lines.push(section.title.toUpperCase());
      section.items.forEach(([cmd, desc]) => lines.push("  " + cmd.padEnd(17) + desc));
    });
    printBox(t.help.title, lines);
  },

  man: (args) => {
    const cmd = args.trim().split(/\s+/)[0];
    const t = currentLang().terminal;
    const all = t.help.sections.flatMap(s => s.items);
    const entry = all.find(([name]) => name === cmd || name.startsWith(cmd + " "));
    if (!entry) {
      print(t.sys.noManPage(cmd || ""));
      return;
    }
    printBox(entry[0], [entry[1], "", t.manSeeAlso + ": help"], 40);
  },

  lang: (args) => {
    const t = currentLang().terminal.lang;
    const requested = args.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (requested.length === 0) {
      print(t.current(activeLang));
      print(t.available);
      return;
    }
    const target = requested[0].split("-")[0];
    if (!SUPPORTED_LANGS.includes(target)) {
      print(t.invalid(requested[0]));
      return;
    }
    applyI18n(target);
    print(currentLang().terminal.lang.changed(target));
  },

  about: () => {
    const c = currentLang();
    printBox(c.terminal.about.role, [
      c.terminal.about.name,
      "",
      ...wrap(c.terminal.about.line, 44).split("\n"),
      "",
      ...wrap(c.aboutText, 44).split("\n")
    ]);
  },

  skills: () => {
    const { skills } = currentLang().terminal;
    const lines = [];
    skills.sections.forEach((section, i) => {
      if (i > 0) lines.push("");
      lines.push(section.title);
      section.items.forEach(item => lines.push("  " + item));
    });
    printBox(skills.title, lines);
  },

  contact: () => {
    const { contact } = currentLang().terminal;
    printBox(contact.title, [
      "Email     renato.oda2@gmail.com",
      "LinkedIn  linkedin.com/in/renatooda",
      "GitHub    github.com/oda2"
    ]);
  },

  status: () => {
    const { status } = currentLang().terminal;
    const nameWidth = Math.max(...status.services.map(([n]) => n.length));
    const lines = status.services.map(([name, uptime]) =>
      `✓ ${name.padEnd(nameWidth)}  ${status.operational.padEnd(11)}${uptime}`
    );
    lines.push("");
    status.summary.forEach(s => lines.push(s));
    printBox(status.title, lines);
  },

  experience: () => {
    const t = currentLang();
    const lines = [];

    career.forEach((group, gi) => {
      if (gi > 0) lines.push("");
      lines.push(group.company);
      lines.push("  " + formatPeriod(group, t) + " · " + t.rolesCount(group.roles.length));
      group.roles.forEach(role => {
        lines.push("    • " + t.roles[role.roleKey]);
        lines.push("        " + formatPeriod(role, t));
      });
    });

    printBox(t.terminal.experience.title, lines);
  },

  projects: async () => {
    const t = currentLang().terminal.projects;
    print(t.fetching);
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
      const repos = await res.json();

      if (!Array.isArray(repos) || repos.filter(r => !r.fork).length === 0) {
        print(t.empty);
        return;
      }

      const source = repos.filter(r => !r.fork).slice(0, 8);
      print("");
      printASCIITable(t.headers, source.map(r => [
        r.name.length > 25 ? r.name.substring(0, 22) + "..." : r.name,
        r.language || "-",
        "github.com/" + username + "/" + r.name
      ]));
      print("");
      print(t.total(repos.filter(r => !r.fork).length) + " | " + t.viewAll + ": github.com/" + username);
    } catch (e) {
      print(t.error + ": " + e.message);
    }
  },

  whoami: () => print(currentLang().terminal.whoami),

  uptime: () => print(currentLang().terminal.uptime),

  pwd: () => {
    const s = currentLang().terminal.sys;
    print(s.cwd);
    print("# " + s.pathHint);
  },

  date: () => {
    const t = currentLang();
    print(new Date().toLocaleString(t.htmlLang, { dateStyle: "full", timeStyle: "medium" }));
  },

  uname: (args) => {
    const all = args.trim().startsWith("-a");
    const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "Linux";
    const os = /mac/i.test(platform) ? "Darwin" : /win/i.test(platform) ? "MINGW64_NT" : "Linux";
    const kernel = /mac/i.test(platform)
      ? "24.5.0 Darwin Kernel Version 24.5.0"
      : "6.8.0-45-generic #45-Ubuntu SMP";
    print(all ? `${os} workstation ${kernel} x86_64 GNU/Linux` : os);
  },

  echo: (args) => print(args.replace(/^["']|["']$/g, "")),

  ls: () => {
    const t = currentLang().terminal;
    printASCIITable(t.sys.lsHeaders, t.sys.lsFiles.filter(f => !f[6].startsWith(".")));
  },

  ll: () => {
    const t = currentLang().terminal;
    print(t.sys.lsTotal);
    printASCIITable(t.sys.lsHeaders, t.sys.lsFiles);
  },

  top: () => {
    const s = currentLang().terminal.sys;
    const now = new Date();
    const time = now.toTimeString().slice(0, 8);
    print(s.topHeader(time, "42 days"));
    print(s.topTasks);
    print(s.topCpu);
    print(s.topMem);
    printASCIITable(s.topHeaders, s.topRows);
    print("");
    print("q → " + currentLang().terminal.help.sections[1].items.find(([c]) => c === "exit")[1]);
  },

  ps: () => {
    const s = currentLang().terminal.sys;
    printASCIITable(s.psHeaders, s.psRows);
  },

  sudo: (args) => {
    print(currentLang().terminal.sys.sudo);
    if (args.trim()) print("# " + args.trim());
  },

  history: () => {
    const t = currentLang().terminal;
    if (commandHistory.length === 0) {
      print(t.sys.historyEmpty);
      return;
    }
    commandHistory.forEach((cmd, i) => print(String(i + 1).padStart(4) + "  " + cmd));
  },

  certs: (args) => {
    const t = currentLang();
    if (certifications.length === 0) {
      print(t.certEmpty);
      return;
    }

    const year = args.trim();
    const filtered = year ? certifications.filter(c => c.issued.startsWith(year)) : certifications;
    if (filtered.length === 0) {
      print(t.certNoYear.replace("{y}", year));
      return;
    }

    const shown = year ? filtered : filtered.slice(0, 10);
    const lines = shown.map(c =>
      `${formatIssued(c.issued, t).padEnd(9)} ${c.name}` + (c.issuer ? `  (${c.issuer})` : "")
    );

    printBox(year ? `${t.certificationsTitle} · ${year}` : t.certificationsTitle, lines, 60);

    if (!year && filtered.length > shown.length) {
      print(t.certMore.replace("{n}", String(filtered.length - shown.length)));
    }
  },

  exit: () => {
    print(currentLang().terminal.sys.closed);
    closeTerminal();
  },

  cat: (args) => {
    const t = currentLang().terminal;
    const file = args.trim();
    const content = t.cat[file];
    if (content) content.forEach(line => print(line));
    else print(t.noSuchFile(file || ""));
  },

  clear: () => {
    terminalOutput.innerHTML = "";
    printWelcome();
  }
};

const COMMAND_ALIASES = {
  close: "exit",
  quit: "exit",
  logout: "exit",
  "clear-screen": "clear",
  cls: "clear",
  dir: "ll",
  "ls -l": "ll",
  "ls -la": "ll",
  "man": "man",
  "i": "man",
  jobs: "ps",
  "top -b": "top",
  "shell": "pwd",
  "print": "echo",
  "lang-pt": "lang"
};

function resolveCommand(command) {
  const cmd = command.toLowerCase();
  const alias = COMMAND_ALIASES[cmd];
  return terminalCommands[alias || cmd];
}

function wrap(text, width, indent = "") {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach(word => {
    if ((line + " " + word).trim().length > width) {
      lines.push(line.trim());
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  });
  if (line) lines.push(line);
  return lines.join("\n" + indent);
}

function printWelcome() {
  const t = currentLang().terminal;
  printBox("Terminal v1.0", [t.welcome, t.welcomeHint, "Esc → close"], 44);
}

terminalInput.addEventListener("keydown", e => {
  /* history navigation with the arrow keys */
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    if (commandHistory.length === 0) return;
    e.preventDefault();
    historyIndex = e.key === "ArrowUp"
      ? Math.min(historyIndex + 1, commandHistory.length - 1)
      : historyIndex - 1;

    if (historyIndex < 0) {
      terminalInput.value = "";
    } else {
      terminalInput.value = commandHistory[commandHistory.length - 1 - historyIndex];
      terminalInput.setSelectionRange(terminalInput.value.length, terminalInput.value.length);
    }
    return;
  }

  if (e.key !== "Enter") return;

  const cmd = terminalInput.value.trim();
  if (cmd) {
    print(currentLang().terminal.prompt + " " + cmd);
    commandHistory.push(cmd);
    if (commandHistory[commandHistory.length - 2] !== cmd) commandHistory.pop();
    historyIndex = -1;

    const [command, ...args] = cmd.split(/\s+/);
    const handler = resolveCommand(command);
    if (handler) {
      Promise.resolve(handler(args.join(" "))).catch(err => print(String(err)));
    } else {
      print(currentLang().terminal.commandNotFound(command));
    }
  }

  terminalInput.value = "";
});

/* ----------------------------- bootstrap --------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const lang = getInitialLang();
  applyI18n(lang);

  let savedTab = "experience";
  try {
    savedTab = localStorage.getItem(TAB_STORAGE_KEY) || "experience";
  } catch (_) {
    /* ignore storage failures */
  }
  setActiveTab(savedTab, { persist: false });

  loadAvatar();
  printWelcome();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.innerText = new Date().getFullYear();
});

document.getElementById("lang").addEventListener("change", e => {
  applyI18n(e.target.value);
});

document.addEventListener("i18n:change", () => {
  renderTimeline();
  renderEducation();
  renderCertifications();
  updateCardMeta();
  if (lastExpKey && expModal.classList.contains("active")) openExpModal(lastExpKey);
});
