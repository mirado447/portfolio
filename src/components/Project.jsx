import { ExternalLink } from "lucide-react";
import githubIcon from "../assets/stack/github.png";

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
      <span className="absolute bottom-3 left-3 z-10 text-brown text-sm font-medium bg-cream/90 px-3 py-1 rounded-lg">
        {project.name}
      </span>

      {/* quart de cercle qui grossit depuis le coin bas-gauche */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 bg-paper
                   transition-[clip-path] duration-500 ease-out
                   [clip-path:circle(0%_at_0%_100%)]
                   group-hover:[clip-path:circle(150%_at_0%_100%)]"
      >
        <p className="text-brown font-medium mb-1">{project.name}</p>
        <p className="text-brown/80 text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.map((s) => (
            <span key={s} className="text-xs bg-brown/10 text-brown px-2 py-0.5 rounded-lg">
              {s}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 self-start text-sm font-medium bg-brown text-cream px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          {project.type === "deployed" ? (
            <><ExternalLink size={14} /> Voir le site</>
          ) : (
            <><img src={githubIcon} alt="" className="w-3.5 h-3.5" /> Voir sur GitHub</>
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
      <h2 className="text-2xl font-bold text-brown mb-2 text-center">Project</h2>
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