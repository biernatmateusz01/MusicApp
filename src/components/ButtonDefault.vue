<template>
  <button 
    class="bg-default-blue flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-200"
    :class="isCircle ? ['rounded-full', 'py-2' ,'px-2'] : ['rounded-lg', 'py-2', 'px-4']">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isCircle: {
      type: Boolean,
      default: false,
    },
    isHover: {
        type: Boolean,
        default: false,
    }
  },
}
</script>