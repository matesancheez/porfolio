import type { IInfo } from "@types";

export const info: IInfo = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Mateo Sanchez",
  jobDescription: "Information Systems Engineering Student",
  about: `I'm in the final year of my Information Systems Engineering degree at Universidad Tecnológica Nacional (UTN FRC), specializing in Information Security (2022 – expected graduation in 2027). With an analytical mindset and a strong business- and client-oriented focus, I specialize in acting as a strategic bridge between technical teams and end users, facilitating the seamless integration of technological solutions with enterprise management systems.

My background spans systems integration (APIs & Webhooks), databases (SQL, Oracle), data analysis and automation with Python (Pandas, BeautifulSoup, Scikit-learn), and Power BI. I have practical experience in requirements gathering, business process modeling, and agile workflows (Scrum, Jira).

Passionate about digital transformation, proactive problem-solving, and driving continuous improvement to deliver optimal operational efficiency and exceptional user experience.`,

  experience: [
    {
      name: "Copper Mountain Ski Resort — Technical & Operations Assistant",
      location: "Denver, Colorado, USA",
      startDate: "Dec 2023",
      endDate: "Mar 2024",
      description: [
        "✓ Provided real-time operational and technical support in a high-tempo, multicultural environment with a strong customer-first focus.",
        "✓ Acted as a facilitator between end-user requirements and operations, identifying friction points and improving support workflows.",
        "✓ Delivered tier-2 technical support, ensuring service reliability and optimal user experience.",
      ],
    },
    {
      name: "TAYKA (Travel Company) — Web Designer & Developer / IT Support",
      location: "Córdoba, Argentina",
      startDate: "Mar 2022",
      endDate: "Dec 2022",
      description: [
        "✓ Supported the development and integration of tech solutions, collaborating closely with internal stakeholders to align features with business needs.",
        "✓ Provided technical and functional support for digital products, resolving incidents and ensuring smooth feature adoption.",
        "✓ Managed SQL databases and worked in agile sprints, uncovering continuous improvement opportunities to boost operational efficiency.",
      ],
    },
  ],

  education: [
    {
      name: "Universidad Tecnológica Nacional (UTN FRC)",
      location: "Córdoba, Argentina",
      startDate: "2022",
      endDate: "2027 (Expected)",
      description: [
        "✓ Information Systems Engineering — Final Year (Último año)",
        "✓ Specialization in Information Security & Cybersecurity",
        "✓ Academic GPA: 8 / 10",
      ],
    },
    {
      name: "Coderhouse",
      location: "Online",
      startDate: "2021",
      endDate: "2021",
      description: ["✓ Course: Python and Django Backend Development"],
    },
    {
      name: "Coderhouse",
      location: "Online",
      startDate: "2020",
      endDate: "2020",
      description: ["✓ Course: Web Development with React"],
    },
    {
      name: "Uzzi College",
      location: "Salta, Argentina",
      startDate: "2013",
      endDate: "2018",
      description: ["✓ High School Diploma — Focus on Economics (Bachiller en Economía)"],
    },
  ],

  socialMedia: {
    github: "https://github.com/matesancheez",
    email: "sanchezmateo090@gmail.com",
    linkedin: "https://www.linkedin.com/in/mateo-sanchez-40a3761a2/",
  },

  projects: [
    {
      title: "V&S Odontologia",
      isFeatured: true,
      thumbnail: "/assets/images/vsOdontologia.png",
      githubUrl: "https://github.com/matesancheez/vsodontologia",
      liveUrl: "https://matesancheez.github.io/vsodontologia/",
    },
    {
      title: "MiAbu",
      isFeatured: false,
      thumbnail: "/assets/images/miabu.png",
      githubUrl: "https://github.com/matesancheez/MiAbu",
      liveUrl: "https://github.com/matesancheez/MiAbu",
    },
    {
      title: "Flint Marketing Agency",
      isFeatured: true,
      thumbnail: "/assets/images/FLINT.png",
      githubUrl: "https://github.com/matesancheez/Flint",
      liveUrl: "https://flint-mateos-projects-c05d1563.vercel.app/",
    },
    {
      title: "Doyle - Fotografia inmobiliaria",
      isFeatured: false,
      thumbnail: "/assets/images/Doyle.png",
      githubUrl: "https://github.com/matesancheez/Doyle",
      liveUrl: "https://doyle.vercel.app/",
    },
    {
      title: "AMA Supercross - Data analisis",
      isFeatured: true,
      thumbnail: "/assets/images/AMA.jpeg",
      githubUrl: "https://www.kaggle.com/datasets/matesanchez/ama-supercross-championship-20142026",
      liveUrl: "https://supercorss-front.vercel.app/",
    },
  ],
};

export const infoEs: IInfo = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Mateo Sanchez",
  jobDescription: "Estudiante de Ingeniería en Sistemas de Información",
  about: `Estudiante de último año de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN FRC), con especialidad en Seguridad de la Información (2022 – graduación esperada en 2027). Con un perfil analítico, extrovertido y fuertemente orientado al negocio y al cliente, me especializo en actuar como nexo estratégico entre equipos técnicos y usuarios finales, facilitando la integración de soluciones tecnológicas con distintos sistemas de gestión.

Cuento con experiencia en relevamiento de requerimientos funcionales, modelado de procesos, integración de sistemas (APIs y Webhooks), bases de datos (SQL, Oracle), y análisis y ciencia de datos con Python (Pandas, BeautifulSoup, Scikit-learn) y Power BI. Trabajo bajo metodologías ágiles (Scrum, Jira).

Apasionado por la transformación digital, con un enfoque proactivo para detectar oportunidades de mejora tecnológica, optimizar la eficiencia operativa y maximizar la experiencia del usuario.`,

  experience: [
    {
      name: "Copper Mountain Ski Resort — Asistente Técnico y Operativo",
      location: "Denver, Colorado, EE. UU.",
      startDate: "Dic 2023",
      endDate: "Mar 2024",
      description: [
        "✓ Desarrollé un perfil altamente orientado al cliente en un entorno dinámico y multicultural, brindando atención directa y resolviendo consultas operativas y técnicas en tiempo real.",
        "✓ Actué como facilitador entre los requerimientos del usuario y el equipo de operaciones, detectando fricciones en el servicio e impulsando mejoras en los flujos de atención.",
        "✓ Proporcioné soporte de segundo nivel, garantizando la continuidad de los servicios y una experiencia de usuario óptima.",
      ],
    },
    {
      name: "TAYKA (Travel Company) — Web Designer & Developer / Soporte Técnico",
      location: "Córdoba, Argentina",
      startDate: "Mar 2022",
      endDate: "Dic 2022",
      description: [
        "✓ Acompañé el desarrollo y la integración de soluciones tecnológicas, trabajando en conjunto con clientes internos para comprender sus necesidades y facilitar las implementaciones.",
        "✓ Brindé soporte técnico y funcional sobre productos digitales, resolviendo consultas y garantizando una excelente adopción de las nuevas funcionalidades por parte del usuario final.",
        "✓ Gestioné bases de datos SQL y trabajé bajo metodologías ágiles, identificando oportunidades de mejora continua para alinear la eficiencia operativa con los objetivos del negocio.",
      ],
    },
  ],

  education: [
    {
      name: "Universidad Tecnológica Nacional (UTN FRC)",
      location: "Córdoba, Argentina",
      startDate: "2022",
      endDate: "2027 (Esperada)",
      description: [
        "✓ Ingeniería en Sistemas de Información — Estudiante de Último Año",
        "✓ Especialidad en Seguridad de la Información / Ciberseguridad",
        "✓ Promedio académico: 8 / 10",
      ],
    },
    {
      name: "Coderhouse",
      location: "Online",
      startDate: "2021",
      endDate: "2021",
      description: ["✓ Curso: Desarrollo Backend con Python y Django"],
    },
    {
      name: "Coderhouse",
      location: "Online",
      startDate: "2020",
      endDate: "2020",
      description: ["✓ Curso: Desarrollo Web con React"],
    },
    {
      name: "Uzzi College",
      location: "Salta, Argentina",
      startDate: "2013",
      endDate: "2018",
      description: ["✓ Bachiller en Economía"],
    },
  ],

  socialMedia: {
    github: "https://github.com/matesancheez",
    email: "sanchezmateo090@gmail.com",
    linkedin: "https://www.linkedin.com/in/mateo-sanchez-40a3761a2/",
  },

  projects: [
    {
      title: "V&S Odontologia",
      isFeatured: true,
      thumbnail: "/assets/images/vsOdontologia.png",
      githubUrl: "https://github.com/matesancheez/vsodontologia",
      liveUrl: "https://matesancheez.github.io/vsodontologia/",
    },
    {
      title: "MiAbu",
      isFeatured: false,
      thumbnail: "/assets/images/miabu.png",
      githubUrl: "https://github.com/matesancheez/MiAbu",
      liveUrl: "https://github.com/matesancheez/MiAbu",
    },
    {
      title: "Flint Marketing Agency",
      isFeatured: true,
      thumbnail: "/assets/images/FLINT.png",
      githubUrl: "https://github.com/matesancheez/Flint",
      liveUrl: "https://flint-mateos-projects-c05d1563.vercel.app/",
    },
    {
      title: "Doyle - Fotografia inmobiliaria",
      isFeatured: false,
      thumbnail: "/assets/images/Doyle.png",
      githubUrl: "https://github.com/matesancheez/Doyle",
      liveUrl: "https://doyle.vercel.app/",
    },
    {
      title: "AMA Supercross - Data analisis",
      isFeatured: true,
      thumbnail: "/assets/images/AMA.jpeg",
      githubUrl: "https://www.kaggle.com/datasets/matesanchez/ama-supercross-championship-20142026",
      liveUrl: "https://supercorss-front.vercel.app/",
    },
  ],
};

