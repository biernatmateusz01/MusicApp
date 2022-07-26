<template>
  <div
    @click="$emit('get-all-infs', this.song)"
    class="flex rounded-lg flex-col cursor-pointer transition delay-100 duration-300 ease-in-out hover:bg-[#363030]"
    :class="isSpecial ? '' : 'bg-[#2b2727]'"
  >
    <a class="flex flex-col m-4 w-52 h-80">
      <img
        :src="song.img"
        class="object-cover rounded-lg h-5/6 w-full"
        alt="SongImg"
      />
      <h2 class="mt-1 text-lg text-gray-100 truncate">
        {{ song.authorName }}
      </h2>
      <p class="text-sm text-gray-400 truncate">{{ song.title }}</p>
    </a>
  </div>
</template>
<script>
export default {
  emits: ["get-all-infs"],

  props: {
    song: {
      type: Object,
    },
    isSpecial: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
