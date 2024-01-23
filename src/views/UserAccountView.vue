<script setup lang="ts">
// import userInfo from '@/components/'
import userMainInfo from "@/components/userAccount/UserMainInfo.vue";
import UserAllInfo from "@/components/userAccount/UserAllInfo.vue";
import { computed, onMounted, ref } from "vue";
import httpService from "@/api/server";
import router from "@/router";
import { useQuasar } from "quasar";
import { useSpecialists } from "@/use/useSpecialists";
import iconStar from "@/components/icons/iconStar.vue";
import { userMe } from "@/use/useUserAccount";
import { useUser } from "@/use/useUserAccount";
import { useRoute } from "vue-router";
import cloudMainInfo from "@/components/userAccount/cloud/cloudMainInfo.vue";
const route = useRoute();

const isCLoud = computed(() => {
  return route.fullPath.includes("Cloud");
});

const {
  comp,
  user,
  categories,
  swapComp,
  activeClass,
  activeTab,
  isLawyer,
  userCurrentTariff,
} = useUser();
const { backgroundStar, chooseRating, rating, message, isRated, stages } =
  useSpecialists();
// const getUserInfo = async () => {
//   const token = sessionStorage.getItem("tokenAccess");
//   console.log("token", token);
//   try {
//     const { data } = await httpService.post("/api/users/", {
//       email: "admin@admin.admin",
//       passwrod: "12345678",
//     });
//     user1.value = data.results;
//     console.log("uuuu", user1.value);
//   } catch (error) {
//     console.log(error);
//   }
// };

const $q = useQuasar();
const showNotif = (message: string) => {
  $q.notify({
    message: `${message}`,
    color: "blue",
    position: "bottom-right",
  });
};

onMounted(() => {
  // getUserInfo();
  if (router.currentRoute.value.query.afterPay === "true")
    showNotif("Вы успешно активировали тариф!");
});
</script>

<template>
  <div class="user-account--view" v-if="userMe && user && userCurrentTariff">
    <div class="user-account--view__container">
      <div><user-all-info /></div>
      <div class="user-account--view__main-info main-info" v-if="!isCLoud">
        <div class="main-info__top">
          <div class="main-info__img">
            <img class="image" src="/src/assets/img/artSpecialist.png" alt="" />
          </div>
          <div class="main-info__data">
            <div class="main-info__data-fio">Николай Федорович Ушаков</div>
            <div class="main-info__data-adress">
              к. Сибай, пер. Космонавтов, д. 97 к. 7, 125237
            </div>
            <div class="main-info__data-details">
              <!-- <pre>{{ user }}</pre> -->
              <div>Тариф: {{ userCurrentTariff.tariff_name }}</div>
              <div>Форма: {{ user.tarif.form }}</div>
              <div>Облако: {{ user.tarif.cloud }}</div>
              <div>Города: {{ user.tarif.city }}</div>
              <div>Услуги: {{ user.tarif.services }}</div>
              <div>Услуг: ${'Базовый'}</div>
            </div>
            <div class="main-info__data-raiting">
              <div>Рейтинг:</div>
              <div class="grid-points" :class="isRated ? 'disable' : ''">
                <div class="star w" v-for="stage in stages" :key="stage.id">
                  <icon-star
                    style="cursor: pointer"
                    @click="chooseRating(stage.id)"
                    :color="backgroundStar(stage.thresholdPoints)"
                  />
                </div>
                <q-tooltip
                  anchor="center middle"
                  self="top middle"
                  v-if="isRated"
                >
                  {{ message }}
                </q-tooltip>
              </div>
            </div>
          </div>
        </div>
        <div class="main-info__bottom">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M6.99023 10.1287L9.10905 12.0711L13.0096 7.92969"
                stroke="#414141"
                stroke-miterlimit="22.9256"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="9.5" cy="9.5" r="9" stroke="#414141" />
            </svg>
            Верифицирован
          </div>
          <q-btn
            style="
              background: #1847c1;
              border-radius: 20px;
              border: 1px solid #1847c1;
            "
            to="/userAccount/UserAllTariffs"
            flat
            backgro
            color="white"
            label="Сменить тариф"
          />
        </div>
      </div>
      <div v-else>
        <cloud-main-info />
      </div>
      <div class="user-account--view__routes"><router-view></router-view></div>
      <div class="user-account--view__messages">
        <div class="user-account--view__messages-title">Новые сообщения</div>
        <div class="user-account--view__messages-container">
          <div
            class="user-account--view__message message"
            v-for="message in user.messages"
            :key="message.name"
          >
            <div class="message__head">
              <div class="message__fio">
                {{ message.name }}
              </div>
              <div class="message__date">21.03.2023</div>
            </div>
            <div class="message__text">{{ message.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <user-main-info />
    <user-all-info /> -->
  </div>
  <div v-else>loading...</div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/userViewStyle.scss";
</style>
