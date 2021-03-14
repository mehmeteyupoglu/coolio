<template>
  <v-snackbar bottom dark v-model="content.model" :timeout="content.timeout"
    >{{ content.text }}
    <v-btn
      text
      :href="content.path"
      target="_blank"
      class="subtitle-2 mx-0 px-0 py-0 my-0"
    >
      <strong>{{ content.strong }}</strong></v-btn
    >
  </v-snackbar>
</template>

<script>
/**
 * A @component that produces a snackbar with additional functionality
 * accepts a content object as props
 * @example <custom-snackbar :content="content"></custom-snackbar>
 */

export default {
  name: "CustomSnackbar",
  props: {
    /**
     * The content that helps customize snackbar
     * @property: timeout, model, text, path, strong
     */
    content: {
      type: Object,
      default() {
        return {
          timeout: "-1",
          model: false,
          text: "Don't forget to read",
          path: "/",
          strong: "documentation",
        };
      },
    },
  },

  data: () => ({}),
};
</script>
