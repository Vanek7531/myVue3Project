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
    <g id="Frame 1266">
      <g id="IconBookmark">
        <g id="IconMark">
          <path
            id="Vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 17.5941L9 24V10.1876C9 8.98447 9.99344 8 11.2076 8H20.7925C22.0066 8 23 8.98447 23 10.1876V24L16 17.5941Z"
            stroke="#121212"
            stroke-width="1.5"
            stroke-miterlimit="22.9256"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
</template>
