import { ExternalLink } from "lucide-react";
import { githubIcon, stackIcons } from "./projectsData";

function ProjectInfoOverlay({ project }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 bg-paper text-center">
      <p className="text-brown font-medium mb-2 text-sm md:text-base">{project.name}</p>
      <p className="w-full max-w-xl text-brown/80 text-[11px] md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-4 md:line-clamp-none">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-3 md:mb-5">
        {project.stack.map((s) => (
          <span key={s} className="inline-flex items-center gap-1 text-[10px] md:text-xs bg-brown/10 text-brown px-1.5 md:px-2 py-1 rounded-lg">
            {stackIcons[s] ? (
              <img src={stackIcons[s]} alt="" className="w-3.5 h-3.5 md:w-4 md:h-4 object-contain" />
            ) : null}
            {s}
          </span>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 border-2 border-brown text-brown text-xs md:text-sm font-medium px-3 md:px-5 py-2 md:py-2.5 rounded-lg hover:bg-brown hover:text-cream transition"
      >
        {project.type === "deployed" ? (
          <>
            <ExternalLink size={12} className="md:w-[14px] md:h-[14px]" /> Voir le site
          </>
        ) : (
          <>
            <img src={githubIcon} alt="" className="w-4 h-4 md:w-5 md:h-5 object-contain" /> Voir sur GitHub
          </>
        )}
      </a>
    </div>
  );
}

export default ProjectInfoOverlay;
