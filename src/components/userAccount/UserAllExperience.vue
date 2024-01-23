<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useUser, userMe } from "@/use/useUserAccount";
import httpService from "@/api/server";
import userForm from "@/components/userAccount/userForm.vue";
import iconEdit from "@/components/icons/iconEdit.vue";

const password = ref("");
const isPwd = ref(true);
const dense = ref(true);
const text = ref("");
const experienceForm = ref();

function onSubmit() {
  if (!experienceForm.value) return;
  experienceForm.value.validate().then((success: any) => {
    if (success) {
      console.log("success", success);
      // yay, models are correct
    } else {
      console.log("error");

      // oh no, user has filled in
      // at least one invalid value
    }
  });
}

const changeUserMe = async () => {
  try {
    // console.log(
    //   "userMe.value.experience.total_experience",
    //   userMe.value.experience.total_experience
    // );
    const { data } = await httpService.patch("/api/profile/me/", {
      experience: {
        // id: userMe.value.experience.id,
        total_experience: userMe.value.experience?.total_experience ?? [],
        specialization: userMe.value.experience.specialization,
        workplace: userMe.value.experience.workplace,
        education: userMe.value.experience.education,
        professional_skills: userMe.value.experience.professional_skills,
        honors_awards: userMe.value.experience.honors_awards,
        foreign_languages: userMe.value.experience.foreign_languages,
        additional_info: userMe.value.experience.additional_info,
      },
      // user: {},
    });
    userMe.value = data;

    // getUserMe();

    // userMe.value = data;
    // console.log("userMe.value", userMe.value);
  } catch (error) {
    console.log(error);
  }
};
const ageRules = [
  (val: any) =>
    (val !== null &&
      val !== "" &&
      (typeof val === "number" || typeof val === "string")) ||
    "Введите корректное значение",
  // val:any => (val > 0 && val < 100) || 'Please type a real age'
];

const validation = computed(() => {});
// console.log('userMe',userMe.value);
</script>

<template>
  <div class="user-all--experience" v-if="userMe && userMe.experience">
    <!-- <pre>{{ userMe.experience }}</pre> -->
    <!-- <user-form :item="userMe.experience.total_experience" /> -->
    <!-- <div class="user-all--experience__container">
      <div class="user-all--experience__body">
        <q-form ref="experienceForm" @submit="onSubmit" class="q-gutter-md">
          <q-input
            filled
            v-model="text"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) =>
                (val &&
                  val.length > 0 &&
                  typeof val === 'number' &&
                  !isNaN(val)) ||
                'Введите корректное значение',
            ]"
          />
          <div>
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </div> -->
    <div class="user-all--experience__title">
      Заполните ваш трудовой стаж по сцеальности8
    </div>
    <div style="position: absolute; cursor: pointer; right: 5px; top: 0">
      <icon-edit />
    </div>
    <q-form class="user-all--experience__container" @submit="changeUserMe">
      <div class="user-all--experience__body">
        <q-input
          class="user-all--experience__body-input"
          outlined
          bg-color="blue-grey-5"
          rounded
          v-model="userMe.experience.total_experience"
          :dense="dense"
          label="Ваш стаж*"
          hint="Ваш общий стаж"
          type="number"
          :rules="ageRules"
        >
          <!-- {{ typeof userMe.experience.total_experience }} -->
        </q-input>
      </div>
      <div class="user-all--experience__body">
        <q-input
          class="user-all--experience__body-input"
          outlined
          rounded
          label="Специализации"
          bg-color="blue-grey-5"
          v-model="userMe.experience.specialization"
          :dense="dense"
        >
        </q-input>
      </div>
      <div class="user-all--experience__body">
        <q-input
          class="user-all--experience__body-input"
          outlined
          bg-color="blue-grey-5"
          rounded
          label="Место работы"
          v-model="userMe.experience.workplace"
          :dense="dense"
          autogrow
        >
        </q-input>
      </div>
      <div class="user-all--experience__body">
        <q-input
          class="user-all--experience__body-input"
          outlined
          label="Образование"
          bg-color="blue-grey-5"
          rounded
          v-model="userMe.experience.education"
          :dense="dense"
          autogrow
        >
        </q-input>
      </div>
      <div class="user-all--experience__body">
        <q-input
          class="user-all--experience__body-input"
          outlined
          bg-color="blue-grey-5"
          rounded
          label="Проф. навыки"
          v-model="userMe.experience.professional_skills"
          :dense="dense"
          autogrow
        >
        </q-input>
      </div>
      <div class="user-all--experience__body">
        <q-input
          class="user-all--experience__body-input"
          outlined
          bg-color="blue-grey-5"
          rounded
          label="Почести и награды"
          v-model="userMe.experience.honors_awards"
          :dense="dense"
          autogrow
        >
        </q-input>
      </div>
      <div class="user-all--experience__body">
        <q-input
          class="user-all--experience__body-input"
          outlined
          bg-color="blue-grey-5"
          rounded
          label="Знание ин. языков"
          v-model="userMe.experience.foreign_languages"
          :dense="dense"
        >
        </q-input>
      </div>
      <div class="user-all--experience__body">
        <q-input
          class="user-all--experience__body-input"
          outlined
          bg-color="blue-grey-5"
          rounded
          label="Доп. информация"
          v-model="userMe.experience.additional_info"
          :dense="dense"
          autogrow
          type="textarea"
        >
        </q-input>
      </div>
      <q-btn
        rounded
        color="primary"
        label="Сохранить изменения"
        type="submit"
        style="max-width: 250px"
      />
      <!-- <q-btn color="primary" label="добавить" @click="changeUserMe()" /> -->
    </q-form>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/userViewStyle.scss";
</style>
