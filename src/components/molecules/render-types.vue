<template>
  <v-card-text>
    <v-row align="center" class="mx-0">
      <div class="my-4 subtitle-1"><strong>Type</strong> • {{ type }}</div>
    </v-row>
  </v-card-text>
</template>

<script>
/**
 * A @component that renders types within a vuetify card text
 * accepts a string as a prop
 * @example <render-types :type="type"></render-types>
 */

export default {
  name: "RenderTypes",
  props: {
    type: {
      type: String,
      default: () => "Lorem ipsum dolor",
    },
  },

  data: () => ({}),
};
</script>
