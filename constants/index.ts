import {
  RxHome,
  RxPerson,
  RxDashboard,
  RxClipboard,
  RxLinkedinLogo,
  RxGithubLogo,
} from "react-icons/rx";
import { IoMdHome, IoMdPhonePortrait } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaCalendarAlt, FaGlobeEurope } from "react-icons/fa";

export const NavLinks = [
  {
    name: "/",
    text: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/about",
    text: "About",
    icon: RxPerson,
    link: "/about",
  },
  {
    name: "/projects",
    text: "Projects",
    icon: RxDashboard,
    link: "/projects",
  },
];

export const Socials = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/alexander-avercenko-6b5a53258/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://www.github.com/cion318",
  },
];

export const SkillData1 = [
  {
    name: "Html 5",
    image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    image: "/js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Tailwind Css",
    image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    image: "/redux.png",
    width: 80,
    height: 80,
  },
];

export const SkillData2 = [
  {
    name: "Next.js",
    image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Bootstrap",
    image: "/bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    name: "Photoshop",
    image: "/photoshop.png",
    width: 80,
    height: 80,
  },
  {
    name: "Matlab",
    image: "/matlab.png",
    width: 80,
    height: 80,
  },
];

export const EducationData = [
  {
    title: "Front-End Development Course",
    icon: FaCalendarAlt,
    date: "2023 - 2024",
    description:
      "Completed Codecademy course for Front-End Development. Gained experience in HTML, CSS, JavaScript, React, Redux, Web Design, Algorithms & Data Structures.",
  },
  {
    title: "Master of Science",
    icon: FaCalendarAlt,
    date: "2019 - 2022",
    description:
      "• Specialization: Mechatronics Robotics \n• Thesis: Robot System Localization using Particle Filter, Lidar, and ROS \n• Final Grade: 1.2",
  },
  {
    title: "Bachelor of Engineering",
    icon: FaCalendarAlt,
    date: "2014 - 2019",
    description:
      "• Specialization: Energy and Drive Technology \n• Thesis: Identification of Objects and Patterns using Advanced Image Recognition Methods \n• Final Grade: 2.2",
  },
];

export const ExperienceData = [
  {
    title: "Collaboration in Family Business",
    icon: FaCalendarAlt,
    date: "2022 - present",
    description:
      "• Delivery and receipt of construction machinery \n• Carrying out maintenance and repair work",
  },
  {
    title: "Part-time Job",
    icon: FaCalendarAlt,
    date: "2019 - 2022",
    description:
      "Employment at Wohnmobile United \n• Vehicle Care and Preparation \n• Conducting Maintenance Tasks",
  },
  {
    title: "Industrial Placement Semester",
    icon: FaCalendarAlt,
    date: "2018 - 2019",
    description:
      "Employment at PIV Drives GmbH \n• Assembly, Inspection, and Maintenance of Machinery and Equipment \n• Quality Assurance/Management \n• Technical Consultation and Sales",
  },
];

export const ProjectData = [
  {
    title: "TrackTide",
    text: "Website to create and save custom Spotify playlists through api requests to your account.",
    src: "/TrackTide.png",
    link: "https://cion318.github.io/tracktide/",
  },
  {
    title: "Daily Cooking",
    text: "Android application to create and store recipes with a multitude of information. Additonaly helps with the decision of what to cook based on food type.",
    src: "/DailyCooking.png",
    link: "https://github.com/Cion318/dailycooking",
  },
  {
    title: "Ark Tracker",
    text: "Android application to keep track of daily and weekly tasks for the roster as well as for each character in the game Lost Ark.",
    src: "/ArkTracker.png",
    link: "https://github.com/Cion318/ArkTracker",
  },
];

export const ContactData = [
  {
    name: "Phone",
    icon: IoMdPhonePortrait,
    value: "01577/2945326",
  },
  {
    name: "Email",
    icon: IoMail,
    value: "alexander.avercenko@gmail.com",
  },
];
