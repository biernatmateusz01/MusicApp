<template>
  <div
    style="box-shadow: inset 0 0 1em #242020"
    class="flex flex-col items-center justify-center bg-neutral-700 min-h-[200px]"
  >
    <div class="container p-16 mx-auto">
      <div class="flex flex-col items-center justify-center mt-2">
        <input
          placeholder="Jakiego wykonawcy szukasz?"
          class="px-12 py-6 text-xs text-white border-2 rounded-full bg-neutral-700"
          v-model="inputValue"
          @input="$emit('change-results', inputValue)"
        />
        <div class="flex flex-wrap justify-center mt-5 gap-4">
          <SongCard
            isSpecial
            v-for="song in specialSongs"
            :key="song.id"
            :song="song"
            @get-all-infs="$emit('getAllInfs', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SongCard from "./SongCard.vue";
export default {
  emits: ["change-results", "getAllInfs"],
  components: {
    SongCard,
  },
  props: {
    specialSongs: {
      type: Array,
    },
  },
  data() {
    return {
      inputValue: null,
    };
  },
};
</script>
