<template>
  <h1>Home</h1>
  <div class="destination-details">
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      <h2>{{ destination.name }}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </RouterLink>
  </div>
</template>
<style></style>
<script>
import sourceData from "../data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
