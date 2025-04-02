import { LiaHtml5 } from "react-icons/lia";
import { FaCss3Alt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { GiHook } from "react-icons/gi";

const logo = [
    { topic: "HTML", icon: <LiaHtml5 /> , class : "html" },
    { topic: "CSS", icon: <FaCss3Alt /> ,class : "css" },
    { topic: "jawascript", icon: <FaNodeJs /> ,class : "js" },
    { topic: "react", icon: <FaReact /> , class : "react"},
    { topic: "hook", icon: <GiHook /> , class : "hook" },
    { topic: "Redux", icon: <BiLogoRedux /> ,class : "redux" }
];

export default logo;
