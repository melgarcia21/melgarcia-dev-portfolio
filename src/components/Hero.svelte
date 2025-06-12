<script lang="ts">
  import Sparkles from "./ui/Sparkles.svelte"
  import TextFlip from "./ui/TextFlip.svelte";

  const name = "Mel Garcia";

  const roles = [
    ["Full Stack", "#4CAF50", "6000"],
    ["Frontend", "#2196F3", "3000"],
    ["Backend", "#F44336", "3000"],
  ];

  const bio =
    "Dev specializing in building websites, web applications, and mobile apps using modern frameworks and technologies.";
</script>

<section class="py-20 fade-in">
  <div class="mx-auto px-4">
    <div class="flex flex-col-reverse md:flex-row">
      <!-- Left Side: Text Information -->
      <div class="w-full md:w-3/8 mt-6 md:mt-0 md:pr-6 md:border-r md:border-gray-700">
        <div class="text-left">


            <h1 class="text-4xl md:text-5xl font-bold mb-2">
            <Sparkles text={name} />
            </h1>


          <h1 class="text-4xl md:text-5xl font-bold mb-2">{name}</h1>

          <TextFlip role={roles} />
          
          <p class="text-gray-300">{bio}</p>

          <button class="bg-blue-500 text-white py-2 px-4 rounded my-4">
            Download Resume
          </button>
        </div>
      </div>

      <!-- Right Side: Image -->
      <div class="w-full md:w-5/8 md:pl-6">
        <div class="flex justify-center">
          <img
            src="/images/portrait.png" 
            alt="Mel Garcia Profile"
            class="md:w-auto md:h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>