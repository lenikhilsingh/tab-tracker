<template>
  <div>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          v-model="artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          v-model="genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          v-model="album"
        ></v-text-field>

        <v-text-field
          label="album Image Url"
          v-model="albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="Youtube ID"
          v-model="youtubeId"
        ></v-text-field>

      </panel>
  </div>
</template>

<script>
// import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    };
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
</style>
