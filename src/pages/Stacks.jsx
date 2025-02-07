const stacks = [
  {
    id: 1,
    name: "Visual Studio Code",
    description: "Code Editor",
    icon: "/icons/vscode.svg",
  },
  {
    id: 2,
    name: "Google Chrome",
    description: "Web Browser",
    icon: "/icons/chrome.svg",
  },
  {
    id: 3,
    name: "Notion",
    description: "Note Taking",
    icon: "/icons/notion.svg",
  },
  {
    id: 4,
    name: "HTML",
    description: "Proficient",
    icon: "/icons/html.svg",
  },
  {
    id: 5,
    name: "CSS",
    description: "Proficient",
    icon: "/icons/css.svg",
  },
  {
    id: 6,
    name: "SASS",
    description: "Proficient",
    icon: "/icons/sass.svg",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    description: "Proficient",
    icon: "/icons/tailwindcss.svg",
  },
  {
    id: 8,
    name: "Javascript",
    description: "Proficient",
    icon: "/icons/javascript.svg",
  },
  {
    id: 9,
    name: "React JS",
    description: "Intermediate",
    icon: "/icons/react.svg",
  },
  {
    id: 10,
    name: "React Router",
    description: "Proficient",
    icon: "/icons/reactrouter.svg",
  },
  {
    id: 10,
    name: "React Query",
    description: "Proficient",
    icon: "/icons/reactquery.svg",
  },
  {
    id: 11,
    name: "Redux",
    description: "Intermediate",
    icon: "/icons/redux.svg",
  },
  {
    id: 12,
    name: "Next JS",
    description: "Intermediate",
    icon: "/icons/nextjs.svg",
  },
  {
    id: 13,
    name: "Supabase",
    description: "Proficient",
    icon: "/icons/supabase.svg",
  },
  {
    id: 14,
    name: "Python",
    description: "Basic",
    icon: "/icons/python.svg",
  },
  {
    id: 15,
    name: "Git",
    description: "Proficient",
    icon: "/icons/git.svg",
  },
  {
    id: 16,
    name: "GitHub",
    description: "Proficient",
    icon: "/icons/github-dark.svg",
  },
];

const Stack = ({ stack }) => {
  const { name, description, icon } = stack;
  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12 flex items-center justify-center dark:bg-dark-700 border dark:border-dark-300 p-2 rounded-md shadow-sm">
        <img src={icon} alt={name} className="w-full" />
      </div>
      <div className="dark:text-dark-400">
        <h4>{name}</h4>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

const Stacks = () => {
  const gitIndex = stacks.findIndex((stack) => stack.name === "Git");
  return (
    <>
      <div className="max-w-7xl mx-auto lg:px-11">
        <h1 className="font-bebas lg:text-6xl tracking-wide mb-5">Stacks</h1>
        <p className="max-w-lg lg:text-lg dark:text-dark-400">
          A tools and software I used on daily basis to build websites and web
          applications.
        </p>

        <div className="bg-dashed border dark:border-dark-300 rounded-md p-6 lg:mt-11">
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-dark-300">
            {/* First row (3 items) */}
            <div className="pb-6">
              <div className="text-xs dark:text-dark-400 mb-2">
                Development Tools
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {stacks.slice(0, 3).map((stack) => (
                  <Stack key={stack.id} stack={stack} />
                ))}
              </div>
            </div>

            {/* Middle section */}
            <div className="py-6">
              <div className="text-xs dark:text-dark-400 mb-2">
                Technical Skills
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {stacks.slice(3, gitIndex).map((stack) => (
                  <Stack key={stack.id} stack={stack} />
                ))}
              </div>
            </div>

            {/* Last section (Git and GitHub) */}
            <div className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {stacks.slice(gitIndex).map((stack) => (
                  <Stack key={stack.id} stack={stack} />
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
