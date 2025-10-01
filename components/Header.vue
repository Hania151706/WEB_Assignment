<template>
  <header class="bg-gradient-to-r from-[#1f1148] to-[#3a2a7a] text-white">
    <div class="container flex items-center justify-between h-16">
      <div class="flex items-center gap-3">
        <img src="~/assets/images/logo-icon.png" alt="logo" class="h-8 w-8"/>
        <span class="font-semibold">IntelliToggle</span>
      </div>

      <!-- desktop nav -->
     <nav class="hidden md:flex flex-1 justify-center items-center gap-6">
  <a class="hover:underline" href="#">Home</a>
  <a class="hover:underline" href="#">About</a>
  <a class="hover:underline" href="#">Pricing</a>
</nav>

<!-- Button on the right -->
<div class="hidden md:flex items-center">
  <button class="bg-accent text-[#2b2b7a] font-semibold px-4 py-2 rounded">Start Sandbox</button>
</div>

      <!-- mobile hamburger -->
      <div class="md:hidden">
        <button
          @click="open = !open"
          :aria-expanded="open.toString()"
          aria-label="Toggle menu"
          class="p-2 rounded focus:outline-none focus:ring-2"
        >
          <svg v-if="!open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- mobile menu -->
    <div v-show="open" class="md:hidden bg-[#2a1a58]">
      <nav class="px-4 pb-4">
        <a class="block py-2 border-b border-white/10" href="#">Product</a>
        <a class="block py-2 border-b border-white/10" href="#">Docs</a>
        <a class="block py-2 border-b border-white/10" href="#">Pricing</a>
        <div class="py-3">
          <button class="w-full bg-white text-[#2b2b7a] py-2 rounded">Get Started</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
/* small visual tweak so mobile menu animates if desired */
[v-cloak] { display: none; }
</style>
