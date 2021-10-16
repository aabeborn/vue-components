<template>
  <button class="button-custom">BOTTONE</button>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const value = ref("");
    return { value };
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.button-custom {
  background: $secondary;
  padding: 16px;
}
</style>
