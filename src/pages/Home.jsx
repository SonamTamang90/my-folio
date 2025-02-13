import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import CommitActivity from "../components/ui/CommitsActivity";
import { GITHUB_TOKEN } from "../../config";

const Hero = () => {
  return (
    <section>
      <h1 className="font-bebas lg:text-6xl tracking-wide mb-5">
        Hey, I'm Sonam
      </h1>
      <p className="max-w-lg lg:text-lg dark:text-dark-400">
        A passionate Software Engineer specializing in crafting elegant frontend
        web experiences with a keen eye for user interface design.
      </p>
      <div className="flex items-center gap-6 mt-8">
        <Link
          to="/about"
          className="dark:bg-dark-200 transition-colors dark:border-dark-100 border px-5 py-2.5 rounded-md duration-300 hover:dark:bg-dark-200/80"
        >
          About
        </Link>
        <Link
          to="/about"
          className="dark:border-dark-100 border px-5 py-2.5 rounded-md transition-colors hover:dark:bg-dark-200"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

const ProjectsHighlights = () => {
  return (
    <section className="lg:pt-20">
      <h2 className="font-bebas text-xl tracking-wider mb-8">
        Projects Highlights
      </h2>
      <div className="grid grid-cols-2 gap-6 mb-11">
        <Card
          title="UI Elements Library"
          graphic="/images/project-1.png"
          description="Free open source collections of copy and paste UI elements for React, HTML styled using Tailwind."
          status="active"
        />
        <Card
          title="My Folio"
          graphic="/images/project-2.png"
          description="Dark theme Personal Portfolio website built using React, Javascript and Tailwind."
          status="completed"
        />
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto lg:px-11">
      <Hero />
      <ProjectsHighlights />
      <CommitActivity
        repositories={[
          { owner: "SonamTamang90", repo: "unwind-cabin" },
          { owner: "SonamTamang90", repo: "my-folio" },
        ]}
        token={GITHUB_TOKEN}
      />
    </div>
  );
};

export default Home;
