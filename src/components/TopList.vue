<template>
  <div class="flex flex-col container mx-auto mt-24">
    <HeadingDefault isBlue>Na czasie :</HeadingDefault>
    <div
      class="container flex flex-wrap items-center justify-center p-4 mx-auto bg-black-bg"
    >
      <SongCard
        isSpecial
        v-for="song in top5"
        @get-all-infs="$emit('getAllInfs', $event)"
        :key="song.id"
        :song="song"
      />
    </div>
  </div>
</template>

<script>
import SongCard from "./SongCard.vue";
import HeadingDefault from "../components/HeadingDefault.vue"
export default {
  emits: ["getAllInfs"],
  data() {
    return {
      allInfs: [],
    };
  },
  components: {
    SongCard,
    HeadingDefault
  },
  props: {
    top5: {
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
