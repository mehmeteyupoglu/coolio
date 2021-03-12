<template>
  <v-app>
    <!-- App Bar -->
    <custom-app-bar />

    <!-- Main  -->
    <v-main>
      <home />
    </v-main>

    <!-- TODO: Add a footer here -->
  </v-app>
</template>

<script>
import { Home } from "./components/templates";
import { CustomAppBar } from "./components/organisms";

export default {
  name: "App",

  components: {
    Home,
    CustomAppBar,
  },

  data: () => ({
    //
  }),
};
</script>
