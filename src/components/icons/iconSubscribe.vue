7
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
    <g id="Group 1242">
      <g id="Layer_x0020_1">
        <path
          id="Vector"
          d="M17.3136 10.0087V14.3175M17.8839 15.9879C18.347 16.4391 19.0625 17.074 19.5867 17.6388C20.2694 18.3742 20.353 19.2036 18.9874 19.2036C16.5028 19.2036 14.0184 19.2036 11.5337 19.2036C9.04918 19.2036 6.56472 19.2036 4.08017 19.2036C2.71457 19.2036 2.79814 18.3741 3.48085 17.6388C4.0051 17.074 4.72054 16.4391 5.18369 15.9879C5.82479 15.3633 5.75398 14.7148 5.75398 13.9132V10.3842C5.75398 7.14449 8.35483 4.49371 11.5337 4.49371H11.5338C13.7726 4.49371 15.7246 5.80841 16.6834 7.7177"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-miterlimit="22.9256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.06006 19.2037H11.5337H15.0073V19.3788C15.0073 20.8553 13.5398 22.0635 11.7462 22.0635H11.5337H11.3211C9.52753 22.0635 8.06006 20.8553 8.06006 19.3788V19.2037Z"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-miterlimit="22.9256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M10.2411 4.59764C10.0465 4.32733 9.93164 3.99381 9.93164 3.63286C9.93164 2.73102 10.6489 2 11.5338 2C12.4187 2 13.136 2.73102 13.136 3.63286C13.136 3.99371 13.0211 4.32733 12.8266 4.59764"
          stroke="#4B73DB"
          stroke-width="1.5"
          stroke-miterlimit="22.9256"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          d="M15.2048 12.1321H19.5418"
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
