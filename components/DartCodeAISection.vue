<script setup>
// Import the AI circuit board background image
import aiBackground from '~/assets/images/ai-background.jpg'; 

// Import the four new feature icons (using user-provided paths)
import iconFlag from '~/assets/images/icon-flag.png';
import iconGraph from '~/assets/images/icon-graph.png';
import iconRobot from '~/assets/images/icon-robot.png';
import iconSearch from '~/assets/images/icon-search.png';
</script>

<template>
  <section class="py-20 text-white relative overflow-hidden">
    
    <div class="absolute inset-0 z-0">
      <img 
        :src="aiBackground" 
        alt="AI Circuit Board Background" 
        class="w-full h-full object-cover" 
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#2f2f6a] to-[#51519b] opacity-90"></div> 
    </div>
    
    <div class="container mx-auto px-6 relative z-10 text-center">
      
      <div class="mb-16">
        <span class="inline-block bg-[#ffae34] text-[#2b2b7a] px-4 py-1 text-sm font-semibold rounded-full mb-6 shadow-md">
          Coming Soon
        </span>
        <h2 class="text-3xl md:text-5xl font-semibold mb-12">
          DartCodeAI That Actually Changes Flagging
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"> 
        
        <div class="flex flex-col items-center text-center p-8 border border-white rounded-xl bg-black bg-opacity-30 backdrop-blur-sm">
          <img :src="iconFlag" alt="Flag Icon" class="w-8 h-8 mb-4" /> 
          <h3 class="text-xl font-semibold mb-2">AutoFlagAI (LLM-Assisted Flag Creation)</h3>
          <p class="text-gray-300 text-base leading-relaxed">
            Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you.
          </p>
        </div>
        
        <div class="flex flex-col items-center text-center p-8 border border-white rounded-xl bg-black bg-opacity-30 backdrop-blur-sm">
          <img :src="iconRobot" alt="Robot Icon" class="w-8 h-8 mb-4" /> 
          <h3 class="text-xl font-semibold mb-2">SmartRamp AI (AI-Driven Rollout Optimization)</h3>
          <p class="text-gray-300 text-base leading-relaxed">
            Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.
          </p>
        </div>

        <div class="flex flex-col items-center text-center p-8 border border-white rounded-xl bg-black bg-opacity-30 backdrop-blur-sm">
          <img :src="iconSearch" alt="Search Icon" class="w-8 h-8 mb-4" /> 
          <h3 class="text-xl font-semibold mb-2">ExplainFlagsAI (LLM Root-Cause + Insights)</h3>
          <p class="text-gray-300 text-base leading-relaxed">
            Understand issues instantly with AI-generated, plain-language insights tied to your flags.
          </p>
        </div>

        <div class="flex flex-col items-center text-center p-8 border border-white rounded-xl bg-black bg-opacity-30 backdrop-blur-sm">
          <img :src="iconGraph" alt="Graph Icon" class="w-8 h-8 mb-4" /> 
          <h3 class="text-xl font-semibold mb-2">AutoSegment AI (Behavioral Segmentation)</h3>
          <p class="text-gray-300 text-base leading-relaxed">
            Target the right users automatically. AI builds segments from live behavior—no manual rules.
          </p>
        </div>
        
      </div>

      <div class="mt-20 text-center max-w-6xl mx-auto"> 
        <h4 class="text-xl font-bold mb-4 text-[#ffae34]">Enterprise Only</h4>
        
        <div class="p-4 border border-white rounded-xl bg-black bg-opacity-30 backdrop-blur-sm w-full">
            <div class="flex flex-col sm:flex-row justify-between items-center w-full">
                <p class="text-lg mb-4 sm:mb-0 text-left w-full sm:w-auto">
  <span class="text-[#ffae34]">Be The First </span> 
  <span class="text-white">To Try Out Our New AI Features.</span>
</p>

                
               <div class="relative w-full sm:w-auto max-w-md">
  <input 
  type="email" 
  placeholder="Enter email address" 
  class="w-full px-4 py-2 pr-36 rounded-md text-white placeholder-gray-300 bg-[#0d0d42] border-none focus:ring-2 focus:ring-[#ffae34] text-sm"
/>

  <button 
    class="absolute right-1 top-1 bottom-1 bg-[#ffae34] text-[#2b2b7a] px-4 rounded-md font-semibold transition hover:bg-[#e69c2e] text-sm"
  >
    Join AI Early Access
       </button>


                   
                </div>
            </div>
        </div>
      </div>
      
    </div>
  </section>
</template>