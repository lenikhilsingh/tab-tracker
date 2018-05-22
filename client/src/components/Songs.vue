<template>
<v-layout column>
   <v-flex xs6 offset-xs3>
     <panel title="Songs">
         <div
         v-for="song in songs"
         :key="song.id">
            {{song.title}}
            {{song.artist}}
            {{song.album}}
         </div>
     </panel>
   </v-flex>
 </v-layout>
</template>
<script>
// import AuthenticationService from "@/services/AuthenticationService";
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel";

console.log("here we are");
export default {
  components: {
    Panel
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
</style>
