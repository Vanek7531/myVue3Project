<script setup lang="ts">
import documentsTable from "./documentsTable.vue";

import { useUser } from "@/use/useUserAccount";
const { documents } = useUser();
</script>

<template>
  <documents-table :documents="documents" />
</template>

<style lang="scss" scoped></style>
