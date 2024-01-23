<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: { type: Number, default: 26 },
  },
  setup() {},
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    viewBox="0 0 27 21"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.7129 2L1.49805 8.2714L13.7129 14.4362L25.927 8.2714L13.7129 2Z"
      stroke="#212121"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.45312 10.2383C5.45312 11.6619 5.45312 12.6093 5.45312 14.0329C9.52001 18.9681 17.9074 18.9681 21.9743 14.0329C21.9743 12.6093 21.9743 11.6619 21.9743 10.2383"
      stroke="#212121"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.59961 8.9375V15.3821"
      stroke="#212121"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.59947 15.5586C3.47913 15.5586 4.19894 16.2746 4.19894 17.1495V20.0034H1V17.1495C1 16.2746 1.7198 15.5586 2.59947 15.5586Z"
      stroke="#212121"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
