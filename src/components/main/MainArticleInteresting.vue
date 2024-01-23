<script setup lang="ts">
import { onMounted, type Ref, ref } from "vue";
import iconDownArrow from "../icons/iconDownArrow.vue";
import TheWords from "@/components/common/TheWords.vue";
import iconUpArrow from "../icons/iconUpArrow.vue";
import { useArticles } from "@/use/useArticles";
import httpService from "@/api/server";
const { getArticles, allArticles, goTo, open, refAllArticles } = useArticles();

const words = [
  "банкротство",
  "банк",
  "адвокат",
  "пенсия",
  "наследство",
  "Бухгалтерия",
  "Кредиты",
  "ЖКХ/ТСЖ",
  "Брачный контракт",
  "банкротство",
  "банк",
  "пенсия",
  "наследство",
  "сделки с участками",
  "все новости",
];

onMounted(() => {
  getArticles();
});

const takeArt = (size: number) => {
  return refAllArticles.value.slice(0, size);
};
</script>

<template>
  <div
    class="main-article--interesting"
    v-if="Array.isArray(refAllArticles) && refAllArticles.length > 0"

  >
    <!-- v-if="
      allArticles &&
      allArticles.length > 0 &&
      allDigests &&
      allDigests.length > 0
    " -->
    <!-- <pre>{{ allArticles }}</pre> -->
    <h2>Основные Статьи</h2>
    <div class="main-subtitle">Выберите нужную тему</div>
    <!-- <div class="main-article--interesting__words">
      <div
        class="main-article--interesting__word"
        v-for="word in words"
        :key="word"
      >
        {{ word }}
      </div>
    </div> -->
    <the-words />
    <div class="main-article--interesting__container">
      <!-- :class="gridSize(article.size)" -->
      <div
        class="main-article--interesting__body"
        v-for="article in refAllArticles.slice(0, 7)"
        :key="article.id"
      >
        <div class="main-article--interesting__body-title">
          {{ article.title }}
        </div>
        <div class="main-article--interesting__body-subtitle">
          {{ article.short_description }}
        </div>
        <img
          class="image"
          :src="article.thumbnail"
          :alt="article.title"
          srcset="/src/assets/img/Rectangle.png"
        />
        <div class="main-article--interesting__body-detail" @click="goTo(article.slug)">Подробнее</div>
      </div>
    </div>
  </div>
	<div v-else-if="refAllArticles && refAllArticles.length > 0">
    <h2>Основные Статьи</h2>
    {{ refAllArticles }}
  </div>
  <div class="main-article--interesting" v-else>
    <h2>Основные Статьи</h2>
    <div class="main-subtitle">Выберите нужную тему</div>

    <!-- <q-item-section > -->
    <div class="sceleton-container">
      <div class="sceleton-body" v-for="item in 4">
        <q-skeleton />
        <q-skeleton />
        <q-skeleton />
        <q-skeleton />
      </div>
    </div>
    <div class="main-article--interesting__container" style="margin-top: 20px">
      <div
        class="main-article--interesting__body"
        style="height: 200px; padding: 0"
        v-for="el in 7"
        :key="el"
      >
        <q-skeleton style="height: 100%" />
      </div>
    </div>

    <!-- </q-item-section> -->
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mainViewStyle.scss";
</style>
