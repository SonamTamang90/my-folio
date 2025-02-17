export const projects = [
  {
    id: 1,
    slug: "ui-elements-library",
    featured: true,
    title: "UI Elements Library",
    video: "/ui-elements.mp4",
    intro:
      "Collections of reusuable UI components made for React and HTML with instant copy-paste code build using Next JS.",
    description: [
      "UI Elements Library features a handpicked collection of modern UI components, inspired by the web's finest designs and crafted into clean React and HTML code using Tailwind CSS.",
      "I developed this library to accelerate my own development workflow, creating instant copy-paste UI components that allow me to focus more time on crafting essential application logic. Unlike existing UI libraries that require complex installation, learning curves, and time-consuming customization, this solution offers immediate implementation that aligns with my development needs.",
      "Drawing from my experience as a UI Engineer, where I repeatedly encountered the time-consuming process of component implementation across different projects, I recognized the need for a more efficient solution. This insight drove me to create a library that eliminates common development bottlenecks.",
    ],

    technologies: ["HTML", "Tailwind CSS", "Javascript", "Next Js"],
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment integration",
    ],
    images: ["/images/project-1.png"],
    githubUrl: "https://github.com/SonamTamang90/ui-elements",
    role: "Full Stack Developer",
    status: "Active",
  },
  {
    id: 2,
    slug: "my-folio",
    title: "My Folio",
    featured: true,
    intro:
      "My Personal Portfolio website buid using React, Javascript, Tailwind, and framer motion for animation.",
    description: [
      "Modern responsive personal portfolio website",
      "Engineered an elegant dark-themed portfolio platform that seamlessly balances professional presentation with exceptional user experience.",
      "This solution leverages industry-leading technologies: React for robust component architecture, Tailwind CSS for sophisticated utility-first styling, and Vite for optimized build performance.",
      "The core mission was to develop a visually compelling dark-themed interface that showcases projects with impact while demonstrating mastery of contemporary web development methodologies.",
    ],
    technologies: ["React", "OpenWeather API", "Mapbox"],
    features: [
      "Current weather conditions",
      "Five-day forecast",
      "Interactive weather maps",
      "Location-based services",
    ],
    images: ["/images/project-2.png"],
    liveUrl: "https://sonamtamang.com",
    githubUrl: "https://github.com/SonamTamang90/my-folio",
    role: "Frontend Developer",
    status: "Completed",
  },
];
