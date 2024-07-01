import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

export const connectionLinks = [
  {
    name: "LinkedIn",
    link: "/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Twitter",
    link: "/",
    icon: <FaTwitter />,
  },
  {
    name: "GitHub",
    link: "https://github.com/michlejohnares",
    icon: <FaGithub />,
  },
  {
    name: "Instagram",
    link: "/",
    icon: <FiInstagram />,
  },
  {
    name: "Youtube",
    link: "/",
    icon: <FaYoutube />,
  },
  {
    name: "Mail",
    link: "mailto:michlejohnares@outlook.com",
    icon: <MdEmail />,
  },
];
