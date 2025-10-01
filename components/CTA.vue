<template>
  <section class="py-20 bg-white text-white">
    <div class="container mx-auto px-14 max-w-6xl">
      
      <div class="p-8 md:p-12 rounded-xl shadow-2xl text-center relative overflow-hidden" 
           style="background: linear-gradient(135deg, #0f0f48 0%, #4444a8 100%);">
        
        <div class="absolute inset-0 opacity-10 pointer-events-none" 
             style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHZpZXdCb3g9JzAgMCA2MCA2MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxwYXRoIGZpbGw9JyMwMDAwMDAnIGZpbGwtb3BhY2l0eT0nLjEnIGQ9J00zMCAwTDYwIDMwdjMwSDMwSDAsMzBgMCYjMzk7IGZpbGwtcnVsZT0nb2RkJy8+PC9nPg=='');">
        </div>

        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Launch Features Confidently With<br> AI Driven Feature Flags
          </h2>
          
          <p class="text-lg text-gray-300 mb-8">
            Start for free, scale as your team grows
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            
            <button class="bg-[#ffae34] text-[#0f0f48] px-8 py-3 rounded-lg font-bold text-lg transition hover:bg-[#e69c2e] shadow-lg">
              Start for $1/mo
            </button>
            
            <button class="bg-transparent border-2 border-[#ffae34] text-[#ffae34] px-8 py-3 rounded-lg font-semibold text-lg transition hover:bg-[#ffae34] hover:text-[#2b2b7a]">
              Join AI Early Access
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AIDrivenCTA',
};
</script>