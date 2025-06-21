<!-- src/components/Education.svelte -->
<script lang="ts">
  const education = [
    {
      institution: "Rizal Technological University",
      degree: "Bachelor of Science in Information Technology",
      period: "2022 - 2026",
    },
    {
      institution: "Microcadd Institute",
      degree: "Visual Graphic Design NCIII",
      period: "2021 - 2022",
    },
    {
      institute: "Arellano University",
      degree: "TechVoc - Information & Communication Technology",
      period: "2019 - 2021 ",
    },
  ];

  const educationItems = education.map(edu => ({
    title: edu.degree,
    subtitle: edu.institution || edu.institute,
    period: edu.period,
  }));
</script>

<section class="max-w-3xl my-16">
  <div class="title-wrapper">
    <div class="icon-box">
      <img src="/icons/education-icon.png" class="h-8 w-8" alt="Education Icon" />


    </div>
    <h3 class="title">Education</h3>
  </div>

  <ol class="timeline-list">
    {#each educationItems as item}
      <li class="timeline-item">
        <h4 class="item-title">{item.title}</h4>
        <p class="item-period">{item.period}</p>
        <p class="item-subtitle">{item.subtitle}</p>
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
    background-color: #334155; /* Corresponds to slate-700 */
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
    border: 1px solid #475569; /* slate-600 */
    background: linear-gradient(to bottom, #334155, #1e293b); /* slate-700 to slate-800 */
    padding: 12px;
    color: #38bdf8; /* sky-400 */
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.5), 0 4px 10px rgba(0,0,0,0.3);
  }

  .title {
    font-size: 1.5rem; /* 2xl */
    line-height: 2rem;
    font-weight: 700; /* bold */
    color: #ffffff; /* white */
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
    background-color: #334155; /* slate-700 */
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
    background: linear-gradient(to bottom, #38bdf8, #0ea5e9); /* sky-400 to sky-500 */
    top: 5px;
    left: -35.5px;
    box-shadow: 0 0 0 7px rgba(30, 41, 59, 0.5); /* slate-800 with 50% opacity */
  }

  /* Text styles */
  .item-title {
    color: #ffffff;
    font-weight: 600; /* semibold */
    font-size: 1rem; /* base */
    line-height: 1.25rem;
    margin-bottom: 8px; /* mb-2 */
  }
  .item-period {
    color: #38bdf8; /* sky-400 */
    font-size: 0.875rem; /* sm */
    line-height: 1.25rem;
    margin-bottom: 12px; /* mb-3 */
  }
  .item-subtitle {
    color: #d1d5db; /* slate-300 */
    font-weight: 300; /* light */
    line-height: 1.6;
  }
</style>