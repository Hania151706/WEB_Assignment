<script setup>
import bgSlanted from '~/assets/images/bg-slanted.png' 
</script>

<template>
  <section class="relative overflow-hidden text-white pt-32 pb-64">
    
    <img
      :src="bgSlanted"
      alt=""
      aria-hidden="true"
      class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
    />

    <div class="relative z-10 container mx-auto px-6 max-w-4xl text-center">
      
      <div>
        <h1 class="text-4xl md:text-6xl font-semibold leading-tight">
          The First <span class="bg-[#ffae34] text-[#27278a] px-2 py-1 rounded">Dart-Native</span> Feature Flag
          <br />
          <span class="text-white">With DartCodeAI</span>
        </h1>

        <p class="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Feature flags built for Dart. Ship faster, roll back <br>safely, and scale with AI-powered delivery
        </p>

        <p class="mt-2 text-xl font-semibold text-[#ffae34]">
          Starting at just $1/month
        </p>
        
        <div class="mt-8 flex gap-4 justify-center items-end">
          <div class="flex flex-col items-center">
            <p class="text-sm text-white/70 mb-2">
              Valid till 15th September, 2025
            </p>
            <button class="bg-[#ffae34] text-[#0f0f48] px-6 py-3 rounded font-semibold transition hover:bg-[#e69c2e] w-40">
              Get Access
            </button>
          </div>

          <button class="border border-[#ffae34] text-[#ffae34] px-6 py-3 rounded font-medium transition hover:bg-[#ffae34] hover:text-[#2b2b7a]">
            Join AI Early Access
          </button>
        </div>
      </div>
    </div>

   <div class="relative z-10 container mx-auto px-6 mt-16 max-w-6xl">
  <div class="bg-white rounded-xl shadow-2xl overflow-hidden"> 
    <div class="aspect-video bg-gray-100 flex items-center justify-center"> 
      <div class="bg-white/10 p-4 rounded-full transition-transform hover:scale-105 cursor-pointer">
        <img src="/assets/images/icon-play.png" alt="Play Icon" class="w-16 h-16" />
      </div>
    </div>
  </div>
</div>

  </section>
</template>