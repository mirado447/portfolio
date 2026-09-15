import { ExternalLink } from "lucide-react";
import javaIcon from "../assets/stack/java.png";
import githubIcon from "../assets/stack/github.png";
import postgresqlIcon from "../assets/stack/postgresql.png";
import springIcon from "../assets/stack/spring.png";

const stackIcons = {
  Java: javaIcon,
  "Spring Boot": springIcon,
  PostgreSQL: postgresqlIcon,
};

const projects = [
  {
    name: "manage-employee",
    description: "API REST de gestion d'employés — CRUD complet avec authentification.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    image: null,
    type: "deployed",
    url: "https://github.com/mirado447/manage-employee",
    size: "large",
  },
  {
    name: "PKI5-ca-server",
    description: "PKI complète : autorité de certification + serveur TLS.",
    stack: ["OpenSSL", "PKI", "Java"],
    image: null,
    type: "git",
    url: "https://github.com/mirado447/PKI5-ca-server",
    size: "small",
  },
  {
    name: "blogify-api",
    description: "API de blog en groupe — posts, commentaires, catégories.",
    stack: ["Spring Boot", "REST", "Tests"],
    image: null,
    type: "git",
    url: "https://github.com/mirado447/blogify-api",
    size: "small",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-tan/20 h-full min-h-[180px]">
      {project.image ? (
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
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
        <p className="text-brown/80 text-sm mb-4 max-w-md">{project.description}</p>
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
    <section id="project" className="px-6 md:px-20 py-16">
      <h2 className="font-khand text-4xl font-normal text-brown mb-2 text-center">Project</h2>
      <p className="text-brown/70 text-center mb-8">
        Quelques projets qui illustrent mon parcours full-stack.
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