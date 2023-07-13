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
    <g id="Frame 1264">
      <g id="IconChat">
        <g id="IconMark">
          <g id="IconProf">
            <g id="IconMark_2">
              <g id="Layer_x0020_1">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.7294 19.7908L10.7094 24.3486L12.7413 19.7908H9.42827C8.0933 19.7908 7 18.7181 7 17.4066V10.3842C7 9.07263 8.09247 8 9.42827 8H22.7142C24.05 8 25.1425 9.07344 25.1425 10.3842V17.4066C25.1425 18.7173 24.0492 19.7908 22.7142 19.7908H17.7286H17.7294Z"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-miterlimit="22.9256"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
