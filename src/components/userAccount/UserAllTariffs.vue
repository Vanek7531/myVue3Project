<script setup lang="ts">
import httpService from "@/api/server";
import { type Ref, ref, computed, onMounted } from "vue";

// const payments = [
//   {
//     type: "Базовый",
//     payment: "1500₽/мес.",
//     info: "Для эффективной работы и хороших продаж",
//     users: 5,
//   },
//   {
//     type: "Оптима",
//     payment: "4000₽/мес.",
//     info: "Для эффективной работы и хороших продаж",
//     users: 5,
//   },
//   {
//     type: "профи",
//     payment: "500₽/мес.",
//     info: "Для эффективной работы и хороших продаж",
//     users: 5,
//   },
// ];
import { useQuasar } from "quasar";
import { useUser } from "@/use/useUserAccount";
const $q = useQuasar();
const showNotif = (message: string, color = "blue") => {
  $q.notify({
    message: `${message}`,
    color: color,
    position: "bottom-right",
  });
};
const payments = ref();

const getTariffs = async () => {
  try {
    const { data } = await httpService.get(`/api/tariff/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getTariff = async (id: number) => {
  try {
    const { data } = await httpService.get(`/api/pay/${id}/`);
    if (data.redirect_url) window.open(data.redirect_url);
    getUserTariff();
    showNotif(data.message);
  } catch (error: any) {
    console.log(error);
    showNotif(error.response.data.message, "red");
  }
};

const { swapComp, getUserTariff } = useUser();

onMounted(async () => {
  payments.value = await getTariffs();
});
</script>

<template>
  <div class="user-all--tariffs" v-if="payments">
    <div class="user-all--tariffs__types">
      <div>Пользователи</div>
      <div>Специалисты</div>
      <div>Студенты</div>
      <div>Компании</div>
      <div>Гос. учреждении</div>
    </div>
    <div class="user-all--tariffs__container">
      <div>
        <p>Юрист</p>
        <p>Бухгалтер</p>
      </div>
      <div class="user-all--tariffs__cards">
        <div
          class="user-all--tariffs__card card"
          v-for="payment in payments"
          :key="payment.type"
        >
          <div
            :class="payment.name === 'Оптима' ? 'red' : ''"
            class="card__header"
          >
            {{ payment.name }}
          </div>
          <div class="card__info">{{ payment.description }}</div>
          <div class="card__users">
            <span>{{ payment.group }}</span> пользователей
          </div>
          <div class="card__payment">{{ payment.cost }}</div>
          <q-btn
            @click="getTariff(payment.id)"
            class="card__button"
            color="primary"
            label="купить"
          />
        </div>
      </div>
      <div
        class="user-all--tariffs__in-detail"
        @click="swapComp('UserAllLongTariffs')"
      >
        Подробная информация от тарифах
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.red {
  background: #e71d36 !important;
}
@import "@/assets/styles/userViewStyle.scss";
</style>
