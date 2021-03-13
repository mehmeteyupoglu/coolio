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
/**
 * A @component that produces a logo group
 * accepts a content object as props
 * @example <logo-group :content="logoContent" />
 */

export default {
  name: "LogoGroup",

  /**
   * The content that helps customize logo-group
   * @property: src, title
   */
  props: {
    content: {
      type: Object,
      default() {
        return {
          src:
            "https://uploads-ssl.webflow.com/5d7ab80fa9740ce01c57ee9d/5f2978019586604c1c53aa87_toolio-icon-64.svg",

          title: "Toolio",
        };
      },
    },
  },

  components: {},

  data: () => ({}),
};
</script>
