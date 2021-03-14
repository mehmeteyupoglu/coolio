<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="item.image"></v-img>

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="my-4 subtitle-1">
          <strong>Type</strong> • {{ item.type }}
        </div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tags</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip v-for="tag in item.tags.split(', ')" :key="tag" active>{{
          tag
        }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    /**
     * The content that helps customize btn-group
     * @property: path, title, icon
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
