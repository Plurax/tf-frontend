<template>
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
              Icon when menu is closed.
              
              Heroicon name: outline/menu
              
              Menu open: "hidden", Menu closed: "block"
            -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
              Icon when menu is open.
              
              Heroicon name: outline/x
              
              Menu open: "block", Menu closed: "hidden"
            -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:block sm:ml-6">
          <NuxtLink to="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</NuxtLink>
          <NuxtLink v-if="!loggedInUser" to="/login" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Login</NuxtLink>
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <NuxtLink v-if="loggedInUser" to="/tasks" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Aufgaben</NuxtLink>
          <NuxtLink v-if="loggedInUser" to="/tasks/create" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Neue Aufgabe</NuxtLink>
        </div>
      </div>
      <div v-if="loggedInUser" class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
        <div class="flex flex-wrap">
          <div class="w-full sm:w-6/12 md:w-4/12 px-4">
            <div class="relative inline-flex align-middle w-full">
              <button class="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 ease-linear transition-all duration-150 font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize w-full" type="button" v-on:click="toggleDropdown()" ref="btnDropdownRef">{{ loggedInUser.username }}</button>
              <div v-bind:class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" ref="popoverDropdownRef">
                <a href="/profile" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700">
                  Profil
                </a>
                <div class="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25"></div>
                <a href="login" v-on:click="logout" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from "vuex";
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false
    }
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push({path: '/login'})
    },
    toggleDropdown(){
      if(this.dropdownPopoverShow){
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start"
        });
      }
    }
  }
};
</script>
