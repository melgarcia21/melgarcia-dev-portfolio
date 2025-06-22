/* src/data/projects.ts */

export interface Project {
  slug: string;
  title: string;
  category: "Web App" | "Website" | "Mobile App" | "Desktop App";
  thumbnail: {
    landscape: string;
    portrait: string;
  };
  media: {
    type: 'image' | 'video';
    src: string;
  }[];
  techStack: string[];
  features: string[];
  description: string;
  details: string;
  links: {
    preview?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One - SaaS Dashboard",
    category: "Web App",
    thumbnail: {
      landscape: "/images/projects/project-1-tl.jpg",
      portrait: "/images/projects/project-1-pt.jpg"
    },
    media: [
      { type: 'video', src: '/videos/project-1-demo.mp4' },
      { type: 'image', src: '/images/projects/project-1-img1.jpg' },
      { type: 'image', src: '/images/projects/project-1-img2.png' },
      { type: 'image', src: '/images/projects/project-1-img3.jpg' },
      { type: 'image', src: '/images/projects/project-1-img4.jpg' },
      { type: 'image', src: '/images/projects/project-1-img5.jpg' },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JSON"],
    features: ["User Authentication", "Real-time Data Visualization", "Subscription Management", "Fully Responsive Interface"],
    description: "A comprehensive SaaS dashboard for managing clients and subscriptions.",
    details: "This project was built from the ground up to provide a seamless user experience for business owners. It features real-time data visualization, secure authentication, and a fully responsive interface that works on all devices. The main challenge was to handle large datasets efficiently without compromising on performance.",
    links: { preview: "/projects/project-one" },
  },
  {
    slug: "project-two",
    title: "Project Two - E-Commerce Platform",
    category: "Website",
    thumbnail: {
      landscape: "/images/projects/project-2-tl.jpg",
      portrait: "/images/projects/project-2-tp.jpg"
    },
    media: [
      { type: 'video', src: '/videos/project-2-demo.mp4' },
      { type: 'image', src: '/images/projects/project-2-img1.jpg' },
      { type: 'image', src: '/images/projects/project-2-img2.png' },
      { type: 'image', src: '/images/projects/project-2-img3.jpg' },
      { type: 'image', src: '/images/projects/project-2-img4.jpg' },
      { type: 'image', src: '/images/projects/project-2-img5.jpg' },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS","MongoDB", "AWS"],
    features: ["SEO Friendly", "Shopping Cart System", "Admin Dashboard", "Secure Checkout Process"],
    description: "A scalable e-commerce platform for small businesses.",
    details: "This platform allows users to browse products, add them to a cart, and securely checkout. It includes an admin dashboard for managing inventory and orders. The project was optimized for SEO and performance to ensure a smooth shopping experience.",
    links: { preview: "/projects/project-two" },
  },
  {
    slug: "project-three",
    title: "Project Three - Fitness Tracker App",
    category: "Mobile App",
    thumbnail: {
      landscape: "/images/projects/project-3-tl.jpg",
      portrait: "/images/projects/project-3-tp.jpg"
    },
    media: [
      { type: 'video', src: '/videos/project-3-demo.mp4' },
      { type: 'image', src: '/images/projects/project-3-img1.jpg' },
      { type: 'image', src: '/images/projects/project-3-img2.png' },
      { type: 'image', src: '/images/projects/project-3-img3.jpg' },
      { type: 'image', src: '/images/projects/project-3-img4.jpg' },
      { type: 'image', src: '/images/projects/project-3-img5.jpg' },
    ],
    techStack: ["Flutter", "Firebase", "Dart", "Python"],
    features: ["Workout Logging", "Goal Tracking", "Push Notifications", "Wearable Device Integration"],
    description: "A mobile app for tracking workouts and fitness goals.",
    details: "This app allows users to log their workouts, set fitness goals, and track progress over time. It includes features like push notifications, social sharing, and integration with wearable devices. The app was designed with a focus on user engagement and retention.",
    links: { preview: "/projects/project-three" },
  },
  {
    slug: "project-four",
    title: "Project Four - Portfolio Website",
    category: "Website",
    thumbnail: {
      landscape: "/images/projects/project-4-tl.jpg",
      portrait: "/images/projects/project-4-tp.jpg"
    },
    media: [
      { type: 'video', src: '/videos/project-4-demo.mp4' },
      { type: 'image', src: '/images/projects/project-4-img1.jpg' },
      { type: 'image', src: '/images/projects/project-4-img2.jpg' },
      { type: 'image', src: '/images/projects/project-4-img3.jpg' },
      { type: 'image', src: '/images/projects/project-4-img4.jpg' },
      { type: 'image', src: '/images/projects/project-4-img5.jpg' },
    ],
    techStack: ["Astro", "Tailwind CSS", "TypeScript", "Svelte"],
    features: ["Fast Loading Times", "Blog Section", "Interactive Contact Form", "Engaging Animations"],
    description: "A personal portfolio website to showcase projects and skills.",
    details: "This website was built to highlight my professional experience and projects. It includes a blog section, contact form, and animations for an engaging user experience. The site is fully responsive and optimized for fast loading times.",
    links: { preview: "https://example.com" },
  },
  {
    slug: "project-five",
    title: "Project Five - AI Interviewer",
    category: "Web App",
    thumbnail: {
      landscape: "/images/projects/project-5-tl.jpg",
      portrait: "/images/projects/project-5-tp.jpg"
    },
    media: [
      { type: 'video', src: '/videos/project-5-demo.mp4' },
      { type: 'image', src: '/images/projects/project-5-img1.jpg' },
      { type: 'image', src: '/images/projects/project-5-img2.jpg' },
      { type: 'image', src: '/images/projects/project-5-img3.jpg' },
      { type: 'image', src: '/images/projects/project-5-img4.jpg' },
      { type: 'image', src: '/images/projects/project-5-img5.jpg' },
    ],
    techStack: ["Next.js", "TypeScript", "Express.js", "OpenAI", "Vapi"],
    features: ["AI-Generated Questions", "Real-time User Feedback", "Interview Simulation", "User-friendly UI"],
    description: "An AI-powered web app that simulates job interviews.",
    details: "This application helps users practice for job interviews by simulating real interview scenarios. It uses AI to generate questions and provide feedback on user responses. The app was designed to be user-friendly and accessible, with a focus on helping users improve their interview skills.",
    links: { preview: "/projects/project-five" },
  },
  {
    slug: "project-six",
    title: "Project Six - Task Management App",
    category: "Mobile App",
    thumbnail: {
      landscape: "/images/projects/project-6-tl.jpg",
      portrait: "/images/projects/project-6-tp.jpg"
    },
    media: [
      { type: 'video', src: '/videos/project-6-demo.mp4' },
      { type: 'image', src: '/images/projects/project-6-img1.jpg' },
      { type: 'image', src: '/images/projects/project-6-img2.jpg' },
      { type: 'image', src: '/images/projects/project-6-img3.jpg' },
      { type: 'image', src: '/images/projects/project-6-img4.jpg' },
      { type: 'image', src: '/images/projects/project-6-img5.jpg' },
    ],
    techStack: ["Flutter", "Firebase", "Dart", "Google Gemini", "Python"],
    features: ["Task Categorization", "Due Dates & Reminders", "Team Collaboration", "AI-Powered Suggestions"],
    description: "A mobile app for managing tasks and to-do lists.",
    details: "This app helps users organize their tasks and to-do lists efficiently. It includes features like task categorization, due dates, and reminders. The app was designed to be intuitive and easy to use, with a clean and modern interface. It also includes collaboration features for sharing tasks with team members.",
    links: { preview: "/projects/project-six" },
  },
  {
    slug: "project-seven",
    title: "Project Seven - Inventory Management System",
    category: "Desktop App",
    thumbnail: {
      landscape: "/images/projects/project-7-tl.jpg",
      portrait: "/images/projects/project-7-tp.jpg"
    },
    media: [
      { type: 'video', src: '/videos/project-7-demo.mp4' },
      { type: 'image', src: '/images/projects/project-7-img1.jpg' },
      { type: 'image', src: '/images/projects/project-7-img2.jpg' },
      { type: 'image', src: '/images/projects/project-7-img3.jpg' },
      { type: 'image', src: '/images/projects/project-7-img4.jpg' },
      { type: 'image', src: '/images/projects/project-7-img5.jpg' },
    ],
    techStack: [".NET Core", "CSharp", "MySQL"],
    features: ["Barcode Scanning", "Stock Level Alerts", "Reporting Tools", "Offline Capability"],
    description: "A desktop application for managing inventory and stock levels.",
    details: "This application is designed for businesses to manage their inventory and stock levels efficiently. It includes features like barcode scanning, stock level alerts, and reporting tools. The app was built with a focus on performance and reliability, ensuring that it can handle large datasets and provide accurate inventory tracking.",
    links: { preview: "/projects/project-seven" },
  },
  {
    slug: "project-eight",
    title: "Project Eight - Medium Clone Blogging Platform",
    category: "Web App",
    thumbnail: {
      landscape: "/images/projects/project-8-tl.jpg",
      portrait: "/images/projects/project-8-tp.jpg"
    },
    media: [
      { type: 'video', src: '/videos/project-8-demo.mp4' },
      { type: 'image', src: '/images/projects/project-8-img1.jpg' },
      { type: 'image', src: '/images/projects/project-8-img2.jpg' },
      { type: 'image', src: '/images/projects/project-8-img3.jpg' },
      { type: 'image', src: '/images/projects/project-8-img4.jpg' },
      { type: 'image', src: '/images/projects/project-8-img5.jpg' },
    ],
    techStack: ["Laravel", "React", "PostgreSQL", "PHP", "Tailwind CSS"],
    features: ["User Authentication", "Rich Text Editor", "Article Categorization", "Public User Profiles"],
    description: "A blogging platform similar to Medium, built with Laravel and React.",
    details: "This project is a full-featured blogging platform that allows users to create, edit, and publish articles. It includes features like user authentication, article categorization, and a rich text editor. The platform was designed to be user-friendly and visually appealing, with a focus on content creation and sharing.",
    links: { preview: "/projects/project-eight" },
  },
];