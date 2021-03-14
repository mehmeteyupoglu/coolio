<template>
  <v-progress-circular
    v-if="loading"
    :width="1"
    color="primary"
  ></v-progress-circular>
</template>

<script>
/**
 * A @component that appears on loading
 * accepts a loading state
 * @example <custom-spinner :loading="loading"></custom-spinner>
 */

export default {
  name: "CustomSpinner",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
};
</script>
