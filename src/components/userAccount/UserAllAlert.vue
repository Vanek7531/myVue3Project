<script setup lang="ts">
import newAlert from "@/components/userAccount/alert/newAlert.vue";
import { ref } from "vue";

const alerts = ref([
  {
    text: "Участвовать в рейтинге",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Участвовать в определении позиции на сайте",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Показывать мгновенные уведомления",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Получать уведомления со звуком",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Браузерные уведомления",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Новые сообщения",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Комментарии",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Напоминания",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Отзывы",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Позиция",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Рейтинг",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Мероприятия",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Вопросы",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Ответы",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Видео",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Напоминания",
    push: false,
    email: false,
    sms: false,
  },
  {
    text: "Видеотрансляции",
    push: false,
    email: false,
    sms: false,
  },
]);

const left2 = ref(false);
</script>

<template>
  <div class="user-account--view__user-all--alert user-all--alert">
		<new-alert v-for="alert in alerts" :key="alert.text" :alert="alert"/>
		<!-- <pre>{{ alert }}</pre> -->
    <div class="user-all--alert__body" v-if="false">
      <div>
        <div>Участвовать в рейтинге</div>
        <div>
          По своей сути рыба текст является альтернативой традиционному lorem
          ipsum
        </div>
      </div>
      <div>
        <q-checkbox
          left-label
          v-model="left2"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
