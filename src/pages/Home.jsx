import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import CommitActivity from "../components/ui/CommitsActivity";
import { GITHUB_TOKEN } from "../../config";
import { projects } from "../data/projects";

const Hero = () => {
  return (
    <section>
      <h1 className="font-bebas text-6xl tracking-wide mb-5">Hey, I'm Sonam</h1>
      <p className="max-w-lg text-base lg:text-lg dark:text-dark-400">
        Creative Frontend Developer focused on building engaging user interfaces
        and modern websites with precision and attention to detail.
      </p>
      <div className="flex items-center gap-6 mt-8">
        <Link
          to="/about"
          className="dark:bg-dark-200 transition-colors dark:border-dark-100 border px-5 py-2.5 rounded-md duration-300 hover:dark:bg-dark-200/80"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="dark:border-dark-100 border px-5 py-2.5 rounded-md transition-colors hover:dark:bg-dark-200"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

const ProjectsHighlights = () => {
  const featuredProject = projects.filter((project) => project.featured);
  return (
    <section className="pt-16 lg:pt-20">
      <h2 className="font-bebas text-xl tracking-wider mb-8">
        Projects Highlights
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-11">
        {featuredProject.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            graphic={project.images}
            description={project.intro}
            status={project.status}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 lg:px-11">
      <Hero />
      <ProjectsHighlights />
      <CommitActivity
        repositories={[
          { owner: "SonamTamang90", repo: "my-folio" },
          { owner: "SonamTamang90", repo: "ui-elements" },
        ]}
        token={GITHUB_TOKEN}
      />
    </div>
  );
};

export default Home;
