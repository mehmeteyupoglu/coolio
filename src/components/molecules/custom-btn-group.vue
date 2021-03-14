<template>
  <v-btn :href="content.path" target="_blank" text>
    <span class="mr-2">{{ content.title }}</span>
    <v-icon>{{ content.icon }}</v-icon>
  </v-btn>
</template>

<script>
/**
 * A @component that produces a button group
 * accepts a content object as props
 * @example <custom-btn-group :content="content"></custom-btn-group>
 */

export default {
  name: "CustomBtnGroup",
  props: {
    /**
     * The content that helps customize btn-group
     * @property: path, title, icon
     */
    content: {
      type: Object,
      default() {
        return {
          path: "/",
          title: "Check out",
          icon: "mdi-open-in-new",
        };
      },
    },
  },

  components: {},

  data: () => ({}),
};
</script>
