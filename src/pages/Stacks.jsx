const devtools = [
  {
    name: "Visual Studio Code",
    intro: "Code Editor",
    icon: "/icons/vscode.svg",
    description:
      "Best open source code editor with tons of extensions to make your own.",
  },
  {
    name: "Google Chrome",
    intro: "Web Browser",
    icon: "/icons/chrome.svg",
    description:
      "Best open source code editor with tons of extensions to make your own.",
  },
  {
    name: "Notion",
    intro: "Note Taking",
    icon: "/icons/notion.svg",
    description:
      "Best open source code editor with tons of extensions to make your own.",
  },
];

const frameworks = [
  {
    name: "React",
    intro: "Proficient",
    icon: "/icons/react.svg",
    description: "Most popular javascript library",
  },
  {
    name: "React Router",
    intro: "Proficient",
    icon: "/icons/reactrouter.svg",
  },
  {
    name: "React Query",
    intro: "Proficient",
    icon: "/icons/reactquery.svg",
    description:
      "Best open source code editor with tons of extensions to make your own.",
  },
  {
    name: "Next JS",
    intro: "Intermediate",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    intro: "Proficient",
    icon: "/icons/tailwindcss.svg",
  },
  {
    name: "Shadcn",
    intro: "Proficient",
    icon: "/icons/shadcn.svg",
  },
];

const languages = [
  {
    name: "Html",
    intro: "Proficient",
    icon: "/icons/html.svg",
  },
  {
    name: "CSS",
    intro: "Proficient",
    icon: "/icons/css.svg",
  },
  {
    name: "Javascript",
    intro: "Proficient",
    icon: "/icons/javascript.svg",
  },
];

const Item = ({ tool }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="dark:bg-dark-700 p-2 rounded-md border dark:border-dark-300 flex items-center justify-center h-12 w-12 overflow-hidden">
        <img src={tool.icon} alt="vs code logo" className="w-full" />
      </div>
      <div className="dark:text-dark-400">
        <h4>{tool.name}</h4>
        <p className="text-xs">{tool.intro}</p>
      </div>
    </div>
  );
};

const Stacks = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto lg:px-11">
        <h1 className="font-bebas lg:text-6xl tracking-wide mb-5">Stacks</h1>
        <p className="max-w-lg lg:text-lg dark:text-dark-400">
          A tools and software I used on daily basis to build websites and web
          applications and productivity.
        </p>

        <div className="lg:pt-20 space-y-11">
          <div className="">
            <h3 className="font-bebas text-xl tracking-wider mb-6">
              Developement & Productivity tools
            </h3>
            <div className="bg-dashed dark:border-dark-300 p-6">
              <div className="grid grid-cols-3">
                {devtools.map((tool) => (
                  <Item key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="font-bebas text-xl tracking-wider mb-6">
              Frameworks & Libraries
            </h3>
            <div className="bg-dashed dark:border-dark-300 p-6">
              <div className="grid grid-cols-3 gap-6">
                {frameworks.map((tool) => (
                  <Item key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="font-bebas text-xl tracking-wider mb-6">
              Frontend Languages
            </h3>
            <div className=" dark:border-dark-300 p-6">
              <div className="grid grid-cols-3 gap-6">
                {languages.map((tool) => (
                  <Item key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stacks;
