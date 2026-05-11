const username = "oda2";

async function loadAvatar() {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data.avatar_url) {
      document.getElementById("avatar-img").src = data.avatar_url;
    }
  } catch (e) {
    console.error("Failed to load avatar:", e);
  }
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });
}

const expModal = document.getElementById("exp-modal");
const expContent = document.getElementById("exp-content");

const expData = {
  ml2: {
    company: "Mercado Livre",
    role: "Software Technical Leader",
    period: "Jul 2025 - Atual",
    desc: "Atuação como liderança técnica com foco em confiabilidade, qualidade e evolução sustentável de sistemas críticos de logística.",
    impact: [
      "Definição de arquitetura para sistemas de alta escala com foco em alta disponibilidade e resiliência",
      "Elevação do padrão de engenharia do time (testes, boas práticas, revisão técnica)",
      "Atuação preventiva em segurança, mitigando vulnerabilidades (CVE)",
      "Alinhamento entre engenharia e stakeholders, traduzindo necessidades de negócio em soluções técnicas"
    ],
    leadership: [
      "Condução de RFCs e decisões arquiteturais complexas",
      "Apoio ao time em threat modeling, system design e debugging avançado",
      "Desenvolvimento de pessoas via 1:1, mentoring e definição de padrões técnicos"
    ],
    observability: [
      "Responsável por garantir SLOs, disponibilidade e confiabilidade das aplicações",
      "Definição e evolução de práticas de observabilidade em conjunto com SRE",
      "Atuação estruturada em incident response e gestão de crises",
      "Condução de postmortems e melhoria contínua baseada em dados",
      "Uso avançado de Datadog, New Relic e Grafana para visibilidade ponta a ponta"
    ],
    tags: ["Go", "Datadog", "Grafana", "SRE", "RFC", "Segurança", "Arquitetura"]
  },
  ml1: {
    company: "Mercado Livre",
    role: "Sr Software Engineer",
    period: "Ago 2021 - Jun 2025",
    desc: "Atuação em sistemas críticos de logística (Mercado Envios), responsáveis pelo fluxo de outbound, por onde passam todos os pacotes da plataforma antes da distribuição.",
    impact: [
      "Evolução de sistemas com alta taxa RPM em ambiente distribuído",
      "Definição e condução de RFCs, apoiando decisões arquiteturais e alinhamento com stakeholders",
      "Tradução de fluxos logísticos complexos em soluções escaláveis e resilientes",
      "Atuação em rollout direto na operação logística (centros de distribuição)"
    ],
    engineering: [
      "Microservices em Go com frontends em React (mobile-oriented)",
      "Arquitetura orientada a eventos (Pub/Sub, Kinesis)",
      "Uso de Redis (cache + distributed locking)",
      "Persistência distribuída (MySQL, DynamoDB) e analytics com BigQuery",
      "Deploy multi-região (AWS + GCP) via plataforma Fury"
    ],
    observability: [
      "Responsável por garantir estabilidade de aplicações 24/7 em parceria com times de SRE",
      "Monitoramento contínuo utilizando Datadog, New Relic e Grafana",
      "Atuação ativa em incidentes de produção, análise de causa raiz e recuperação de serviços",
      "Condução de postmortems, focando em aprendizado sistêmico e prevenção de recorrência",
      "Evolução de métricas, logs e traces para melhoria de visibilidade e diagnóstico"
    ],
    tags: ["Go", "React", "Kinesis", "Redis", "AWS", "GCP", "DynamoDB", "BigQuery"]
  },
  voll: {
    company: "VOLL",
    role: "Especialista Software Developer",
    period: "Mai 2021 - Jul 2021",
    desc: "Atuação em iniciativa estratégica de evolução da camada de identidade da plataforma SaaS, com foco em suportar integrações enterprise e autenticação federada para clientes corporativos.",
    impact: [
      "Estudo e proposição de arquitetura para IAM em ambiente SaaS multi-tenant",
      "Avaliação de soluções de mercado para autenticação federada (Auth0, AWS IAM)",
      "Definição de abordagem para suporte a OpenID Connect / SSO",
      "Redução de complexidade operacional e melhoria de segurança no onboarding"
    ],
    domain: [
      "Modelagem de cenários de autenticação e autorização em contexto B2B multi-tenant",
      "Análise de isolamento de tenants e implicações de segurança",
      "Estruturação de fluxos de login federado e integração com IdPs externos"
    ],
    tags: ["IAM", "OAuth", "OIDC", "SSO", "SaaS", "Multi-tenant", "Auth0"]
  },
  sp3: {
    company: "Softplan",
    role: "Especialista Software Developer",
    period: "Dez 2020 - Mai 2021",
    desc: "Atuação como referência técnica na evolução do ecossistema de frontend da unidade de justiça, impactando transversalmente Ministério Público, Tribunal de Justiça e demais verticais.",
    impact: [
      "Liderança técnica na consolidação de arquitetura de Micro Front-Ends para múltiplos domínios jurídicos",
      "Evolução do Design System do SAJ, garantindo consistência em interfaces complexas",
      "Apoio a decisões arquiteturais envolvendo trade-offs entre performance e experiência",
      "Influência direta na produtividade dos times ao reduzir complexidade acidental"
    ],
    leadership: [
      "Atuação como ponte entre domínio jurídico e engenharia",
      "Definição de padrões para construção de interfaces baseadas em workflows complexos",
      "Disseminação de boas práticas em ambiente multi-times e multi-domínio"
    ],
    tags: ["Micro Frontends", "Design System", "JavaScript", "APM", "Workflow"]
  },
  sp2: {
    company: "Softplan",
    role: "Software Developer",
    period: "Jul 2020 - Dez 2020",
    desc: "Atuação no time de Plataforma com foco na padronização e escalabilidade do ecossistema frontend utilizado no Tribunal de Justiça.",
    impact: [
      "Evolução da arquitetura de Micro Front-Ends para suportar diferentes domínios processuais",
      "Padronização de interfaces críticas, garantindo consistência na navegação",
      "Atuação no desenvolvimento do projeto JEP (Tribunal da Paz)"
    ],
    engineering: [
      "Organização de frontends baseados em estados complexos e regras de negócio dinâmicas",
      "Estruturação de builds e pipelines para múltiplos times e aplicações",
      "Observabilidade de aplicações críticas com Elastic APM e Grafana"
    ],
    tags: ["Node.js", "Elastic APM", "Grafana", "Kubernetes", "Micro Frontends"]
  },
  sp1: {
    company: "Softplan",
    role: "Software Developer",
    period: "Out 2018 - Jul 2020",
    desc: "Atuação no desenvolvimento de sistemas do ecossistema SAJ voltados ao Ministério Público, suportando o ciclo completo de processos jurídicos.",
    impact: [
      "Desenvolvimento de serviços e interfaces que suportam o fluxo processual do MP",
      "Implementação de pipelines de extração de dados externos (web scraping)",
      "Evolução de APIs (REST/GraphQL) para desacoplamento e integração",
      "Atuação em modernização progressiva, equilibrando tecnologia com sistemas legados"
    ],
    engineering: [
      "Modelagem de fluxos com múltiplos estados e transições (process lifecycle)",
      "Garantia de idempotência e consistência em operações sensíveis",
      "Estruturação de pipelines CI/CD e deploy em Kubernetes"
    ],
    tags: ["Node.js", "Java", "REST", "GraphQL", "Kubernetes", "Web Scraping"]
  },
  onclick: {
    company: "OnClick Sistemas",
    role: "Analista de Sistema",
    period: "Jun 2013 - Set 2018",
    desc: "Atuação full-stack no desenvolvimento e evolução de um ERP com forte foco em integrações de eCommerce em larga escala, conectando a plataforma a múltiplos marketplaces, gateways de frete e serviços externos.",
    impact: [
      "Construção e manutenção de integrações com plataformas como VTEX, Rakuten",
      "Implementação de integrações com gateways de frete como Intelipost",
      "Evolução da arquitetura de integração utilizando mensageria (RabbitMQ)",
      "Participação na modernização do stack, incluindo introdução de Node.js",
      "Suporte a áreas críticas (implantação, atendimento, clientes)"
    ],
    engineering: [
      "Desenvolvimento de APIs e serviços distribuídos para integração entre sistemas heterogêneos",
      "Experiência com mensageria (AMQP) para processamento assíncrono",
      "Atuação em controle de versão, CI/CD e automação de processos",
      "Introdução e uso de testes automatizados em ambiente Delphi (DUnit/DUnitX)"
    ],
    infra: [
      "Responsável por ambiente Delphi (atualizações, componentes e estabilidade)",
      "Experiência com containerização (Docker) e primeiros passos em cloud (AWS, Azure, Heroku)",
      "Atuação em ambiente com múltiplos bancos de dados (Firebird, SQL Server, PostgreSQL)"
    ],
    tags: ["Delphi", "Node.js", "RabbitMQ", "Docker", "AWS", "Azure", "VTEX", "ERP"]
  },
  sypan: {
    company: "SYSPAN",
    role: "Desenvolvedor",
    period: "Abr 2012 - Jun 2013",
    desc: "Atuação no desenvolvimento e sustentação de sistemas comerciais com foco em processos fiscais (NFe e ECF), lidando com regras complexas e alta exigência de conformidade.",
    impact: [
      "Desenvolvimento de funcionalidades fiscais (NFe/ECF), garantindo conformidade com requisitos legais",
      "Atuação direta com clientes em implantação e suporte",
      "Diagnóstico e resolução de problemas em ambientes produtivos"
    ],
    engineering: [
      "Desenvolvimento em Delphi e .NET com integração a banco MySQL",
      "Experiência inicial com controle de versão (SVN) e colaboração em equipe",
      "Contato direto com ciclo completo: desenvolvimento → implantação → suporte"
    ],
    tags: ["Delphi", ".NET", "MySQL", "NFe", "ECF", "SEFAZ"]
  },
  cnpm: {
    company: "CNPM Tecnologia",
    role: "Desenvolvedor",
    period: "Dez 2009 - Abr 2012",
    desc: "Atuação no desenvolvimento de sistemas de consórcio utilizados por instituições financeiras, lidando com regras de negócio complexas, alta criticidade e forte exigência de consistência de dados. Iniciei como estagiário e fui efetivado em menos de 1 ano.",
    impact: [
      "Desenvolvimento e manutenção de funcionalidades em sistemas de consórcio integrados ao ecossistema bancário",
      "Atuação em múltiplos módulos críticos, garantindo consistência e integridade de dados financeiros",
      "Participação no processo de melhoria de qualidade que levou à certificação MPS.Br nível G",
      "Experiência prática com processos formais de engenharia de software (nível F/G)"
    ],
    engineering: [
      "Desenvolvimento em Delphi e aplicações web com .NET Framework",
      "Utilização de SQL Server em cenários críticos de persistência de dados",
      "Experiência com controle de versão (RCS) em ambiente colaborativo"
    ],
    tags: ["Delphi", ".NET", "SQL Server", "MPS.Br", "Finanças"]
  }
};

function openExpModal(expKey) {
  const exp = expData[expKey];
  if (!exp) return;

  let html = `
    <div class="exp-log-title">
      <h2>${exp.company} | ${exp.role}</h2>
      <span>${exp.period}</span>
    </div>
    <div class="exp-log-line level-info">
      <div class="exp-log-message">${exp.desc}</div>
    </div>
  `;

  if (exp.impact) {
    html += `
      <div class="exp-log-section">
        <div class="exp-log-section-title">Impacto Direto</div>
        <ul class="exp-log-list">${exp.impact.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `;
  }

  if (exp.engineering) {
    html += `
      <div class="exp-log-section">
        <div class="exp-log-section-title">Engenharia & Plataforma</div>
        <ul class="exp-log-list">${exp.engineering.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `;
  }

  if (exp.leadership) {
    html += `
      <div class="exp-log-section">
        <div class="exp-log-section-title">Liderança & Engenharia</div>
        <ul class="exp-log-list">${exp.leadership.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `;
  }

  if (exp.observability) {
    html += `
      <div class="exp-log-section">
        <div class="exp-log-section-title">Observabilidade & Operação</div>
        <ul class="exp-log-list">${exp.observability.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `;
  }

  if (exp.domain) {
    html += `
      <div class="exp-log-section">
        <div class="exp-log-section-title">Engenharia no Domínio</div>
        <ul class="exp-log-list">${exp.domain.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `;
  }

  if (exp.infra) {
    html += `
      <div class="exp-log-section">
        <div class="exp-log-section-title">Infraestrutura & Plataforma</div>
        <ul class="exp-log-list">${exp.infra.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `;
  }

  html += `<div class="exp-tags">${exp.tags.map(t => `<span class="exp-tag">${t}</span>`).join("")}</div>`;

  expContent.innerHTML = html;
  expModal.classList.add("active");
}

function closeExpModal() {
  expModal.classList.remove("active");
}

document.querySelectorAll(".timeline-item.clickable").forEach(item => {
  item.addEventListener("click", () => {
    const expKey = item.dataset.exp;
    openExpModal(expKey);
  });
});

document.getElementById("exp-close").addEventListener("click", closeExpModal);
expModal.querySelector(".terminal-overlay").addEventListener("click", closeExpModal);

const modal = document.getElementById("terminal-modal");
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");

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

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (expModal.classList.contains("active")) closeExpModal();
    else if (modal.classList.contains("active")) closeTerminal();
  }
});

function print(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  terminalOutput.appendChild(div);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function printASCIITable(headers, rows) {
  const colWidths = headers.map((h, i) => Math.max(h.length, ...rows.map(r => (r[i] || "").length)));
  
  const separator = "+" + colWidths.map(w => "-".repeat(w + 2)).join("+") + "+";
  
  print(separator);
  print("| " + headers.map((h, i) => h.padEnd(colWidths[i])).join(" | ") + " |");
  print(separator.replace(/\+/g, "=").replace(/-/g, "="));
  
  rows.forEach(row => {
    print("| " + row.map((cell, i) => (cell || "").padEnd(colWidths[i])).join(" | ") + " |");
  });
  
  print(separator);
}

const terminalCommands = {
  help: () => {
    print("Available commands:");
    print("  help         - Show this help");
    print("  about        - About me");
    print("  skills       - Tech skills");
    print("  contact      - Contact info");
    print("  status       - System status");
    print("  experience   - Work experience");
    print("  projects     - GitHub repositories");
    print("  clear        - Clear terminal");
    print("  whoami       - Who am I");
  },
  
  about: () => {
    print("═".repeat(50));
    print("  Renato Oda");
    print("  Tech Lead @ Mercado Livre");
    print("═".repeat(50));
    print("");
    print("  Building and operating high-scale distributed systems");
    print("  with focus on reliability, resilience, and operational");
    print("  excellence.");
    print("");
    print("  Responsible for critical logistics chain (Outbound)");
    print("  applications processing high request volume in 24/7.");
    print("═".repeat(50));
  },
  
  skills: () => {
    print("╔══════════════════════════════════════════════════╗");
    print("║  Tech Stack                                      ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  Platform & Infra                                 ║");
    print("║  Kubernetes, Docker, Terraform, Helm, ArgoCD    ║");
    print("║  AWS, GCP, GitOps                                 ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  Observability                                    ║");
    print("║  Prometheus, Grafana, Datadog, Jaeger            ║");
    print("║  OpenTelemetry, ELK Stack                         ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  Languages                                        ║");
    print("║  Go, Python, TypeScript, JavaScript, Bash         ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  Data & Messaging                                 ║");
    print("║  PostgreSQL, Redis, Kafka, RabbitMQ              ║");
    print("║  Elasticsearch, gRPC                              ║");
    print("╚══════════════════════════════════════════════════╝");
  },
  
  contact: () => {
    print("╔══════════════════════════════════════════════════╗");
    print("║  Contact Information                              ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  Email:    renato.oda2@gmail.com                 ║");
    print("║  LinkedIn: linkedin.com/in/renatooda             ║");
    print("║  GitHub:   github.com/oda2                       ║");
    print("╚══════════════════════════════════════════════════╝");
  },
  
  status: () => {
    print("╔══════════════════════════════════════════════════╗");
    print("║  System Status                                    ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  ✓ API Gateway       Operational      99.99%     ║");
    print("║  ✓ Database          Operational      99.95%     ║");
    print("║  ✓ Cache Layer       Operational      99.99%     ║");
    print("║  ✓ Message Queue     Operational      99.99%     ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  Global Uptime: 99.95% (30-day rolling)          ║");
    print("║  Avg RPM: 20,000+  |  Latency P99: <50ms          ║");
    print("║  Active Incidents: 0                              ║");
    print("╚══════════════════════════════════════════════════╝");
  },
  
  experience: () => {
    print("╔══════════════════════════════════════════════════╗");
    print("║  Work Experience                                   ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  2022-Present  Mercado Livre                      ║");
    print("║              Tech Lead - Outbound Logistics       ║");
    print("║              • 20k+ RPM critical systems          ║");
    print("║              • Prometheus/Grafana/Datadog         ║");
    print("║              • SRE, GitOps, ArgoCD                ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  2019-2022    Softplan                            ║");
    print("║              Senior Specialist                    ║");
    print("║              • SAJ platform (judicial system)     ║");
    print("║              • Micro frontends, Design System     ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  2017-2019    OnClick                             ║");
    print("║              Analyst Developer                   ║");
    print("║              • eCommerce integrations             ║");
    print("╠══════════════════════════════════════════════════╣");
    print("║  2015-2017    Sypan                               ║");
    print("║              Developer                            ║");
    print("║              • Fiscal systems (NF-e, ECF)        ║");
    print("╚══════════════════════════════════════════════════╝");
  },
  
  projects: async () => {
    print("Fetching GitHub repositories...");
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
      const repos = await res.json();
      
      if (repos.length === 0) {
        print("No public repositories found.");
        return;
      }
      
      print("");
      printASCIITable(
        ["Name", "Lang", "URL"],
        repos.filter(r => !r.fork).slice(0, 8).map(r => [
          r.name.length > 25 ? r.name.substring(0, 22) + "..." : r.name,
          r.language || "-",
          "github.com/" + username + "/" + r.name
        ])
      );
      print("");
      print("Total repos: " + repos.filter(r => !r.fork).length + " | View all: github.com/" + username);
    } catch (e) {
      print("Error fetching repositories: " + e.message);
    }
  },
  
  clear: () => {
    terminalOutput.innerHTML = "";
    printWelcome();
  },
  
  whoami: () => print("renato.oda - Tech Lead - @oda2"),
  
  uptime: () => print("System uptime: 99.95% (30-day rolling) | MTTR: <15min"),
  
  ls: () => {
    print(".config/");
    print(".credentials/ (hidden)");
    print("experience.json");
    print("skills.md");
    print("about.txt");
    print("contact.json");
    print("README.md");
  },
  
  cat: (args) => {
    const file = args.trim();
    if (file === "about.txt") {
      print("Tech Lead @ Mercado Livre | Platform Engineering");
      print("Building and operating high-scale distributed systems");
      print("with focus on reliability, resilience, and operational");
      print("excellence.");
    } else if (file === "skills.md") {
      print("## Tech Stack");
      print("- Kubernetes, Docker, Terraform, ArgoCD");
      print("- Prometheus, Grafana, Datadog, Jaeger");
      print("- Go, Python, TypeScript, Bash");
      print("- PostgreSQL, Redis, Kafka, Elasticsearch");
    } else if (file === "contact.json") {
      print('{');
      print('  "email": "renato.oda2@gmail.com",');
      print('  "linkedin": "linkedin.com/in/renatooda",');
      print('  "github": "github.com/oda2"');
      print('}');
    } else if (file === "experience.json") {
      print("{...} // Try 'experience' command for full details");
    } else {
      print("cat: " + file + ": No such file or directory");
    }
  }
};

function printWelcome() {
  print("╔══════════════════════════════════════════════════╗");
  print("║  Terminal v1.0                                     ║");
  print("╠══════════════════════════════════════════════════╣");
  print("║  Type 'help' for available commands                ║");
  print("║  Type 'projects' to see GitHub repos               ║");
  print("║  Press 'Esc' to close                             ║");
  print("╚══════════════════════════════════════════════════╝");
}

terminalInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = terminalInput.value.trim();
    print("$ " + cmd);
    
    if (cmd) {
      const [command, ...args] = cmd.split(" ");
      if (terminalCommands[command]) {
        terminalCommands[command](args.join(" "));
      } else {
        print("Command not found: " + command + ". Type 'help'.");
      }
    }
    
    terminalInput.value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  document.getElementById("lang").value = savedLang;
  applyI18n(savedLang);
  loadAvatar();
  printWelcome();
});

document.getElementById("lang").addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("lang", lang);
  applyI18n(lang);
});