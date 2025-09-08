
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  python,
  django,
  angular,
  postgres
} from '../assets';




// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

import project1 from "../assets/project1.png";



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
];

const services = [
  {
    title: "Fullstack Development",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Testing",
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
{
    name: "postgres",
    icon: postgres,
  },
  
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "python",
    icon: python,
  },
  {
    name:"django",
    icon:django
  },
   {
    name:"angular",
    icon:angular
  }
];

const experiences = [
{
  title: "Associate Consultant",
  company_name: "KPMG India",
  icon: tekisky,
  iconBg: "#383E56",
  date: "Jan 2025 - Apr 2025",
  points: [
    "Contributed to the AI Marketplace project using React, HTML, CSS, JavaScript, Django, and Python.",
    "Designed and developed the dashboard for seamless user interaction.",
    "Implemented secure user authentication by building APIs for signup and login.",
    "Collaborated with cross-functional teams to deliver high-quality solutions."
  ],
},
{
  title: "Full Stack Developer",
  company_name: "Xotiv Technologies",
  icon: tekisky,
  iconBg: "#383E56",
  date: "Oct 2023 - Feb 2024",
  points: [
    "Developed APIs with Python, Django REST Framework, and Node.js to assign areas, facilities, and organizations to workers.",
    "Implemented role-based authentication ensuring secure access.",
    "Created dynamic dashboards using Angular, HTML, and CSS.",
    "Optimized server architecture and data handling with MySQL for efficient performance."
  ],
},
{
  title: "Full Stack Developer",
  company_name: "Edge Corporation",
  icon: tekisky,
  iconBg: "#383E56",
  date: "Sep 2022 - May 2023",
  points: [
    "Built backend services with Node.js, Express, and MongoDB using RESTful web APIs.",
    "Developed dynamic product and service pages with React, Redux, TypeScript, HTML5, and CSS3.",
    "Created APIs for product management and filtering by category, price, and keywords.",
    "Implemented unit testing with Jest to ensure reliability and maintainability of code."
  ],
},
{
  title: "Associate Software Engineer",
  company_name: "Mindfire Solutions",
  icon: tekisky,
  iconBg: "#383E56",
  date: "Aug 2021 - Jul 2022",
  points: [
    "Developed vaccination assignment system using Python, Django, and PostgreSQL.",
    "Implemented user authentication and APIs for child registration and vaccination management.",
    "Built an admin dashboard with React, HTML, CSS, and JavaScript to streamline data handling.",
    "Collaborated with teams to improve user experience and system scalability."
  ],
},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Fashion Mart",
    description:
      "Fashion Mart is your one-stop online store for premium watches, offering a seamless shopping experience with advanced filtering, secure payments, and a modern responsive",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project1,
    source_code_link: "https://github.com/amrit446/FashionMart",
  },
  {
    name: "Chat application",
    description:
      "Fashion Mart is your one-stop online store for premium watches, offering a seamless shopping experience with advanced filtering, secure payments, and a modern responsive",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/amrit446/chatapp",
  },
 
];

export { services, technologies, experiences, testimonials, projects, project1 };
