<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="item.image"></v-img>

    <v-card-title>{{ item.title }}</v-card-title>

    <render-types :type="item.type"></render-types>

    <v-divider class="mx-4"></v-divider>

    <render-chips :tags="item.tags"></render-chips>
  </v-card>
</template>

<script>
import { RenderChips, RenderTypes } from "../molecules";

export default {
  components: { RenderChips, RenderTypes },
  name: "ProductCard",
  props: {
    /**
     * The content that helps render products in a nice-looking card
     * @property: title, tags, body_html, id, image, type
     */

    item: {
      type: Object,
      default() {
        return {
          title: "Product",
          tags: "Check out",
          body_html: "",
          id: "",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
          type: "",
        };
      },
    },
  },

  data: () => ({
    loading: false,
  }),
};
</script>
