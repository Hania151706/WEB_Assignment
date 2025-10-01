<template>
  <section class="py-20 bg-gray-50 text-gray-800">
    <div class="container mx-auto px-6 text-center">
      
      <h2 class="text-3xl md:text-4xl font-semibold text-[#1d1d5b] mb-16">
        Plans Built For Every Stage Of Growth
      </h2>
      
      <div class="flex flex-col items-center mb-16">
  <!-- Pricing Card -->
  <div class="w-full max-w-sm p-6 rounded-xl shadow-2xl overflow-hidden" 
       style="background: linear-gradient(135deg, #4444a8 0%, #1d1d5b 100%);">
    
    <p class="text-white text-lg font-semibold mb-2 opacity-80">
      Prices starts at
    </p>
    <div class="flex justify-center items-end text-white mb-6">
      <span class="text-5xl font-bold">$10</span>
      <span class="text-lg font-medium ml-2 self-end">/month</span>
    </div>
  </div>

  <!-- Separate Button Below -->
  <button class="mt-6 w-full max-w-sm bg-[#ffae34] text-[#1d1d5b] py-3 rounded-lg font-semibold text-base transition hover:bg-[#e69c2e] shadow-lg">
    View Subscription Details
  </button>
</div>

      
      <div class="flex justify-center">
        <div class="w-full max-w-5xl p-6 md:p-8 bg-white rounded-xl shadow-xl border border-gray-100">
          <div class="flex flex-col md:flex-row justify-between items-center text-left">
            
           <div class="mb-4 md:mb-0 w-full">
  <h3 class="text-2xl font-bold text-[#1d1d5b] mb-2 whitespace-nowrap">
    Start Your 7-Day Free Sandbox Plan
  </h3>
  <p class="text-gray-500 text-sm">
    Join over 1,000+ startups already growing with Untitled.
  </p>
</div>

            
            <div class="flex flex-col sm:flex-row gap-4 justify-end w-full md:w-2/5">
              <button class="bg-[#ffae34] text-[#1d1d5b] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e69c2e] shadow-md w-full sm:w-auto">
                Get Started
              </button>
              
              <button class="border border-[#ffae34] text-[#ffae34] px-6 py-3 rounded-lg font-semibold transition hover:bg-gray-50 w-full sm:w-auto">
                Learn More
              </button>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
// No script logic needed for this static section
export default {
  name: 'PricingSandboxSection',
};
</script>