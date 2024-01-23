<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref, watch } from "vue";
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
import { showQuestion } from "@/use/useMainApp";
import { socket } from "@/use/soketIo";
import { useUser } from "@/use/useUserAccount";
import { count } from "@/use/alerts";

import { useRoute } from "vue-router";
const route = useRoute();

import { useQuasar } from "quasar";
import { cachedNotifications } from "@/use/alerts";

const { getUserMe } = useUser();
const accept = ref(false);
const fullName = ref("");
const email = ref("");
const thematic = ref(null);
const thematics = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const userQuestion = ref("");

const $q = useQuasar();
const showNotif = (value: number) => {
  if (value <= 0) return;
  $q.notify({
    message: `У вас ${value} уведомления!`,
    color: "blue",
    position: "bottom-right",
  });
};

watch(route, () => {
  showQuestion.value = false;
});

onMounted(() => {
  getUserMe();
  setTimeout(() => {
    socket.on("new_message", (data: any) => {
      if (data && data.type === "notification_count") {
        count.value = data.count;
        showNotif(data.count);
      }
      if (data && data.type === "cached_notifications") {
        cachedNotifications.value.push(data);
      }
    });
  }, 300);
});
</script>

<template>
  <TheHeader />
  <div class="wrapper">
    <RouterView v-if="!showQuestion" />
    <div v-else>
      <main-seacrh />
      <div class="question-form">
        <div
          style="text-align: end; cursor: pointer"
          @click.stop="showQuestion = false"
        >
          X
        </div>
        <div style="text-align: center; text-transform: uppercase">
          Задать вопрос
        </div>
        <q-form class="q-gutter-md">
          <q-input
            outlined
            v-model="fullName"
            label="ФИО"
            hint="Ваше полное имя"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            class="user-all--base__body-input"
            outlined
            v-model="email"
            label="E-mail"
            type="email"
            placeholder="Введите ваш email"
            :dense="false"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          >
          </q-input>
          <q-select
            outlined
            v-model="thematic"
            :options="thematics"
            label="Тематика"
          />
          <q-input
            outlined
            v-model="userQuestion"
            label="Ваш вопрос"
            placeholder="Введите ваш вопрос"
            type="textarea"
          />
          <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

          <div>
            <q-btn label="Задать вопрос" type="submit" color="primary" />
            <!-- <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          /> -->
          </div>
        </q-form>
      </div>
    </div>
  </div>
  <the-footer />
</template>

<style scoped lang="scss">
@import "@/assets/styles/headerStyle.scss";

.question-form {
  max-width: 600px;
  max-height: 700px;
  overflow: auto;
  margin: 100px auto 0;
  border-radius: 12px;
  background: #fff;
  padding: 30px 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
      display: flex;
      justify-content: center;
    }
    // gap: 20px;
  }
  .q-field--filled .q-field__control {
    background: #fff;
    border-radius: 12px;
    border: 1px solid #919cb8;
  }
}
</style>
