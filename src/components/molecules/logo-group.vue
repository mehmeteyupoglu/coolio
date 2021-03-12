<template>
  <div class="d-flex align-center">
    <v-img
      :alt="content.title + ' Logo'"
      class="shrink mr-2"
      contain
      :src="content.src"
      transition="scale-transition"
      width="40"
    />

    <h1>
      {{ content.title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "LogoGroup",
  props: {
    content: Object,
  },

  components: {},

  data: () => ({
    //
  }),
};
</script>
