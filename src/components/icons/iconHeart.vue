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
      d="M16.0057 23.0216L8.36699 16.1025C4.21554 11.951 10.3182 3.98025 16.0057 10.4288C21.6931 3.98025 27.7681 11.9787 23.6443 16.1025L16.0057 23.0216Z"
      stroke="#E71D36"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
