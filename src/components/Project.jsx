import ProjectCard from "./project/ProjectCard";
import projects from "./project/projectsData";

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
