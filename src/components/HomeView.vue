<template>
  <div class="relative">
    <BaseLoader v-if="loaderOpen" />
    <div class="relative overflow-x-hidden min-h-screen text-white bg-black-bg">
      <BaseBanner />
      <TopList
        :top5="top5"
        @get-all-infs="getAllInfs"
        @remove-song="removeSong"
      />
      <SpecialsSongs
        :special-songs="specialSongs"
        @change-results="changeResults"
        @get-all-infs="getAllInfs"
      />
      <AllSongs @get-all-infs="getAllInfs" :all-songs="songs" />
      <FavourtieSongsView
        @remove-arr="removeArr"
        @get-all-infs="getAllInfs"
        :favourite-songs="favouriteSongs"
      />
      <BaseFooter />
    </div>
    <MoreInfsView
      v-if="isOpen"
      @close-modal="isOpen = false"
      @add-to-favourite="addItemToFavourite"
      @remove-song="removeSong"
      :data-modal="mySong"
    />
  </div>
</template>

<script>
import BaseLoader from "../components/BaseLoader.vue";
import BaseBanner from "../components/BaseBanner.vue";
import TopList from "../components/TopList.vue";
import SpecialsSongs from "../components/SpecialsSongs.vue";
import AllSongs from "../components/AllSongs.vue";
import BaseFooter from "../components/BaseFooter.vue";
import MoreInfsView from "../components/MoreInfsView.vue";
import FavourtieSongsView from "../components/FavouriteSongs.vue";
import axios from "axios";
import xxx from "../../allSongs.json";
export default {
  name: "HomeView",

  components: {
    BaseBanner,
    TopList,
    SpecialsSongs,
    AllSongs,
    BaseFooter,
    MoreInfsView,
    FavourtieSongsView,
    BaseLoader,
  },

  emits: {
    getAllInfs: null,
  },

  data() {
    return {
      isOpen: false,
      loaderOpen: true,
      mySong: {},
      songs: [],
      top5: [],
      specialSongs: [],
      favouriteData: [],
      favouriteSongs: [],
    };
  },
  methods: {
    getMyData() {
      axios.get("../../allSongs.json").then((response) => {
        this.songs = response.data.songs;
        this.loaderOpen = false;
        this.top5 = response.data.songs.filter((el) => el.top5 === "yes");
        console.log(this.top5)
      });
    },

    changeResults(inputValue) {
      if (inputValue) {
        this.specialSongs = this.songs.filter((song) =>
          song.authorName
            .toLowerCase()
            .includes(inputValue.toLowerCase().trim())
        );
      } else {
        this.specialSongs = [];
      }
    },

    openInfs() {
      this.isOpen = true;
    },

    closeInfs() {
      this.isOpen = false;
    },

    getAllInfs(data) {
      this.isOpen = true;
      this.mySong = data;
    },

    addItemToFavourite(song) {
      this.moreOptions = false;
      this.favouriteData.push(song);
      this.favouriteSongs = [...new Set(this.favouriteData)];
    },

    removeSong(el) {
      console.log("usuń", el);
      this.isOpen = false;
    },

    removeArr(el) {
      el.length = 0;
    },
  },
  mounted() {
    this.changeResults("");
    setTimeout(() => {
      this.getMyData();
    }, 2000);
  },
};
</script>
