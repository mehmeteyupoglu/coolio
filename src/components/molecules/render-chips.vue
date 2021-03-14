<template>
  <div>
    <v-card-title>Tags</v-card-title>
    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip v-for="tag in tags.split(', ')" :key="tag" active>{{
          tag
        }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </div>
</template>

<script>
/**
 * A @component that renders tags in a vuetify chips
 * accepts an string of tags
 * @example <render-chips :tags="tags"></render-chips>
 */

export default {
  name: "RenderChips",
  props: {
    tags: {
      type: String,
      default: () => "Toolio is so cool",
    },
  },

  data: () => ({}),
};
</script>
