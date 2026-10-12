const SUPPORTED_LANGS = ["pt", "en", "es"];
const LANG_STORAGE_KEY = "lang";

const translations = {
  pt: {
    htmlLang: "pt-BR",
    months: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],

    navAbout: "Sobre",
    navExperience: "Experiência",
    about: "Sobre",
    experience: "Experiência",
    present: "Atual",
    subtitle: "Tech Lead @ Mercado Livre",
    terminalTitle: "Terminal",
    online: "Online",
    statusLabel: "Status:",
    expDetailsTitle: "Detalhes da Experiência",
    educationTitle: "Formação",
    educationCount: (n) => (n === 1 ? `${n} curso` : `${n} cursos`),
    certificationsTitle: "Certificações",
    certificationsCount: (n) => (n === 1 ? `${n} certificação` : `${n} certificações`),
    certCredential: "Ver credencial",
    certEmpty: "Nenhuma certificação cadastrada.",
    certIssued: "Emitida em",
    certCode: "Código da credencial",
    certNote: "{n} certificações com link público para verificação.",
    certMore: "... e mais {n} (use \"certs <ano>\" para filtrar)",
    certNoYear: "Nenhuma certificação em {y}.",
    degrees: {
      games: "Técnico, Programação de Jogos Digitais",
      multiplatform: "Especialista, Desenvolvimento Multiplataforma",
      javaWeb: "Pós Técnico, Java WEB",
      networks: "Tecnólogo, Gerenciamento de Redes",
      informatics: "Técnico, Técnico em Informática"
    },
    langLabel: "Idioma",
    headerTags: ["Observabilidade", "Sistemas Distribuídos", "Platform Engineering", "IA Aplicada"],

    aboutText: "Profissional com atuação focada na construção e operação de sistemas distribuídos de alta escala, com expertise em confiabilidade, resiliência e excelência operacional.",
    aboutTextFull: "Responsável por aplicações críticas da cadeia logística (Outbound), processando alto volume de requisições em regime 24/7. Minha atuação combina profundidade técnica com liderança, conduzindo decisões arquiteturais e impulsionando times de alta performance.",

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
    backgroundText: "Experiência prévia em sistemas financeiros, fiscais e jurídicos, além de integrações complexas de eCommerce — base que sustenta atuação atual em sistemas distribuídos de missão crítica.",

    /* timeline */
    currentRole: "Cargo atual",
    rolesCount: (n) => (n === 1 ? "1 cargo" : `${n} cargos`),
    yearsMonths: (y, m) => (m === 0 ? `${y} ${y === 1 ? "ano" : "anos"}` : `${y} ${y === 1 ? "ano" : "anos"} e ${m} ${m === 1 ? "mês" : "meses"}`),
    years: (y) => `${y} ${y === 1 ? "ano" : "anos"}`,
    monthsOnly: (m) => `${m} ${m === 1 ? "mês" : "meses"}`,
    summary: (years, companies) => `${years} de experiência · ${companies} empresas`,
    viewDetails: "Ver detalhes",

    /* experience modal */
    expSections: {
      impact: "Impacto Direto",
      engineering: "Engenharia & Plataforma",
      leadership: "Liderança & Engenharia",
      observability: "Observabilidade & Operação",
      domain: "Engenharia no Domínio",
      infra: "Infraestrutura & Plataforma"
    },

    roles: {
      techLead: "Software Technical Leader",
      srEngineer: "Sr Software Engineer",
      specialistDev: "Especialista Software Developer",
      developer: "Software Developer",
      systemsAnalyst: "Analista de Sistemas"
    },

    exp: {
      ml2: {
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
    },

    terminal: {
      welcome: "Digite 'help' para ver os comandos disponíveis",
      welcomeHint: "Digite 'lang <pt|en|es>' para trocar o idioma",
      prompt: "renato@oda2:~$",
      help: {
        title: "Comandos disponíveis",
        sections: [
          {
            title: "Perfil",
            items: [
              ["about", "Sobre mim"],
              ["skills", "Stack técnico"],
              ["contact", "Informações de contato"],
              ["status", "Status dos sistemas"],
              ["experience", "Histórico de carreira"],
              ["projects", "Repositórios no GitHub"],
              ["certs", "Minhas certificações"],
              ["lang [pt|en|es]", "Ver ou trocar o idioma"]
            ]
          },
          {
            title: "Sistema",
            items: [
              ["help", "Mostrar esta ajuda"],
              ["man <cmd>", "Ver a descrição de um comando"],
              ["history", "Comandos executados"],
              ["ls / ll", "Listar os arquivos do site"],
              ["cat <arquivo>", "Exibir conteúdo de um arquivo"],
              ["pwd", "Mostrar o diretório atual"],
              ["top / ps", "Processos em execução"],
              ["uptime", "Tempo online"],
              ["date", "Data e hora atuais"],
              ["uname", "Informações do sistema"],
              ["whoami", "Usuário atual"],
              ["echo <txt>", "Exibir um texto"],
              ["sudo", "Tentar ser root"],
              ["clear", "Limpar o terminal"],
              ["exit", "Fechar o terminal"]
            ]
          }
        ]
      },
      about: {
        name: "Renato Oda",
        role: "Tech Lead @ Mercado Livre",
        line: "Construindo e operando sistemas distribuídos de alta escala com foco em confiabilidade, resiliência e excelência operacional."
      },
      skills: {
        title: "Stack Técnico",
        sections: [
          { title: "Plataforma & Infra", items: ["Kubernetes, Docker, Terraform, Helm, ArgoCD", "AWS, GCP, GitOps"] },
          { title: "Observabilidade", items: ["Prometheus, Grafana, Datadog, Jaeger", "OpenTelemetry, ELK Stack"] },
          { title: "Linguagens", items: ["Go, Python, TypeScript, JavaScript, Bash"] },
          { title: "Dados & Mensageria", items: ["PostgreSQL, Redis, Kafka, RabbitMQ", "Elasticsearch, gRPC"] }
        ]
      },
      contact: { title: "Informações de Contato" },
      status: {
        title: "Status dos Sistemas",
        operational: "Operacional",
        services: [
          ["API Gateway", "99.99%"],
          ["Banco de Dados", "99.95%"],
          ["Camada de Cache", "99.99%"],
          ["Fila de Mensagens", "99.99%"]
        ],
        summary: ["Disponibilidade global: 99.95% (30 dias)", "RPM médio: 20.000+ | P99: <50ms", "Incidentes ativos: 0"]
      },
      experience: { title: "Experiência Profissional", current: "atual" },
      projects: {
        fetching: "Buscando repositórios do GitHub...",
        empty: "Nenhum repositório público encontrado.",
        total: (n) => `Total de repositórios: ${n}`,
        viewAll: "Ver todos",
        headers: ["Nome", "Linguagem", "URL"],
        error: "Erro ao buscar repositórios"
      },
      commandNotFound: (cmd) => `Comando não encontrado: ${cmd}. Digite 'help'.`,
      whoami: "renato.oda - Tech Lead - @oda2",
      uptime: "Disponibilidade: 99.95% (30 dias) | MTTR: <15min",
      ls: [".config/", ".credentials/ (hidden)", "experience.json", "skills.md", "about.txt", "contact.json", "README.md"],
      cat: {
        "about.txt": ["Tech Lead @ Mercado Livre | Platform Engineering", "Construindo e operando sistemas distribuídos de alta escala com foco em confiabilidade, resiliência e excelência operacional."],
        "skills.md": ["## Stack Técnico", "- Kubernetes, Docker, Terraform, ArgoCD", "- Prometheus, Grafana, Datadog, Jaeger", "- Go, Python, TypeScript, Bash", "- PostgreSQL, Redis, Kafka, Elasticsearch"],
        "contact.json": ["{", '  "email": "renato.oda2@gmail.com",', '  "linkedin": "linkedin.com/in/renatooda",', '  "github": "github.com/oda2"', "}"],
        "experience.json": ["{...} // Use o comando 'experience' para ver os detalhes"]
      },
      noSuchFile: (f) => `cat: ${f}: Arquivo não encontrado`,
      manSeeAlso: "ver também",
      sys: {
        cwd: "/home/renato/oda2.github.io",
        pathHint: "site estático servido pelo GitHub Pages",
        lsHeaders: ["PERM", "LN", "OWNER", "GROUP", "SIZE", "MOD", "NAME"],
        lsTotal: "total 7",
        today: "hoje",
        yesterday: "ontem",
        lsFiles: [
          ["drwxr-xr-x", "2", "renato", "oda2", "4.0K", "hoje", "."],
          ["drwxr-xr-x", "8", "renato", "oda2", "4.0K", "hoje", ".."],
          ["-rw-r--r--", "1", "renato", "oda2", "12K", "hoje", "index.html"],
          ["-rw-r--r--", "1", "renato", "oda2", "38K", "hoje", "style.css"],
          ["-rw-r--r--", "1", "renato", "oda2", "26K", "hoje", "main.js"],
          ["-rw-r--r--", "1", "renato", "oda2", "48K", "hoje", "i18n.js"],
          ["-rw-r--r--", "1", "renato", "oda2", "1.4K", "ontem", "README.md"]
        ],
        topHeader: (time, up) => `top - ${time} up ${up},  1 user,  load average: 0.42, 0.36, 0.29`,
        topTasks: "Tasks: 214 total,   1 running, 213 sleeping,   0 stopped,   0 zombie",
        topCpu: "%Cpu(s): 12.4 us,  3.1 sy,  0.0 ni, 84.2 id,  0.2 wa",
        topMem: "MiB Mem : 65536 total, 41230 free, 12200 used",
        topHeaders: ["PID", "USER", "PR", "NI", "VIRT", "RES", "S", "%CPU", "%MEM", "TIME+", "COMMAND"],
        topRows: [
          ["1284", "renato", "20", "0", "16.2g", "4.8g", "R", "42.1", "21.4", "412:33.12", "renato.exe"],
          ["2041", "sre", "20", "0", "3.1g", "820m", "S", "9.2", "4.1", "118:04.77", "sre-agent"],
          ["2077", "renato", "20", "0", "1.4g", "310m", "S", "3.6", "1.8", "64:21.09", "grafana-server"],
          ["2140", "renato", "20", "0", "980m", "212m", "S", "2.1", "1.2", "41:55.42", "datadog-agent"],
          ["2318", "renato", "20", "0", "742m", "168m", "S", "1.4", "0.9", "28:11.63", "kafka-consumer"],
          ["2450", "postgres", "20", "0", "2.6g", "1.1g", "S", "0.8", "5.4", "1 204:08.91", "postgres"]
        ],
        psHeaders: ["PID", "TTY", "TIME", "CMD"],
        psRows: [
          ["1284", "pts/0", "0:00", "bash"],
          ["1285", "pts/0", "0:00", "renato.exe"],
          ["2318", "?", "0:00", "kafka-consumer"],
          ["2450", "?", "0:04", "postgres"]
        ],
        sudo: "renato não está no arquivo sudoers. Este incidente será reportado.",
        noManPage: (cmd) => `man: ${cmd}: manual não encontrado. Use 'help'.`,
        historyEmpty: "nenhum comando executado ainda",
        closed: "sessão encerrada"
      },
      lang: {
        current: (l) => `Idioma atual: ${l}`,
        available: "Idiomas disponíveis: pt-BR (pt), en, es",
        changed: (l) => `Idioma alterado para: ${l}`,
        invalid: (l) => `Idioma inválido: ${l}. Use pt, en ou es.`
      }
    }
  },

  en: {
    htmlLang: "en",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    navAbout: "About",
    navExperience: "Experience",
    about: "About",
    experience: "Experience",
    present: "Present",
    subtitle: "Tech Lead @ Mercado Livre",
    terminalTitle: "Terminal",
    online: "Online",
    statusLabel: "Status:",
    expDetailsTitle: "Experience Details",
    educationTitle: "Education",
    educationCount: (n) => (n === 1 ? `${n} course` : `${n} courses`),
    certificationsTitle: "Certifications",
    certificationsCount: (n) => (n === 1 ? `${n} certification` : `${n} certifications`),
    certCredential: "View credential",
    certEmpty: "No certifications listed yet.",
    certIssued: "Issued",
    certCode: "Credential ID",
    certNote: "{n} certifications with a public verification link.",
    certMore: "... and {n} more (use \"certs <year>\" to filter)",
    certNoYear: "No certifications in {y}.",
    degrees: {
      games: "Technician, Digital Game Development",
      multiplatform: "Specialist, Multiplatform Development",
      javaWeb: "Post-Technical Course, Java WEB",
      networks: "Technologist, Network Management",
      informatics: "Technician, Computer Science"
    },
    langLabel: "Language",
    headerTags: ["Observability", "Distributed Systems", "Platform Engineering", "AI-Driven"],

    aboutText: "Professional focused on building and operating high-scale distributed systems, with expertise in reliability, resilience, and operational excellence.",
    aboutTextFull: "Responsible for critical logistics chain applications (Outbound), processing high request volume in a 24/7 regime. Combines technical depth with leadership, driving architectural decisions and high-performance teams.",

    whereImpactTitle: "Where I Generate Impact",
    whereImpact: [
      "Building and evolving distributed systems focused on high availability and fault tolerance",
      "Strong observability and operations practice, including incident response and postmortems",
      "Architecture definition and RFC conduction aligned with the business",
      "Translating complex domain problems into scalable technical solutions",
      "Elevating engineering quality (tests, standards, best practices)"
    ],

    leadershipTitle: "Engineering & Leadership",
    leadership: [
      "Technical leadership and development of high-performance teams",
      "Strong SRE mindset and production engineering practice",
      "Experience with multi-region and multi-cloud environments",
      "Event-driven and high-concurrency system design",
      "Intensive use of AI (Claude, Cursor, ChatGPT) for productivity"
    ],

    backgroundTitle: "Background",
    backgroundText: "Previous experience in financial, fiscal, and legal systems, plus complex eCommerce integrations — the foundation behind current mission-critical distributed systems work.",

    currentRole: "Current role",
    rolesCount: (n) => (n === 1 ? "1 role" : `${n} roles`),
    yearsMonths: (y, m) => (m === 0 ? `${y} ${y === 1 ? "year" : "years"}` : `${y} ${y === 1 ? "year" : "years"} ${m} ${m === 1 ? "month" : "months"}`),
    years: (y) => `${y} ${y === 1 ? "year" : "years"}`,
    monthsOnly: (m) => `${m} ${m === 1 ? "month" : "months"}`,
    summary: (years, companies) => `${years} of experience · ${companies} companies`,
    viewDetails: "View details",

    expSections: {
      impact: "Direct Impact",
      engineering: "Engineering & Platform",
      leadership: "Leadership & Engineering",
      observability: "Observability & Operations",
      domain: "Domain Engineering",
      infra: "Infrastructure & Platform"
    },

    roles: {
      techLead: "Software Technical Leader",
      srEngineer: "Sr Software Engineer",
      specialistDev: "Specialist Software Developer",
      developer: "Software Developer",
      systemsAnalyst: "Systems Analyst"
    },

    exp: {
      ml2: {
        desc: "Technical leadership role focused on reliability, quality and the sustainable evolution of critical logistics systems.",
        impact: [
          "Architecture definition for large-scale systems focused on high availability and resilience",
          "Raising the team's engineering bar (tests, best practices, code review)",
          "Proactive security work, mitigating vulnerabilities (CVE)",
          "Alignment between engineering and stakeholders, translating business needs into technical solutions"
        ],
        leadership: [
          "Leading RFCs and complex architectural decisions",
          "Supporting the team with threat modeling, system design and advanced debugging",
          "Growing people through 1:1s, mentoring and defining technical standards"
        ],
        observability: [
          "Accountable for SLOs, availability and reliability of applications",
          "Defining and evolving observability practices together with SRE",
          "Structured incident response and crisis management",
          "Leading postmortems and continuous, data-driven improvement",
          "Advanced use of Datadog, New Relic and Grafana for end-to-end visibility"
        ],
        tags: ["Go", "Datadog", "Grafana", "SRE", "RFC", "Security", "Architecture"]
      },
      ml1: {
        desc: "Work on critical logistics systems (Mercado Envios) responsible for the outbound flow, through which every package on the platform passes before distribution.",
        impact: [
          "Evolution of systems with high RPM in a distributed environment",
          "Defining and conducting RFCs, supporting architectural decisions and stakeholder alignment",
          "Translating complex logistics flows into scalable and resilient solutions",
          "Direct rollout work in the logistics operation (distribution centers)"
        ],
        engineering: [
          "Microservices in Go with React frontends (mobile-oriented)",
          "Event-driven architecture (Pub/Sub, Kinesis)",
          "Use of Redis (cache + distributed locking)",
          "Distributed persistence (MySQL, DynamoDB) and analytics with BigQuery",
          "Multi-region deploys (AWS + GCP) via the Fury platform"
        ],
        observability: [
          "Accountable for 24/7 application stability together with SRE teams",
          "Continuous monitoring using Datadog, New Relic and Grafana",
          "Active involvement in production incidents, root cause analysis and service recovery",
          "Leading postmortems focused on systemic learning and preventing recurrence",
          "Evolution of metrics, logs and traces to improve visibility and diagnosis"
        ],
        tags: ["Go", "React", "Kinesis", "Redis", "AWS", "GCP", "DynamoDB", "BigQuery"]
      },
      voll: {
        desc: "Work on a strategic initiative to evolve the identity layer of a SaaS platform, focused on enterprise integrations and federated authentication for corporate customers.",
        impact: [
          "Study and proposal of IAM architecture in a multi-tenant SaaS environment",
          "Evaluation of market solutions for federated authentication (Auth0, AWS IAM)",
          "Definition of the approach to support OpenID Connect / SSO",
          "Reduced operational complexity and improved onboarding security"
        ],
        domain: [
          "Modeling authentication and authorization scenarios in a multi-tenant B2B context",
          "Tenant isolation analysis and security implications",
          "Structuring federated login flows and integration with external IdPs"
        ],
        tags: ["IAM", "OAuth", "OIDC", "SSO", "SaaS", "Multi-tenant", "Auth0"]
      },
      sp3: {
        desc: "Technical reference for the evolution of the legal unit's frontend ecosystem, impacting the Public Prosecutor's Office, the Court of Justice and other verticals across the board.",
        impact: [
          "Technical leadership in consolidating a Micro Front-Ends architecture for multiple legal domains",
          "Evolution of the SAJ Design System, ensuring consistency in complex interfaces",
          "Supporting architectural decisions weighing performance against experience trade-offs",
          "Direct impact on team productivity by removing accidental complexity"
        ],
        leadership: [
          "Acting as a bridge between the legal domain and engineering",
          "Defining standards for building interfaces based on complex workflows",
          "Spreading best practices across a multi-team, multi-domain environment"
        ],
        tags: ["Micro Frontends", "Design System", "JavaScript", "APM", "Workflow"]
      },
      sp2: {
        desc: "Work on the Platform team focused on standardizing and scaling the frontend ecosystem used by the Court of Justice.",
        impact: [
          "Evolution of the Micro Front-Ends architecture to support different procedural domains",
          "Standardization of critical interfaces, ensuring navigation consistency",
          "Work on the JEP project (Tribunal da Paz)"
        ],
        engineering: [
          "Structuring frontends based on complex states and dynamic business rules",
          "Setting up builds and pipelines for multiple teams and applications",
          "Observability of critical applications with Elastic APM and Grafana"
        ],
        tags: ["Node.js", "Elastic APM", "Grafana", "Kubernetes", "Micro Frontends"]
      },
      sp1: {
        desc: "Development of systems in the SAJ ecosystem for the Public Prosecutor's Office, supporting the full lifecycle of legal proceedings.",
        impact: [
          "Development of services and interfaces supporting the prosecutorial workflow",
          "Implementation of external data extraction pipelines (web scraping)",
          "API evolution (REST/GraphQL) for decoupling and integration",
          "Progressive modernization, balancing technology with legacy systems"
        ],
        engineering: [
          "Modeling flows with multiple states and transitions (process lifecycle)",
          "Ensuring idempotency and consistency in sensitive operations",
          "Setting up CI/CD pipelines and Kubernetes deployments"
        ],
        tags: ["Node.js", "Java", "REST", "GraphQL", "Kubernetes", "Web Scraping"]
      },
      onclick: {
        desc: "Full-stack work on developing and evolving an ERP with a strong focus on large-scale eCommerce integrations, connecting the platform to multiple marketplaces, shipping gateways and external services.",
        impact: [
          "Building and maintaining integrations with platforms such as VTEX and Rakuten",
          "Implementing integrations with shipping gateways such as Intelipost",
          "Evolution of the integration architecture using messaging (RabbitMQ)",
          "Participating in the stack modernization, including the introduction of Node.js",
          "Supporting critical areas (deployment, support, customers)"
        ],
        engineering: [
          "Developing APIs and distributed services to integrate heterogeneous systems",
          "Experience with messaging (AMQP) for asynchronous processing",
          "Version control, CI/CD and process automation",
          "Introducing and using automated tests in a Delphi environment (DUnit/DUnitX)"
        ],
        infra: [
          "Owner of the Delphi environment (updates, components and stability)",
          "Experience with containerization (Docker) and first steps in cloud (AWS, Azure, Heroku)",
          "Working in environments with multiple databases (Firebird, SQL Server, PostgreSQL)"
        ],
        tags: ["Delphi", "Node.js", "RabbitMQ", "Docker", "AWS", "Azure", "VTEX", "ERP"]
      },
      sypan: {
        desc: "Development and support of commercial systems focused on fiscal processes (NFe and ECF), dealing with complex rules and strict compliance requirements.",
        impact: [
          "Development of fiscal features (NFe/ECF), ensuring compliance with legal requirements",
          "Direct client interaction during deployment and support",
          "Diagnosis and resolution of problems in production environments"
        ],
        engineering: [
          "Development in Delphi and .NET with MySQL database integration",
          "Early experience with version control (SVN) and team collaboration",
          "Hands-on contact with the full cycle: development → deployment → support"
        ],
        tags: ["Delphi", ".NET", "MySQL", "NFe", "ECF", "SEFAZ"]
      },
      cnpm: {
        desc: "Development of consortium systems used by financial institutions, dealing with complex business rules, high criticality and strict data consistency requirements. Started as an intern and was made permanent in under a year.",
        impact: [
          "Development and maintenance of features in consortium systems integrated with the banking ecosystem",
          "Work across multiple critical modules, ensuring consistency and integrity of financial data",
          "Participation in the quality improvement process that led to MPS.Br level G certification",
          "Hands-on experience with formal software engineering processes (level F/G)"
        ],
        engineering: [
          "Development in Delphi and web applications with .NET Framework",
          "Use of SQL Server in critical data persistence scenarios",
          "Experience with version control (RCS) in a collaborative environment"
        ],
        tags: ["Delphi", ".NET", "SQL Server", "MPS.Br", "Finance"]
      }
    },

    terminal: {
      welcome: "Type 'help' for the list of available commands",
      welcomeHint: "Type 'lang <pt|en|es>' to switch language",
      prompt: "renato@oda2:~$",
      help: {
        title: "Available commands",
        sections: [
          {
            title: "Profile",
            items: [
              ["about", "About me"],
              ["skills", "Tech stack"],
              ["contact", "Contact information"],
              ["status", "System status"],
              ["experience", "Work history"],
              ["projects", "GitHub repositories"],
              ["certs", "My certifications"],
              ["lang [pt|en|es]", "Show or change the language"]
            ]
          },
          {
            title: "System",
            items: [
              ["help", "Show this help"],
              ["man <cmd>", "Describe a command"],
              ["history", "Previously executed commands"],
              ["ls / ll", "List the site files"],
              ["cat <file>", "Print the contents of a file"],
              ["pwd", "Print the current directory"],
              ["top / ps", "Running processes"],
              ["uptime", "Time online"],
              ["date", "Current date and time"],
              ["uname", "System information"],
              ["whoami", "Current user"],
              ["echo <text>", "Print a text"],
              ["sudo", "Try to become root"],
              ["clear", "Clear the terminal"],
              ["exit", "Close the terminal"]
            ]
          }
        ]
      },
      about: {
        name: "Renato Oda",
        role: "Tech Lead @ Mercado Livre",
        line: "Building and operating high-scale distributed systems with a focus on reliability, resilience and operational excellence."
      },
      skills: {
        title: "Tech Stack",
        sections: [
          { title: "Platform & Infra", items: ["Kubernetes, Docker, Terraform, Helm, ArgoCD", "AWS, GCP, GitOps"] },
          { title: "Observability", items: ["Prometheus, Grafana, Datadog, Jaeger", "OpenTelemetry, ELK Stack"] },
          { title: "Languages", items: ["Go, Python, TypeScript, JavaScript, Bash"] },
          { title: "Data & Messaging", items: ["PostgreSQL, Redis, Kafka, RabbitMQ", "Elasticsearch, gRPC"] }
        ]
      },
      contact: { title: "Contact Information" },
      status: {
        title: "System Status",
        operational: "Operational",
        services: [
          ["API Gateway", "99.99%"],
          ["Database", "99.95%"],
          ["Cache Layer", "99.99%"],
          ["Message Queue", "99.99%"]
        ],
        summary: ["Global uptime: 99.95% (30-day rolling)", "Avg RPM: 20,000+ | P99: <50ms", "Active incidents: 0"]
      },
      experience: { title: "Work Experience", current: "present" },
      projects: {
        fetching: "Fetching GitHub repositories...",
        empty: "No public repositories found.",
        total: (n) => `Total repos: ${n}`,
        viewAll: "View all",
        headers: ["Name", "Language", "URL"],
        error: "Error fetching repositories"
      },
      commandNotFound: (cmd) => `Command not found: ${cmd}. Type 'help'.`,
      whoami: "renato.oda - Tech Lead - @oda2",
      uptime: "System uptime: 99.95% (30-day rolling) | MTTR: <15min",
      ls: [".config/", ".credentials/ (hidden)", "experience.json", "skills.md", "about.txt", "contact.json", "README.md"],
      cat: {
        "about.txt": ["Tech Lead @ Mercado Livre | Platform Engineering", "Building and operating high-scale distributed systems with a focus on reliability, resilience and operational excellence."],
        "skills.md": ["## Tech Stack", "- Kubernetes, Docker, Terraform, ArgoCD", "- Prometheus, Grafana, Datadog, Jaeger", "- Go, Python, TypeScript, Bash", "- PostgreSQL, Redis, Kafka, Elasticsearch"],
        "contact.json": ["{", '  "email": "renato.oda2@gmail.com",', '  "linkedin": "linkedin.com/in/renatooda",', '  "github": "github.com/oda2"', "}"],
        "experience.json": ["{...} // Run the 'experience' command for full details"]
      },
      noSuchFile: (f) => `cat: ${f}: No such file or directory`,
      manSeeAlso: "see also",
      sys: {
        cwd: "/home/renato/oda2.github.io",
        pathHint: "static site served by GitHub Pages",
        lsHeaders: ["PERM", "LN", "OWNER", "GROUP", "SIZE", "MOD", "NAME"],
        lsTotal: "total 7",
        today: "today",
        yesterday: "yesterday",
        lsFiles: [
          ["drwxr-xr-x", "2", "renato", "oda2", "4.0K", "today", "."],
          ["drwxr-xr-x", "8", "renato", "oda2", "4.0K", "today", ".."],
          ["-rw-r--r--", "1", "renato", "oda2", "12K", "today", "index.html"],
          ["-rw-r--r--", "1", "renato", "oda2", "38K", "today", "style.css"],
          ["-rw-r--r--", "1", "renato", "oda2", "26K", "today", "main.js"],
          ["-rw-r--r--", "1", "renato", "oda2", "48K", "today", "i18n.js"],
          ["-rw-r--r--", "1", "renato", "oda2", "1.4K", "yesterday", "README.md"]
        ],
        topHeader: (time, up) => `top - ${time} up ${up},  1 user,  load average: 0.42, 0.36, 0.29`,
        topTasks: "Tasks: 214 total,   1 running, 213 sleeping,   0 stopped,   0 zombie",
        topCpu: "%Cpu(s): 12.4 us,  3.1 sy,  0.0 ni, 84.2 id,  0.2 wa",
        topMem: "MiB Mem : 65536 total, 41230 free, 12200 used",
        topHeaders: ["PID", "USER", "PR", "NI", "VIRT", "RES", "S", "%CPU", "%MEM", "TIME+", "COMMAND"],
        topRows: [
          ["1284", "renato", "20", "0", "16.2g", "4.8g", "R", "42.1", "21.4", "412:33.12", "renato.exe"],
          ["2041", "sre", "20", "0", "3.1g", "820m", "S", "9.2", "4.1", "118:04.77", "sre-agent"],
          ["2077", "renato", "20", "0", "1.4g", "310m", "S", "3.6", "1.8", "64:21.09", "grafana-server"],
          ["2140", "renato", "20", "0", "980m", "212m", "S", "2.1", "1.2", "41:55.42", "datadog-agent"],
          ["2318", "renato", "20", "0", "742m", "168m", "S", "1.4", "0.9", "28:11.63", "kafka-consumer"],
          ["2450", "postgres", "20", "0", "2.6g", "1.1g", "S", "0.8", "5.4", "1 204:08.91", "postgres"]
        ],
        psHeaders: ["PID", "TTY", "TIME", "CMD"],
        psRows: [
          ["1284", "pts/0", "0:00", "bash"],
          ["1285", "pts/0", "0:00", "renato.exe"],
          ["2318", "?", "0:00", "kafka-consumer"],
          ["2450", "?", "0:04", "postgres"]
        ],
        sudo: "renato is not in the sudoers file. This incident will be reported.",
        noManPage: (cmd) => `man: ${cmd}: no manual entry. Try 'help'.`,
        historyEmpty: "no commands executed yet",
        closed: "session closed"
      },
      lang: {
        current: (l) => `Current language: ${l}`,
        available: "Available languages: pt-BR (pt), en, es",
        changed: (l) => `Language changed to: ${l}`,
        invalid: (l) => `Invalid language: ${l}. Use pt, en or es.`
      }
    }
  },

  es: {
    htmlLang: "es",
    months: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],

    navAbout: "Sobre mí",
    navExperience: "Experiencia",
    about: "Sobre mí",
    experience: "Experiencia",
    present: "Actual",
    subtitle: "Tech Lead @ Mercado Livre",
    terminalTitle: "Terminal",
    online: "Online",
    statusLabel: "Estado:",
    expDetailsTitle: "Detalles de la Experiencia",
    educationTitle: "Formación",
    educationCount: (n) => (n === 1 ? `${n} curso` : `${n} cursos`),
    certificationsTitle: "Certificaciones",
    certificationsCount: (n) => (n === 1 ? `${n} certificación` : `${n} certificaciones`),
    certCredential: "Ver credencial",
    certEmpty: "Ninguna certificación registrada.",
    certIssued: "Emitido",
    certCode: "Código de credencial",
    certNote: "{n} certificaciones con enlace público de verificación.",
    certMore: "... y {n} más (usa \"certs <año>\" para filtrar)",
    certNoYear: "Ninguna certificación en {y}.",
    degrees: {
      games: "Técnico, Desarrollo de Videojuegos Digitales",
      multiplatform: "Especialista, Desarrollo Multiplataforma",
      javaWeb: "Pos-Técnico, Java WEB",
      networks: "Tecnólogo, Gestión de Redes",
      informatics: "Técnico, Técnico en Informática"
    },
    langLabel: "Idioma",
    headerTags: ["Observabilidad", "Sistemas Distribuidos", "Platform Engineering", "IA Aplicada"],

    aboutText: "Profesional enfocado en construir y operar sistemas distribuidos de alta escala, con experiencia en confiabilidad, resiliencia y excelencia operacional.",
    aboutTextFull: "Responsable de aplicaciones críticas de la cadena logística (Outbound), procesando un alto volumen de solicitudes en régimen 24/7. Combina profundidad técnica con liderazgo, conduciendo decisiones arquitecturales yuntas de alto rendimiento.",

    whereImpactTitle: "Dónde Genero Impacto",
    whereImpact: [
      "Construcción y evolución de sistemas distribuidos con enfoque en alta disponibilidad y tolerancia a fallas",
      "Actuación fuerte en observabilidad y operación, incluyendo incident response y postmortems",
      "Definición de arquitectura y conducción de RFCs alineadas al negocio",
      "Traducción de problemas complejos de dominio en soluciones técnicas escalables",
      "Elevación de la calidad de ingeniería (tests, estándares, buenas prácticas)"
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
    backgroundText: "Experiencia previa en sistemas financieros, fiscales y jurídicos, además de integraciones complejas de eCommerce — base que sostiene la actuación actual en sistemas distribuidos de misión crítica.",

    currentRole: "Puesto actual",
    rolesCount: (n) => (n === 1 ? "1 puesto" : `${n} puestos`),
    yearsMonths: (y, m) => (m === 0 ? `${y} ${y === 1 ? "año" : "años"}` : `${y} ${y === 1 ? "año" : "años"} y ${m} ${m === 1 ? "mes" : "meses"}`),
    years: (y) => `${y} ${y === 1 ? "año" : "años"}`,
    monthsOnly: (m) => `${m} ${m === 1 ? "mes" : "meses"}`,
    summary: (years, companies) => `${years} de experiencia · ${companies} empresas`,
    viewDetails: "Ver detalles",

    expSections: {
      impact: "Impacto Directo",
      engineering: "Ingeniería & Plataforma",
      leadership: "Liderazgo & Ingeniería",
      observability: "Observabilidad & Operación",
      domain: "Ingeniería en el Dominio",
      infra: "Infraestructura & Plataforma"
    },

    roles: {
      techLead: "Software Technical Leader",
      srEngineer: "Sr Software Engineer",
      specialistDev: "Especialista Software Developer",
      developer: "Software Developer",
      systemsAnalyst: "Analista de Sistemas"
    },

    exp: {
      ml2: {
        desc: "Actuación como liderazgo técnico con foco en confiabilidad, calidad y evolución sostenible de sistemas críticos de logística.",
        impact: [
          "Definición de arquitectura para sistemas de alta escala con enfoque en alta disponibilidad y resiliencia",
          "Elevación del estándar de ingeniería del equipo (tests, buenas prácticas, revisión técnica)",
          "Actuación preventiva en seguridad, mitigando vulnerabilidades (CVE)",
          "Alineación entre ingeniería y stakeholders, traduciendo necesidades de negocio en soluciones técnicas"
        ],
        leadership: [
          "Conducción de RFCs y decisiones arquitecturales complejas",
          "Apoyo al equipo en threat modeling, system design y debugging avanzado",
          "Desarrollo de personas mediante 1:1, mentoring y definición de estándares técnicos"
        ],
        observability: [
          "Responsable de garantizar SLOs, disponibilidad y confiabilidad de las aplicaciones",
          "Definición y evolución de prácticas de observabilidad junto a SRE",
          "Actuación estructurada en incident response y gestión de crisis",
          "Conducción de postmortems y mejora continua basada en datos",
          "Uso avanzado de Datadog, New Relic y Grafana para visibilidad de punta a punta"
        ],
        tags: ["Go", "Datadog", "Grafana", "SRE", "RFC", "Seguridad", "Arquitectura"]
      },
      ml1: {
        desc: "Actuación en sistemas críticos de logística (Mercado Envios), responsables del flujo de outbound, por donde pasan todos los paquetes de la plataforma antes de la distribución.",
        impact: [
          "Evolución de sistemas con alta tasa de RPM en ambiente distribuido",
          "Definición y conducción de RFCs, apoyando decisiones arquitecturales y la alineación con stakeholders",
          "Traducción de flujos logísticos complejos en soluciones escalables y resilientes",
          "Actuación en rollout directo en la operación logística (centros de distribución)"
        ],
        engineering: [
          "Microservicios en Go con frontends en React (mobile-oriented)",
          "Arquitectura orientada a eventos (Pub/Sub, Kinesis)",
          "Uso de Redis (cache + distributed locking)",
          "Persistencia distribuida (MySQL, DynamoDB) y analytics con BigQuery",
          "Deploy multi-región (AWS + GCP) mediante la plataforma Fury"
        ],
        observability: [
          "Responsable de garantizar la estabilidad de aplicaciones 24/7 junto a los equipos de SRE",
          "Monitoreo continuo utilizando Datadog, New Relic y Grafana",
          "Actuación activa en incidentes de producción, análisis de causa raíz y recuperación de servicios",
          "Conducción de postmortems, enfocados en aprendizaje sistémico y prevención de recurrencia",
          "Evolución de métricas, logs y traces para mejorar la visibilidad y el diagnóstico"
        ],
        tags: ["Go", "React", "Kinesis", "Redis", "AWS", "GCP", "DynamoDB", "BigQuery"]
      },
      voll: {
        desc: "Actuación en una iniciativa estratégica de evolución de la capa de identidad de una plataforma SaaS, con foco en soportar integraciones enterprise y autenticación federada para clientes corporativos.",
        impact: [
          "Estudio y proposición de arquitectura para IAM en ambiente SaaS multi-tenant",
          "Evaluación de soluciones de mercado para autenticación federada (Auth0, AWS IAM)",
          "Definición del enfoque para soportar OpenID Connect / SSO",
          "Reducción de complejidad operacional y mejora de la seguridad en el onboarding"
        ],
        domain: [
          "Modelado de escenarios de autenticación y autorización en contexto B2B multi-tenant",
          "Análisis de aislamiento de tenants e implicaciones de seguridad",
          "Estructuración de flujos de login federado e integración con IdPs externos"
        ],
        tags: ["IAM", "OAuth", "OIDC", "SSO", "SaaS", "Multi-tenant", "Auth0"]
      },
      sp3: {
        desc: "Actuación como referencia técnica en la evolución del ecosistema frontend de la unidad de justicia, impactando transversalmente al Ministerio Público, el Tribunal de Justicia y demás verticales.",
        impact: [
          "Liderazgo técnico en la consolidación de la arquitectura de Micro Front-Ends para múltiples dominios jurídicos",
          "Evolución del Design System de SAJ, garantizando consistencia en interfaces complejas",
          "Apoyo a decisiones arquitecturales con trade-offs entre performance y experiencia",
          "Influencia directa en la productividad de los equipos al reducir la complejidad accidental"
        ],
        leadership: [
          "Actuación como puente entre el dominio jurídico y la ingeniería",
          "Definición de estándares para la construcción de interfaces basadas en workflows complejos",
          "Difusión de buenas prácticas en un ambiente multi-equipos y multi-dominio"
        ],
        tags: ["Micro Frontends", "Design System", "JavaScript", "APM", "Workflow"]
      },
      sp2: {
        desc: "Actuación en el equipo de Plataforma con foco en la estandarización y escalabilidad del ecosistema frontend utilizado por el Tribunal de Justicia.",
        impact: [
          "Evolución de la arquitectura de Micro Front-Ends para soportar diferentes dominios procesales",
          "Estandarización de interfaces críticas, garantizando consistencia en la navegación",
          "Actuación en el desarrollo del proyecto JEP (Tribunal da Paz)"
        ],
        engineering: [
          "Organización de frontends basados en estados complejos y reglas de negocio dinámicas",
          "Estructuración de builds y pipelines para múltiples equipos y aplicaciones",
          "Observabilidad de aplicaciones críticas con Elastic APM y Grafana"
        ],
        tags: ["Node.js", "Elastic APM", "Grafana", "Kubernetes", "Micro Frontends"]
      },
      sp1: {
        desc: "Actuación en el desarrollo de sistemas del ecosistema SAJ orientados al Ministerio Público, soportando el ciclo completo de procesos jurídicos.",
        impact: [
          "Desarrollo de servicios e interfaces que soportan el flujo procesual del MP",
          "Implementación de pipelines de extracción de datos externos (web scraping)",
          "Evolución de APIs (REST/GraphQL) para desacoplamiento e integración",
          "Actuación en modernización progresiva, equilibrando tecnología con sistemas legados"
        ],
        engineering: [
          "Modelado de flujos con múltiples estados y transiciones (process lifecycle)",
          "Garantía de idempotencia y consistencia en operaciones sensibles",
          "Estructuración de pipelines CI/CD y deploy en Kubernetes"
        ],
        tags: ["Node.js", "Java", "REST", "GraphQL", "Kubernetes", "Web Scraping"]
      },
      onclick: {
        desc: "Actuación full-stack en el desarrollo y evolución de un ERP con fuerte foco en integraciones de eCommerce a gran escala, conectando la plataforma a múltiples marketplaces, gateways de envío y servicios externos.",
        impact: [
          "Construcción y mantenimiento de integraciones con plataformas como VTEX y Rakuten",
          "Implementación de integraciones con gateways de envío como Intelipost",
          "Evolución de la arquitectura de integración utilizando mensajería (RabbitMQ)",
          "Participación en la modernización del stack, incluyendo la introducción de Node.js",
          "Soporte a áreas críticas (implantación, atención, clientes)"
        ],
        engineering: [
          "Desarrollo de APIs y servicios distribuidos para la integración entre sistemas heterogéneos",
          "Experiencia con mensajería (AMQP) para procesamiento asíncrono",
          "Actuación en control de versiones, CI/CD y automatización de procesos",
          "Introducción y uso de pruebas automatizadas en ambiente Delphi (DUnit/DUnitX)"
        ],
        infra: [
          "Responsable del ambiente Delphi (actualizaciones, componentes y estabilidad)",
          "Experiencia con containerización (Docker) y primeros pasos en cloud (AWS, Azure, Heroku)",
          "Actuación en ambientes con múltiples bases de datos (Firebird, SQL Server, PostgreSQL)"
        ],
        tags: ["Delphi", "Node.js", "RabbitMQ", "Docker", "AWS", "Azure", "VTEX", "ERP"]
      },
      sypan: {
        desc: "Actuación en el desarrollo y sostenimiento de sistemas comerciales con foco en procesos fiscales (NFe y ECF), lidiando con reglas complejas y alta exigencia de conformidad.",
        impact: [
          "Desarrollo de funcionalidades fiscales (NFe/ECF), garantizando conformidad con requisitos legales",
          "Actuación directa con clientes en implantación y soporte",
          "Diagnóstico y resolución de problemas en ambientes productivos"
        ],
        engineering: [
          "Desarrollo en Delphi y .NET con integración a base de datos MySQL",
          "Experiencia inicial con control de versiones (SVN) y colaboración en equipo",
          "Contacto directo con el ciclo completo: desarrollo → implantación → soporte"
        ],
        tags: ["Delphi", ".NET", "MySQL", "NFe", "ECF", "SEFAZ"]
      },
      cnpm: {
        desc: "Actuación en el desarrollo de sistemas de consorcio utilizados por instituciones financieras, lidiando con reglas de negocio complejas, alta criticidad y fuerte exigencia de consistencia de datos. Comencé como pasante y fui efectivado en menos de 1 año.",
        impact: [
          "Desarrollo y mantenimiento de funcionalidades en sistemas de consorcio integrados al ecosistema bancario",
          "Actuación en múltiples módulos críticos, garantizando consistencia e integridad de datos financieros",
          "Participación en el proceso de mejora de calidad que llevó a la certificación MPS.Br nivel G",
          "Experiencia práctica con procesos formales de ingeniería de software (nivel F/G)"
        ],
        engineering: [
          "Desarrollo en Delphi y aplicaciones web con .NET Framework",
          "Utilización de SQL Server en escenarios críticos de persistencia de datos",
          "Experiencia con control de versiones (RCS) en ambiente colaborativo"
        ],
        tags: ["Delphi", ".NET", "SQL Server", "MPS.Br", "Finanzas"]
      }
    },

    terminal: {
      welcome: "Escribe 'help' para ver los comandos disponibles",
      welcomeHint: "Escribe 'lang <pt|en|es>' para cambiar el idioma",
      prompt: "renato@oda2:~$",
      help: {
        title: "Comandos disponibles",
        sections: [
          {
            title: "Perfil",
            items: [
              ["about", "Sobre mí"],
              ["skills", "Stack técnico"],
              ["contact", "Información de contacto"],
              ["status", "Estado de los sistemas"],
              ["experience", "Trayectoria profesional"],
              ["projects", "Repositorios en GitHub"],
              ["certs", "Mis certificaciones"],
              ["lang [pt|en|es]", "Ver o cambiar el idioma"]
            ]
          },
          {
            title: "Sistema",
            items: [
              ["help", "Mostrar esta ayuda"],
              ["man <cmd>", "Describir un comando"],
              ["history", "Comandos ejecutados"],
              ["ls / ll", "Listar los archivos del sitio"],
              ["cat <archivo>", "Mostrar el contenido de un archivo"],
              ["pwd", "Mostrar el directorio actual"],
              ["top / ps", "Procesos en ejecución"],
              ["uptime", "Tiempo en línea"],
              ["date", "Fecha y hora actuales"],
              ["uname", "Información del sistema"],
              ["whoami", "Usuario actual"],
              ["echo <texto>", "Mostrar un texto"],
              ["sudo", "Intentar ser root"],
              ["clear", "Limpiar la terminal"],
              ["exit", "Cerrar la terminal"]
            ]
          }
        ]
      },
      about: {
        name: "Renato Oda",
        role: "Tech Lead @ Mercado Livre",
        line: "Construyendo y operando sistemas distribuidos de alta escala con foco en confiabilidad, resiliencia y excelencia operacional."
      },
      skills: {
        title: "Stack Técnico",
        sections: [
          { title: "Plataforma & Infra", items: ["Kubernetes, Docker, Terraform, Helm, ArgoCD", "AWS, GCP, GitOps"] },
          { title: "Observabilidad", items: ["Prometheus, Grafana, Datadog, Jaeger", "OpenTelemetry, ELK Stack"] },
          { title: "Lenguajes", items: ["Go, Python, TypeScript, JavaScript, Bash"] },
          { title: "Datos & Mensajería", items: ["PostgreSQL, Redis, Kafka, RabbitMQ", "Elasticsearch, gRPC"] }
        ]
      },
      contact: { title: "Información de Contacto" },
      status: {
        title: "Estado de los Sistemas",
        operational: "Operativo",
        services: [
          ["API Gateway", "99.99%"],
          ["Base de Datos", "99.95%"],
          ["Capa de Caché", "99.99%"],
          ["Cola de Mensajes", "99.99%"]
        ],
        summary: ["Disponibilidad global: 99.95% (30 días)", "RPM medio: 20.000+ | P99: <50ms", "Incidentes activos: 0"]
      },
      experience: { title: "Experiencia Profesional", current: "actualidad" },
      projects: {
        fetching: "Obteniendo repositorios de GitHub...",
        empty: "No se encontraron repositorios públicos.",
        total: (n) => `Total de repositorios: ${n}`,
        viewAll: "Ver todos",
        headers: ["Nombre", "Lenguaje", "URL"],
        error: "Error al obtener repositorios"
      },
      commandNotFound: (cmd) => `Comando no encontrado: ${cmd}. Escribe 'help'.`,
      whoami: "renato.oda - Tech Lead - @oda2",
      uptime: "Disponibilidad: 99.95% (30 días) | MTTR: <15min",
      ls: [".config/", ".credentials/ (hidden)", "experience.json", "skills.md", "about.txt", "contact.json", "README.md"],
      cat: {
        "about.txt": ["Tech Lead @ Mercado Livre | Platform Engineering", "Construyendo y operando sistemas distribuidos de alta escala con foco en confiabilidad, resiliencia y excelencia operacional."],
        "skills.md": ["## Stack Técnico", "- Kubernetes, Docker, Terraform, ArgoCD", "- Prometheus, Grafana, Datadog, Jaeger", "- Go, Python, TypeScript, Bash", "- PostgreSQL, Redis, Kafka, Elasticsearch"],
        "contact.json": ["{", '  "email": "renato.oda2@gmail.com",', '  "linkedin": "linkedin.com/in/renatooda",', '  "github": "github.com/oda2"', "}"],
        "experience.json": ["{...} // Usa el comando 'experience' para ver los detalles"]
      },
      noSuchFile: (f) => `cat: ${f}: Archivo no encontrado`,
      manSeeAlso: "véase también",
      sys: {
        cwd: "/home/renato/oda2.github.io",
        pathHint: "sitio estático servido por GitHub Pages",
        lsHeaders: ["PERM", "LN", "OWNER", "GROUP", "SIZE", "MOD", "NAME"],
        lsTotal: "total 7",
        today: "hoy",
        yesterday: "ayer",
        lsFiles: [
          ["drwxr-xr-x", "2", "renato", "oda2", "4.0K", "hoy", "."],
          ["drwxr-xr-x", "8", "renato", "oda2", "4.0K", "hoy", ".."],
          ["-rw-r--r--", "1", "renato", "oda2", "12K", "hoy", "index.html"],
          ["-rw-r--r--", "1", "renato", "oda2", "38K", "hoy", "style.css"],
          ["-rw-r--r--", "1", "renato", "oda2", "26K", "hoy", "main.js"],
          ["-rw-r--r--", "1", "renato", "oda2", "48K", "hoy", "i18n.js"],
          ["-rw-r--r--", "1", "renato", "oda2", "1.4K", "ayer", "README.md"]
        ],
        topHeader: (time, up) => `top - ${time} up ${up},  1 user,  load average: 0.42, 0.36, 0.29`,
        topTasks: "Tasks: 214 total,   1 running, 213 sleeping,   0 stopped,   0 zombie",
        topCpu: "%Cpu(s): 12.4 us,  3.1 sy,  0.0 ni, 84.2 id,  0.2 wa",
        topMem: "MiB Mem : 65536 total, 41230 free, 12200 used",
        topHeaders: ["PID", "USER", "PR", "NI", "VIRT", "RES", "S", "%CPU", "%MEM", "TIME+", "COMMAND"],
        topRows: [
          ["1284", "renato", "20", "0", "16.2g", "4.8g", "R", "42.1", "21.4", "412:33.12", "renato.exe"],
          ["2041", "sre", "20", "0", "3.1g", "820m", "S", "9.2", "4.1", "118:04.77", "sre-agent"],
          ["2077", "renato", "20", "0", "1.4g", "310m", "S", "3.6", "1.8", "64:21.09", "grafana-server"],
          ["2140", "renato", "20", "0", "980m", "212m", "S", "2.1", "1.2", "41:55.42", "datadog-agent"],
          ["2318", "renato", "20", "0", "742m", "168m", "S", "1.4", "0.9", "28:11.63", "kafka-consumer"],
          ["2450", "postgres", "20", "0", "2.6g", "1.1g", "S", "0.8", "5.4", "1 204:08.91", "postgres"]
        ],
        psHeaders: ["PID", "TTY", "TIME", "CMD"],
        psRows: [
          ["1284", "pts/0", "0:00", "bash"],
          ["1285", "pts/0", "0:00", "renato.exe"],
          ["2318", "?", "0:00", "kafka-consumer"],
          ["2450", "?", "0:04", "postgres"]
        ],
        sudo: "renato no está en el archivo sudoers. Este incidente será reportado.",
        noManPage: (cmd) => `man: ${cmd}: no manual entry. Escribe 'help'.`,
        historyEmpty: "ningún comando ejecutado aún",
        closed: "sesión cerrada"
      },
      lang: {
        current: (l) => `Idioma actual: ${l}`,
        available: "Idiomas disponibles: pt-BR (pt), en, es",
        changed: (l) => `Idioma cambiado a: ${l}`,
        invalid: (l) => `Idioma inválido: ${l}. Usa pt, en o es.`
      }
    }
  }
};

let activeLang = "pt";

function currentLang() {
  return translations[activeLang] || translations.pt;
}

function detectBrowserLang() {
  const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "pt-BR"];
  for (const tag of candidates) {
    const base = String(tag).toLowerCase().split("-")[0];
    if (SUPPORTED_LANGS.includes(base)) return base;
  }
  return "pt";
}

function getInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (_) {
    /* storage unavailable (private mode) — fall back to detection */
  }
  return detectBrowserLang();
}

function applyI18n(lang, options = {}) {
  const t = translations[lang];
  if (!t) return;

  const persist = options.persist !== false;
  activeLang = lang;
  document.documentElement.lang = t.htmlLang;
  document.documentElement.dataset.lang = lang;
  if (persist) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (_) {
      /* ignore storage failures */
    }
  }

  const select = document.getElementById("lang");
  if (select && select.value !== lang) select.value = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  const subtitle = document.querySelector(".subtitle");
  if (subtitle) subtitle.textContent = t.subtitle;

  const tagsContainer = document.getElementById("header-tags");
  if (tagsContainer) tagsContainer.innerHTML = t.headerTags.map(tag => `<span class="tag">${tag}</span>`).join("");

  const aboutText = document.getElementById("about-text");
  if (aboutText) aboutText.textContent = t.aboutText;

  const aboutFull = document.getElementById("about-full");
  if (aboutFull) aboutFull.textContent = t.aboutTextFull;

  const whereImpact = document.getElementById("where-impact-list");
  if (whereImpact) whereImpact.innerHTML = t.whereImpact.map(item => `<li>${item}</li>`).join("");

  const leadership = document.getElementById("leadership-list");
  if (leadership) leadership.innerHTML = t.leadership.map(item => `<li>${item}</li>`).join("");

  const background = document.getElementById("background-text");
  if (background) background.textContent = t.backgroundText;

  const subtitles = document.querySelectorAll(".section-subtitle");
  if (subtitles[0]) subtitles[0].textContent = t.whereImpactTitle;
  if (subtitles[1]) subtitles[1].textContent = t.leadershipTitle;
  if (subtitles[2]) subtitles[2].textContent = t.backgroundTitle;

  const langSelect = document.getElementById("lang");
  if (langSelect) langSelect.title = t.langLabel;

  const footer = document.querySelector(".footer-content");
  if (footer) {
    footer.innerHTML = `
      <span>${t.statusLabel}</span>
      <span class="status-indicator"></span>
      <span>${t.online}</span>
    `;
  }

  document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang } }));
}
