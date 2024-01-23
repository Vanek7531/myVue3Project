7
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: { type: Number, default: 31 },
  },
  setup() {},
});
</script>

<template>
  <svg
    :width="size"
    height="23"
    viewBox="0 0 31 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1305">
      <g id="Layer_x0020_1">
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.6707 1L1.57471 8.23718L15.6707 15.3514L29.7656 8.23718L15.6707 1Z"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-miterlimit="22.9256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M6.13745 10.5083C6.13745 12.1512 6.13745 13.2445 6.13745 14.8873C10.8306 20.5825 20.5096 20.5825 25.2028 14.8873C25.2028 13.2445 25.2028 12.1512 25.2028 10.5083"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-miterlimit="22.9256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M2.8457 9.00867V16.4457"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-miterlimit="22.9256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.84578 16.6426C3.86091 16.6426 4.69156 17.4688 4.69156 18.4785V21.7719H1V18.4785C1 17.4688 1.83065 16.6426 2.84578 16.6426Z"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-miterlimit="22.9256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
</template>
