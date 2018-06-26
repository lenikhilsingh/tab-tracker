<template>
  <v-toolbar fixed class="cyan" dark>
<!-- --------------------------------------------------------------------------------------------------- -->
    <v-toolbar-title class="mr-4">
      <router-link
      class="home"
      tag="span"
        :to="{
          name: 'songs'
        }">
        TabTracker
      </router-link>
    </v-toolbar-title>
<!-- --------------------------------------------------------------------------------------------------- -->
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>
<!-- --------------------------------------------------------------------------------------------------- -->
    <v-spacer></v-spacer>
<!-- when you put to, it looks for anything that matches the router in index.js -->
 <!-- v-if="!$store.state.isUserLoggedIn" checks the state whther user has logged in  -->
 <!-- only display if user is not logged in -->
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>
<!-- --------------------------------------------------------------------------------------------------- -->
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
<!-- --------------------------------------------------------------------------------------------------- -->
 <!-- display this if the user is logged in -->
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
        Log Out
      </v-btn>
<!-- --------------------------------------------------------------------------------------------------- -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "songs"
      });
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #e9e;
}
</style>
