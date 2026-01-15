/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Avisha Lad | Product-Driven Full-Stack Software Engineer",
  description:
    "Product-driven full-stack engineer turning data into revenue and platforms into growth.",
  og: {
    title: "Avisha Lad | Product-Driven Full-Stack Software Engineer",
    type: "website",
    url: "https://www.avishalad.com/",
  },
};

//Home Page
const greeting = {
  title: "I'm Avisha Lad",
  logo_name: "AvishaLad",
  nickname: "",
  subTitle:
    "Product-driven full-stack engineer turning data into revenue and platforms into growth.",
  resumeLink: "https://www.avishalad.com",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/avishalad",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:avisha.lad@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Phone",
    link: "tel:+16146157559",
    fontAwesomeIcon: "fa-phone", // Reference https://fontawesome.com/icons/phone?style=solid
    fontAwesomePrefix: "fas",
    backgroundColor: "#34A853", // Reference https://simpleicons.org/?q=phone
  },
];

const skills = {
  data: [
    {
      title: "Product & Growth Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Build revenue-driven platforms, conversion funnels, and marketing automation.",
        "⚡ Partner with marketing and operations to ship experiments and iterate quickly.",
        "⚡ Use analytics to improve engagement, retention, and sales performance.",
      ],
      softwareSkills: [
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#E37400",
          },
        },
        {
          skillName: "DOMO",
          imageSrc: "domo.svg",
          style: {
            color: "#2D9CDB",
          },
        },
        {
          skillName: "SendGrid",
          fontAwesomeClassname: "simple-icons:sendgrid",
          style: {
            color: "#00A1E0",
          },
        },
        {
          skillName: "Twilio",
          fontAwesomeClassname: "simple-icons:twilio",
          style: {
            color: "#F22F46",
          },
        },
      ],
    },
    {
      title: "Full-Stack Application Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build scalable web platforms with Vue.js, Laravel, and Java/Spring Boot.",
        "⚡ Design and implement REST APIs, authentication, and admin portals.",
        "⚡ Deliver responsive UI with HTML, CSS, and Bootstrap.",
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "fab fa-java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#42B883",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
      ],
    },
    {
      title: "Data & Integrations",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Design PostgreSQL, MySQL, Oracle, and SQLite schemas and optimize queries.",
        "⚡ Integrate third-party services and internal systems via RESTful APIs.",
        "⚡ Build analytics pipelines for reporting and insights.",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "JSON",
          fontAwesomeClassname: "simple-icons:json",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Create conversion-focused UI/UX flows and design systems.",
        "⚡ Prototype in Figma and Adobe XD and translate designs to code.",
        "⚡ Collaborate on responsive layouts and accessibility.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Bowling Green State University",
      subtitle: "M.S. in Computer Science",
      logo_path: "bgsu-logo.jpg",
      alt_name: "BGSU",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Graduated with a 4.0 GPA in Computer Science.",
        "⚡ Specialized in Software Development.",
        "⚡ Served as Cultural Secretary and Treasurer for the Indian Student Association at BGSU.",
      ],
      website_link: "https://www.bgsu.edu/",
    },
    {
      title: "Rajiv Gandhi Technical University",
      subtitle: "B.E. in Electronics and Telecommunication",
      logo_path: "rgtu-logo.jpeg",
      alt_name: "RGTU",
      duration: "2011 - 2012",
      descriptions: [
        "⚡ Graduated with a 3.75 GPA in Electronics and Telecommunication.",
        "⚡ Degree earned with First Division Honors.",
      ],
      website_link: "https://www.rgpv.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AI & Cloud Learning (Amazon AWS)",
      subtitle:
        "Generative AI, LLMs, prompt engineering, and AWS AI services",
      logo_path: "cloud_infrastructure.svg",
      certificate_link: "",
      alt_name: "Amazon AWS",
      color_code: "#232F3E",
    },
  ],
};

const recommendations = {
  title: "Letters of Recommendation",
  items: [
    {
      id: "dr-decker",
      name: "Dr. Michael Decker, Bowling Green State University",
      file: "LOR_Dr.Decker_BGSU.pdf",
    },
    {
      id: "dr-green",
      name: "Dr. Robert Green, Bowling Green State University",
      file: "LOR_Dr.Green_BGSU.pdf",
    },
    {
      id: "dr-roy",
      name: "Dr. Shankar Das Roy, Bowling Green State University",
      file: "LOR_Dr.Roy_BGSU.pdf",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Product & Full-Stack Engineering Leadership",
  description:
    "Product-focused engineering leader with a track record of guiding end-to-end delivery of revenue platforms, marketing systems, and enterprise-grade services. Known for translating business objectives into scalable architectures, orchestrating cross-functional execution, and delivering measurable growth in performance, conversion, and operational efficiency.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "1 Natural Way",
          company_url: "https://www.1naturalway.com",
          logo_path: "1-naturalway-logo.jpeg",
          duration: "Feb 2021 - Present",
          location: "Maumee, Ohio, United States",
          summary:
            "Own the end-to-end design, development, and optimization of a revenue-driven e-commerce and marketing platform supporting national health and wellness brands.",
          highlights: [
            "Designed and launched a high-performance web platform, increasing engagement by 35% and reducing load time by 20%.",
            "Created conversion-focused UI/UX flows in Figma and Adobe XD to improve checkout completion and retention.",
            "Built data-driven marketing systems with Google Analytics and DOMO, driving 40% traffic growth and 25% conversion lift.",
            "Developed and optimized PostgreSQL databases and REST APIs for products, subscriptions, orders, and customer data.",
            "Automated email, SMS, and transactional messaging via SendGrid and Twilio, cutting manual operations by 50%.",
            "Delivered internal dashboards and analytics for real-time visibility into revenue, campaigns, and customer behavior.",
            "Led Agile delivery and full SDLC, collaborating with marketing, operations, and leadership on rapid iteration."
          ],
          techStack:
            "Vue.js, Laravel (PHP), PostgreSQL, REST APIs, Figma, Adobe XD, Google Analytics, DOMO, SendGrid, Twilio, Git, Agile",
          color: "#2F80ED",
        },
        {
          title: "Software Engineer",
          company: "Tata Consultancy Services (TCS)",
          company_url: "https://www.tcs.com",
          logo_path: "tcs-logo.png",
          duration: "Oct 2015 - Jul 2018",
          location: "Mumbai, Maharashtra, India",
          summary:
            "As a part of TCS, I worked on development projects for IDFC Bank, building and maintaining SFMS applications that power net banking and online transactions.",
          highlights: [
            "Developed Java-based SFMS systems supporting NEFT/RTGS and high-value payments.",
            "Maintained version control and application reliability for mission-critical banking workflows.",
            "Integrated IBM WebSphere MQ as middleware between SFMS and RBI systems."
            ,
            "Built a full-stack hospital website as part of on-the-job training with HTML, CSS, Bootstrap, JavaScript, and MySQL."
          ],
          techStack:
            "Java, IBM WebSphere MQ, SFMS, Git, HTML, CSS, Bootstrap, JavaScript, MySQL",
          color: "#0A66C2",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  subtitle: "Selected product and platform work",
  description:
    "A curated portfolio of full-stack software engineering initiatives, encompassing revenue-grade e-commerce platforms, data-intensive systems, and mission-critical enterprise banking solutions, delivered with a product-first mindset, rigorous architecture, and measurable business impact.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "contactMail.png",
    description: "",
    contactItems: [
      {
        label: "Email",
        value: "avisha.lad@gmail.com",
        href: "mailto:avisha.lad@gmail.com",
        icon: "fa-envelope",
        iconPrefix: "fas",
        backgroundColor: "#D14836",
      },
      {
        label: "Phone",
        value: "614-615-7559",
        href: "tel:+16146157559",
        icon: "fa-phone",
        iconPrefix: "fas",
        backgroundColor: "#34A853",
      },
      {
        label: "LinkedIn",
        value: "www.linkedin.com/in/avishalad",
        href: "https://www.linkedin.com/in/avishalad",
        icon: "fa-linkedin-in",
        iconPrefix: "fab",
        backgroundColor: "#0077B5",
      },
    ],
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "614-615-7559",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  recommendations,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
