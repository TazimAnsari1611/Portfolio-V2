export const projects = [
  {
    id: "01",
    title: "Live Building System (LBS)",
    desc: "A multi-role utility management dashboard for residential and commercial buildings, with real-time gas, water, and electricity usage visibility and integrated billing.",
    image: "/images/project-lbs-dark.svg",
    tools: ["React.js", "Stripe", "Real-time Dashboard"],
    liveUrl: "",
    githubUrl: "",
    features: [
      "Multi-role access for Super Admins, Admins, and Tenants",
      "Real-time consumption visualisations and historical reporting",
      "Stripe integration for utility bill payments",
    ],
  },
  {
    id: "02",
    title: "Kellogg's Activity Management",
    desc: "An internal content and activity management platform with granular role-based permissions, full activity lifecycle management, and a dynamic admin dashboard.",
    image: "/images/project-kelloggs.svg",
    tools: ["React.js", "CRUD", "Multi-role", "File Upload"],
    liveUrl: "",
    githubUrl: "",
    features: [
      "Admin and user permissions with restricted page visibility",
      "Activity creation, editing, deletion, and draft saving",
      "Multi-file uploads and management for categories, brands, and activities",
    ],
  },
  {
    id: "03",
    title: "Planogen - Shelf Planning Tool",
    desc: "An interactive planogram builder that helps retail teams design, validate, and manage product placement on shelves with intelligent replacement logic.",
    image: "/images/project-planogen.svg",
    tools: ["React.js", "Drag & Drop", "Grid Layout", "Interactive"],
    liveUrl: "",
    githubUrl: "",
    features: [
      "Drag-and-drop placement with real-time dimension validation",
      "Dynamic shelf management and product-facing controls",
      "Replacement logic that checks product width and height compatibility",
    ],
  },
  {
    id: "04",
    title: "Shelfmonk Dashboard",
    desc: "A product intelligence dashboard with API-driven widgets, advanced filtering, rich data visualisations, and AI-assisted image classification for retail analytics.",
    image: "/images/project-shelfmonk-redacted.svg",
    tools: ["React.js", "Data Visualisation", "Large Scale", "Chatbot"],
    liveUrl: "",
    githubUrl: "",
    features: [
      "Flexible API-driven widgets with global, page, and widget filters",
      "Interactive charts and KPI comparisons for large data sets",
      "Chatbot assistance and image classification with custom annotations",
    ],
  },
];

export const aboutItems = [
  {
    id: 1,
    icon: "/images/about-icon-1.png",
    title: "4+ Years of Experience",
    text: "Building responsive, high-performance web applications with React.js and Next.js.",
  },
  {
    id: 2,
    icon: "/images/about-icon-3.png",
    title: "10+ Projects Delivered",
    text: "Creating scalable interfaces, data-driven dashboards, and reusable component systems.",
  },
  {
    id: 3,
    icon: "/images/about-icon-2.png",
    title: "2 Companies Worked",
    text: "Collaborating with product, design, and engineering teams to ship polished experiences.",
  },
];

export const experience = [
  {
    id: "01",
    role: "Software Developer",
    company: "Big Rattle Technologies",
    location: "Marol Naka, Mumbai",
    period: "2023 - Present",
    current: true,
    highlights: [
      "Designed and prototyped UI/UX wireframes and high-fidelity Figma mockups with product stakeholders.",
      "Built responsive, pixel-perfect applications with React.js, Next.js, HTML, CSS, and modern JavaScript.",
      "Refactored codebases to reduce bundle sizes and improve page-load performance.",
      "Created reusable component libraries to speed up delivery across concurrent projects.",
    ],
  },
  {
    id: "02",
    role: "Junior Frontend Developer",
    company: "Candid Online Marketing",
    location: "Marol Maroshi, Mumbai",
    period: "2022 - 2023",
    current: false,
    highlights: [
      "Built modular React.js and Vue.js components for multiple client-facing applications.",
      "Developed and customised WordPress and CMS-driven websites for a range of clients.",
      "Worked with senior developers to deliver frontend features within an Agile workflow.",
      "Maintained clean code and team workflows using Git and GitHub.",
    ],
  },
];

export const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "MongoDB"],
  Tools: ["Git", "GitHub", "Figma", "WordPress"],
};

export const education = {
  degree: "Bachelor of Science - Information Technology",
  institution: "Smt. Parmeshwaridevi Durgadutt Tibrewala Lions Juhu College",
  affiliation: "Mumbai University",
  period: "2019 - 2022",
};
