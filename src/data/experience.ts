export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Innovative Tech Inc.",
    role: "Frontend Developer",
    period: "Jan 2022 - Present",
    description: "Developed and maintained user-facing features for a large-scale SaaS platform, focusing on performance and accessibility.",
    highlights: [
      "Led the migration of a legacy jQuery codebase to SvelteKit, improving load times by 40%.",
      "Built a reusable component library with Storybook, increasing development speed by 25%.",
      "Collaborated with UI/UX designers to implement pixel-perfect, responsive designs.",
    ],
  },
  // Add more experiences here
];

export const education = [
    {
        institution: "University of Technology",
        degree: "Bachelor of Science in Computer Science",
        period: "2018 - 2022",
    }
]