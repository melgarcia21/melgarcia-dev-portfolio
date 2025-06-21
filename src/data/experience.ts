

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  utilizations: string[];
}

export const experiences: Experience[] = [

  {
    company: "H2 Software Consulting Inc.",
    role: "Software Developer Intern",
    period: "August 2025 - November 2025",
    description: "Collaborated and co-developed a full stack web app using Laravel framework with React and Typescript for client's custom software project",
    highlights: [
      "Worked on the backend using Laravel to implement RESTful APIs and database management.",
      "Developed frontend components using React and integrated them with backend APIs.",
      "Participated in code reviews and followed Agile methodologies to ensure timely delivery of features.",
    ],
    utilizations: ["Laravel", "React", "Typescript", "MySQL", "Git", "Docker", "Postman"],
  },
  {
    company: "Institute of Flexible Learning and Distance Education",
    role: "Frontend Developer Intern",
    period: "February 2025 - May 2025",
    description: "Developed a landing page website using Astro framework for department's website and tasked to create a functional LMS mockup using Next.js, Typescript and Tailwind CSS",
    highlights: [
      "Made a simple Next.js web app that functions as LMS similar to Udemy based on my Figma design for an upcoming e-Learning program.",
      "Built a landing page website with highly organized React project and followed good coding practices to keep the maintainability codebase repository.",
      "Collaborated with  UI/UX designers to implement pixel-perfect, responsive designs.",
    ],
    utilizations: ["Next.js", "Astro", "React", "Typescript", "Tailwind CSS", "Git", "Vercel", "Figma"],
  },

];

