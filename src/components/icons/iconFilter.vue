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
      d="M3 25.5817H13.6054M21.8229 25.5817H28.846"
      stroke="#4B73DB"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 15.6786H5.02063M12.7584 15.6786H28.8463"
      stroke="#4B73DB"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 5.77551H17.4785M25.0858 5.77551H28.846"
      stroke="#4B73DB"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.3113 2C23.3964 2 25.0865 3.69047 25.0865 5.77519C25.0865 7.86022 23.396 9.55037 21.3113 9.55037C19.2263 9.55037 17.5361 7.8599 17.5361 5.77519C17.5361 3.69015 19.2266 2 21.3113 2Z"
      stroke="#4B73DB"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.8953 11.9031C10.9803 11.9031 12.6705 13.5936 12.6705 15.6783C12.6705 17.7634 10.98 19.4535 8.8953 19.4535C6.81027 19.4535 5.12012 17.763 5.12012 15.6783C5.12012 13.5933 6.81059 11.9031 8.8953 11.9031Z"
      stroke="#4B73DB"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5389 21.8062C19.6239 21.8062 21.314 23.4967 21.314 25.5814C21.314 27.6664 19.6236 29.3566 17.5389 29.3566C15.4538 29.3566 13.7637 27.6661 13.7637 25.5814C13.7637 23.4964 15.4541 21.8062 17.5389 21.8062Z"
      stroke="#4B73DB"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
