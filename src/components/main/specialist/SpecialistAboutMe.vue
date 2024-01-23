<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="specialist-about--me">
    <!-- <pre>{{ user }}</pre> -->
    <div class="specialist-about--me__personal">
      <div>Личная информация:</div>
      <div>
        ФИО: {{ user.user.last_name }} {{ user.user.first_name }}
        {{ user.user.patronymic }}
      </div>
      <div>Дата рождения: ---</div>
      <div>Контактный телефон: ---</div>
      <div>Адрес электронной почты: : {{ user.user.email }}</div>
      <div>Адрес места проживания: {{ user.address }}</div>
    </div>
    <!-- {{ user.about_me }} -->
    <div class="specialist-about--me__professional">
      <div>Профессиональный опыт:</div>
      <div>
        Стаж работы в юридической сфере:{{ user.experience.total_experience }}
      </div>
      <div>Места предыдущей работы (с указанием должности и периода):</div>
      <div>
        Руководитель юридического отдела в компании "Юридический Альянс"
      </div>
      <div>
        Руководитель юридического отдела в компании "Юридический Альянс"
      </div>
      <div>Адвокат в юридической фирме "Правовая защита", 2007-2015</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/articlesStyle.scss";
</style>
