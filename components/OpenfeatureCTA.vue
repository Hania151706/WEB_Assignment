<template>
  <section class="bg-[#f4f4f8] py-20"> <!-- light grey background -->
    <div class="flex flex-row flex-nowrap container mx-auto px-8">
      
      <!-- Image Section -->
      <div class="w-1/2 flex items-center justify-center">
        <img :src="logo" alt="OpenFeature Logo" class="max-w-sm h-auto rounded shadow-md">
      </div>

      <!-- Text Section -->
      <div class="w-1/2 flex flex-col justify-center text-left space-y-4">
        <h2 class="text-2xl md:text-3xl font-semibold text-[#040405]">
          Seamless Feature Management with <br />OpenFeature
        </h2>

        <p class="text-gray-700 max-w-lg leading-relaxed">
          Aortem now integrates with OpenFeature to provide developers 
          with a powerful, standardized approach to feature flagging and 
          dynamic configuration. Ship features faster, test safely, and 
          optimize user experiences effortlessly.
        </p>

        <button 
          class="w-auto self-start bg-[#ffae34] text-white px-6 py-2 rounded font-semibold 
                 transition hover:bg-[#e69c2e] inline-flex items-center shadow-md"
        >
          Learn More 
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import logo from '@/assets/images/logo-openfeature.png'
</script>
