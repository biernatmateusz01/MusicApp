<template>
  <span
    class="text-xl mt-4 ml-4"
    :class="isBlue ? 'text-default-blue' : 'text-white'"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    isBlue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
