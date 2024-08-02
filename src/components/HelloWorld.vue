<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

defineProps<{ msg: string }>();
const url = import.meta.env.VITE_APP_URL_LOCAL;
const myPromise = new Promise((resolve, reject) => {
  // This is the executor function that is passed to the Promise constructor
  // It takes two arguments: resolve and reject
  // resolve is a function that is called to resolve the promise
  // reject is a function that is called to reject the promise
  console.log(` promise construtor`);

  // Here, we're using setTimeout to simulate an asynchronous operation
  setTimeout(() => {
    // This is the asynchronous operation that we're simulating
    // In a real-world scenario, this could be an HTTP request, a database query, etc.
    console.log(` timeout`);

    const randomNumber = Math.random();

    // If the random number is greater than 0.5, resolve the promise with the random number
    // Otherwise, reject the promise with an error message
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error("Random number is less than or equal to 0.5"));
    }
  }, 1000);
});

// const testpromise = async () => {
//  return new Promise(function(myResolve, myReject) {
//   let x = 0;
//   console.log(`promise constructed`);

// // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// };
console.log(`after promise declared`);
console.log(myPromise);
console.log(axios.get(`${url}/test`));

// Now that we have a promise, we can use it with the .then() and .catch() methods
myPromise
  .then((result) => {
    // This function is called if the promise is resolved
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    // This function is called if the promise is rejected
    console.error("Promise rejected:", error.message);
  });
console.log(`output-after promise`);
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="flex flex-col">
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/auth-only">Auth Only</router-link>
    <router-link to="/guest-only">Guest Only</router-link>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
