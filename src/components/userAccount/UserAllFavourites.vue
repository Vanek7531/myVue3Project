<script setup lang="ts">
import { useUser, userMe } from "@/use/useUserAccount";

defineProps({
  user: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="user-account--view__user-all--favourites user-all--favourites" v-if="userMe">
    <div class="user-all--favourites__container">
      <div class="user-all--favourites__body" v-for="item in userMe.favorite_digests" :key="item.id">
        <p>{{ item.slug }}</p>
        <div class="user-all--favourites__close">X</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/userViewStyle.scss";
</style>
