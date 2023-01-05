<template>
  <div class="fixed top-0 right-0 h-full flex z-50 w-full">
    <div
      @click="$emit('closeModal')"
      class="w-1/2 hidden xl:flex bg-black/70"
    ></div>
    <div
      class="w-full h-full xl:w-1/2 flex flex-col z-50 bg-neutral-700 overflow-auto"
    >
      <div class="fixed top-5 left-5">
        <ButtonDefault @click="$emit('closeModal')">
          <span>Zamknij</span>
        </ButtonDefault>
      </div>
      <div @click="moreOptions = !moreOptions" class="fixed top-5 right-5">
        <ButtonDefault isCircle class="h-8 w-8 text-lg">
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/000000/more.png"
          />
        </ButtonDefault>
      </div>
      <div
        v-if="moreOptions"
        class="fixed flex gap-2 p-4 flex-col rounded-lg items-center justify-center text-white bg-default-blue top-[90px] right-10"
      >
        <ButtonDefault
          @click="
            $emit('add-to-favourite', dataModal), (this.moreOptions = false)
          "
          class="gap-2 hover:bg-blue-600 transition-all duration-200"
        >
          <span>Lubię to !</span>
        </ButtonDefault>
      </div>
      <div class="w-full h-96">
        <img
          :src="dataModal.img"
          alt="songImg"
          class="w-full h-full o object-cover bg-center"
        />
      </div>
      <div class="p-4 flex flex-col">
        <span class="text-white text-lg font-semibold">{{
          dataModal.authorName
        }}</span>
        <span
          v-if="dataModal.moreInfs != ''"
          class="text-white text-lmd mt-4"
          >{{ dataModal.moreInfs }}</span
        >
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
import ButtonDefault from "../components/ButtonDefault.vue";
export default {
  emits: ["closeModal", "add-to-favourite", "remove-song"],
  data() {
    return {
      moreOptions: false,
      mySpecialSong: [],
      isFavourite: false,
    };
  },
  components: {
    ButtonDefault,
  },

  props: {
    dataModal: {
      type: Object,
    },
  },
};
</script>
