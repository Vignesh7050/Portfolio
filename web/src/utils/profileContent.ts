import { IMAGES } from "@/assets/images";

export const profileContent = {
  headerTitle: "Developer",
  authorName: "Vignesh Acharya",
  authorDesignation: "Software Engineer",
  profileSummary:
    "Results-driven React.js Software Engineer with 3+ years of experience in JavaScript, TypeScript, React Js. Skilled in Agile methodologies, including sprint planning, backlog grooming, and fostering teamwork.",
  technicalSkills: [
    {
      skillHeaderText: "Front End",
      skills: [
        { title: "JavaScript" },
        { title: "TypeScript" },
        { title: "React Js" },
        { title: "Next Js" },
        { title: "Custom hook design pattern" },
        { title: "Redux" },
        { title: "Context API" },
        { title: "Html" },
        { title: "Css" },
        { title: "Scss" },
      ],
    },
    {
      skillHeaderText: "Version Control",
      skills: [
        { title: "Git" },
        { title: "Azure repos" },
        { title: "Bitbucket" },
      ],
    },
  ],
  contactDetails: [
    {
      id: 1,
      title: "Email",
      contactUrl: "mailto:vigneshh1958@gmail.com",
      icon: IMAGES.googleIcon,
    },
    {
      id: 2,
      title: "LinkedIn",
      contactUrl: "https://www.linkedin.com/in/vignesh-acharya-a41952190/",
      icon: IMAGES.linkedInIcon,
    },
    {
      id: 3,
      title: "Git Hub",
      contactUrl: "https://github.com/Vignesh7050",
      icon: IMAGES.gitHubIcon,
      icon2: IMAGES.gitHubInvertedIcon,
    },
    {
      id: 4,
      title: "LeetCode",
      contactUrl: "https://leetcode.com/u/vigneshh1958/",
      icon: IMAGES.leetCodeIcon,
    },
  ],
};
