import { ExternalLink } from "lucide-react";
import dockerIcon from "../assets/stack/docker.png";
import fastapiIcon from "../assets/stack/fastapi.png";
import javaIcon from "../assets/stack/java.png";
import githubIcon from "../assets/stack/github.png";
import postgresqlIcon from "../assets/stack/postgresql.png";
import pythonIcon from "../assets/stack/python.png";
import reactIcon from "../assets/stack/react.png";
import springIcon from "../assets/stack/spring.png";
import tailwindIcon from "../assets/stack/tailwind.png";
import keyraImage from "../assets/keyra1.png";
import heiImage from "../assets/hei.png";
import pkiImage from "../assets/pki.png";

const stackIcons = {
  Python: pythonIcon,
  FastAPI: fastapiIcon,
  PostgreSQL: postgresqlIcon,
  Docker: dockerIcon,
  React: reactIcon,
  "Tailwind CSS": tailwindIcon,
  Java: javaIcon,
  "Spring Boot": springIcon,
};

const projects = [
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
    stack: ["Java", "Spring Boot", "Scheduler (cron job)", "API RESTful (OpenAPI 3)"],
    image: heiImage,
    type: "git",
    url: "https://github.com/hei-school/hei-admin-api/commits/preprod/?author=mirado447",
    size: "small",
  },
];

function ProjectCard({ project }) {
  return (
    <div className={`group relative rounded-2xl overflow-hidden h-full min-h-[180px] ${project.size === "small" ? "bg-tan" : "bg-tan/20"}`}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-contain bg-tan`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-brown/40 text-sm">
          image du projet
        </div>
      )}

      {/* nom toujours visible */}
      <span className="absolute bottom-3 left-3 text-brown text-sm font-semibold tracking-wide bg-cream/95 px-5 py-2.5 rounded-lg">
        {project.name}
      </span>

      {/* quart de cercle qui grossit depuis le coin bas-gauche */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-paper text-center
                   transition-[clip-path] duration-500 ease-out
                   [clip-path:circle(0%_at_0%_100%)]
                   group-hover:[clip-path:circle(150%_at_0%_100%)]"
      >
        <p className="text-brown font-medium mb-2">{project.name}</p>
        <p className="w-full max-w-xl text-brown/80 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {project.stack.map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5 text-xs bg-brown/10 text-brown px-2 py-1 rounded-lg">
              {stackIcons[s] ? (
                <img src={stackIcons[s]} alt="" className="w-4 h-4 object-contain" />
              ) : null}
              {s}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 border-2 border-brown text-brown text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-brown hover:text-cream transition"
        >
          {project.type === "deployed" ? (
            <><ExternalLink size={14} /> Voir le site</>
          ) : (
            <><img src={githubIcon} alt="" className="w-5 h-5 object-contain" /> Voir sur GitHub</>
          )}
        </a>
      </div>
    </div>
  );
}

function Project() {
  const large = projects.find((p) => p.size === "large");
  const smalls = projects.filter((p) => p.size === "small");

  return (
    <section id="project" className="px-6 md:px-20 pt-4 pb-16">
      <h2 className="font-khand text-4xl font-normal text-brown mb-2 text-center">Project</h2>
      <p className="text-brown/70 text-center mb-8">
        Une sélection de projets et d'API que j'ai développés, allant de plateformes complètes à des services back-end.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[420px]">
        <ProjectCard project={large} />
        <div className="grid grid-rows-2 gap-4">
          {smalls.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;