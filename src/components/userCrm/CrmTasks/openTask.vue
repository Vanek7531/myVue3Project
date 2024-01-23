<script setup lang="ts">
import { userCrm } from "@/use/useUserCrm";
import { ref } from "vue";

const { changeTaskStatus, changeTask, currentComp } = userCrm();

defineProps({
  task: {
    type: Object,
    default: {},
  },
});
const dense = ref(false);

const edit = ref(false);
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
  <div class="open-task__container">
    <div class="open-task__title">
      <q-input
        class="new-task__body-input"
        outlined
        v-model="task.name"
        label="Название"
        type="text"
        placeholder="Введите название"
        :dense="dense"
        :rules="ageRules"
        :disable="!edit"
      >
      </q-input>
    </div>
    <div class="open-task__name">
      <img src="@/assets/img/specialistMan.png" alt="man" />
      {{ task.author }} - id автора, нужно будет имя)
    </div>
    <div class="open-task__description">
      <div>Описание</div>
      <!-- <div> -->
        <q-editor
          :disable="!edit"
          :rules="ageRules"
          v-model="task.descrition"
          :definitions="{
            bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
          }"
        />
      <!-- </div> -->
    </div>
    <div class="open-task__documents">
      <div class="open-task__documents-new">+Добавить документы</div>
      <div class="open-task__documents-list">
        <div class="open-task__document" v-for="item in 2">
          <div>Доверенность</div>
          <div>02.12.2022</div>
          <div>2Мб</div>
          <div>Загрузить</div>
        </div>
      </div>
      <div class="open-task__documents-date--end">
        <div>Срок исполнения</div>
        <div>{{ task.dateEnd }}</div>
        <img src="@/assets/svg/calendar.svg" alt="calendar" />
      </div>
    </div>
    <div class="open-task__documents-btns">
      <q-btn
        :label="edit ? 'отменить' : 'изменить'"
        color="primary"
        @click="edit = !edit"
      />
      <q-btn
        label="Вернуться к задачам"
        color="primary"
        @click="currentComp = 'allTasks'"
      />
      <q-btn
        label="сохранить"
        @click="changeTask(task)"
        color="primary"
        v-if="edit"
      />
      <div @click="changeTaskStatus(task.id, 'Ready')">
        Переместить в готово
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.open-task {
  &__container {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  &__title {
    line-height: 150%;
    font-weight: 600;
    text-transform: uppercase;
  }
  &__name {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #414141;
    img {
      border-radius: 20px;
    }
  }
  &__description {
    font-weight: 400;
    color: #121212;
    line-height: 150%;
    & > div:first-child {
      font-weight: 600;
    }
    & > div:last-child {
      // padding: 20px 80px 20px 20px;
      border-radius: 12px;
      border: 1px solid var(--GrayFonCompas, #919cb8);
      background: var(--WhiteCompas, #fff);
    }
  }
  &__documents {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__documents-new {
    display: flex;
    justify-content: end;
    text-decoration: underline;
  }
  &__documents-list {
    & > div:last-child {
      border-bottom: 1px solid #919cb8;
    }
  }
  &__document {
    border-top: 1px solid #919cb8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }
  &__documents-date--end {
    display: flex;
    align-items: center;
    gap: 10px;
    & > div:nth-child(2) {
      color: #414141;
    }
  }
  &__documents-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div:last-child {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
