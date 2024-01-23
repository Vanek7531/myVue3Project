<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: { type: Number, default: 20 },
  },
  setup() {},
});
</script>

<template>
  <svg
    :width="size"
    :height="size + 3"
    viewBox="0 0 15 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Layer_x0020_1">
      <path
        id="Vector"
        d="M10.1261 0.844604H3.04954C1.92243 0.844604 1 1.69977 1 2.74468V15.2554C1 16.3003 1.92243 17.1555 3.04954 17.1555H11.9488C13.0759 17.1555 13.9984 16.3003 13.9984 15.2554V4.43577"
        stroke="#4B73DB"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9999 4.43711H12.1758C11.0486 4.43711 10.1262 3.58195 10.1262 2.53704L10.1566 0.845947L13.9999 4.43711Z"
        stroke="#4B73DB"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M2.73804 7.31653H12.2624"
        stroke="#4B73DB"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_4"
        d="M2.73804 10.7501H12.2624"
        stroke="#4B73DB"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_5"
        d="M2.73804 14.1824H12.2624"
        stroke="#4B73DB"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
