<template>
  <footer class="bg-[#f0f2fa] text-gray-800 py-16">
    <div class="container mx-auto px-6 max-w-7xl">
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        
        <div class="col-span-2 lg:col-span-2 pr-6">
          <div class="flex items-center mb-4">
            <img src="~/assets/images/blue-icon.png" alt="IntelliToggle Logo Icon" class="h-6 w-6 mr-2" /> 
            <span class="text-xl font-bold text-[#2b2b7a]">IntelliToggle</span>
          </div>
          <p class="text-sm text-gray-600 max-w-sm">
            IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
          </p>
          <div class="mt-4 w-6 h-6 rounded-full bg-gray-600/10 flex items-center justify-center text-xs text-gray-600 cursor-pointer">
            <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 7a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm4.5 5a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
        </div>
        
       <div>
  <!-- Heading stays gray -->
  <h4 class="font-semibold text-gray-500 mb-4 uppercase text-sm">Resources</h4>
  
  <!-- Contents are black -->
  <ul class="space-y-3 text-sm text-black font-semibold">
    <li><a href="#" class="hover:text-[#2b2b7a]">Why IntelliToggle is Different</a></li>
    <li><a href="#" class="hover:text-[#2b2b91]">Customer Support</a></li>
    <li><a href="#" class="hover:text-[#2b2b7a]">Terms & Conditions</a></li>
    <li><a href="#" class="hover:text-[#2b2b7a]">Privacy Policy</a></li>
  </ul>
</div>

        
        <div>
          <h4 class="font-semibold text-gray-500 mb-4 uppercase text-sm">Company</h4>
          <ul class="space-y-3 text-sm text-gray-900 font-semibold">
            <li><a href="#" class="hover:text-[#2b2b7a]">Pricing</a></li>
            <li><a href="#" class="hover:text-[#2b2b7a]">Documentation</a></li>
            <li><a href="#" class="hover:text-[#2b2b7a]">About Us</a></li>
          </ul>
        </div>

        <div class="col-span-2 md:col-span-1">
          <h4 class="font-semibold text-gray-500 mb-4 uppercase text-sm">Subscribe to Newsletter</h4>
          
          <div class="flex">
            <input 
              type="email" 
              placeholder="Enter email address" 
              class="flex-grow p-3 border border-gray-300 rounded-l-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b2b7a] focus:ring-opacity-50" 
            />
            <button 
              class="bg-[#ffae34] text-[#2b2b7a] px-4 py-3 rounded-r-lg font-semibold transition hover:bg-[#e69c2e] whitespace-nowrap text-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
        
      </div>
      
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>