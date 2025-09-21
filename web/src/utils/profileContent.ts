import { IMAGES } from '@/assets/images';

export const profileContent = {
  headerTitle: 'Developer',
  authorName: 'Vignesh Acharya',
  authorDesignation: 'Full Stack Web Developer',
  profileSummary:
    'Full-stack developer experienced in React.js, FastAPI/Node.js, and AWS, building scalable web applications and browser-based large file upload solutions. Skilled in unit-tested, reusable React architectures, serverless deployments, and delivering end-to-end solutions in Agile teams.',
  contactDetails: [
    {
      id: 1,
      title: 'Email',
      contactUrl: 'mailto:vigneshh1958@gmail.com',
      contactUrlDisplayText: 'Email',
      icon: IMAGES.googleIcon,
      additionalInfo: 'vigneshh1958@gmail.com',
    },
    {
      id: 2,
      title: 'LinkedIn',
      contactUrl: 'https://www.linkedin.com/in/vignesh-acharya-a41952190/',
      contactUrlDisplayText: 'LinkedIn',
      icon: IMAGES.linkedInIcon,
      additionalInfo: '',
    },
    {
      id: 3,
      title: 'Git Hub',
      contactUrl: 'https://github.com/Vignesh7050',
      contactUrlDisplayText: 'Github',
      icon: IMAGES.gitHubIcon,
      icon2: IMAGES.gitHubInvertedIcon,
      additionalInfo: '',
    },
    {
      id: 4,
      title: 'LeetCode',
      contactUrl: 'https://leetcode.com/u/vigneshh1958/',
      contactUrlDisplayText: 'LeetCode',
      icon: IMAGES.leetCodeIcon,
      isHidden: true,
      additionalInfo: '',
    },
  ],
};

export const skillsList = [
  // Languages
  {
    src: IMAGES.javaScriptIcon,
    titleContent: 'JavaScript',
    alt: 'JavaScript',
    group: 'Languages',
  },
  {
    src: IMAGES.typeScriptIcon,
    titleContent: 'TypeScript',
    alt: 'TypeScript',
    group: 'Languages',
  },
  {
    src: IMAGES.htmlIcon,
    titleContent: 'HTML5',
    alt: 'HTML5',
    group: 'Languages',
  },
  {
    src: IMAGES.cssIcon,
    titleContent: 'CSS3',
    alt: 'CSS3',
    group: 'Languages',
  },

  // Frontend
  {
    src: IMAGES.reactJsIcon,
    titleContent: 'React.js',
    alt: 'ReactJs',
    group: 'Frontend',
  },
  {
    src: IMAGES.nextJsIcon,
    titleContent: 'Next.js',
    alt: 'NextJs',
    group: 'Frontend',
  },
  {
    src: IMAGES.reduxIcon,
    titleContent: 'Redux Toolkit',
    alt: 'Redux',
    group: 'Frontend',
  },

  // Backend
  {
    src: IMAGES.nodeJsIcon,
    titleContent: 'Node.js',
    alt: 'NodeJs',
    group: 'Backend',
  },
];

export const workExperience = [
  {
    id: 1,
    companyName: 'SpurTree Technologies Pvt. Ltd.',
    joiningDate: 'August 2021',
    lastWorkingDate: '',
    experienceDetails: [
      {
        id: 1,
        text: 'Engineered a browser-based S3 multipart upload solution using React.js + FastAPI, handling 2–5 GB files in bulk (100GB+ total) with direct-to-S3 transfers and dynamic chunking, boosting speed and offloading servers.',
      },
      {
        id: 2,
        text: 'Built a reliable upload experience with live progress tracking and safeguards against browser refresh/navigation interruptions.',
      },
      {
        id: 3,
        text: 'Developed multiple React.js admin dashboards with unit test coverage 80%+ using Jest and React Testing Library.',
      },
      {
        id: 4,
        text: 'Established a standardized React architecture (HLD/LLD) with Husky, ESLint, Zustand, custom hooks, and reusable component patterns.',
      },
      {
        id: 5,
        text: 'Optimized S3 data storage with partitioning, reducing Athena scan size and improving query performance for analytics workloads.',
      },
      {
        id: 6,
        text: 'Delivered end-to-end full-stack solutions for client projects, covering React, FastAPI/Node.js, AWS services, and CI/CD automation with Jenkins and SAM templates.',
      },
      {
        id: 7,
        text: 'Collaborated in Agile methodology, leading sprint demos, refining requirements with clients, and ensuring timely delivery aligned with business needs.',
      },
    ],
  },
];

export const educationDetails = [
  {
    id: 1,
    instituteName:
      'NMAM Institute of Technology, Nitte, Karkala Taluk, Udupi - 574110, Karnataka, India',
    joiningDate: 'August 2017',
    endingDate: 'July 2021',
    course: 'Bachelor of Engineering in Computer Science',
    instituteUrl: 'https://nmamit.nitte.edu.in/',
  },
];

export const paintingsList = [
  {
    id: 1,
    imageUrl: IMAGES.hobbyImg1,
  },
  {
    id: 2,
    imageUrl: IMAGES.hobbyImg2,
  },
  {
    id: 3,
    imageUrl: IMAGES.hobbyImg3,
  },
  {
    id: 4,
    imageUrl: IMAGES.hobbyImg4,
  },
  {
    id: 5,
    imageUrl: IMAGES.hobbyImg5,
  },
  {
    id: 6,
    imageUrl: IMAGES.hobbyImg6,
  },
  {
    id: 7,
    imageUrl: IMAGES.hobbyImg7,
  },
  {
    id: 8,
    imageUrl: IMAGES.hobbyImg8,
  },
  {
    id: 9,
    imageUrl: IMAGES.hobbyImg9,
  },
  {
    id: 10,
    imageUrl: IMAGES.hobbyImg10,
  },
  {
    id: 11,
    imageUrl: IMAGES.hobbyImg11,
  },
  {
    id: 12,
    imageUrl: IMAGES.hobbyImg12,
  },
];

export const externalLinks = {
  resumeView:
    'https://docs.google.com/document/d/e/2PACX-1vS0_5EBgrLux9UTUA3emIHFpqm0ca7NgOoZgcQFU3YkhlwZBAPwlq-q45HVH1CKj0BlofJuWoRaVXPq/pub?embedded=true',
  resumeDownload:
    'https://docs.google.com/document/d/1wxBoX6d6g3iLGkSV22uQp7WNVhQ9TX-fM91xb3LlVqE/export?format=pdf',
  roadmapView: 'https://roadmap.sh/r/embed?id=66fe72ce366148ee282cd00d',
};
