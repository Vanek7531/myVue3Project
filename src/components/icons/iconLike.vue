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
      <g id="IconClass">
        <g id="IconMark">
          <path
            id="Vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.8713 21.7646C10.8713 22.4919 10.2877 23.0878 9.57561 23.0878H7V13.1993H9.57561C10.2877 13.1993 10.8713 13.7953 10.8713 14.5225C10.8713 16.9366 10.8713 19.3506 10.8713 21.7646ZM12.8096 12.5861C14.2275 11.1284 15.6465 9.6697 17.0654 8.21202C17.1971 8.07109 17.4857 7.89467 17.8133 8.0797C18.0619 8.20126 18.3632 8.35187 18.5497 8.4616C19.1659 8.81983 18.892 9.81277 18.7203 10.3776C18.4686 11.2005 17.7733 13.2983 17.7733 13.2983C19.2144 13.2983 20.6565 13.2983 22.0976 13.2983C24.1907 13.2983 24.4615 15.0131 23.7599 16.6343C23.0235 18.3329 22.2872 20.0326 21.5509 21.7313C21.1758 22.6274 20.3236 22.7726 19.4798 22.7726C17.6669 22.7726 15.8529 22.7726 14.04 22.7726C12.502 22.7726 12.2197 22.3832 12.2271 20.7588C12.2365 18.7492 12.246 16.7408 12.2544 14.7312C12.2587 13.6673 12.1344 13.2778 12.8096 12.585V12.5861Z"
            stroke="#121212"
            stroke-width="1.5"
            stroke-miterlimit="22.9256"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
</template>
