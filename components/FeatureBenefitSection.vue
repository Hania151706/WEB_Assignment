<script setup>
// Import the three icons specific to this section
import iconSettings from '~/assets/images/icon-settings.png'; 
import iconParachute from '~/assets/images/icon-parachute.png'; 
import iconAIChip from '~/assets/images/icon-ai-chip.png'; 
</script>

<template>
  <section class="py-20 bg-white text-gray-800">
    <div class="container mx-auto px-6 text-center max-w-7xl">

      <h2 class="text-3xl md:text-4xl font-semibold text-[#2b2b7a] mb-16">
        Why Teams Use IntelliToggle
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10 text-left mb-20">
        
        <div class="flex flex-col items-start text-left">
          <img :src="iconSettings" alt="Settings Icon" class="w-20 h-18 mb-4" /> 
          
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Safer, faster rollouts</h3>
          <p class="text-gray-600 max-w-xs leading-relaxed text-sm">
            Control feature releases in minutes, not weeks without risking production stability.
          </p>
        </div>
        
        <div class="flex flex-col items-start text-left">
          <img :src="iconParachute" alt="Parachute Icon" class="w-20 h-18 mb-4" /> 
          
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Confidence to ship</h3>
          <p class="text-gray-600 max-w-xs leading-relaxed text-sm">
            Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes.
          </p>
        </div>

        <div class="flex flex-col items-start text-left">
          <img :src="iconAIChip" alt="AI Chip Icon" class="w-20 h-18 mb-4" /> 
          
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Future-ready with AI delivery</h3>
          <p class="text-gray-600 max-w-xs leading-relaxed text-sm">
            Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.
          </p>
        </div>
        
      </div>

      <div class="max-w-6xl mx-auto bg-[#edeefc] p-4 md:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between shadow-md">
       <p class="text-gray-800 text-base mb-4 sm:mb-0 sm:text-left text-center">
        <span class="font-bold">Read a 2-min case note:</span>
         How a sample Flutter app shipped faster with IntelliToggle
         </p>

        <button class="bg-[#ffae34] text-[#2b2b7a] px-8 py-3 rounded-md font-semibold transition hover:bg-[#e69c2e] whitespace-nowrap shadow-sm">
          Read Now
        </button>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureBenefitsSection',
};
</script>