<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "#1212120f",
  },
  textColor: {
    type: String,
    default: "#212121",
  },
});
</script>

<template>
  <div
    class="button"
    :style="`background: ${backgroundColor}; color: ${textColor}`"
  >
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.button {
  padding: 0.6rem 1.3rem;
  background: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  border-radius: 50px;
  background: #1212120f;
}
</style>
