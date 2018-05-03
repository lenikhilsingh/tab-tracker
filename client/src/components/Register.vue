
<template>
 <div>
   <h1>Register</h1>
   <input type="email"
   name="email"
   v-model="email"
   placeholder="email"
    />
    <br>
  <input type="passowrd"
   name="password"
   v-model="password"
   placeholder="password"
    />
    <br>
    <button
      @click="register">
      Register
    </button>
 </div>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  // everything inside your script tag is your controller
  // you can kind of bind your html using some keywords
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<style scoped>

</style>
