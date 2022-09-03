<template>
  <div class="flex flex-col container my-4 mx-auto">
    <HeadingDefault isBlue>Wszystkie utwory :</HeadingDefault>
    <div
      class="container relative flex flex-wrap items-center justify-center mx-auto mt-5 bg-black-bg home"
    >
      <swiper
        loop
        :spaceBetween="30"
        :modules="modules"
        :autoplay="true"
        navigation
        :breakpoints="{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          '@1.50': {
            slidesPerView: 4.5,
            spaceBetween: 20,
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
            :song="song"
            @get-all-infs="$emit('getAllInfs', $event)"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import SongCard from "../components/SongCard.vue";
import HeadingDefault from "../components/HeadingDefault.vue"

//Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";

//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default {
  emits: ['getAllInfs'],
  data() {
    return {
      allInfs: [],
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
    HeadingDefault
  },
  props: {
    allSongs: {
      type: Array,
    },
  },

  methods: {
    getAllInfs(songItem) {
      this.allInfs = songItem;
    },
  },
};
</script>
