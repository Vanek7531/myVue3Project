7
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: { type: Number, default: 32 },
  },
  setup() {},
});
</script>

<template>
  <svg
    :width="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 13L16 19"
      stroke="#4B73DB"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M10 13L16 19"
      stroke="#4B73DB"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
</template>
