<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from "vue";
import { useUser } from "@/use/useUserAccount";
const {  userMe } = useUser(); 



const favouriteCategories = [
  {
    name: "Вопросы",
    comp: "CrmFavQuestions",
  },
  {
    name: "Статьи",
    comp: "CrmFavArticles",
  },
  {
    name: "Специалисты",
    comp: "CrmFavSpecialists",
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
    () => import(`@/components/userCrm/crmFavourites/${item}.vue`)
  );
  // return import(`@/components/userAccount/${item}.vue`)
};

onMounted(()=>{
	swapComp('CrmFavQuestions')
})
</script>

<template>
  <div class="user-crm--my-favourites my-favourites__container">
    <div class="my-favourites__title">Мое избранное</div>
    <div class="my-favourites__sub-titles">
      <div
        :class="activeClass(category.comp)"
        @click="swapComp(category.comp)"
        v-for="category in favouriteCategories"
        :key="category.comp"
      >
        {{ category.name }}
      </div>
    </div>
    <div class="my-favourites__people-container">
      <component :is="currentComp" :user="userMe"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.active {
  color: #4b73db !important;
}
.my-favourites {
  &__container {
  }
  &__title {
    text-transform: uppercase;
    margin-bottom: 30px;
    font-weight: 600;
  }
  &__sub-titles {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    & > div {
      text-decoration: underline;
      cursor: pointer;
      color: #919cb8;
    }
  }

  &__people-container {
  }
}
</style>
