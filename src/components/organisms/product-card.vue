<template>
  <v-card class="mx-3 my-5" max-width="374">
    <render-header :image="item.image" :title="item.title"></render-header>

    <render-types :type="item.type"></render-types>

    <v-divider class="mx-4"></v-divider>

    <render-chips :tags="item.tags"></render-chips>
  </v-card>
</template>

<script>
import { RenderChips, RenderTypes, RenderHeader } from "../molecules";

export default {
  components: { RenderChips, RenderTypes, RenderHeader },
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
