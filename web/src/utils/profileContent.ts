import { IMAGES } from '@/assets/images';

export const profileContent = {
  headerTitle: 'Developer',
  authorName: 'Vignesh Acharya',
  authorDesignation: 'Software Engineer',
  profileSummary:
    'React.js Software Engineer with 3+ years of experience in JavaScript, TypeScript, and Agile methodologies. ',
  contactDetails: [
    {
      id: 1,
      title: 'Email',
      contactUrl: 'mailto:vigneshh1958@gmail.com',
      contactUrlDisplayText: 'Open Email',
      icon: IMAGES.googleIcon,
      additionalInfo: 'vigneshh1958@gmail.com',
    },
    {
      id: 2,
      title: 'LinkedIn',
      contactUrl: 'https://www.linkedin.com/in/vignesh-acharya-a41952190/',
      contactUrlDisplayText: 'Open LinkedIn',
      icon: IMAGES.linkedInIcon,
      additionalInfo: '',
    },
    {
      id: 3,
      title: 'Git Hub',
      contactUrl: 'https://github.com/Vignesh7050',
      contactUrlDisplayText: 'Open Github',
      icon: IMAGES.gitHubIcon,
      icon2: IMAGES.gitHubInvertedIcon,
      additionalInfo: '',
    },
    {
      id: 4,
      title: 'LeetCode',
      contactUrl: 'https://leetcode.com/u/vigneshh1958/',
      contactUrlDisplayText: 'Open leetCode',
      icon: IMAGES.leetCodeIcon,
      isHidden: true,
      additionalInfo: '',
    },
  ],
};

export const skillsList = [
  {
    src: IMAGES.javaScriptIcon,
    titleContent: 'JavaScript',
    alt: 'JavaScript',
  },
  {
    src: IMAGES.typeScriptIcon,
    titleContent: 'TypeScript',
    alt: 'TypeScript',
  },
  {
    src: IMAGES.reactJsIcon,
    titleContent: 'React Js',
    alt: 'ReactJs',
  },
  {
    src: IMAGES.nextJsIcon,
    titleContent: 'Next Js',
    alt: 'NextJs',
  },
  {
    src: IMAGES.reduxIcon,
    titleContent: 'Redux',
    alt: 'Redux',
  },
  {
    src: IMAGES.nodeJsIcon,
    titleContent: 'Node Js',
    alt: 'Nodejs',
  },
  {
    src: IMAGES.gitIcon,
    titleContent: 'Git',
    alt: 'Git',
  },
  {
    src: IMAGES.bitBucketIcon,
    titleContent: 'Bitbucket',
    alt: 'Bitbucket',
  },
  {
    src: IMAGES.htmlIcon,
    titleContent: 'HTML5',
    alt: 'Html',
  },
  {
    src: IMAGES.cssIcon,
    titleContent: 'CSS3',
    alt: 'Css',
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
        text: 'Developing and maintaining scalable web applications using React.js and Node.js',
      },
      {
        id: 2,
        text: 'Worked on Unit Testing of React.js components using Jest and React-testing-library ',
      },
      {
        id: 3,
        text: 'Proactively suggested and implemented code quality improvements, including refactoring components, creating reusable components, using proper types in typescript to avoid bugs and enforcing coding standards.',
      },
      {
        id: 4,
        text: 'Collaborated closely with cross-functional teams in an Agile environment to deliver high-quality software on time.',
      },
      {
        id: 5,
        text: 'Utilized custom React hooks for clean code architecture, ensuring separation of concerns and adhering to DRY principles.',
      },
      {
        id: 6,
        text: ' Implemented modern state management solutions like Redux for seamless front-end application architecture.',
      },
    ],
  },
];

export const educationDetails = [
  {
    id: 1,
    instituteName:
      'NMAM Institute of Technology, Nitte, Karkala Taluk, Udupi - 574116, Karnataka, India',
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
