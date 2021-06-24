<template>
  <div>
    <TheHeader/>
    <b-container class="content">
      <b-card class="mt-2 text-dark">
        <Nuxt/>
      </b-card>
    </b-container>
    <TheFooter/>
  </div>
</template>

<script>
export default {
  data() {
    return {name: null};
  },

  async fetch() {
      const resume = await this.$content('resume').fetch();
      this.name = resume.information.name;
  },
  
  head() {
    return {
      title: `${this.name} - Blog`
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
html {
  font-family: "Roboto", sans-serif;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
</style>