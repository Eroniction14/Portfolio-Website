import {
  mobile,
  backend,
  creator,
  web,
  python,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  java,
  capg,
  licetpattarai,
  pinaca,
  sql,
  go,
  aws,
  boston311,
  crossword,
  job
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    url: "/Portfolio-Website/Resume1.pdf",
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

// `category` groups these for the flat-chip Tech section layout
// (Languages / Frameworks / Tools & Infra) instead of one long row.
const technologies = [
  { name: "HTML 5", icon: html, category: "Languages" },
  { name: "CSS 3", icon: css, category: "Languages" },
  { name: "Python", icon: python, category: "Languages" },
  { name: "TypeScript", icon: typescript, category: "Languages" },
  { name: "Java", icon: java, category: "Languages" },
  { name: "Go Lang", icon: go, category: "Languages" },
  { name: "React JS", icon: reactjs, category: "Frameworks" },
  { name: "Node JS", icon: nodejs, category: "Frameworks" },
  { name: "SQL", icon: sql, category: "Tools & Infra" },
  { name: "MongoDB", icon: mongodb, category: "Tools & Infra" },
  { name: "Git", icon: git, category: "Tools & Infra" },
  { name: "AWS", icon: aws, category: "Tools & Infra" },
  { name: "Docker", icon: docker, category: "Tools & Infra" },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "LICET Pattarai",
    icon: licetpattarai,
    iconBg: "#E6DEDD",
    date: "March 2020 - May 2022",
    // Used to color the timeline card's left border so full-time vs.
    // internship roles are distinguishable at a glance.
    type: "full-time",
    points: [
      "Designed and developed a Marks Management Module as part of an ERP system, streamlining the process of entering, updating, and reviewing students' academic performance.",
      "Collaborated with the team to gather requirements through brainstorming sessions and supervised backend development.",
      "Improved front-end programming skills and teamwork during the lockdown, contributing to productivity .",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Pinaca Lab Limited",
    icon: pinaca,
    iconBg: "#383E56",
    date: "Jan 2022 - March 2022",
    type: "internship",
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
    type: "full-time",
    points: [
      "Engineered automated data pipelines processing 50K+ records daily using Python and REST APIs, reducing manual processing by 30%.",
      "Built CI/CD infrastructure with Jenkins and monitoring dashboards, achieving 99.5% system uptime across production environments.",
      "Designed REST/SOAP API integrations between ServiceNow, Jira, and enterprise systems, optimizing data flow by 40%.",
      "Collaborated with cross-functional teams following Agile methodologies to deliver scalable backend services on schedule."
    ],
  },
];

// `type` drives which emoji AchievementCard shows for each entry.
const testimonials = [
  {
    testimonial:
      "Conducted a Python workshop for students who had completed Schooling with over 60 participants",
    name: "LICET",
    type: "workshop",
  },
  {
    testimonial:
      "Winner in the LICET PATTARAI hackathon for building DAB Fitness, an app connecting users with fitness trainers to maintain routines during the COVID pandemic.",
    name: "LICET Pattarai",
    type: "hackathon",
  },
  {
    testimonial:
      "Participated in Smart India Hackathon. Presented on an idea about enabling drones to deliver and monitor situation during floods ",
    name: "Delhi",
    type: "competition",
  },
];

const projects = [
  {
    name: "Boston 311 AI System",
    description:
      "A comprehensive MLOps platform for Boston's 311 service requests featuring automated data ingestion, XGBoost-powered ML prioritization models, a RAG-based chatbot with Gemini integration, and real-time analytics dashboards built with Next.js.",
    tags: [
      { name: "MLOps", color: "blue-text-gradient" },
      { name: "XGBoost", color: "green-text-gradient" },
      { name: "NextJS", color: "pink-text-gradient" },
    ],
    image: boston311,
    source_code_link: "https://github.com/Eroniction14/boston-311-ai-system",
  },
  {
    name: "Crossword Solver",
    description:
      "An AI-powered crossword solver combining FAISS vector retrieval over 1M+ clue-answer pairs with parallel LLM reasoning and loopy belief propagation. Features a React frontend with Flask SSE streaming for real-time solve visualization.",
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "FAISS", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: crossword,
    source_code_link: "https://github.com/Eroniction14/Crossword_Solver",
  },
  {
    name: "Distributed Job Scheduler",
    description:
      "A fault-tolerant distributed job scheduler built in Go with Kafka-based job distribution and real-time React dashboard. Implements consumer group load balancing ensuring zero duplicate execution. Deployed with Docker Compose, Kubernetes, and Terraform.",
    tags: [
      { name: "Go", color: "blue-text-gradient" },
      { name: "Kubernetes", color: "green-text-gradient" },
      { name: "Kafka", color: "pink-text-gradient" },
    ],
    image: job,
    source_code_link: "https://github.com/Eroniction14/distributed-job-scheduler-go",
  },
];

export { services, technologies, experiences, testimonials, projects };