<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUser } from "@/use/useUserAccount";
import { useRoute } from "vue-router";
// import UserAllBaseInfo from "./UserAllBaseInfo.vue";
// import UserAllTariffs from "./UserAllTariffs.vue";

const route = useRoute();
const { comp, categories, swapComp, activeClass, activeTab, isLawyer } =
  useUser();

onMounted(() => {
  swapComp("UserAllBase");
});
</script>

<template>
  <div class="user-account--view__user-all-info">
    <div class="user-account--view__user-all-info--categories">
      <div
        :class="activeClass(category.comp)"
        @click="swapComp(category.comp)"
        v-for="category in categories"
        :key="category.comp"
      >
        <!-- <pre>{{ category }}</pre> -->
        <div>{{ category.name }}</div>
				<div> > </div>
      </div>
    </div>
    <!-- <div class="user-account--view__user-all-info--body">
      <component :is="comp" />
		</div> -->

      <!-- <div v-else>
				<user-all-tariffs v-if="isLawyer"/>
        <user-all-base-info v-else />
      </div> -->
      <!-- <user-all-base/> -->
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
.active {
  // background: #4b73db !important;
  // color: #fff;
}
</style>
