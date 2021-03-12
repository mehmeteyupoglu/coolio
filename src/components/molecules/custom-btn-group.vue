<template>
  <v-btn :href="content.path" target="_blank" text>
    <span class="mr-2">{{ content.title }}</span>
    <v-icon>{{ content.icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "CustomBtnGroup",
  props: {
    content: Object,
  },

  components: {},

  data: () => ({
    //
  }),
};
</script>
