import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Christina",
  lastName: "Simon",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Digital Marketing Manager",
  avatar: "/images/avatar.jpg",
  location: "Asia/kerala", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts

  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/christina-simon-17909a1b9",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:christy.simon@hotmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Digital Marketing Manager</>,
  subline: (
    <>
      I'm Christina, a digital marketing manager at{" "}
      <InlineCode>Top Level Builders and Developers</InlineCode>, where I
      Develop and implement various strategies by providing creative solutions
      to improve businesses.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        christina is a Jakarta-based design engineer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        Her work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Brackenberry",
        timeframe: "2024 - Present",
        role: "Digital Marketing Consultant",
        achievements: [
          <>
            Overall management of Digital Media Marketing. End-to-end analysis,
            delivery and performance reporting of all digital elements including
            creatively led digital campaigns.
          </>,
          <> Creation of innovative strategies and posts.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Top Level Builders and Developers",
        timeframe: "2023 - 2024",
        role: "Digital Marketing Manager",
        achievements: [
          <>
            Measure and report the performance of all digital marketing
            campaigns and assess against goals (ROI and KPIs).
          </>,
          <>
            Develop and implement various strategies by providing creative
            solutions to improve businesses.
          </>,
        ],
        images: [],
      },
      {
        company: "Bictree",
        timeframe: "2022 - 2023",
        role: "Digital Marketing Executive and Content Creator",
        achievements: [
          <>
            – Manage websites and social media, as well as SEO content for
            branding purposes.
          </>,
          <>
            Prepare posts about the latest industry-related topics, produce
            marketing copy for advertising products, and other content for
            promotion and business.
          </>,
        ],
        images: [],
      },
      {
        company: "Homeskul Innolearn Pvt.Ltd",
        timeframe: "2021 - 2022",
        role: "Content Editor",
        achievements: [
          <>Created content for the company’s social media platforms.</>,
          <>
            Worked collaboratively with the operations team in the preparation
            of sophisticated internal documents.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Jain University",
        description: <>MBA(Digital Marketing and E-commerce).</>,
      },
      {
        name: "IIDM",
        description: <>Digital Marketing Certification.</>,
      },
      {
        name: "BA (English Language and Literature)",
        description: <>MG University.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Hubspot,SemRush,Mailchimp",
        description: <></>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Google Analytics,Google Ads",
        description: <></>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: " Photoshop, Canva",
        description: <></>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "HTML ,WordPress",
        description: <>Basic knowledge of HTML5 and Wordpress</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
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

export { person, social, home, about, blog, work, gallery };
