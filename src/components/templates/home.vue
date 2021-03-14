<template>
  <v-container>
    <v-snackbar top dark v-model="snackbar" timeout="-1"
      >Don't forget to read
      <v-btn text :href="path" target="_blank" class="subtitle-2">
        <strong>documentation</strong></v-btn
      >
    </v-snackbar>

    <v-row class="text-center align-items-center mt-2">
      <v-col class="mt-10 mb-4">
        <h3 class="button font-weight-bold mb-1">
          Search for hundreds of items...
        </h3>
      </v-col>
      <v-col class="mb-2" cols="12">
        <search-input />
        <v-progress-circular
          v-if="loading"
          :width="1"
          color="primary"
        ></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/**
 * Harbors searching product activity
 * @component
 */

// import packages
import { mapGetters } from "vuex";

// import local files
import { SearchInput } from "../atoms";

export default {
  components: {
    SearchInput,
  },
  name: "Home",

  data: () => ({
    snackbar: false,
    path: "https://github.com/mehmeteyupoglu/coolio/blob/main/README.md",
  }),
  computed: {
    ...mapGetters({ loading: "getLoadingState" }),
  },
  methods: {
    /**
     * Changes the state of local snackbar asyncronously
     * @function
     */

    snackbarTimeout() {
      setTimeout(() => {
        this.snackbar = true;
      }, 2000);

      setTimeout(() => {
        this.snackbar = false;
      }, 7000);
    },
  },
  mounted() {
    this.snackbarTimeout();
  },
};
</script>
