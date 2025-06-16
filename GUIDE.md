# 🛠️ Codebase Guide

This guide provides an overview of how the codebase is structured, the architectural patterns used, and how data flows through the application.

---

## 📂 File Structure

The `src` folder is organized into the following directories:

```text
src/
├── components/         # Reusable UI components
│   ├── about/          # Components specific to the About page
│   ├── home/           # Components specific to the Home page
│   ├── projects/       # Components specific to the Projects page
│   └── ui/             # General-purpose UI components (e.g., buttons, cards)
├── data/               # Static data files (e.g., projects, personal info, experience)
├── layouts/            # Layout components (e.g., header, footer, main layout)
├── lib/                # Utility functions and helpers
│   └── utils/          # Utility functions (e.g., className management)
├── pages/              # Astro pages (Home, About, Projects)
├── styles/             # Global CSS styles
└── utils/              # Additional utility functions (e.g., animations)
```

---

## 🏗️ Architecture and Patterns

### Component-Based Design

- The application is built using reusable **Svelte** components.
- Components are grouped by their purpose:
    - **Page-specific components**: Located in `components/about/`, `components/home/`, and `components/projects/`.
    - **General-purpose UI components**: Located in `components/ui/`.

### Data-Driven Architecture

- Static data is stored in the `data/` directory as TypeScript files.
- Data files include:
    - `personal.ts`: Contains name, bio, and contact links.
    - `projects.ts`: Contains project title, description, tech stack, and links.
    - `experience.ts`: Contains professional experience details.
    - `education.ts`: Contains educational background.

### Layouts

- The `layouts/` directory includes shared layout components like `Layout.astro`.
- Common elements like `Navbar.svelte` and `Footer.svelte` are included here.

### Styling

- Global styles are defined in `global.css` using **Tailwind CSS**.
- Uses utility classes and CSS variables for consistent design.

### Utility Functions

- Utility logic is placed in `lib/utils/` and `utils/`.
- Example: `cn.ts` handles dynamic class name combinations.

---

## 🔗 Data Referencing

### Static Data

Static data is imported from the `data/` directory into components or pages.

**Example:**

```ts
import { personal } from '../../data/personal';
```

Used to dynamically populate sections like name, bio, and contact links.

### Dynamic Data

Projects data is used to generate dynamic routes for individual project pages using the slug.

**Example:**

```ts
export async function getStaticPaths() {
    return projects.map((project) => ({
        params: { slug: project.slug },
        props: { project },
    }));
}
```

---

## 🧩 How It Works

### Pages

- Pages like **Home**, **About**, and **Projects** are defined in the `pages/` directory as `.astro` files.
- They import layouts and page-specific components to render content.

### Components

- Modular and reusable components.
- Example: `ProjectCard.svelte` displays project info and is reused in multiple pages.

### Styling

- Styled using **Tailwind CSS**.
- Custom animations are added in `global.css` using classes like `fade-in`.

### Dynamic Routing

- The `[slug].astro` file in `pages/projects/` dynamically renders a page per project using the `slug` field in `projects.ts`.

---
