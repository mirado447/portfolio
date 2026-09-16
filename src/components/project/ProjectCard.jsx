import { useState } from "react";
import ProjectInfoOverlay from "./ProjectInfoOverlay";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden h-full min-h-[260px] sm:min-h-[180px] ${project.size === "small" ? "bg-tan" : "bg-tan/20"}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-contain bg-tan"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-brown/40 text-sm">
          image du projet
        </div>
      )}

      <span className="absolute bottom-3 left-3 text-brown text-sm font-semibold tracking-wide bg-cream/95 px-5 py-2.5 rounded-lg">
        {project.name}
      </span>

      <div
        className={`absolute inset-0 transition-[clip-path] duration-500 ease-out ${
          isOpen ? "[clip-path:circle(150%_at_0%_100%)]" : "[clip-path:circle(0%_at_0%_100%)]"
        } md:[clip-path:circle(0%_at_0%_100%)] md:group-hover:[clip-path:circle(150%_at_0%_100%)]`}
      >
        <ProjectInfoOverlay project={project} />
      </div>
    </div>
  );
}

export default ProjectCard;
