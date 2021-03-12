<template>
  <v-container>
    <v-row class="text-center align-items-center">
      <v-col class="mb-4">
        <h3 class="button font-weight-bold mb-3">
          Search for thousands of items...
        </h3>
      </v-col>
      <v-col class="mb-5" cols="12">
        <search-input />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { SearchInput } from "../atoms";

export default {
  components: {
    SearchInput,
  },
  name: "Home",

  data: () => ({}),
};
</script>
