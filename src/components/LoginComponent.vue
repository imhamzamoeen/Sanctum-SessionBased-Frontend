<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useCookies } from "@vueuse/integrations/useCookies";

axios.defaults.withCredentials = true;
const LoginForm = ref({
  email: "haamzaay@gmail.com",
  password: "12345678",
});
const cookies = useCookies(["locale"]);
const url = import.meta.env.VITE_APP_URL_LOCAL;

onMounted(async () => {
  axios
    .get(`${url}/sanctum/csrf-cookie`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
});

async function HandleLoginForm() {
  try {
    // await axios.post(`${url}/login`, LoginForm.value, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN"),
    //   },
    // });
    // console.log("success");

    let $response = null;

    await axios
      .get(`${url}/api/user`, {
        headers: {
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN"),
        },
      })
      .then((response) => {
        console.log(`output->response`, response);
        $response = response;
        // Do something with $response
      })
      .catch((error) => {
        // Handle error
      });

    console.log("after");
    console.log($response);
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="flex">Hy from Login Component</div>
  <form @submit.prevent="HandleLoginForm">
    <div class="flex flex-row">
      <label> Email </label>
      <input v-model="LoginForm.email" />

      <label> password </label>
      <input v-model="LoginForm.password" />

      <button class="bg-blue-400 rounded p-2 text-white">Submit</button>
    </div>
  </form>
</template>
