<script setup lang="ts">
import { onMounted } from "vue";
import documentsTable from "./documentsTable.vue";

import { useUser } from "@/use/useUserAccount";
const { getUserCLoudFiles, userCLoudFiles } = useUser();

onMounted(() => {
  getUserCLoudFiles();
});
</script>

<template>
  <documents-table :documents="userCLoudFiles" />
</template>

<style lang="scss" scoped></style>
