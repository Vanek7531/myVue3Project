<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: '#4B73DB' },
  },
  setup() {},
})
</script>

<template>
  <svg
    :width="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8281 3H7.20719C5.99339 3 5 3.99615 5 5.21333V19.7867C5 21.0039 5.99339 22 7.20719 22H16.791C18.0049 22 18.9982 21.0039 18.9982 19.7867V7.18323"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.9997 7.18469H17.0353C15.8215 7.18469 14.8281 6.18854 14.8281 4.97136L14.8609 3.00146L18.9997 7.18469Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linejoin="round"
    />
    <path
      d="M6.87207 10.539H17.1291"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.87207 14.5387H17.1291"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.87207 18.5367H17.1291"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
