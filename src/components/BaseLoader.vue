<template>
  <div
    class="sticky flex items-center flex-col justify-center top-0 left-0 bg-black h-screen w-screen z-[51]"
  >
    <div class="lds-ripple">
      <span class="text-xl font-extrabold"> MusicAPP </span>
    </div>
    <div class="progress-container">
      <div class="progress"></div>
    </div>
  </div>
</template>

<style scoped>
.lds-ripple span {
  color: #114df1;
  animation: lds-ripple 2s infinite;
}
.progress-container {
  border: 1px solid #114df1;
  margin-top: 4px;
  width: 250px;
  animation: lds-ripple 2s infinite;
  height: 28px;
}
.progress {
  height: 100%;
  background: #114df1;
  animation: progress-bar 2s;
}

@keyframes progress-bar {
  0% {
    width: 10%;
  }
  25% {
    width: 25%;
  }
  50% {
    width: 60%;
  }
  75% {
    width: 75%;
  }
  100% {
    width: 100%;
  }
}
</style>
