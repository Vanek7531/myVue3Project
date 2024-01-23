<script setup lang="ts">
import { onMounted, ref } from "vue";
import IconMain from "@/components/icons/iconMain.vue";
import axios from "axios";
import httpService from "@/api/server";
import router from "@/router";
import IconLeftArrow from "@/components/icons/iconLeftArrow.vue";
import { registrations } from "@/use/useAuthorization";

const {
  dense,
  email,
  currentRole,
  model,
  password,
  patronymic,
  last_name,
  first_name,
  role,
  isPwd,
  disable,
  currentStep,
  roles,
  chooseRole,
  registration,
  uprove,
  verifyRegistration,
  number,
  codeInput,
  codeSMS,
  verifyNumber,
} = registrations();
// const verifyEmail = async () => {
//   let formData = new FormData();

//   formData.append(`verified_field `, `email`);
//   formData.append(`email `, `${email.value}`);

//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_APP_BACK_URL}/api/users/`,
//       formData
//     );
//     console.log("response.status", response);
//     if (response.status === 200) {
//       localStorage.setItem("regEmail", email.value);
//       alert("Потвердите регестрацию на почте");
//       router.push("/");
//     }
//   } catch (er) {}
// };

// const registration = async () => {
//   let formData = new FormData();
//   // formData.append(`email`, `${localStorage.getItem("regEmail")}`);
//   formData.append(`first_name`, `${first_name.value}`);
//   formData.append(`password`, `${password.value}`);
//   formData.append(`role`, `${currentRole.value}`);
//   formData.append(`last_name`, `${last_name.value}`);
//   formData.append(`patronymic`, `${patronymic.value}`);
//   formData.append(`token`, `${router.currentRoute.value.query.token}`);
//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_APP_BACK_URL}/api/users/registration/`,
//       formData
//     );
//     // saveToken(response.data.access);
//     // console.log("response.status", response);
//     if (response.status === 201) {
//       alert("Регистрация успешно выполнена");
//       router.push("/");
//     }
//     return response;
//   } catch (error) {}
// };

// const uprove = () => {
//   disable.value = false;
// };

// const roles = [
//   {
//     role: "Specialist",
//     name: "Специалист",
//   },
//   {
//     role: "Urist",
//     name: "Юрист",
//   },
//   {
//     role: "Organization",
//     name: "Organization",
//   },
//   {
//     role: "Content_maker",
//     name: "Контент менджер",
//   },
//   {
//     role: "DefaultUser",
//     name: "Обычный пользователь",
//   },
// ];

// const chooseRole = (role: string) => {
//   currentRole.value = role;
//   disable.value = false;
// };

// const dense = ref(true);
// const email = ref("");
// const currentRole = ref("");
// const model = ref(true);
// const password = ref("");
// const patronymic = ref("");
// const last_name = ref("");
// const first_name = ref("");
// const role = ref("");
// const isPwd = ref(true);
// const disable = ref(true);
// const currentStep = ref("newEmail");

const typeReg = ref("номер");
const swapTypeReg = () => {
  typeReg.value === "номер"
    ? (typeReg.value = "почту")
    : (typeReg.value = "номер");
};

onMounted(() => {
  if (
    router.currentRoute.value.query.token &&
    router.currentRoute.value.query.token.length > 0
  ) {
    console.log("Here");
    currentStep.value = "confidential";
  }
});
</script>

<template>
  <div class="login-view__container">
    <div class="login-view__body" v-if="currentStep === 'newEmail'">
      <div class="login-view__back-btn" @click="router.push('/login')">
        <icon-left-arrow />
      </div>
      <icon-main />
      <div class="login-view__tittle">Регистрация личного кабинета</div>
      <div style="cursor: pointer" v-if="!codeInput" @click="swapTypeReg()">
        Или используйте {{ typeReg }}
      </div>
      <div
        style="display: flex; gap: 20px; flex-direction: column"
        v-if="typeReg === 'номер'"
      >
        <q-input
          class="user-all--base__body-input"
          outlined
          v-model="email"
          type="email"
          label="Ваша почта"
          placeholder="Введите почту"
          :dense="dense"
        ></q-input>
        <q-btn color="primary" @click="verifyRegistration()"
          >отправить потверждение на почту</q-btn
        >
      </div>
      <div
        style="display: flex; gap: 20px; flex-direction: column"
        v-if="typeReg === 'почту' && !codeInput"
      >
        <q-input
          class="user-all--base__body-input"
          outlined
          v-model="number"
          type="tel"
          mask="+7 (9##) ### - ####"
          unmasked-value
          label="Ваш номер"
          placeholder="Введите номер"
          :dense="dense"
          codeInput
        >
        </q-input>
        <q-btn color="primary" @click="verifyRegistration('phone_number')"
          >отправить потверждение на номер</q-btn
        >
      </div>
      <div
        style="display: flex; gap: 20px; flex-direction: column"
        v-if="typeReg === 'почту' && codeInput"
      >
        <q-input
          class="user-all--base__body-input"
          outlined
          v-model="codeSMS"
          type="number"
          label="Введите код из смс"
          placeholder="Ваш код"
        >
        </q-input>
        <q-btn :disable="!codeSMS" color="primary" @click="verifyNumber()"
          >Потвердить номер</q-btn
        >
      </div>
    </div>
    <div class="login-view__body" v-if="currentStep === 'confidential'">
      <!-- <div class="login-view__back-btn" @click="router.push('/login')">
        <icon-left-arrow />
      </div> -->
      <icon-main />
      <div class="login-view__tittle">
        В целях улучшения сервиса мы будем вынуждены проверить ваши данные
      </div>
      <div class="login-view__sub-tittle">
        Изучите политику <span>о сборе данных</span> нашего сервиса, перед тем
        как продолжить
      </div>
      <!-- </div> -->
      <div
        class="login-view__agree-btn"
        :class="disable ? 'disable' : ''"
        @click="uprove()"
      >
        согласен
      </div>
      <!-- <div class="login-view__next-btn" @click="currentStep = 'role'">next</div> -->
      <q-btn
        color="primary"
        :disable="disable"
        @click="(currentStep = 'role'), (disable = true)"
        >Дальше</q-btn
      >
    </div>
    <div class="login-view__body" v-if="currentStep === 'role'">
      <div class="login-view__back-btn" @click="currentStep = 'confidential'">
        <icon-left-arrow />
      </div>
      <icon-main />
      <div class="login-view__tittle">Моя роль на сайте</div>
      <!-- </div> -->
      <div
        class="login-view__role-btn"
        :class="currentRole === item.role ? 'choosen' : ''"
        v-for="item in roles"
        :key="item.role"
        @click="chooseRole(item.role)"
      >
        {{ item.name }}
      </div>
      <q-btn color="primary" :disable="disable" @click="currentStep = 'fio'"
        >Дальше</q-btn
      >
    </div>

    <div class="login-view__body" v-if="currentStep === 'fio'">
      <!-- <div> -->
      <div class="login-view__back-btn" @click="currentStep = 'role'">
        <icon-left-arrow />
      </div>

      <icon-main />
      <div class="login-view__tittle">Регистрация личного кабинета</div>
      <!-- </div> -->
      <!-- <div class="login-view__type-login">
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
      </div> -->
      <q-input
        class="user-all--base__body-input"
        outlined
        v-model="last_name"
        label="Введите вашу фамилию"
        type="text"
        placeholder="Введите вашу фамилию"
      >
      </q-input>
      <q-input
        class="user-all--base__body-input"
        outlined
        v-model="first_name"
        label="Введите ваше имя"
        type="text"
        placeholder="Введите ваше имя"
      >
      </q-input>
      <q-input
        class="user-all--base__body-input"
        outlined
        v-model="patronymic"
        label="Введите ваше отчество"
        type="text"
        placeholder="Введите ваше отчество"
      >
      </q-input>
      <q-input
        class="user-all--base__body-input"
        outlined
        v-model="password"
        type="password"
        label="Текущий пароль"
        placeholder="Введите текущий пароль"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          /> </template
      ></q-input>

      <q-btn color="primary" label="Потвердить" @click="registration()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.disable {
  background: #919cb896 !important;
  color: #fff;
  border: 1px solid grey !important;
}
.choosen {
  background: #1976d2 !important;
  color: #fff;
}
.login-view {
  &__container {
    padding: 240px 18% 200px;
  }
  &__body {
    position: relative;
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
  &__tittle {
    color: var(--BlackCompas, #121212);
    text-align: center;
    font-size: 16px;
    line-height: 140%; /* 22.4px */
  }
  &__sub-tittle {
    color: var(--GrayFonCompas, #919cb8);
    text-align: center;
    font-size: 14px;
    line-height: 22px; /* 157.143% */
    span {
      color: var(--BlueCompas, #1976d2);
    }
  }
  &__back-btn {
    position: absolute;
    top: 10%;
    left: 10%;
    cursor: pointer;
  }
  &__agree-btn {
    border-radius: 7px;
    border: 1px solid var(--BlueCompas, #1976d2);
    background: #fff;
    display: flex;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    justify-content: center;
  }
  &__role-btn {
    &:hover {
      background: #1976d2;
      color: #fff;
    }
    @extend .login-view__agree-btn;
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
@media (max-width: 426px) {
  .login-view {
    &__body {
      padding: 20px 40px;
    }
  }
}
</style>
