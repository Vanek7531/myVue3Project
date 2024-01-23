<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="specialist-contacts">
    <div class="specialist-contacts__title">Контакты</div>

    <div class="specialist-contacts__body">
      Контактный телефон:
      {{ user.user.phone_number }}
    </div>
    <div class="specialist-contacts__body">
      Адрес электронной почты: Alexandr@mail.ru
    </div>
    <div class="specialist-contacts__body">
      Адрес места проживания: г. Волгоград, ул. Северная, 23, офис 5
    </div>
    <div class="specialist-contacts__body">
      Веб-сайт:
      {{ user.user.email }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/articlesStyle.scss";
</style>
