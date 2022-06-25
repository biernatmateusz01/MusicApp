<template>
  <div class="flex flex-col">
    <a
      class="flex flex-col items-center justify-center m-4 transition-transform duration-500 w-52 h-80 hover:scale-110"
      :href="song.link"
      target="_blank"
    >
      <img :src="song.img" class="object-cover h-5/6 w-full" />
      <h2 class="mt-1 text-center text-gray-100 truncate">
        {{ song.authorName }}
      </h2>
      <p class="mt-1 text-center text-gray-100 truncate">{{ song.title }}</p>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    song: {
      type: Object,
    },
  },
};
</script>
