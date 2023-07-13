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
    <g id="Frame 1265">
      <g id="IconExchange">
        <g id="Group 1229">
          <g id="Group 1230">
            <path
              id="Vector"
              d="M21.1332 11H12.5919C10.433 11 8.6665 13.3426 8.6665 16.2058V18.6154"
              stroke="#121212"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M10.8667 22H19.408C21.5669 22 23.3334 19.6574 23.3334 16.7942V14.3846"
              stroke="#121212"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M27.0003 18.6154L23.3337 14.3846L19.667 18.6154"
              stroke="#121212"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_4"
              d="M4.99967 15.2307L8.66634 19.4615L12.333 15.2307"
              stroke="#121212"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
