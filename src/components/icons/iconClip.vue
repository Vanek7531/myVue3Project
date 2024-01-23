<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: { type: Number, default: 25 },
  },
  setup() {},
});
</script>

<template>
  <svg
    :width="size"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Frame 1277">
      <path
        id="Vector"
        d="M7.5 6.79515V5.26704C7.5 2.92059 9.52462 1 11.9998 1H12.0002C14.4754 1 16.5 2.9234 16.5 5.26704V19.733C16.5 22.0759 14.4702 24 12.0002 24H11.9998C9.49164 24 7.54558 22.1198 7.54558 19.773V11.7937C7.54558 10.4378 8.71537 9.32853 10.1453 9.32853H10.1456C11.5755 9.32853 12.7453 10.4399 12.7453 11.7937V18.0197"
        stroke="#4B73DB"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
