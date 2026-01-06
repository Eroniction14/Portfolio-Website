import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  capg,
  licetpattarai,
  pinaca,
  sql,
  go,
  firebase,
  image,
  language,
  erp,
  boston311
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    url: "/Portfolio-Website/Resume.pdf",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analytics",
    icon: backend,
  },
  {
    title: "Service Now",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Go Lang",
    icon: go,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "LICET Pattarai",
    icon: licetpattarai,
    iconBg: "#E6DEDD",
    date: "March 2020 - May 2022",
    points: [
      "Designed and developed a Marks Management Module as part of an ERP system, streamlining the process of entering, updating, and reviewing students' academic performance.",
      "Collaborated with the team to gather requirements through brainstorming sessions and supervised backend development.",
      "Improved front-end programming skills and teamwork during the lockdown, contributing to productivity.",        
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Pinaca Lab Limited",
    icon: pinaca,
    iconBg: "#383E56",
    date: "Jan 2022 - March 2022",
    points: [
      "Implemented a machine learning model for tweet sentiment analysis using LSTM, focusing on tokenization, data preprocessing, and evaluation.",
      "Gained hands-on experience with ML tools like Jupyter and Google Colab, and designed prototypes using InVision Studio",
      "Conducted web scraping and built a housing price detection model, applying deep learning fundamentals.",        
    ],
  },
  {
    title: "Service Now Developer",
    company_name: "Capgemini",
    icon: capg,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - June 2024",
    points: [
      "Optimized ITSM Workflows: Built 50+ ServiceNow workflows, automating tasks and improving service delivery.",
      "Integrated Tools: Linked Jira, SCCM, and Active Directory via APIs, cutting manual data entry by 30%.",       
      "Improved Debugging: Enhanced debugging, cutting runtime issues by 25% and boosting system reliability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Conducted a Python workshop for students who had completed Schooling with over 60 participants",
    name: "LICET",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Winner in the LICET PATTARAI hackathon for building DAB Fitness, an app connecting users with fitness trainers to maintain routines during the COVID pandemic.",
    name: "LICET Pattarai",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Participated in Smart India Hackathon. Presented on an idea about enabling drones to deliver and monitor situation during floods ",
    name: "Delhi",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ERP Mark's Module",
    description:
      "The XStack is an ERP suite built for the college in the view of an independent service provider with no involvement of third parties which are less reliable or even the servers are down due to many requests coming in simultaneously.",
    tags: [
      {
        name: "ERP",
        color: "blue-text-gradient",
      },
      {
        name: "LAMP",
        color: "green-text-gradient",
      },
      {
        name: "Full-stack",
        color: "pink-text-gradient",
      },
    ],
    image: erp,
    source_code_link: "https://github.com/pattarai/xstack-marks-student.git",
  },
  {
    name: "Language Translator",
    description:
      "Focused on improving BLEU scores for underexplored linguistic groups using MT-5, a multilingual transformer. Applied machine learning algorithms to enhance translation accuracy and efficiency, optimizing performance for underserved communities",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "green-text-gradient",
      },
      {
        name: "translation",
        color: "pink-text-gradient",
      },
    ],
    image: language,
    source_code_link: "https://github.com/Eroniction14/Language-Translator",
  },
  {
    name: "Boston 311 AI System",
    description:
      "A comprehensive MLOps platform for Boston's 311 service requests featuring automated data ingestion, XGBoost-powered ML prioritization models, a RAG-based chatbot with Gemini integration, and real-time analytics dashboards built with Next.js.",
    tags: [
      {
        name: "MLOps",
        color: "blue-text-gradient",
      },
      {
        name: "XGBoost",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
    ],
    image: boston311,
    source_code_link: "https://github.com/Eroniction14/boston-311-ai-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
