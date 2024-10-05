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
      icon: IMAGES.googleIcon,
    },
    {
      id: 2,
      title: 'LinkedIn',
      contactUrl: 'https://www.linkedin.com/in/vignesh-acharya-a41952190/',
      icon: IMAGES.linkedInIcon,
    },
    {
      id: 3,
      title: 'Git Hub',
      contactUrl: 'https://github.com/Vignesh7050',
      icon: IMAGES.gitHubIcon,
      icon2: IMAGES.gitHubInvertedIcon,
    },
    {
      id: 4,
      title: 'LeetCode',
      contactUrl: 'https://leetcode.com/u/vigneshh1958/',
      icon: IMAGES.leetCodeIcon,
      isHidden: true,
    },
  ],
};

export const skillsList = [
  {
    src: IMAGES.javaScriptIcon,
    titleContent: 'JavaScript',
    alt: 'javascript',
  },
  {
    src: IMAGES.typeScriptIcon,
    titleContent: 'TypeScript',
    alt: 'typeScript',
  },
  {
    src: IMAGES.reactJsIcon,
    titleContent: 'React Js',
    alt: 'react',
  },
  {
    src: IMAGES.nextJsIcon,
    titleContent: 'Next Js',
    alt: 'next',
  },
  {
    src: IMAGES.reduxIcon,
    titleContent: 'Redux',
    alt: 'redux',
  },
  {
    src: IMAGES.nodeJsIcon,
    titleContent: 'Node Js',
    alt: 'nodejs',
  },
  {
    src: IMAGES.gitIcon,
    titleContent: 'Git',
    alt: 'git',
  },
  {
    src: IMAGES.bitBucketIcon,
    titleContent: 'Bitbucket',
    alt: 'bitbucket',
  },
  {
    src: IMAGES.htmlIcon,
    titleContent: 'HTML',
    alt: 'html',
  },
  {
    src: IMAGES.cssIcon,
    titleContent: 'CSS',
    alt: 'css',
  },
];
