<script lang="ts">
    import { personalData } from '../data/personal';
</script>

<section class="text-center py-20 fade-in">
    <img
        src={personalData.profile}
        alt={personalData.name}
        class="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-accent-purple"
    />
    <h1 class="text-4xl md:text-5xl font-bold mb-2">
        {personalData.name}
    </h1>
    <p class="text-xl text-accent-blue mb-6">{personalData.role}</p>
    <p class="max-w-2xl mx-auto text-gray-300 leading-relaxed">
        {personalData.bio}
    </p>
</section>