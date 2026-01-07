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
  boston311,
  hub,      // Add this
  F1        // Add this
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
  },
  {
    testimonial:
      "Winner in the LICET PATTARAI hackathon for building DAB Fitness, an app connecting users with fitness trainers to maintain routines during the COVID pandemic.",
    name: "LICET Pattarai",
  },
  {
    testimonial:
      "Participated in Smart India Hackathon. Presented on an idea about enabling drones to deliver and monitor situation during floods ",
    name: "Delhi",
  },
];

const projects = [
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
  {
    name: "Academic Hub",
    description:
      "A real-time academic collaboration system built with React, Node.js, PostgreSQL, and Socket.io supporting messaging and notifications. Features secure backend APIs with JWT authentication and optimized schemas ensuring 99.9% uptime.",
    tags: [
      {
        name: "FullStack",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
    ],
    image: hub,
    source_code_link: "https://github.com/Eroniction14/Academic_Hub",
  },
  {
    name: "F1 RAG Chatbot",
    description:
      "A responsive, context-aware chatbot built with Next.js and TypeScript delivering real-time Formula 1 insights. Implemented vector-based retrieval pipelines with Pinecone and Weaviate, reducing query latency by 40%. Integrated AWS Bedrock for LLM processing.",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "VectorDB",
        color: "pink-text-gradient",
      },
    ],
    image: F1,
    source_code_link: "https://github.com/Eroniction14/F1-RAG-Chatbot",
  },
];

export { services, technologies, experiences, testimonials, projects };