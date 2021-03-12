<template>
  <v-app-bar app color="blue darken-4" dark>
    <!-- Logo -->
    <logo-group :content="logoContent" />

    <v-spacer></v-spacer>

    <!-- Button Group -->
    <custom-btn-group :content="content" />
  </v-app-bar>
</template>

<script>
import { CustomBtnGroup, LogoGroup } from "../molecules";

export default {
  name: "AppBar",

  components: {
    CustomBtnGroup,
    LogoGroup,
  },

  data: () => ({
    content: {
      path: "https://www.toolio.com",
      title: "Visit the actual page",
      icon: "mdi-open-in-new",
    },
    logoContent: {
      title: "Coolio",
      src:
        "https://uploads-ssl.webflow.com/5d7ab80fa9740ce01c57ee9d/5f2978019586604c1c53aa87_toolio-icon-64.svg",
    },
  }),
};
</script>
