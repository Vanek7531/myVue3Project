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
    <g id="Frame 1263">
      <g id="IconWatch">
        <g id="Group 1231">
          <g id="Layer_x0020_1">
            <path
              id="Vector"
              d="M13.0441 22.2808C14.4067 23.3573 16.128 24 17.9995 24C22.4178 24 25.9995 20.4183 25.9995 16C25.9995 11.5817 22.4178 8 17.9995 8C13.5812 8 9.99951 11.5817 9.99951 16C9.99951 16.1679 10.0001 16.5 10.0001 16.5"
              stroke="#4B73DB"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M17.9995 11V16L20.1358 18.4722"
              stroke="#4B73DB"
              stroke-width="1.5"
              stroke-miterlimit="22.9256"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <path
            id="Vector_3"
            d="M6 13L10 17.2308L14 13"
            stroke="#4B73DB"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
</template>
