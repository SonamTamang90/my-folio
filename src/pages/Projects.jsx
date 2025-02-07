import Card from "../components/ui/Card";

const Projects = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto lg:px-11">
        <h1 className="font-bebas lg:text-6xl tracking-wide mb-5">Projects</h1>
        <p className="max-w-lg lg:text-lg dark:text-dark-400">
          Here are some of projects that I build and still in progress
        </p>

        <div className="grid grid-cols-2 gap-6 mt-11">
          <Card
            title="Unwind Cabin"
            graphic="/unwind-cabin.png"
            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            status="active"
          />
          <Card
            title="My Folio"
            graphic="/profile.png"
            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            status="completed"
          />
          <Card
            title="My Folio"
            graphic="/profile.png"
            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            status="completed"
          />
          <Card
            title="My Folio"
            graphic="/profile.png"
            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            status="completed"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
