<template>
  <div id="nav">
    <RouterLink id="logo" to="/"> Travel App</RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      <h2>{{ destination.name }}</h2>
    </RouterLink>
    <RouterLink :to="{ name: 'protected' }">Login</RouterLink>
  </div>
</template>
<style>
#nav .vite-project-active-link {
  color: #ffffff;
  font-weight: bold;
  text-shadow: 2.5cap;
}
</style>
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
