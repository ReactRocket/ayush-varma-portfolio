import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ayush",
  lastName: "Varma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Surat/Gujarat", // IANA time zone identifier for Surat, Gujarat
  languages: ["English", "Hindi", "Gujarati"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about web development, animations, and the integration of AI in modern frontend applications.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ReactRocket",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dev-ayush-varma",
  },
  {
    name: "X",
    icon: "x",
    link: "", // No X profile provided
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:vayush798@gmail.com",
  },
  // {
  //   name: "Portfolio",
  //   icon: "website",
  //   link: "https://ayush-varma.vercel.app",
  // },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend Web Developer</>,
  subline: (
    <>
      I'm Ayush, a Frontend Web Developer with nearly 2 years of experience
      building responsive, animated web applications using <InlineCode>React.js, Next.js,
      and Shopify Liquid</InlineCode>. Proficient in <InlineCode>GSAP and AOS animations,
      Tailwind CSS, and Bootstrap</InlineCode>. I specialize in creating advanced websites
      with animations and AI integrations to elevate user experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "tel:+918732953410", // Updated with your phone number
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Ayush Varma, a dedicated Frontend Web Developer based in Surat, Gujarat, India.
        Currently, I work at The Diamond Port, crafting responsive and animated web applications
        using React.js, Next.js, and Shopify Liquid. I thrive on blending creativity with
        technology to deliver seamless user experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "The Diamond Port",
        timeframe: "April 2024 - Present",
        role: "Frontend Web Developer",
        achievements: [
          <>
            Built The Diamond Port (v2) using React.js, Tailwind CSS, and GSAP for animated
            jewelry listings and dashboards, improving user engagement.
          </>,
          <>
            Developed TDP Ring Builder (Shopify) with React.js and Shopify Liquid, enabling
            seamless ring customization for customers.
          </>,
          <>
            Enhanced Velar Diamonds with Shopify Liquid and GSAP for smooth animated transitions
            in a jewelry store interface.
          </>,
          <>
            Created Premexa, an e-commerce site for tea powder, using Next.js, Tailwind CSS, and AOS.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/The Diamond Port.png",
            alt: "The Diamond Port Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "October 2023 - March 2024",
        role: "Junior Web Developer",
        achievements: [
          <>
            Developed TDP Ring Builder (WordPress) with React.js for a ring customization tool.
          </>,
          <>
            Worked on World Wide Stock Lot, a custom e-commerce platform using WordPress.
          </>,
          <>
            Built Vaidehi Rayon, a textile catalog site with product listings using WordPress.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Parul University, Vadodara",
        description: <>Pursuing Master of Computer Applications (AI/ML), Jun 2024 - Present.</>,
      },
      {
        name: "Veer Narmad South Gujarat University, Surat",
        description: <>Completed Bachelor of Computer Applications (Web Development), Jun 2021 - Apr 2024. Top 10 in Class.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "React.js & Next.js",
        description: (
          <>Expert in building dynamic, responsive web applications with React.js and Next.js.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/React & Next.jpg",
            alt: "React.js & Next.js Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Shopify & Wordpress",
        description: (
          <>Skilled in developing and customizing e-commerce solutions using Shopify and Wordpress.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/Shopify & Wordpress.jpg",
            alt: "Shopify And Wordpress Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "GSAP & AOS Animations",
        description: (
          <>Proficient in creating smooth, engaging animations with GSAP and AOS.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/GSAP & AOS Animations.png",
            alt: "Animations Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tailwind CSS & Bootstrap",
        description: (
          <>Experienced in rapid, consistent styling with Tailwind CSS and Bootstrap.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/Tailwind CSS & Bootstrap.jpg",
            alt: "CSS Framework Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about web development and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Project",
  title: "My Projects",
  description: `A project collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/1.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://thediamondport.com"
    },
    {
      src: "/images/gallery/2.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://ringsofaustralia.com.au"
    },
    // {
    //   src: "/images/gallery/3.png",
    //   alt: "image",
    //   orientation: "horizontal",
    //   href:"https://makandcojewellers.myshopify.com"
    // },
    {
      src: "/images/gallery/4.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://stagev2.thediamondport.com/register"
    },
    {
      src: "/images/gallery/5.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://www.preciouscarbon.com"
    },
    {
      src: "/images/gallery/6.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://premexa.in"
    },
    {
      src: "/images/gallery/7.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://www.moimoi.com.au/colour-lab-grown-diamonds"
    },
    {
      src: "/images/gallery/8.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://worldwidestocklot.com"
    },
    {
      src: "/images/gallery/9.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://vaidehirayon.com"
    },
    {
      src: "/images/gallery/10.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://apps.shopify.com/tdp-ring-builder"
    },
    {
      src: "/images/gallery/11.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://wordpress.org/plugins/tdp-ring-builder"
    },
    {
      src: "/images/gallery/12.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://g-campus-ask.web.app"
    },
    {
      src: "/images/gallery/13.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://apex-college-ask.web.app"
    },
    {
      src: "/images/gallery/14.png",
      alt: "image",
      orientation: "horizontal",
      href:"https://velardiamonds.com"
    },

  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
