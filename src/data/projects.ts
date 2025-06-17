/* src/data/projects.ts */
export interface Project {
  slug: string;
  title: string;
  category: "Web App" | "Website" | "Mobile App" | "Desktop App";
  image: string;
  thumbnail: string;
  video?: string;
  techStack: string[];
  description: string;
  details: string;

  links: {
    preview?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One - SaaS Dashboard",
    category: "Web App",
    image: "/images/projects/project-1.png",
    thumbnail: "/images/projects/project-1.png",
    video: "/videos/project-1-demo.mp4",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    description: "A comprehensive SaaS dashboard for managing clients and subscriptions.",
    details: "This project was built from the ground up to provide a seamless user experience for business owners. It features real-time data visualization, secure authentication, and a fully responsive interface that works on all devices. The main challenge was to handle large datasets efficiently without compromising on performance.",

    links: {
      preview: "/projects/project-one",
    },
  },
  {
    slug: "project-two",
    title: "Project Two - E-Commerce Platform",
    category: "Website",
    image: "/images/projects/project-2.png",
    thumbnail: "/images/projects/project-2.png",
    video: "/videos/project-2-demo.mp4",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "AWS"],
    description: "A scalable e-commerce platform for small businesses.",
    details: "This platform allows users to browse products, add them to a cart, and securely checkout. It includes an admin dashboard for managing inventory and orders. The project was optimized for SEO and performance to ensure a smooth shopping experience.",

    links: {
      preview: "/projects/project-two",
    },
  },
  {
    slug: "project-three",
    title: "Project Three - Fitness Tracker App",
    category: "Mobile App",
    image: "/images/projects/project-3-hero.jpg",
    thumbnail: "/images/projects/project-3-thumb.jpg",
    video: "/videos/project-3-demo.mp4",
    techStack: ["Flutter", "Firebase", "Dart"],
    description: "A mobile app for tracking workouts and fitness goals.",
    details: "This app allows users to log their workouts, set fitness goals, and track progress over time. It includes features like push notifications, social sharing, and integration with wearable devices. The app was designed with a focus on user engagement and retention.",

    links: {
      preview: "/projects/project-three",
    },
  },
  {
    slug: "project-four",
    title: "Project Four - Portfolio Website",
    category: "Website",
    image: "/images/projects/project-4-hero.jpg",
    thumbnail: "/images/projects/project-4-thumb.jpg",
    video: "/videos/project-4-demo.mp4",
    techStack: ["Astro", "Tailwind CSS", "TypeScript"],
    description: "A personal portfolio website to showcase projects and skills.",
    details: "This website was built to highlight my professional experience and projects. It includes a blog section, contact form, and animations for an engaging user experience. The site is fully responsive and optimized for fast loading times.",

    links: {
      preview: "https://example.com",
      github: "https://github.com/melgarcia21/project-four",
    },
  },
  {
    slug: "project-five",
    title: "Project Five - AI Interviewer",
    category: "Web App",
    image: "/images/projects/project-5-hero.jpg",
    thumbnail: "/images/projects/project-5-thumb.jpg",
    video: "/videos/project-5-demo.mp4",
    techStack: ["Next.js", "Vapi", "OpenAI", "TypeScript"],
    description: "An AI-powered web app that simulates job interviews.",
    details: "This application helps users practice for job interviews by simulating real interview scenarios. It uses AI to generate questions and provide feedback on user responses. The app was designed to be user-friendly and accessible, with a focus on helping users improve their interview skills.",

    links: {
      preview: "/projects/project-five",
    },
  },
  {
    slug: "project-six",
    title: "Project Six - AI Content Generator",
    category: "Web App",
    image: "/images/projects/project-6-hero.jpg",
    thumbnail: "/images/projects/project-6-thumb.jpg",
    video: "/videos/project-6-demo.mp4",
    techStack: ["Next.js", "Google Gemini", "TypeScript"],
    description: "An AI-powered web app that generates content based on user input.",
    details: "This application leverages Google Gemini to create high-quality content for various use cases, including blog posts, social media updates, and marketing copy. Users can input a topic or keyword, and the AI generates relevant content. The app includes features for customizing the tone, style, and length of the generated content.",

    links: {
      preview: "https://ai-content-generator.example.com",
      github: "https://github.com/melgarcia21/project-six",
    },
  },
  {
    slug: "project-seven",
    title: "Project Seven - Social Media App",
    category: "Mobile App",
    image: "/images/projects/project-7-hero.jpg",
    thumbnail: "/images/projects/project-7-thumb.jpg",
    video: "/videos/project-7-demo.mp4",
    techStack: ["React Native", "Firebase", "TypeScript"],
    description: "A cross-platform social media app for sharing photos and connecting with friends.",
    details: "This app allows users to create profiles, share photos, and connect with friends. It includes features like real-time notifications, direct messaging, and a news feed. The app was designed with a focus on performance and user experience, ensuring smooth navigation and fast loading times.",

    links: {
      preview: "/projects/project-seven",
    },
  },
  {
    slug: "project-eight",
    title: "Project Eight - Task Management App",
    category: "Mobile App",
    image: "/images/projects/project-8-hero.jpg",
    thumbnail: "/images/projects/project-8-thumb.jpg",
    video: "/videos/project-8-demo.mp4",
    techStack: ["Flutter", "Firebase", "Dart"],
    description: "A mobile app for managing tasks and to-do lists.",
    details: "This app helps users organize their tasks and to-do lists efficiently. It includes features like task categorization, due dates, and reminders. The app was designed to be intuitive and easy to use, with a clean and modern interface. It also includes collaboration features for sharing tasks with team members.",

    links: {
      preview: "/projects/project-eight",
    },
  },
  {
    slug: "project-nine",
    title: "Project Nine - Inventory Management System",
    category: "Desktop App",
    image: "/images/projects/project-9-hero.jpg",
    thumbnail: "/images/projects/project-9-thumb.jpg",
    video: "/videos/project-9-demo.mp4",
    techStack: [".NET", "C#", "MySQL"],
    description: "A desktop application for managing inventory and stock levels.",
    details: "This application is designed for businesses to manage their inventory and stock levels efficiently. It includes features like barcode scanning, stock level alerts, and reporting tools. The app was built with a focus on performance and reliability, ensuring that it can handle large datasets and provide accurate inventory tracking.",

    links: {
      preview: "/projects/project-nine",
    },
  },
];
