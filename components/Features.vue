<script setup>
// Assuming toggle.png is correctly placed in your assets/images folder
import toggleImage from '~/assets/images/toggle.png' 
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6"> 
      
      <div class="text-center mb-16"> 
        <h2 class="text-2xl font-bold text-gray-800">Trusted by various engineering teams</h2> 
        <div class="flex items-center justify-center gap-32 mt-10 flex-wrap"> 
          <img src="~/assets/images/logo-google-cloud.png" class="h-8" alt="Google Cloud" /> 
          <img src="~/assets/images/logo-aws.png" class="h-8" alt="AWS" />
          <img src="~/assets/images/logo-azure.png" class="h-8" alt="Microsoft Azure" />
          <img src="~/assets/images/logo-digitalocean.png" class="h-8" alt="Digital Ocean" />
          <img src="~/assets/images/logo-ibm.png" class="h-8" alt="IBM" />
        </div>
      </div>

      <div class="text-center my-24"> 
       <h2 class="text-3xl font-semibold text-[#2b2b7a] mb-8">What Is IntelliToggle</h2>

        <div class="grid md:grid-cols-2 gap-12 items-center text-left">
          
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Your AI Dart App's Control Panel For <br>Feature Releases</h3>
            <p class="text-gray-700 mb-4">
              IntelliToggle is a Dart-Powered feature flag that lets you turn features<br> on/off instantly in your application without redeploying code. It allows <br>
              you control roll-outs, run experiments, and fix bugs faster.
            </p>
            <h4 class="font-bold text-gray-900 mb-2">Benefits</h4>
            <ul class="list-disc pl-5 text-gray-700 space-y-2">
              <li>Toggle new features without app updates</li>
              <li>Roll out to specific users or regions</li>
              <li>Instantly rollback when needed</li>
            </ul>
          </div>
          
          <div class="relative">
            <img :src="toggleImage" alt="IntelliToggle Dashboard" class="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
      

    </div> 
    </section>
</template>