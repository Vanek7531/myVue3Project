<script setup lang="ts">
// import userInfo from '@/components/'
import userMainInfo from '@/components/userAccount/UserMainInfo.vue'
import UserAllInfo from '@/components/userAccount/UserAllInfo.vue'
import { useUser } from "@/use/useUserAccount";
const { user } = useUser();
</script>

<template>
  <div class="user-account--view">
		<user-main-info/>
    <!-- LK?? -->
    <user-all-info/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/userViewStyle.scss";
</style>
