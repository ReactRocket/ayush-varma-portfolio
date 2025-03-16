import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ayush",
  lastName: "Varma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // IANA time zone identifier
  languages: ["English", "Hindi", "Gujarati"], // Corrected spelling of "Gujarati"
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/devayushvarma",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://in.linkedin.com/in/devayushvarma",
  },
  {
    name: "X",
    icon: "x",
    link: "", // No information available
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dev.ayushvarma@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer and builder</>,
  subline: (
    <>
      I'm Ayush, a full stack web developer at <InlineCode>The Diamond Port</InlineCode>, where I craft
      intuitive user experiences. After hours, I build my own projects.
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
    link: "https://cal.com", // Placeholder link
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Ayush Varma, a passionate full stack web developer from Surat, India. Currently, I work at The
        Diamond Port, building responsive UIs with React, Vue, and JavaScript. I enjoy transforming
        complex challenges into simple, elegant design solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "The Diamond Port",
        timeframe: "Present",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Developed and maintained responsive web applications using React and Vue, enhancing user
            engagement by 15%.
          </>,
          <>
            Collaborated with design teams to implement intuitive UI components, reducing user
            onboarding time by 20%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "The Diamond Port Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "G Campus",
        timeframe: "Previous",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Led the development of a college management system, streamlining administrative tasks
            and improving user accessibility.
          </>,
          <>
            Integrated third-party APIs to enhance system functionality, resulting in a 25% increase
            in user satisfaction.
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
        name: "Veer Narmad South Gujarat University (VNSGU)",
        description: <>Completed Integrated BCA in Web Development.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React.js",
        description: <>Proficient in building dynamic web applications with React.js.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "React.js Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Vue.js",
        description: <>Experienced in developing interactive interfaces using Vue.js.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Vue.js Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tailwind CSS",
        description: <>Skilled in utilizing Tailwind CSS for efficient and consistent styling.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Tailwind CSS Project",
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};
 


const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
