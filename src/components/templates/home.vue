<template>
  <v-container>
    <custom-snackbar :content="snackbarContent"></custom-snackbar>

    <v-row class="text-center align-items-center ">
      <v-col class="mt-5">
        <h3 class="button font-weight-bold">
          Search for hundreds of items...
        </h3>
      </v-col>
      <v-col cols="12">
        <search-input></search-input>

        <custom-spinner :loading="loading"></custom-spinner>
      </v-col>
    </v-row>
    <v-row
      class="d-flex justify-center
    "
    >
      <product-card
        v-for="(item, i) in data"
        :item="item"
        :key="i"
      ></product-card>
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
import { CustomSnackbar } from "../molecules";
import { ProductCard } from "../organisms";

export default {
  components: {
    SearchInput,
    CustomSpinner,
    CustomSnackbar,
    ProductCard,
  },
  name: "Home",

  data: () => ({
    snackbar: false,
    path: "https://github.com/mehmeteyupoglu/coolio/blob/main/README.md",
  }),
  computed: {
    ...mapGetters({
      loading: "getLoadingState",
      data: "getFilteredData",
      title: "getTitle",
    }),
    snackbarContent() {
      return {
        model: this.snackbar,
        text: "Don't forget to read",
        path: "https://github.com/mehmeteyupoglu/coolio/blob/main/README.md",
        strong: "documentation",
      };
    },
  },
  watch: {
    title() {
      // resets filtered data when the title is an empty string
      if (this.title === "") {
        this.$store.commit("resetFilterData");
      }
    },
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
