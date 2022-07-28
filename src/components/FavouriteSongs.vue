<template>
  <div v-if="favouriteSongs.length != 0" class="w-full bg-neutral-700 pb-3">
    <div class="container mx-auto flex flex-col bg-neutral-700">
      <HeadingDefault>Ulubione :</HeadingDefault>
      <div class="w-full flex gap-2 mt-4 px-4">
        <ButtonDefault @click="$emit('remove-arr', favouriteSongs)"
          >wyzeruj listę ulubionych !</ButtonDefault
        >
        <!-- <ButtonDefault @click="$emit('sort-table', favouriteSongs)"
          >Posortuj od A-Z</ButtonDefault
        > -->
      </div>
      <div class="flex flex-wrap  mt-5">
        <SongCard
          isSpecial
          v-for="song in favouriteSongs"
          :key="song.id"
          :song="song"
          @get-all-infs="$emit('getAllInfs', $event)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SongCard from "../components/SongCard.vue";
import ButtonDefault from "../components/ButtonDefault.vue";
import HeadingDefault from "../components/HeadingDefault.vue";
export default {
  emits: ["remove-arr", "sort-table"],

  components: {
    SongCard,
    ButtonDefault,
    HeadingDefault,
  },

  props: {
    favouriteSongs: {
      type: Array,
    },
  },

  methods: {
    deleteArr() {
      this.favouriteSongs.length = 0;
    },
  },
};
</script>
