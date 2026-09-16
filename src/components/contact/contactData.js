import emailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/phone.png";
import linkedInIcon from "../../assets/In.png";
import githubIcon from "../../assets/stack/github.png";

const contactCards = [
  {
    label: "Email",
    value: "miradorah@gmail.com",
    href: "mailto:miradorah@gmail.com",
    icon: emailIcon,
    external: false,
  },
  {
    label: "Téléphone",
    value: "+261 34 88 809 82",
    href: "tel:+261348880982",
    icon: phoneIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: "mirado447",
    href: "https://github.com/mirado447",
    icon: githubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Mirado Radintsoa",
    href: "https://www.linkedin.com/in/mirado-radintsoa-raharinaivosoa-b21283266/",
    icon: linkedInIcon,
    external: true,
  },
];

export default contactCards;
