<template>
  <v-container>
    <v-snackbar top dark v-model="snackbar" timeout="-1"
      >Don't forget to read
      <v-btn
        text
        :href="path"
        target="_blank"
        class="subtitle-2 mx-0 px-1 py-0 my-0"
      >
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
        <search-input></search-input>

        <custom-spinner :loading="loading"></custom-spinner>
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
import { SearchInput, CustomSpinner } from "../atoms";

export default {
  components: {
    SearchInput,
    CustomSpinner,
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
