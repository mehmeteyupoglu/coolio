<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <custom-btn-group :content="content" />
  </v-app-bar>
</template>

<script>
import { CustomBtnGroup } from "../molecules";

export default {
  name: "AppBar",

  components: {
    CustomBtnGroup,
  },

  data: () => ({
    content: {
      path: "https://www.toolio.com/",
      title: "Visit the actual page",
      icon: "mdi-open-in-new",
    },
  }),
};
</script>
