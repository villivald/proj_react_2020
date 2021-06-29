import {
  HomeIcon,
  BookmarkIcon,
  EnvelopeOpenIcon,
  LightningBoltIcon,
  IdCardIcon,
  DashboardIcon,
  BackpackIcon,
} from "@modulz/radix-icons";

const dropdownData = [
  {
    icon: <HomeIcon />,
    address: "/",
    text: "Home Page",
  },
  {
    icon: <IdCardIcon />,
    address: "about",
    text: "About",
  },
  {
    icon: <EnvelopeOpenIcon />,
    address: "/contact",
    text: "Contact",
  },
  {
    icon: <LightningBoltIcon />,
    address: "/allProjects",
    text: "Projects",
  },
  {
    icon: <DashboardIcon />,
    address: "/uses",
    text: "Uses",
  },
  {
    icon: <BackpackIcon />,
    address: "/courses",
    text: "Courses",
  },
  {
    icon: <BookmarkIcon />,
    address: "/books",
    text: "Books",
  },
];

export default dropdownData;
