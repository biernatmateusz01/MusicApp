<template>
  <div
    @click="$emit('get-my-song', 'xd')"
    class="flex flex-col cursor-pointer"
  >
    <a
      class="flex flex-col items-center justify-center m-4 transition-transform duration-500 w-52 h-80 hover:scale-110"
    >
      <img :src="song.img" class="object-cover h-5/6 w-full" alt="SongImg" />
      <h2 class="mt-1 text-center text-gray-100 truncate">
        {{ song.authorName }}
      </h2>
      <p class="mt-1 text-center text-gray-100 truncate">{{ song.title }}</p>
    </a>
  </div>
</template>
<script>
export default {
  emits:['get-my-song'],
  props: {
    song: {
      type: Object,
    },
  },
};
</script>
