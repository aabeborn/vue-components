<template>
  <input type="text" class="input-custom" v-model="value" />
</template>

<script lang="js">
import { defineComponent,ref } from 'vue'

export default defineComponent({
    setup() {
        const value = ref('')
        return {value}
    },
})
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.input-custom {
  color: $primary;
  padding: 16px;
}
</style>
