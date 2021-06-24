<template>
  <div>
    <b-container class="content">
      <b-card class="mt-2 text-dark">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred - {{ error.statusCode }} </h1>
        <NuxtLink to="/">Return to Home page</NuxtLink>
      </b-card>
    </b-container>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>