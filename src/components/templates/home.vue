<template>
  <v-container>
    <v-row class="text-center align-items-center mt-2">
      <v-col class="mt-10 mb-4">
        <h3 class="button font-weight-bold mb-1">
          Search for thousands of items...
        </h3>
      </v-col>
      <v-col class="mb-2" cols="12">
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
