<script setup lang="ts">
import TheButton from "@/components/common/TheButton.vue";
import iconEdit from "@/components/icons/iconEdit.vue";

import { ref } from "vue";

const type = ref("password");
const password = ref("");
const isPwd = ref(true);
const dense = ref(true);
</script>

<template>
  <div class="user-account--view__user-all--safety user-all--safety">
    <div class="user-all--safety__container">
			<div style="position: absolute; cursor: pointer; right: 5px; top: 0">
      <icon-edit />
    </div>
			<div class="user-all--safety__title">Изменение пароля</div>
      <div class="user-all--safety__right">
        <div class="user-all--safety__body">
          <q-input
            outlined
            bg-color="blue-grey-5"
            rounded
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
          ></q-input>
          <q-input
            outlined
            bg-color="blue-grey-5"
            rounded
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Новый пароль"
            placeholder="Введите новый пароль"
            :dense="dense"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              /> </template
          ></q-input>
          <q-input
            outlined
            bg-color="blue-grey-5"
            rounded
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Повторить пароль"
            placeholder="Введите повторить пароль"
            :dense="dense"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              /> </template
          ></q-input>
        </div>
      </div>
      <div class="user-all--safety__btns">
        <q-btn color="primary" rounded label="сохранить" />

        <div>Забыли пароль?</div>
        <!-- <the-button
          :backgroundColor="'#4B73DB'"
          :textColor="'#fff'"
          :text="'сохранить'"
        /> -->
      </div>
    </div>
  </div>
  <!-- <div class="user-account--view__user-all--safety user-all--safety">
    <div class="user-all--safety__container">
      <div class="user-all--safety__body">
        <div>Текущий пароль</div>
        <input placeholder="Введите пароль" type="password" />
      </div>
      <div class="user-all--safety__body">
        <div>Новый пароль</div>
        <input placeholder="Введите пароль" type="password" />
      </div>
      <div class="user-all--safety__body">
        <div>Повторить пароль</div>
        <input placeholder="Введите пароль" type="password" />
      </div>
    </div>
    <div class="user-all--safety__btns">
      <div>Забыли пароль?</div>
      <the-button
        :backgroundColor="'#4B73DB'"
        :textColor="'#fff'"
        :text="'сохранить'"
      />
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
