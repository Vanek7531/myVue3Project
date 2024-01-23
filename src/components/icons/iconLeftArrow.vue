7
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: { type: Number, default: 24 },
  },
  setup() {},
});
</script>

<template>
  <svg
    :width="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Frame 1273">
      <g id="Group 1253">
        <path
          id="Vector 2"
          d="M15 18L9 12"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector 3"
          d="M15 6L9 12"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </g>
  </svg>
</template>
