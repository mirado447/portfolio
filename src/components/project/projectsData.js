import dockerIcon from "../../assets/stack/docker.png";
import fastapiIcon from "../../assets/stack/fastapi.png";
import javaIcon from "../../assets/stack/java.png";
import githubIcon from "../../assets/stack/github.png";
import postgresqlIcon from "../../assets/stack/postgresql.png";
import pythonIcon from "../../assets/stack/python.png";
import reactIcon from "../../assets/stack/react.png";
import springIcon from "../../assets/stack/spring.png";
import tailwindIcon from "../../assets/stack/tailwind.png";
import keyraImage from "../../assets/keyra1.png";
import heiImage from "../../assets/hei.png";
import pkiImage from "../../assets/pki.png";

export { githubIcon };

export const stackIcons = {
  Python: pythonIcon,
  FastAPI: fastapiIcon,
  PostgreSQL: postgresqlIcon,
  Docker: dockerIcon,
  React: reactIcon,
  "Tailwind CSS": tailwindIcon,
  Java: javaIcon,
  "Spring Boot": springIcon,
};

export const projects = [
  {
    name: "Keyra",
    description: "Plateforme d'authentification-as-a-service multi-tenant : API backend et dashboard développeur avec gestion des applications, clés API et utilisateurs finaux isolés par application.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "React", "Tailwind CSS"],
    image: keyraImage,
    type: "deployed",
    url: "https://keyra-dashboard.vercel.app/",
    size: "large",
  },
  {
    name: "PKI-CA-Server",
    description: "Mise en place d'une PKI complète avec OpenSSL : génération de clés, création et signature de certificats, vérification et export au format PKCS#12.",
    stack: ["OpenSSL", "RSA", "X.509", "PKCS#12", "SCP"],
    image: pkiImage,
    type: "git",
    url: "https://github.com/mirado447/PKI5-ca-server",
    size: "small",
  },
  {
    name: "HEI Admin API",
    description: "Contribution backend en équipe sur une API de gestion d'école : frais scolaires, notifications de paiement et mise à jour automatisée du statut étudiant.",
    stack: ["Java", "Spring Boot", "Scheduler", "API RESTful"],
    image: heiImage,
    type: "git",
    url: "https://github.com/hei-school/hei-admin-api/commits/preprod/?author=mirado447",
    size: "small",
  },
];

export default projects;
