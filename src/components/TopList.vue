<template>
  <div @click="$emit('send-all-infs', this.getAllInfs)" class="flex flex-col container mx-auto mt-24">
    <h1 class="text-xl ml-4 text-title-color">Na czasie :</h1>
    <div
      class="container flex flex-wrap items-center justify-center p-4 mx-auto bg-black-bg"
    >
      <SongCard
        v-for="song in top5"
        @get-all-infs="getAllInfs"
        :key="song.id"
        :song="song"
      />
    </div>
  </div>
</template>

<script>
import SongCard from "./SongCard.vue";
export default {
  data() {
    return {
      allInfs: [],
    };
  },
  components: {
    SongCard,
  },
  props: {
    top5: {
      type: Array,
    },
  },

  methods: {
    getAllInfs(songItem) {
      this.allInfs = songItem;
      console.log(songItem);
    },
  },

  created() {
    this.getAllInfs();
  },
};
</script>
