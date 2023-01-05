<template>
  <div>
    <div class="fixed top-0 flex left-0 h-screen justify-center items-center w-screen bg-black z-[60]">
      <img src=""/>
      <span class="text-white text-3xl">
      Przerwa Techniczna
  <br>
  Zmieniamy się dla Ciebie daj nam chwilkę czasu.
      </span>
    </div>
    <HomeView/>
  </div>
</template>

<script>
import HomeView from './components/HomeView.vue';

export default {
  components: {
    HomeView
  }
}
</script>

