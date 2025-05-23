import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiJupyter,
  SiFramer,
  SiFlutter,
  SiMysql,
  SiTypescript,
  SiAxios,
  SiVite,
  SiScikitlearn,
  SiTensorflow,
  SiStreamlit,
  SiTableau,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { DiHtml5, DiJava, DiPython, DiBootstrap } from "react-icons/di";

const AVATAR_COLORS = [
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-yellow-500",
  "bg-lime-500",
  "bg-green-500",
  "bg-emerald-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-sky-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-violet-500",
  "bg-purple-500",
  "bg-fuchsia-500",
  "bg-pink-500",
  "bg-rose-500",
];

const CONTACTS = [
  {
    name: "Github",
    icon: "bx bxl-github",
    url: "https://github.com/kemalcrisannaufal",
  },
  {
    name: "LinkedIn",
    icon: "bx bxl-linkedin",
    url: "https://www.linkedin.com/in/kemalcrisannaufal/",
  },
  {
    name: "Email",
    icon: "bx bxl-gmail",
    url: "mailto:kemalcrisannnaufal.gmail.com",
  },
  {
    name: "Whatsapp",
    icon: "bx bxl-whatsapp",
    url: "https://wa.me/6281221891720",
  },
  {
    name: "Instagram",
    icon: "bx bxl-instagram",
    url: "https://www.instagram.com/kemal_crisannaufal/",
  },
  {
    name: "Twitter",
    icon: "bx bxl-twitter",
    url: "https://x.com/HaItsMe_Al",
  },
];

const PAGE_DESCRIPTION = {
  HOME: "Welcome to Kemal Crisannaufal's portfolio — showcasing skills in software engineering, machine learning, and web development. Explore projects, blogs, experience, and more.",
  ABOUT:
    "Learn more about Kemal Crisannaufal, an informatics graduate passionate about software engineering and data science, with a proven track record of academic and professional achievements.",
  PROJECTS:
    "Explore a curated collection of projects demonstrating expertise in web development, machine learning, and problem solving using modern technologies.",
  PROJECT_DETAIL:
    "Dive deep into the details of the project — features, technologies used, challenges solved, and key outcomes.",
  BLOG: "Read insightful articles and tutorials on software development, programming tips, and industry trends by Kemal Crisannaufal.",
  CONTACT:
    "Get in touch with Kemal Crisannaufal for collaboration, inquiries, or opportunities in software development and data science.",
};

const TECH_STACK = [
  {
    name: "HTML",
    icon: DiHtml5,
    className: "text-orange-500 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "CSS",
    icon: SiCss3,
    className: "text-blue-500 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "text-yellow-500 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    className: "text-blue-500 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Axios",
    icon: SiAxios,
    className: "text-black text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    className: "text-orange-400 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    className: "text-red-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "PHP",
    icon: SiPhp,
    className: "text-blue-700 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "React",
    icon: SiReact,
    className: "text-cyan-400 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    className: "text-teal-400 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    className: "text-black text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Java",
    icon: DiJava,
    className: "text-red-800 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Python",
    icon: DiPython,
    className: "text-blue-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Bootstrap",
    icon: DiBootstrap,
    className: "text-info text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Jupyter Notebook",
    icon: SiJupyter,
    className: "text-orange-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Framer",
    icon: SiFramer,
    className: "text-red-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    className: "text-blue-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    className: "text-yellow-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Vite",
    icon: SiVite,
    className: "text-green-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Scikit-learn",
    icon: SiScikitlearn,
    className: "text-red-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Tensorflow",
    icon: SiTensorflow,
    className: "text-red-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Streamlit",
    icon: SiStreamlit,
    className: "text-blue-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Tableau",
    icon: SiTableau,
    className: "text-blue-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    className: "text-green-600 text-md lg:text-2xl md:text-xl",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    className: "text-black text-md lg:text-2xl md:text-xl",
  },
];

export { AVATAR_COLORS, CONTACTS, PAGE_DESCRIPTION, TECH_STACK };
