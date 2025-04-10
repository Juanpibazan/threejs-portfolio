import {
    mobile,
    backend,
    creator,
    web,
    webIcon,
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
    sql,
    pythonIcon,
    meta,
    starbucks,
    tesla,
    bcpLogo,
    gojaLogo,
    gojaLogo2,
    jtiLogo,
    advancedLogo,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    nikeWebsite,
    garageSaleClub,
    jobsBank,
    criptopass
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
  ];
  
  const services = [
    {
      title: "Business Intelligence Analyst",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
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
      name: "Python",
      icon: pythonIcon,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Variable Compensation Analyst",
      company_name: "Banco de Crédito de Bolivia",
      icon: bcpLogo,
      iconBg: "#383E56",
      date: "October 2017 - September 2019",
      points: [
        "Create and update every variable compensation model for different positions in many areas inside the Credicorp Financial Group.",
        "Handle and distribute reports from different employee data bases.",
        "Automate different processes related to handling data bases.",
        "Manage outsourced personnel, their payroll and all social charges involved.",
      ],
    },
    {
      title: "Scrum Master/Project Manager in Finance Department",
      company_name: "GOJA",
      icon: gojaLogo2,
      iconBg: "#E6DEDD",
      date: "July 2020 - November 2020",
      points: [
        "Coordinate all kinds of projects and tasks within Finance",
        "In charge of ensuring the application of the agile methodology of Scrum, Kanban and Traction.",
        "Prepare and carry out Scrum and Traction ceremonies (Sprint Planning, Sprint Review, Daily Meeting, L10 Meeting, etc.)",
        "Review each team member's time log for valuable information about hours and task categorization",
        "Assembly of reports based on the recording of hours of the team.",
        "Assembly of Dashboards in Power BI, using Power Query and DAX.",
        "utomate tasks through Power Automate and Power Apps.",
        "Work in English."
      ],
    },
    {
      title: "Business Intelligence Analyst",
      company_name: "Japan Tobacco International",
      icon: jtiLogo,
      //iconBg: "#383E56",
      iconBg:'#fff',
      date: "December 2020 - April 2022",
      points: [
        "Handle information in different SQL Server Databases, create Stored Procedures and Jobs.",
        "Analyze information using SQL.",
        "Create Power BI dashboards and Excel reports.",
        "Automate different tasks and processes through VBA, Power Automate and Power Apps.",
        "Create Machine Learning models, using Python.",
        "Collaborate on Data Migration (ETL Processes) from Local Data Warehouse to Global Data Warehouse, using SSIS."
      ],
    },
    {
      title: "Technical Consultant",
      company_name: "Advanced Utility Systems",
      icon: advancedLogo,
      iconBg: "#E6DEDD",
      date: "April 2022 - Present",
      points: [
        "Implement Customer Engagement web sites for different clients.",
        "Use HTML, CSS and JS to personalize the site.",
        "Execute SQL queries to test correct data flow, create databases, tables, views, etc.",
        "Execute REST API calls using Postman.",
        "Use PowerShell scripts to test connections between different servers.",
        "Work in English",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CriptoPass",
      description:
        `A real and live FullStack project that lets users transfer from StableCoin to a FIAT (USD,EUR) bank account in the US,EU. This project has a backend built with NodeJS, Express with JWT authentication and connects to a third-party API. There are different endpoints that save/read data to/from the MySQL server. Both (REST API and MySQL) are hosted on the same Hostinger VPS. I configured the linux VPS from 0, installing NodeJS, MySQL and pm2 so the NodeJS server can continue running even if I exit ssh session.
        The Frontend is built on React by using VITE, and TailWindCSS was used to style it.`,
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },,
      ],
      image: criptopass,
      source_code_link: "https://criptopass.onrender.com/login",
      github_page: 'https://github.com/Juanpibazan/criptopass-frontend'
    },
    {
      name: "Bank of Jobs",
      description:
        "A REST API built using NodeJS, Express with JWT authentication and different endpoints that save/read data to/from the MySQL server. Both (REST API and MySQL) are hosted on the same Hostinger VPS. I configured the linux VPS from 0, installing NodeJS, MySQL and pm2 so the NodeJS server can continue running even if I exit ssh session. Swagger Documentation is present for anyone who wants to consume the REST API.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Swagger",
          color: "green-text-gradient",
        },
      ],
      image: jobsBank,
      source_code_link: "http://uxminer.com:4000/docs/",
      github_page: 'https://github.com/Juanpibazan/banco_trabajos_backend'
    },
    {
      name: "Nike Shoes Website",
      description:
        "Web-based platform that serves a showroom of Nike shoes. It was a good way to practice React JS, Tailwind CSS and responsive design.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "web-development",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nikeWebsite,
      source_code_link: "https://nike-website-yxa1.onrender.com/",
      github_page: 'https://github.com/Juanpibazan/nike-website'
    },
    {
      name: "Garage Sale Club",
      description:
        "Web application that enables garage sales visitors to register to the club and become frequent clients or even sellers on future editions. Hopefully it will also become an e-commerce site.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "React Three Fiber/React Three Drei",
          color: "orange-text-gradient",
        }
      ],
      image: garageSaleClub,
      source_code_link: "https://garage-sale-lpz.onrender.com/",
      github_page: 'https://github.com/Juanpibazan/garage-sale-frontend'
    }
    /*,{
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
  ];
  
  export { services, technologies, experiences, testimonials, projects };