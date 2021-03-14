<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Title</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <div class="my-4 subtitle-1">
        <strong>Type</strong> • Outdoors, Kids & Music
      </div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tags</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
        disabled
      >
        <v-chip>quaerat</v-chip>

        <v-chip>voluptatem</v-chip>
        <v-chip>non</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",

  components: {},

  data: () => ({
    loading: false,
  }),
};
</script>
