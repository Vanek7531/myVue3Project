<script setup lang="ts">
const payments = [
  {
    date: "11.02.2012",
    card: "Visa · 4406",
    sum: "3000₽",
    status: "оплачено",
  },
  {
    date: "11.02.2015",
    card: "Visa · 4406",
    sum: "3000₽",
    status: "отклонено",
  },
  {
    date: "11.02.2017",
    card: "Visa · 4406",
    sum: "3000₽",
    status: "в ожидании",
  },
  {
    date: "11.02.2017",
    card: "Visa · 4406",
    sum: "3000₽",
    status: "в ожидании",
  },
  {
    date: "11.02.2017",
    card: "Visa · 4406",
    sum: "3000₽",
    status: "в ожидании",
  },
  {
    date: "11.02.2017",
    card: "Visa · 4406",
    sum: "3000₽",
    status: "в ожидании",
  },
  {
    date: "11.02.2017",
    card: "Visa · 4406",
    sum: "3000₽",
    status: "в ожидании",
  },
  {
    date: "11.02.2017",
    card: "Visa · 4406",
    sum: "3000₽",
    status: "в ожидании",
  },
];

const getStatus = (status: string) => {
  return status === "отклонено" ? "red" : status === "в ожидании" ? "grey" : "";
};
</script>

<template>
  <div class="user-account--view__user-all--payment user-all--payment">
    <div class="user-all--payment__personal">
      <div class="user-all--payment__personal-title">Личный счет</div>
      <div class="user-all--payment__personal-sub--title">
        Ваше состояние счета отображается в виде валют Российской Федерации
      </div>
      <div class="user-all--payment__personal-account">
        <div>На вашем счете</div>
        <div><span>3456 Р.</span></div>
      </div>
			<q-btn style="max-width: 250px;" rounded outline color="primary" label="пополнить баланс" />
    </div>
    <div class="user-all--payment__history">
      <div class="user-all--payment__personal-title">История платежей</div>
      <div class="user-all--payment__history-table">
        <div class="user-all--payment__history-table--header">
          <div>Дата платежа</div>
          <div>Способ оплаты</div>
          <div>Сумма</div>
          <div>Статус</div>
        </div>
        <div
          class="user-all--payment__history-table--body"
          v-for="payment in payments"
          :key="payment.date"
        >
          <div>{{ payment.date }}</div>
          <div>{{ payment.card }}</div>
          <div>{{ payment.sum }}</div>
          <div :class="getStatus(payment.status)">{{ payment.status }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
