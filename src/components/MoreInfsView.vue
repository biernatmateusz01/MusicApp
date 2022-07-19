<template>
  <div class="fixed top-0 right-0 h-full flex z-50 w-full">
    <div
      @click="$emit('closeModal')"
      class="w-1/2 hidden xl:flex bg-black/50 blur-xl"
    ></div>
    <div
      class="w-full h-full xl:w-1/2 flex flex-col z-50 bg-neutral-700 overflow-auto"
    >
      <div class="fixed top-5 left-5 w-full">
        <button
          @click="$emit('closeModal')"
          class="h-8 flex items-center justify-center text-white p-4 bg-title-color rounded-lg"
        >
          <div></div>
          <span>Zamknij</span>
        </button>
      </div>
      <div class="w-full h-96">
        <img
          :src="dataModal.secondImg"
          alt="songImg"
          class="w-full h-full o object-cover bg-center"
        />
      </div>
      <div class="p-4 flex flex-col">
        <span class="text-white text-lg font-semibold">{{
          dataModal.authorName
        }}</span>
        <span class="text-white text-lmd mt-4">{{ dataModal.moreInfs }}</span>
      </div>
      <div class="w-4/5 block m-auto mt-4 items-center justify-center mb-4">
        <iframe
          width="100%"
          height="315"
          :src="dataModal.link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["closeModal"],
  data() {
    return {
      mySpecialSong: [],
    };
  },
  props: {
    dataModal: {
      type: Object,
    },
  },
};
</script>
