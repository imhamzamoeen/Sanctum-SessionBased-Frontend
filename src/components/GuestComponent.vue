<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useCookies } from "@vueuse/integrations/useCookies";
const LoginForm = ref({
  email: "haamzaay@gmail.com",
  password: "12345678",
});
const cookies = useCookies(["locale"]);

onMounted(async () => {
  await axios
    .get(`http://localhost:8000/api/set-cookie`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
    });
});

const url = import.meta.env.VITE_APP_URL;

async function HandleLoginForm() {
  const token = cookies.getAll();

  console.log(`output->token`, token);

  try {
    await axios.get(
      `http://localhost:8000/api/test-cookie`,
      {
        withCredentials: true,
      },
      {}
    );
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="flex">Hy from Guest Component</div>
  <form @submit.prevent="HandleLoginForm">
    <div class="flex flex-row">
      <label> Email </label>
      <input v-model="LoginForm.email" />

      <label> password </label>
      <input v-model="LoginForm.password" />

      <button>Submit</button>
    </div>
  </form>
</template>
