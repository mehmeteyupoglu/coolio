<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="title"
          label="Enter a keyword such as awesome"
          solo
          clearable
          filled
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
/**
 * Streamline solution for handling async search activities
 * @component
 * @example
 * <search-input />
 */

export default {
  name: "SearchInput",

  data: () => ({}),
  computed: {
    title: {
      set(value) {
        this.$store.commit("setTitle", value);
      },
      get() {
        return this.$store.getters.getTitle;
      },
    },
  },
  watch: {
    title() {
      this.$store.dispatch("loadProducts");
    },
  },
};
</script>
