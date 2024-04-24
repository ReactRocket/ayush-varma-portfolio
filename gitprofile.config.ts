// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ReactRocket', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/ReactRocket/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ReactRocket/G-Campus', 'ReactRocket/Ring-Builder-Stage'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'G-Campus College',
          description:
            'Welcome to G-Campus! Our College Management System is designed to streamline student management with powerful functionalities. Aspiring business and IT leaders thrive in our vibrant environment, perfect for BCA, BCom, and BBA degrees. Join us at G-Campus for a dynamic learning journey!',
          imageUrl:
            'https://img.freepik.com/free-photo/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky_181624-9096.jpg?t=st=1713985711~exp=1713989311~hmac=9d4abda13619ed92d99ae9f4272a1b3a3d519a0e0b3d40f858f066f30ea1c14a&w=900',
          link: 'https://g-campus-ask.web.app/',
        },
        {
          title: 'Ring Builder Stage',
          description:
            'Ring Builder Stage is a cutting-edge web application designed to revolutionize the way users interact with diamonds and jewelry online. The platform seamlessly integrates advanced virtual filtering capabilities with a sophisticated e-commerce system, offering users a unique and immersive shopping experience.',
          imageUrl:
            'https://img.freepik.com/premium-photo/futuristic-fusion-illuminating-brilliance-techno-ring-human-hand_1015980-29928.jpg?w=740',
          link: 'https://ring-builder-stage.web.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ayush Varma',
    description: `Junior Frontend Developer at The Diamond Port | Building Responsive UIs with React,Vue & JavaScript`,
    imageURL: '',
  },
  social: {
    linkedin: 'dev-ayush-varma',
    twitter: 'VarmaAyush1',
    mastodon: 'ReactRocket@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'ReactRocket',
    dev: 'ReactRocket',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ayush-varma.web.app',
    phone: '',
    email: 'vayush798@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1YM-7yaB-mjDdKuw-eW36mL5n28uTIAmi/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Vue.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'The Diamond Port',
      position: 'Frontend Web Developer',
      from: 'April 2024',
      to: 'Present',
      companyLink: 'https://thediamondport.com/',
    },
    {
      company: 'The Diamond Port',
      position: 'React.js Intern',
      from: 'Oct 2023',
      to: 'Mar 2024',
      companyLink: 'https://thediamondport.com/',
    },
  ],
  certifications: [
    {
      name: 'Full Stack Web Developer',
      body: 'Passionate about creating dynamic and user-friendly web applications using cutting-edge technologies.',
      year: 'January 2024',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Parul University',
      degree: 'Master of Computer Applications',
      from: '2024',
      to: '2026',
    },
    {
      institution: 'Udhna Citizen College',
      degree: `'Bachelor's in Computer Applications`,
      from: '2021',
      to: '2024',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/ReactRocket/ayush-varma-portfolio"
      target="_blank"
      rel="noreferrer"
    >Passion</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
