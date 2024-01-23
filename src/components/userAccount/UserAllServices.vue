<script setup lang="ts">
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import iconComment from "../icons/iconComment.vue";
import iconEdit from "@/components/icons/iconEdit.vue";

import { useUser } from "@/use/useUserAccount";
import { ref } from "vue";
const { comp, categories, swapComp, advices } = useUser();

const service = ref(null);
const services2 = [
  "ЕНВД",
  "Исполнительное производство",
  "Банкротство граждан",
];
const text = ref("");
</script>

<template>
  <div class="user-all--form">
    <div class="user-all--form__container">
      <div style="position: absolute; cursor: pointer; right: 5px; top: 0">
        <icon-edit />
      </div>
      <div class="user-all--form__title">Заполните поле с услугами</div>

      <div class="user-all--form__choose" style="align-items: center">
        <q-input
          style="width: 80%"
          bg-color="blue-grey-5"
          rounded
          outlined
          v-model="text"
          label="Ваш вопрос"
          placeholder="Введите ваш вопрос"
          type="textarea"
        />
      </div>
      <q-btn rounded color="primary" label="Сохранить изменения" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
