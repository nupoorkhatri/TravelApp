<script>
import GoBack from "./components/GoBack.vue";
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    GoBack,
    TheNavigation,
  },
};
</script>

<template>
  <TheNavigation />
  <div class="container">
    <router-view></router-view>
  </div>
  <!-- <GoBack /> -->
</template>

<style></style>
