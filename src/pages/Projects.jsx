import Card from "../components/ui/Card";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto lg:px-11">
        <h1 className="font-bebas lg:text-6xl tracking-wide mb-5">Projects</h1>
        <p className="max-w-lg lg:text-lg dark:text-dark-400">
          Here are some of projects that I build and still in progress
        </p>

        <div className="grid grid-cols-2 gap-6 mt-11">
          {projects &&
            projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                graphic={project.images}
                description={project.description[0]}
                status={project.status}
                slug={project.slug}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
