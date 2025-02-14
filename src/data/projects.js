export const projects = [
  {
    id: 1,
    slug: "ui-elements-library",
    featured: true,
    title: "UI Elements Library",
    description: [
      "Introducing a comprehensive, open-source library of meticulously crafted UI elements for React, Next.js, and Vue.js.",
      "This library is designed to streamline your development process by providing ready-to-use components that can be easily integrated into your projects without the need for additional installations. Each element is styled using Tailwind CSS, ensuring a modern and cohesive look across your applications.",
    ],

    technologies: ["HTML", "Tailwind CSS", "Javascript", "Next Js"],
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment integration",
    ],
    images: ["/images/project-1.png"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    role: "Full Stack Developer",
    status: "Active",
  },
  {
    id: 2,
    slug: "weather-app",
    title: "Weather App",
    featured: true,
    description:
      "Real-time weather tracking application with detailed forecasts.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    features: [
      "Current weather conditions",
      "Five-day forecast",
      "Interactive weather maps",
      "Location-based services",
    ],
    images: ["/images/project-2.png"],
    liveUrl: "https://weather-example.com",
    githubUrl: "https://github.com/example/weather",
    role: "Frontend Developer",
    status: "Completed",
  },
];
