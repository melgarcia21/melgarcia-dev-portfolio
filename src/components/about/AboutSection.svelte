<script>

    import SocialLinks from '../SocialLinks.svelte';

    import { personal } from '../../data/personal';

    const name = personal.name;
    const role = personal.role;
    const bio = personal.bio;

    const profile = personal.profile;

</script>


<section class="fade-in">
    <div class="text-center">
        <h1 class="text-4xl font-bold">About Me</h1>
        <img src={profile} alt={name} class="w-24 h-24 mx-auto my-6 border-2 border-accent-blue"/>

        <p class="text-lg text-gray-300 mb-4">{role}</p>

        <p class="max-w-3xl mx-auto text-gray-300 leading-relaxed">{bio}</p>
    </div>

    <SocialLinks />



</section>