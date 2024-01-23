<script setup lang="ts">
import { onMounted } from "vue";

import MainSeacrh from "@/components/main/MainSeacrh.vue";
import { userCrm } from "@/use/useUserCrm";
import { useUser } from "@/use/useUserAccount";

const { getUserMe, user } = useUser();
const { categories, swapComp, activeTab, comp, activeClass, currentComp } =
  userCrm();
// console.log("", categories);

onMounted(() => {
  getUserMe();
  swapComp("userCrmTasks");
});
</script>

<template>
  <div>
    <main-seacrh />
    <div class="crm-view__container">
      <div class="crm-view__categories" v-if="user">
        <div
          :class="activeClass(category.comp)"
          @click="swapComp(category.comp), (currentComp = 'allTasks')"
          v-for="category in categories"
          :key="category.comp"
        >
          <!-- <pre>{{ category }}</pre> -->
          <div>{{ category.name }}</div>
        </div>
      </div>
      <div class="crm-view__category">
        <component :is="comp" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.active {
  background: #1847c1;
}
.crm-view {
  &__container {
    margin-bottom: 40px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  &__categories {
    border-radius: 0px 16px 16px 0px;
    background: var(--BlueCompas, #4b73db);
    flex: 0 1 20%;
    padding: 32px 0;
    color: #fff;
    line-height: 150%;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-transform: uppercase;
    height: fit-content;
    & > div {
      // text-align: center;
      cursor: pointer;
      padding: 5px 32px;
    }
    & > div:hover {
      background: #1847c1;
    }
  }

  &__category {
    flex: 0 1 80%;
    max-width: 80%;
  }
}

@media (max-width: 1023px) {
  .crm-view {
    &__container {
      flex-direction: column;
    }
  }
}
@media (max-width: 767px) {
}
</style>
