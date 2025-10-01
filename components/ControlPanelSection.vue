<script setup>
// Import all three images for the cards
import connectScreen from '~/assets/images/connect-screen.png'; 
import createFlagsScreen from '~/assets/images/create-flags-screen.png'; 
import shipControlScreen from '~/assets/images/ship-control-screen.png'; 
</script>

<template>
  <section class="pt-40 pb-20 bg-white"> 
    <div class="container mx-auto px-6">
      
      <h2 class="text-3xl font-semibold text-[#0f0f48] text-center mb-16">
        Control & Power-focused
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div class="flex flex-col items-center text-center">
          <div class="p-6 bg-[#1e1e47] rounded-xl shadow-2xl mb-8 w-full max-w-sm md:max-w-none">
            <img :src="connectScreen" alt="Create OAuth2 Client Screen" class="w-full h-auto object-cover rounded-lg" />
          </div>
          
          <h3 class="text-xl font-semibold text-[#0f0f48] mb-2">Connect</h3>
          <p class="text-base text-gray-700 mb-6 max-w-xs">
            Install SDK in your Dart project in 2 mins.
          </p>
          
          <button class="text-[#ffae34] border border-[#ffae34] px-6 py-2 rounded font-semibold transition hover:bg-[#ffae34] hover:text-white">
            View Documentation
          </button>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="p-6 bg-[#1e1e47] rounded-xl shadow-2xl mb-8 w-full max-w-sm md:max-w-none">
            <img :src="createFlagsScreen" alt="Add New Flag Screen" class="w-full h-auto object-cover rounded-lg" />
          </div>
          
          <h3 class="text-xl font-semibold text-[#0f0f48] mb-2">Create Flags</h3>
          <p class="text-base text-gray-700 mb-6 max-w-xs">
            Define features in IntelliToggle dashboard.
          </p>
          
          <button class="text-[#ffae34] border border-[#ffae34] px-6 py-2 rounded font-semibold transition hover:bg-[#ffae34] hover:text-white">
            View Documentation
          </button>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="p-6 bg-[#1e1e47] rounded-xl shadow-2xl mb-8 w-full max-w-sm md:max-w-none">
            <img :src="shipControlScreen" alt="Feature Flags List Screen" class="w-full h-auto object-cover rounded-lg" />
          </div>
          
          <h3 class="text-xl font-semibold text-[#0f0f48] mb-2">Ship & Control</h3>
          <p class="text-base text-gray-700 mb-6 max-w-xs">
            Flip switches anytime, see instant results.
          </p>
          
          <button class="text-[#ffae34] border border-[#ffae34] px-6 py-2 rounded font-semibold transition hover:bg-[#ffae34] hover:text-white">
            View Documentation
          </button>
        </div>

      </div>
    </div>
  </section>
</template>