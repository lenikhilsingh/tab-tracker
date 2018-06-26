<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <songs-search-panel/>
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
// import AuthenticationService from "@/services/AuthenticationService";
import SongsPanel from "./SongsPanel";
import SongsSearchPanel from "./SongsSearchPanel";
import SongsService from "@/services/SongsService";

console.log("here we are");
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    // make a request to the backend for all the songs
    // this makes a get request the moment the page is mounted
    // always use .data, cz thats how axios returns us our data.
    this.songs = (await SongsService.index()).data;
  }
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
