export interface Project {
  slug: string;
  title: string;
  category: "Web App" | "Website" | "Mobile App";
  image: string;
  thumbnail: string;
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
    image: "/images/projects/project-1-hero.jpg",
    thumbnail: "/images/projects/project-1-thumb.jpg",
    techStack: ["SvelteKit", "Tailwind CSS", "TypeScript", "Vercel"],
    description: "A comprehensive SaaS dashboard for managing clients and subscriptions.",
    details: "This project was built from the ground up to provide a seamless user experience for business owners. It features real-time data visualization, secure authentication, and a fully responsive interface that works on all devices. The main challenge was to handle large datasets efficiently without compromising on performance.",
    links: {
      preview: "https://example.com",
      github: "https://github.com/your-username/project-one",
    },
  },
  // Add more projects here
];