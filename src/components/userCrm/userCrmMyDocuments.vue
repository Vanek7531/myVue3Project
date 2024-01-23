<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from "vue";

const categories = [
  {
    name: "Дела",
    comp: "CrmAffairs",
  },
  {
    name: "Подписи",
    comp: "CrmSeals",
  },
  {
    name: "Печати",
    comp: "CrmSignatures",
  },
];

const activeTab = ref("");
const currentComp = ref("");

const activeClass = (item: any) => {
  if (activeTab.value) {
    return activeTab.value.includes(`${item}`) ? "active" : "";
  }
};

const swapComp = (item: string) => {
  activeTab.value = item;
  currentComp.value = defineAsyncComponent(
    () => import(`@/components/userCrm/crmDocuments/${item}.vue`)
  );
  // return import(`@/components/userAccount/${item}.vue`)
};

onMounted(() => {
  swapComp("CrmAffairs");
});
</script>

<template>
  <div class="user-crm--my-documents my-documents__container">
    <div class="my-documents__title">Мои документы</div>
    <div class="my-documents__sub--title">
      <div>
        <div
          :class="activeClass(category.comp)"
          @click="swapComp(category.comp)"
          v-for="category in categories"
          :key="category.comp"
        >
          {{ category.name }}
        </div>
      </div>
      <div>Добавить</div>
    </div>
    <component :is="currentComp" />
    <!-- <div class="my-documents__table-body">
      <div class="my-documents__table-head">
        <div class="my-documents__table-head--name">Название папки</div>
        <div class="my-documents__table-head--date">Дата создания</div>
        <div class="my-documents__table-head--quantity">Объем</div>
        <div class="my-documents__table-head--action">Действия</div>
      </div>
      <div class="my-documents__table-items">
        <div class="my-documents__table-item" v-for="item in 4">
          <div class="my-documents__table-item--name">Иванов</div>
          <div class="my-documents__table-item--date">22.12.2018</div>
          <div class="my-documents__table-item--quantity">100Мб</div>
          <div class="my-documents__table-item--action">...</div>
        </div>
      </div>
    </div> -->
    <div v-if="activeTab === 'crmAffairs'" class="my-documents__title">
      Подписанные документы
    </div>
  </div>
</template>

<style scoped lang="scss">
.active {
  color: #4b73db !important;
}
.my-documents {
  &__container {
    font-size: 16px;
    line-height: 150%;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    font-weight: 600;
    text-transform: uppercase;
    & > div:first-child {
      color: var(--BlueCompas, #4b73db);
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  &__sub--title {
    display: flex;
    color: #919cb8;

    justify-content: space-between;
    margin-bottom: 30px;
    text-decoration: underline;
    & > div:first-child {
      display: flex;
      gap: 10px;
    }
    & > div {
      cursor: pointer;
    }
  }
}
</style>
