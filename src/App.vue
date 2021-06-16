<template>
  <div id="root" class="h-full w-screen">
    <img class="m-auto pt-4" alt="Vue logo" src="./assets/logo.png" />
    <div id="app" class="p-6 sticky bg-white top-0">
      <router-link to="/" class="px-4">Home</router-link>
      <router-link to="/about" class="px-4">About</router-link>
      <router-link to="/store" class="px-4">Store</router-link>
    </div>
    <router-view />
  </div>
</template>
