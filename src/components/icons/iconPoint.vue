<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: "#D7DBE5" },
  },
  setup() {},
});
</script>
:width="size"

<template>
  <svg
    :width="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Frame 1253">
      <path
        id="Vector"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4792 5.91245C13.8967 5.91245 15.0457 7.06148 15.0457 8.47896C15.0457 9.89645 13.8967 11.0455 12.4792 11.0455C11.0617 11.0455 9.91265 9.89645 9.91265 8.47896C9.91265 7.06148 11.0617 5.91245 12.4792 5.91245ZM12.4792 2C8.90081 2 6 4.90081 6 8.47917C6 12.0575 9.68191 17.0648 12.4792 21.0408C15.2764 17.0648 18.9583 12.0575 18.9583 8.47917C18.9583 4.90081 16.0575 2 12.4792 2Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
