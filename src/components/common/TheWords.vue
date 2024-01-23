<script setup lang="ts">
const words = [
  "банкротство",
  "банк",
  "адвокат",
  "пенсия",
  "наследство",
  "Бухгалтерия",
  "Кредиты",
  "ЖКХ/ТСЖ",
  "Брачный контракт",
  "банкротство",
  "банк",
  "пенсия",
  "наследство",
  "сделки с участками",
  "все новости",
];
</script>
<template>
  <div class="main-article--interesting__words">
    <div
      class="main-article--interesting__word"
      v-for="word in words"
      :key="word"
    >
      {{ word }}
    </div>
  </div>
</template>
<style scoped></style>
