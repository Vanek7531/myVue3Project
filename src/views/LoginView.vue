<script setup lang="ts">
import { computed, ref } from "vue";
import IconMain from "@/components/icons/iconMain.vue";
import { Notify } from "quasar";

// import httpService from "@/api/server";
import router from "@/router";
import { login } from "@/use/useAuthorization";
import axios from "axios";

// const login = async () => {
//   try {
//     const response = await httpService.post(`/api/token/`, {
//       email: text.value,
//       password: password.value,
//     });
//     console.log("response", response);
//     // saveToken(response.data.access);
//     if (response.status === 200) router.push("/userAccount");
//     return response;
//   } catch (error) {}
// };

const dense = ref(true);
const recoveryVal = ref("");
const emailLogin = ref("");
const isCodeWindow = ref(false);
const model = ref(true);
const password = ref("");
const passwordRecTel = ref("");
const isPasswordRecTel = ref(false);
const isPwd = ref(true);
const isMobileRecovery = ref(true);
const smsCode = ref("");

const resetPasswordEmail = async () => {
  try {
    let formData = new FormData();
    formData.append("email", `${recoveryVal.value}`);
    const response = await axios.post(
      `${
        import.meta.env.VITE_APP_BACK_URL
      }/api/users/verify/reset_password_with_email/`,
      formData
    );
    // saveToken(response.data.access);
    // if (response.status === 200) router.push("/userAccount");
    Notify.create({
      message: `${response.data.info}`,
      type: "info",
      color: "primary",
      position: "bottom-right",
    });
    console.log("response", response);
    openModal.value = false;
  } catch (error) {}
};
const resetPasswordPhone = async () => {
  try {
    let formData = new FormData();
    formData.append(`phone_number`, `${recoveryVal.value}`);

    const response = await axios.post(
      `${
        import.meta.env.VITE_APP_BACK_URL
      }/api/users/verify/reset_password_with_phone/`,
      formData
    );
    console.log("response", response);
    Notify.create({
      message: `${response.data.info}`,
      type: "info",
      color: "primary",
      position: "bottom-right",
    });
    isCodeWindow.value = true;
  } catch (error: any) {
    console.log("er", error);
  }
};
const resetAccountPhone = async (isRecover = false) => {
  try {
    let formData = new FormData();
    formData.append(`phone_number`, `${recoveryVal.value}`);
    if (isRecover) {
      formData.append(`password`, `${passwordRecTel.value}`);
    } else {
      formData.append(`code`, `${smsCode.value}`);
    }
    const response = await axios.post(
      `${
        import.meta.env.VITE_APP_BACK_URL
      }/api/users/verify/change_password_with_phone/`,
      formData
    );
    Notify.create({
      message: `${
        response.data && response.data.info ? response.data.info : response.data
      }`,
      type: "info",
      color: "primary",
      position: "bottom-right",
    });
    if (response.status === 200) {
      isPasswordRecTel.value = true;
      isCodeWindow.value = true;
      smsCode.value = "";
    }
    if (response.status === 201) {
      openModal.value = false;
      isPasswordRecTel.value = false;
      isCodeWindow.value = false;
      passwordRecTel.value = "";
      recoveryVal.value = "";
    }
  } catch (error: any) {
    console.log("er", error);
    isCodeWindow.value = false;
    Notify.create({
      message: `${error.response.data ? error.response.data : ""}`,
      type: "warning",
      color: "red",
      position: "bottom-right",
    });
  }
};

const openModal = ref(false);
</script>

<template>
  <div class="login-view__container">
    <div class="login-view__body">
      <!-- <div> -->
      <icon-main />
      <div class="login-view__tittle">Вход в личный кабинет</div>
      <!-- </div> -->
      <div class="login-view__type-login">
        <q-btn-toggle
          v-model="model"
          toggle-color="blue-grey-5"
          toggle-text-color="primary"
          text-color="black"
          :options="[
            { label: 'почта', value: true },
            { label: 'телефон', value: false },
          ]"
        />
      </div>
      <q-input
        class="user-all--base__body-input"
        outlined
        v-model="emailLogin"
        :label="model ? 'почта' : 'телефон'"
        :type="model ? 'email' : 'tel'"
        placeholder="Введите ваш email"
        :dense="dense"
      >
      </q-input>

      <q-input
        class="user-all--base__body-input"
        outlined
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        label="Текущий пароль"
        placeholder="Введите текущий пароль"
        :dense="dense"
        bottom-slots
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
        <template v-slot:hint>
          <!-- <RouterLink to="/recovery"> -->
          <div
            style="
              width: fit-content;
              padding: 10px;
              cursor: pointer;
              text-decoration: underline;
            "
            @click="openModal = true"
          >
            не помню
          </div>
          <!-- </RouterLink> -->
        </template></q-input
      >
      <q-btn
        color="primary"
        label="войти"
        @click="login(emailLogin, password)"
      />

      <div class="login-view__another-method">
        <div @click="" style="color: #919cb8">войти с помощью {{}}</div>
        <div>
          <img src="@/assets/svg/cib_yandex.svg" alt="" />
          <img src="@/assets/svg/cib_vk.svg" alt="" />
          <img src="@/assets/svg/cib_google.svg" alt="" />
        </div>
      </div>
      <q-dialog v-model="openModal" persistent>
        <q-card style="min-width: 350px">
          <q-card-section
            style="
              display: flex;
              align-items: center;
              gap: 5px;
              justify-content: space-between;
            "
          >
            <div class="text-h6">Восстановить пароль</div>
            <q-btn
              v-if="!isCodeWindow"
              flat
              @click.stop="
                (isMobileRecovery = !isMobileRecovery), (recoveryVal = '')
              "
              :label="!isMobileRecovery ? 'Почта' : 'Телефон'"
            />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model.trim="recoveryVal"
              :label="`Введите ${
                !isMobileRecovery ? 'ваш телефон' : 'вашу почту'
              }`"
              autofocus
              @keyup.enter="openModal = false"
            />
          </q-card-section>
          <q-card-section class="q-pt-none" v-if="isCodeWindow">
            <q-input
              v-if="isPasswordRecTel"
              dense
              v-model.trim="passwordRecTel"
              :label="'Введите новый пароль'"
              autofocus
            />
            <q-input
              v-else
              dense
              v-model.trim="smsCode"
              :label="'Введите код из смс'"
              autofocus
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Отмена" v-close-popup />
            <div @click="isCodeWindow = true">isCodeWindow</div>
            <q-btn
              v-if="isMobileRecovery"
              @click="resetPasswordEmail()"
              flat
              label="ВосстановитьEmail"
            />
            <q-btn
              v-if="!isMobileRecovery && !isCodeWindow"
              @click="resetPasswordPhone()"
              flat
              label="Получить код"
            />
            <div v-if="!isMobileRecovery && isCodeWindow">
              <q-btn
                v-if="!isPasswordRecTel"
                @click="resetAccountPhone()"
                flat
                label="Отправить код"
              />
              <q-btn
                v-else
                @click="resetAccountPhone(true)"
                flat
                label="Обновить пароль"
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div>
        <RouterLink to="/registration">
          нет аккаунта Зарегистрируйтесь!
        </RouterLink>
      </div>
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
  &__another-method {
    padding-top: 20px;
    & div:first-child {
      text-align: center;
      margin-bottom: 20px;
    }
    & div:last-child {
      display: flex;
      gap: 15px;
      img {
        width: 65px;
      }
    }
  }
}
@media (max-width: 1023px) {
  .login-view {
    &__container {
      padding: 80px 2% 100px;
    }
    &__body {
      padding: 40px 40px;
    }
  }
}

@media (max-width: 767px) {
  .login-view {
    &__container {
      padding: 40px 2% 100px;
    }
    &__body {
      padding: 20px 40px;
    }
  }
}
</style>
