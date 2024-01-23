<script setup lang="ts">
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import iconComment from "../icons/iconComment.vue";
import iconEdit from "@/components/icons/iconEdit.vue";

import { useUser } from "@/use/useUserAccount";
import { ref } from "vue";
const { comp, categories, swapComp, advices } = useUser();

const form = ref(null);
const forms2 = [
  "Хозяйственные партнерства",
  "Общественное движение",
  "Полное товарищество",
];
const forms = [
  {
    city: "Хозяйственные партнерства",
    status: "основная Ваша форма",
  },
  {
    city: "Общественное движение",
    status: "дополнительная Ваша форма",
  },
  {
    city: "Полное товарищество",
    status: "дополнительная Ваша форма",
  },
];
</script>

<template>
  <div class="user-all--form">
    <div class="user-all--form__title">Организационная форма</div>
    <div style="position: absolute; cursor: pointer; right: 5px; top: 0">
      <icon-edit />
    </div>
    <div class="user-all--form__container">
      <div class="user-all--form__choose">
        <q-select
          label="Выберите форму"
          bg-color="blue-grey-5"
          rounded
          outlined
          v-model="form"
          :options="forms2"
        />
        <q-input
          label="Введите ИНН"
          bg-color="blue-grey-5"
          rounded
          outlined
          v-model="form"
          :options="forms2"
        />
        <q-input
          label="Введите ОГРН"
          bg-color="blue-grey-5"
          rounded
          outlined
          v-model="form"
          :options="forms2"
        />
        <q-input
          label="Подкрепите карточку организации"
          bg-color="blue-grey-5"
          rounded
          outlined
          v-model="form"
          :options="forms2"
        />
      </div>
      <div v-if="false" class="user-all--form__info">
        <div>
          <div>Форма</div>
          <div>Статус</div>
        </div>
        <div v-for="item in forms" :key="item.city">
          <div>{{ item.city }}</div>
          <div>{{ item.status }}</div>
        </div>
      </div>
      <q-btn rounded color="primary" label="Сохранить изменения" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
