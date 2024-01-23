<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import httpService from "@/api/server";
import { newMsg, message, count } from "@/use/alerts";

import { useQuasar } from "quasar";
const $q = useQuasar();
const codeAntiBot = ref("");
const file = ref();
const qForms = ref();

const formValue = ref({
  oranization: "",
  name: "",
  phone_number: "",
  email: "",
  message: "",
  code: "",
  upload: null,
});

const ageRules = [
  (val: any) => (val !== null && val !== "") || "Введите значение",
  // val:any => (val > 0 && val <script 100) || 'Please type a real age'
];

const onRejected = (rejectedEntries: any) => {
  // Notify plugin needs to be installed
  // https://quasar.dev/quasar-plugins/notify#Installation
  $q.notify({
    type: "negative",
    message: `${rejectedEntries.length} некоторые файл(ы) не прошли требования`,
  });
};

const sendForm = async () => {
  let formData = new FormData();
  if (!captcha.value || captcha.value.length <= 0) {
    $q.notify({
      type: "negative",
      position: "right",
      message: `Пройдите проверку каптчи!`,
    });
    return;
  }
  formData.append(
    "upload",
    file.value.files.length > 0 ? file.value.files[0] : ""
  );
  formData.append("name", formValue.value.name);
  formData.append("email", formValue.value.email);
  formData.append("phone_number", formValue.value.phone_number);
  formData.append("message", formValue.value.message);
  formData.append("message_type", "1");
  formData.append("g-recaptcha-response", `${captcha.value}`);

  try {
    // const { data } = await httpService.post("/api/support/", {
    //   name: formValue.value.name,
    //   phone_number: formValue.value.phone_number,
    //   email: formValue.value.email,
    //   message: formValue.value.message,
    //   message_type: 1,
    //   // upload: file.value.files,
    //   upload: formData.get("upload"),

    //   headers: {
    //     "Content-Type": "multipart/form-data", // Указываем тип контента как multipart/form-data
    //   },
    //   // // user: {},
    // });
    const { data } = await httpService.post("/api/support/", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Указываем тип контента как multipart/form-data
      },
    });
    reset();
    resetForm(formValue.value);
    captcha.value = "";

    $q.notify({
      type: "info",
      position: "right",
      message: `Заявка успешно отправленна`,
    });
  } catch (error: any) {
    console.log(error);
    $q.notify({
      type: `alert`,
      color: "primary",
      position: "bottom-right",
      message: `${Object.values(error.response.data)[0]}`,
    });
    reset();
  } finally {
    formData.forEach(function (val, key, fD) {
      // here you can add filtering conditions
      formData.delete(key);
    });
  }
};
const sitekey = ref("6LeTviopAAAAAL8nCPLPKqocRkgFws-fk72o2_KX");
const widgetId = ref(0);

declare global {
  interface Window {
    grecaptcha: any;
  }
}
const resetForm = (obj: any) => {
  Object.keys(obj).map((key) => {
    obj[key] = "";
  });
};
const reset = () => {
  window["grecaptcha"].reset(widgetId.value);
};
const render = () => {
  const grecaptcha = window["grecaptcha"];

  if (grecaptcha) {
    widgetId.value = grecaptcha.render("g-recaptcha", {
      sitekey: sitekey.value,
      // the callback executed when the user solve the recaptcha
      callback: (response: any) => {
        captcha.value = response;
      },
    });
  }
};

const isCaptcha = ref(false);
const inputCaptcha = ref();

const captcha = ref("");

onMounted(() => {
  render();
});
</script>

<template>
  <div class="support-service--view__container">
    <div class="support-service--view__title">Форма обратной связи</div>
    <div class="support-service--view__form">
      <q-form
        ref="qForms"
        class="support-service--view__container"
        @submit="sendForm"
      >
        <div class="support-service--view__body">
          <div class="support-service--view__body-name">Ваша организация</div>
          <q-input
            class="support-service--view__body-input"
            outlined
            v-model="formValue.oranization"
            label="Введите название организации"
            type="text"
            :rules="ageRules"
          >
          </q-input>
        </div>
        <div class="support-service--view__body">
          <div class="support-service--view__body-name">ФИО*</div>
          <q-input
            class="support-service--view__body-input"
            outlined
            label="Введите ваше ФИО"
            type="text"
            v-model="formValue.name"
            :rules="ageRules"
          >
          </q-input>
        </div>
        <div class="support-service--view__body">
          <div class="support-service--view__body-name">Телефон*</div>
          <q-input
            class="support-service--view__body-input"
            outlined
            v-model="formValue.phone_number"
            label="Ваш телефон"
            mask="+7(###) ### - ####"
            unmasked-value
            type="tel"
            :rules="ageRules"
          >
          </q-input>
        </div>
        <div class="support-service--view__body">
          <div class="support-service--view__body-name">E-mail:*</div>
          <q-input
            class="support-service--view__body-input"
            outlined
            v-model="formValue.email"
            label="Ваш email"
            type="email"
            :rules="ageRules"
          >
          </q-input>
        </div>
        <div class="support-service--view__body">
          <div class="support-service--view__body-name">Сообщение*</div>
          <div style="flex: 0 1 50%">
            <q-input
              class="support-service--view__body-input"
              outlined
              v-model="formValue.message"
              label="Введите текст сообщения"
              type="textarea"
              :rules="ageRules"
            />
            <div
              style="
                display: flex;
                gap: 20px;
                justify-content: space-between;
                margin-top: 20px;
              "
            >
              <!-- <div
                style="
                  width: 80%;
                  border-radius: 7px;
                  background: var(--white-compas, #fff);
                  padding: 10px;
                  text-align: start;
                "
              > -->
              <!-- Прикрепите файл -->
              <q-uploader
                ref="file"
                max-files="1"
                style="width: 100%"
                label="Прикрепите файл"
                @rejected="onRejected"
              />
              <!-- max-total-size="4096" -->
              <!-- <input type="file" id="file" ref="file" v-on:change="sendForm()"/> -->
              <!-- </div> -->
              <!-- <q-btn color="primary" label="обзор" /> -->
            </div>
          </div>
        </div>
        <div class="support-service--view__body">
          <div class="support-service--view__body-name">Код-антибот</div>
          <div
            style="display: flex; align-items: center; gap: 20px; flex: 0 1 50%"
          >
            <div
              id="g-recaptcha"
              class="g-recaptcha"
              :data-sitekey="sitekey"
            ></div>

            <input
              style="display: none"
              type="text"
              v-model="inputCaptcha"
              id="recaptchaResponse"
              name="g-recaptcha-response"
            />
            <div v-if="isCaptcha" style="color: #f00">пройдите проверку!</div>

            <!-- <div
              style="
                padding: 15px;
                border-radius: 7px;
                background: var(--WhiteCompas, #fff);
              "
            >
              {{ code }}
            </div>
            <q-input
              class="support-service--view__body-input"
              outlined
              v-model="codeAntiBot"
              label="Код-антибот"
              type="text"
              :rules="ageRules"
            >
            </q-input> -->
          </div>
        </div>
        <div class="support-service--view__form">
          <!-- :disable="!disableSubmit" -->
          <q-btn color="primary" type="submit" label="отправить" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.support-service--view {
  &__container {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .q-field__inner {
      background: #fff;
    }
  }

  &__title {
    text-transform: uppercase;
    font-weight: 600;
    // margin-bottom: 20px;
  }
  &__form {
    text-align: end;
  }
  &__body {
    display: flex;
    align-items: center;
    // justify-content: space-between;

    gap: 20px;
    // .q-editor {
    //   flex: 1 1 70%;
    // }
    & > div:first-child {
      min-width: 100px;
      display: flex;
    }
  }
  &__body-name {
    flex: 0 1 15%;
    color: var(--black-compas, #121212);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
  &__body-input {
    flex: 0 1 50%;
  }
}
</style>
<style lang="scss">
.grecaptcha-badge {
  position: relative !important;
  right: 0 !important;
}
.support-service--view {
  &__body {
    .q-field--with-bottom {
      padding-bottom: 0;
    }
  }
  &__container {
    .q-field__inner {
      background: #fff;
    }
    & > div:last-child {
      .support-service--view__body-input {
        // flex: 0 1 100%;
      }
    }
  }
}
</style>
