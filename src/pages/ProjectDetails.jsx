import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import ShinyText from "../components/animations/ShinyText";
import { projects } from "../data/projects";
import BackButton from "../components/ui/BackButton";

const ProjectDetails = () => {
  const params = useParams();
  const slug = params.slug;

  const project =
    projects && projects.find((project) => slug && project.slug === slug);
  console.log(project);

  return (
    <div className="relative max-w-5xl mx-auto px-11 pb-20">
      <BackButton />
      <h1 className="font-bebas text-6xl tracking-wide mb-11">
        {project.title}
      </h1>
      <img
        src={project.screenShot}
        alt={project.title}
        className="mb-11 rounded-md"
      />
      <div className="max-w-2xl text-base tracking-wide dark:text-dark-400 space-y-6">
        <p>{project.description[0]}</p>
        <p>{project.description[1]}</p>
        <p>{project.description[2]}</p>
      </div>
      <div className="my-11">
        <h2 className="font-bebas text-xl tracking-wider mb-8">Tools Used</h2>
        <div className="flex items-center gap-6">
          {project.technologies.map((technology, index) => (
            <div
              key={index}
              className="bg-dark-200 py-3 px-4 border border-dark-100 rounded-md"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="font-bebas text-xl tracking-wider mb-8">See Live</h2>
        <div className="flex items-center gap-6">
          {project.githubUrl && (
            <Link
              to={project.githubUrl}
              target="_blank"
              className="duration-300 text-dark-400 hover:text-white transition-colors hover:bg-dark-200/80 flex items-center gap-2 bg-dark-200 py-3 px-4 border border-dark-100 rounded-md"
            >
              <FaGithub size={20} />
              <span>Github</span>
            </Link>
          )}

          {project.liveUrl && (
            <Link
              to={project.liveUrl}
              target="_blank"
              className="flex group duration-300 text-dark-400 hover:text-white  transition-colors hover:bg-dark-200/80 gap-2 bg-dark-200 py-3 px-4 border border-dark-100 rounded-md up"
            >
              <ShinyText text="Live Link" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
