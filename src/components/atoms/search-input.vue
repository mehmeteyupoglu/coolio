<template>
  <v-row justify="center">
    <v-col cols="12" sm="6" md="3">
      <v-text-field
        v-model="item"
        label="Enter a keyword such as awesome"
        solo
        clearable
        filled
      ></v-text-field>
    </v-col>
    {{ item }}
  </v-row>
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

  data: () => ({
    item: "",
  }),
};
</script>
