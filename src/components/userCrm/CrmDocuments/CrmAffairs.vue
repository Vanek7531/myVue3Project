<script setup lang="ts">
import TheActionsModal2 from "@/components/common/TheActionsModal2.vue";
import IconRightArrow from "@/components/icons/iconRightArrow.vue";
import { ref } from "vue";
</script>
<template>
  <div class="table-body">
    <div class="table-head">
      <div class="table-head--name">Название папки</div>
      <div class="table-head--date">Дата создания</div>
      <div class="table-head--quantity">Объем</div>
      <div class="table-head--action">Действия</div>
    </div>
    <div class="table-items">
      <div class="table-item" v-for="item in 4">
        <div class="table-item--name">Иванов</div>
        <div class="table-item--date">22.12.2018</div>
        <div class="table-item--quantity">100Мб</div>
        <div class="table-item--action">
          <the-actions-modal-2>
            <div>Скачать</div>
            <div>Добавить в облако</div>
            <div>Проставить подпись</div>
            <div>Проставить печать</div>
            <div>Удалить</div>
          </the-actions-modal-2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.table-body {
  border-radius: 0px 12px 12px 0px;
  background: var(--WhiteCompas, #fff);
  padding: 10px;
  margin-bottom: 30px;
  & > div {
    padding: 5px 10px;
  }
}
.table-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--BlackCompas, #121212);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  & > div:first-child {
    flex: 0 0 40%;
  }
  & > div:not(:first-child) {
    flex: 0 0 20%;
    text-align: center;
  }
  & > div {
  }
}
.table-head--name {
  // flex: 0 1 50%;
  text-align: center;
}
.table-head--date {
}
.table-head--quantity {
}
.table-head--action {
}
// тело таблицы
.table-items {
  margin-bottom: 10px;
  & > div {
    border-bottom: 1px solid #919cb8;
    padding: 5px 10px;
  }
}
// элементы таблицы
.table-item {
  color: #4b73db;

  @extend .table-head;
}
.table-item--name {
  // flex: 0 1 50%;
}
.table-item--date {
}
.table-item--quantity {
}
.table-item--action {
  position: relative;
}
</style>
