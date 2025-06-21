<!-- src/components/Experience.svelte -->
<script lang="ts">
  const experiences = [
    {
      company: "H2 Software Consulting Inc.",
      role: "Software Developer Intern",
      period: "August 2025 - November 2025",
      description: "Collaborated and co-developed a full stack web app using Laravel framework with React and Typescript for client's custom software project.",
    },
    {
      company: "Institute of Flexible Learning and Distance Education",
      role: "Frontend Developer Intern",
      period: "February 2025 - May 2025",
      description: "Developed a landing page website using Astro framework for department's website and tasked to create a functional LMS mockup using Next.js, Typescript and Tailwind CSS.",
    },
  ];

  const experienceItems = experiences.map(exp => ({
    title: exp.role,
    subtitle: exp.company,
    period: exp.period,
    description: exp.description,
  }));
</script>

<section class="max-w-3xl my-16">
  <div class="title-wrapper">
    <div class="icon-box">
      <img src="/icons/experience-icon.png" class="h-8 w-8" alt="Experience Icon" />
    </div>
    <h3 class="title">Experience</h3>
  </div>

  <ol class="timeline-list">
    {#each experienceItems as item}
      <li class="timeline-item">
        <h4 class="item-title">{item.title}</h4>
        <p class="item-period">{item.period}</p>
        <p class="item-subtitle">{item.subtitle}</p>
        <p class="item-description">{item.description}</p>
      </li>
    {/each}
  </ol>
</section>

<style>
  .title-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 30px;
  }

  .title-wrapper::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 1px;
    background-color: #334155;
    left: 24px;
    height: 30px;
  }
  
  .icon-box {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: 1px solid #475569; 
    background: linear-gradient(to bottom, #334155, #1e293b); 
    padding: 12px;
    color: #38bdf8; 
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.5), 0 4px 10px rgba(0,0,0,0.3);
  }

  .title {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: #ffffff;
  }

  .timeline-list {
    margin-left: 55px;
  }
  
  .timeline-item {
    position: relative;
  }
  
  .timeline-item:not(:last-child) {
    padding-bottom: 25px;
  }

  .timeline-item:not(:last-child)::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #334155;
    top: 15px;
    left: -31px;
  }

  .timeline-item::after {
    content: '';
    position: absolute;
    z-index: 5;
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #38bdf8, #0ea5e9);
    top: 5px;
    left: -35.5px;
    box-shadow: 0 0 0 7px rgba(30, 41, 59, 0.5); 
  }

  /* Text styles */
  .item-title {
    color: #ffffff;
    font-weight: 600; 
    font-size: 1rem; 
    line-height: 1.25rem;
    margin-bottom: 8px;
  }
  .item-period {
    color: #38bdf8; 
    font-size: 0.875rem; 
    line-height: 1.25rem;
    margin-bottom: 12px; 
  }
  .item-subtitle {
    color: #d1d5db;
    font-weight: 300; 
    line-height: 1.6;
  }
  .item-description {
    color: #9ca3af;
    font-weight: 300;
    line-height: 1.6;
    margin-top: 4px; 
  }
</style>