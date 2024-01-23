7
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: { type: Number, default: 28 },
  },
  setup() {},
});
</script>

<template>
  <svg
    :width="size"
    height="24"
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1324">
      <g id="Layer_x0020_1">
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8121 4.82176H24.7114C25.9702 4.82176 27 5.83799 27 7.07987V20.7417C27 21.9838 25.9702 23 24.7114 23H3.28857C2.02985 23 1 21.9838 1 20.7417V9.79261V4.82176V3.25829C1 2.01622 2.02985 1 3.28857 1H8.12196C9.38068 1 9.95408 1.55111 10.5696 2.63459L11.8121 4.82195V4.82176Z"
          stroke="#4B73DB"
          stroke-width="2"
          stroke-miterlimit="22.9256"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M11.8121 4.82129H1"
          stroke="#4B73DB"
          stroke-width="2"
          stroke-miterlimit="22.9256"
        />
      </g>
    </g>
  </svg>
</template>
