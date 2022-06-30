<template>
  <div class="flex flex-col container my-4 mx-auto">
    <h1 class="text-xl ml-4 text-title-color">Wszystkie utwory :</h1>
    <div
      class="container relative flex flex-wrap items-center justify-center mx-auto mt-5 bg-black-bg home"
    >
      <swiper
        :spaceBetween="30"
        :modules="modules"
        :autoplay="true"
        navigation
        :breakpoints="{
          '@0.00': {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="song in allSongs"
          :key="song.id"
          class="flex items-center justify-center"
        >
          <SongCard 
          @some-event="callback"
          :song="song" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import SongCard from "../components/SongCard.vue";

//Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";

//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default {
  data() {
    return {
      modules: [Navigation, Autoplay],
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
    };
  },

  components: {
    SongCard,
    Swiper,
    SwiperSlide,
  },
  props: {
    allSongs: {
      type: Array,
    },
  },
};
</script>
