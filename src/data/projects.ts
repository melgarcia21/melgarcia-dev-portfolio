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
      preview: "https://example.com",
      github: "https://github.com/melgarcia21/project-one",
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
      preview: "https://example.com",
      github: "https://github.com/melgarcia21/project-two",
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
      preview: "https://example.com",
      github: "https://github.com/melgarcia21/project-three",
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
    title: "Project Five - Real-Time Chat App",
    category: "Web App",
    image: "/images/projects/project-5-hero.jpg",
    thumbnail: "/images/projects/project-5-thumb.jpg",
    video: "/videos/project-5-demo.mp4",
    techStack: ["Vue.js", "Socket.IO", "Express.js", "Heroku"],
    description: "A real-time chat application for group and private messaging.",
    details: "This app allows users to create chat rooms, send messages, and share files in real-time. It features user authentication, message encryption, and a clean, intuitive interface. The project was designed to handle high traffic and ensure low latency.",
    links: {
      preview: "https://example.com",
      github: "https://github.com/melgarcia21/project-five",
    },
  },
  {
    slug: "project-six",
    title: "Project Six - Task Management Tool",
    category: "Web App",
    image: "/images/projects/project-6-hero.jpg",
    thumbnail: "/images/projects/project-6-thumb.jpg",
    video: "/videos/project-6-demo.mp4",
    techStack: ["Angular", "Nest.js", "PostgreSQL", "Docker"],
    description: "A task management tool for teams to collaborate effectively.",
    details: "This tool allows users to create, assign, and track tasks within a team. It includes features like Kanban boards, notifications, and analytics. The project was built with a focus on scalability and ease of use.",
    links: {
      preview: "https://example.com",
      github: "https://github.com/melgarcia21/project-six",
    },
  },
];