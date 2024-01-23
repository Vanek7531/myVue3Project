<script setup lang="ts">
import { userCrm } from "@/use/useUserCrm";
import { ref } from "vue";

const { userTasks, createNewTask, newTask, statusNewTask } = userCrm();

const text = ref("");
const dense = ref(false);
const statuses = ["At work", "To work", "Ready"];
const words = [
  "банк",
  "арбитраж",
  "бюджет",
  "налоги",
  "судьи",
  "финансирование",
];
const ageRules = [
  (val: any) =>
    (val !== null &&
      val !== "" &&
      (typeof val === "number" || typeof val === "string")) ||
    "Введите корректное значение",
  // val:any => (val > 0 && val < 100) || 'Please type a real age'
];
</script>

<template>
  <q-form class="fast-new--task__container" @submit="createNewTask">
    <div class="fast-new--task__title">Новая задача</div>
    <div class="fast-new--task__name">
      <div class="subtitle">Название</div>
      <q-input
        class="fast-new--task__body-input"
        outlined
        v-model="newTask.name"
        label="Название"
        type="text"
        placeholder="Введите название"
        :dense="dense"
        :rules="ageRules"
      >
      </q-input>
    </div>
    <div class="fast-new--task__content">
      <div class="subtitle">Содержание</div>
      <q-editor
        :rules="ageRules"
        v-model="newTask.descrition"
        :definitions="{
          bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
        }"
      />
    </div>
    <div class="fast-new--task__specifications-container">
      <div class="fast-new--task__specifications-head">
        <div>
          <div class="subtitle">Добавить пользователя</div>
          <q-select
            outlined
            v-model="text"
            :options="words"
            label="Введите имя пользователя"
          />
        </div>
        <div>
          <div class="subtitle">Установите срок</div>
          <q-input
            class="fast-new--task__body-input"
            outlined
            v-model="text"
            re
            type="text"
            placeholder="01.06.2023"
            :dense="dense"
          />
        </div>
      </div>
      <div class="fast-new--task__type">
        <div class="subtitle">Выберите статус задачи:</div>
        <q-select
          outlined
          v-model="statusNewTask"
          :options="statuses"
          :rules="ageRules"
        />
      </div>
    </div>
    <q-btn
      style="margin-left: auto"
      color="primary"
      label="добавить"
      type="submit"
    />
  </q-form>
</template>

<style lang="scss">
.q-editor__toolbar {
  justify-content: end;
}
.q-field--outlined {
  background: #fff;
}
</style>
<style scoped lang="scss">
.fast-new--task {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .subtitle {
      color: #414141;
      font-size: 16px;
      font-weight: 600;
      line-height: 140%;
      margin-bottom: 20px;
    }
  }
  &__title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  &__name {
  }
  &__body-input {
  }
  &__content {
    .q-editor__toolbar {
      justify-content: end;
    }
  }
  &__load-img {
    & div:last-child {
      display: flex;
      gap: 20px;
      align-items: center;
      & div {
        gap: 10px;
      }
    }
  }
  &__specifications-container {
  }
  &__specifications-head {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    & > div {
      flex: 1 1 45%;
    }
  }

  &__load-docs {
  }
  &__load-docs--header {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600 !important;
    color: #4b73db;
    margin-bottom: 20px;
  }
  &__load-docs--list {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  &__load-docs--doc {
    display: flex;
    gap: 10px;
  }
}
</style>
