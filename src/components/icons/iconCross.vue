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
    <g id="Frame 1277">
      <g id="Layer_x0020_1">
        <g id="_1976349840800">
          <path
            id="Vector"
            d="M6 17.9742L17.9742 6"
            stroke="#4B73DB"
            stroke-width="1.5"
            stroke-miterlimit="22.9256"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M6 6L17.9742 17.9742"
            stroke="#4B73DB"
            stroke-width="1.5"
            stroke-miterlimit="22.9256"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
</template>
