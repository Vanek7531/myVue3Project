<script setup lang="ts">
import { computed, ref } from "vue";
import IconMain from "@/components/icons/iconMain.vue";

import httpService from "@/api/server";
import router from "@/router";
import axios from "axios";

const lastWindow = ref(false);
const changePassword = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BACK_URL}/api/users/verify/${
        router.currentRoute.value.query.uid
      }/${router.currentRoute.value.query.token}/change_password_with_email/`,
      {
        password: password.value,
      }
    );
    lastWindow.value = true;
    // router.push(`/`)
    return response;
  } catch (error) {}
};

const pasEqual = computed(
  () =>
    password.value.length !== 0 &&
    password.value.length !== 0 &&
    password.value === passwordDuplicate.value
);

console.log("rrrr", router.currentRoute.value.query);

const dense = ref(true);
const password = ref("");
const passwordDuplicate = ref("");
const isPwd = ref(true);
12345678;
</script>
<template>
  <div class="login-view__container">
    <div class="login-view__body" v-if="!lastWindow">
      <!-- <div> -->
      <icon-main />
      <div class="login-view__tittle">Восстановить пароль аккаунта</div>
      <!-- </div> -->
      <q-input
        class="user-all--base__body-input"
        outlined
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        label="Новый пароль"
        placeholder="Новый пароль"
        :dense="dense"
        bottom-slots
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your password',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          /> </template
      ></q-input>
      <q-input
        class="user-all--base__body-input"
        outlined
        v-model="passwordDuplicate"
        :type="isPwd ? 'password' : 'text'"
        label="Повторите новый пароль"
        placeholder="Повторите новый пароль"
        :dense="dense"
        bottom-slots
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your password',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          /> </template
      ></q-input>

      <!-- <q-input
        class="user-all--base__body-input"
        outlined
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        label="Текущий пароль"
        placeholder="Введите текущий пароль"
        :dense="dense"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          /> </template
      ></q-input> -->
      <q-btn
        :disable="!pasEqual"
        color="primary"
        label="Восстановить"
        @click="changePassword()"
      />
    </div>
    <div class="login-view__last-window" v-else>
      <div>Внимание!</div>
      <div>
        Вы восстановили пароль <br />
        к личному кабинету.
      </div>
      <q-btn to="/" color="primary"> ок </q-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-view {
  &__container {
    padding: 240px 18% 200px;
  }
  &__body {
    // width: 780px;
    height: 700px;
    // border: 1px solid black;
    // height: 100%;
    width: 100%;
    background: #fff;
    border-radius: 12px;
    padding: 100px 240px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    & > label,
    button {
      width: 100%;
    }
  }
  &__last-window {
    border-radius: 12px;
    background: var(--WhiteCompas, #fff);
    // width: 100%;
    background: #fff;
    border-radius: 12px;
    padding: 40px 80px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: fit-content;
    & > div:first-child {
      color: var(--BlueCompas, #4b73db);
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 36px */
      text-transform: uppercase;
    }
    & > div:nth-child(2) {
      color: var(--BlueCompas, #4b73db);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
  }
  &__type-login {
    border-radius: 7px;
    border: 1px solid #919cb8;
    width: 100%;
    display: flex;
    // align-items: center;
    padding: 10px;
    justify-content: center;
    .q-btn-group {
      box-shadow: none !important;
      border: none !important;
      display: flex;
      justify-content: center;
      // justify-content: space-between;
      width: 100%;
    }
    button {
      width: 50% !important;
    }
  }
}
</style>
