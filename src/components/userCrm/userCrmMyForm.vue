<script setup lang="ts">
import { ref } from "vue";
import TheActionsModal from "../common/TheActionsModal.vue";


const arrayQuestions = ref(Array(10).fill(false))

// const showActionsModal = ref(showCount());
const showColumn = ref()

</script>

<template>
  <div class="user-crm--my-advisory my-form__container">
    <div class="my-form__head">+Создать анкету</div>
    <div class="my-form__table-body">
      <div class="my-form__table-head">
        <div class="my-form__table-head--name">ФИО</div>
        <div class="my-form__table-head--specialization">специализация</div>
        <div class="my-form__table-head--action">
        </div>
      </div>
      <div class="my-form__table-items">
        <div class="my-form__table-item" v-for="(item,idx) in 4">
          <div class="my-form__table-item--name">
            Александр Святославович Романов
          </div>
          <div class="my-form__table-item--date">государственно-правовая</div>
          <div
            class="my-form__table-item--action"
            @click="arrayQuestions[idx] = !arrayQuestions[idx]"
          >
            <TheActionsModal v-if="arrayQuestions[idx]">
              <div>Редактировать</div>
              <div>Удалить</div>
            </TheActionsModal>
            <img src="@/assets/svg/filter.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-form {
  &__head {
    text-align: end;
    margin-bottom: 20px;
    text-decoration: underline;
    cursor: pointer;
  }
  &__table-body {
    border-radius: 0px 12px 12px 0px;
    background: var(--WhiteCompas, #fff);
    padding: 10px;
    margin-bottom: 30px;
    & > div {
      padding: 5px 10px;
    }
  }
  &__table-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--BlackCompas, #121212);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    & > div:last-child {
      flex: 0 0 10%;
      text-align: center;
    }
    & > div:not(:last-child) {
      flex: 0 0 45%;
      text-align: center;
    }
    & > div {
    }
  }
  &__table-head--name {
    text-align: center;
  }
  &__table-head--specialization {
  }
  &__table-head--quantity {
  }
  &__table-head--action {
  }
  // тело таблицы
  &__table-items {
    margin-bottom: 10px;
    & > div {
      border-bottom: 1px solid #919cb8;
      padding: 5px 10px;
    }
  }
  // элементы таблицы
  &__table-item {
    color: #4b73db;

    @extend .my-form__table-head;
  }
  &__table-item--name {
    text-align: center;
  }
  &__table-item--action {
		position: relative;

    cursor: pointer;
  }
}
</style>
