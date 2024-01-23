<script setup lang="ts">
import { ref } from "vue";
import { clickOutSide as vClickOutSide } from "@mahdikhashan/vue3-click-outside";

import { useUser } from "@/use/useUserAccount";

defineProps({
  text: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "#fff",
  },
  textColor: {
    type: String,
    default: "#4B73DB",
  },
});
const { openActionsCloudFile } = useUser();

const close = () => {
  console.log("1321132");
  openActionsCloudFile.value = false;
};
</script>

<template>
  <div>
    <!-- <div
      @click.stop="openActionsCloudFile = !openActionsCloudFile"
      style="cursor: pointer"
    > -->
    <!-- <img src="@/assets/svg/filter.svg" alt="" /> -->
    <slot name="header"></slot>
    <!-- </div> -->
    <!-- <div
      v-click-out-side="close"
      class="action-modal__container"
      v-if="openActionsCloudFile"
    > -->
      <slot></slot>
    <!-- </div> -->
  </div>
</template>

<style scoped lang="scss">
.action-modal {
  &__container {
    z-index: 2;
    position: absolute;
    border-radius: 7px;
    border: 1px solid var(--GrayFonCompas, #919cb8);
    background: var(--WhiteCompas, #fff);
    right: -75px;
    top: -50px;
    overflow: hidden;
  }
}
@media (max-width: 1023px) {
  .action-modal {
    &__container {
      right: -35px;
    }
  }
}
</style>
<style lang="scss">
.action-modal__container {
  & div {
    cursor: pointer;
  }
  & > div {
    padding: 5px;
  }
  & > div:hover {
    background: #4b73db;
    color: #fff;
  }
}
</style>
