<template>
  <div class="antialiased font-inter min-h-screen flex flex-col">
    <!-- Header always included -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">
      <slot />
    </main>

   
  </div>
</template>

<script setup>
// Nuxt auto-imports components from ~/components by default
// No need to manually import unless auto-import is disabled
</script>
