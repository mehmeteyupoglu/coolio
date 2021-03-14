<template>
  <div>
    <v-img height="250" :src="image"></v-img>

    <v-card-title>{{ title }}</v-card-title>
  </div>
</template>

<script>
/**
 * A @component that renders item header with title and image
 * accepts strings as props
 * @example <render-header :image="image" :title="title"></render-header>
 */

export default {
  name: "RenderHeader",
  props: {
    image: {
      type: String,
      default: () =>
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
    },
    title: {
      type: String,
      default: () => "Toolio",
    },
  },

  data: () => ({}),
};
</script>
