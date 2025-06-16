  <script>
    import { personal } from '../../data/personal';
  </script>
  
  
  <section class="py-16">
    <h2 class="text-3xl font-bold text-center mb-12 text-accent-green">Contact</h2>
    <div class="text-center max-w-xl mx-auto">
        <p class="text-lg text-gray-300 mb-4">
            I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
        </p>
        <a href={`mailto:${personal.email}`} class="text-accent-orange text-xl font-jetbrains-mono hover:underline">
            {personal.email}
        </a>
    </div>
  </section>