<template>
  <div 
  @get-all-infs="getMeSongInfs"
  class="absolute top-0 right-0 z-[90] flex w-full h-full">
    <div class="w-1/2 hidden xl:flex h-full bg-black/50 blur-xl"></div>
    <div
      class="w-full xl:w-1/2 h-full flex flex-col z-[90] bg-neutral-700 overflow-scrool"
    >
      <div class="w-full h-1/5 bg-red-600">
        <img
          :src="mySpecialSong.secondImg"
          alt="songImg"
          class="w-full h-full o object-cover bg-center"
        />
      </div>
      <div class="p-4 flex flex-col">
        <span class="text-white text-lg font-semibold">{{ mySpecialSong.authorName }}</span>
        <span class="text-white text-lmd mt-4"
          >{{mySpecialSong.moreInfs}}</span
        >
      </div>
      <div class="w-full mt-4 flex items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mr4_R3qrKEc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mySpecialSong: {
        authorName: 'Mrozu',
        moreInfs: "W swoim najnowszym singlu „Złoto” Mrozu wraca do pierwszej połowy lat 90., czasu beztroski, swobody i przyjemnej ekscytacji związanej z tym, co przyniesie przyszłość. Piosenka narodziła się po dotarciu trzech kumpli do górskiej chaty z zapierającym dech widokiem na Jezioro Czorsztyńskie. Ze sobą zabraliśmy gitary, sprzęt studyjny i rowery. Muzyka do piosenki „Złoto” to efekt pierwszej nocy w głuszy, która wyzwoliła niesamowitą radość z grania i zapomnienie o trudnej sytuacji, która nas muzyków obecnie dotknęła - powiedział o nowymsinglu Mrozu.",
        secondImg: "https://d-art.ppstatic.pl/kadry/k/r/1/74/2e/60abb77f92936_o_xlarge.jpg",
      }
    }
  },
  emits:['send-all-infs'],
  methods: {
    getMeSongInfs(song){
      this.mySpecialSong.push(song);
    }
  },
};
</script>
