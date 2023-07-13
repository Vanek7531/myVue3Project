<script setup lang="ts">
import { useMain } from "@/use/useMainPage";
const { articles, gridSize } = useMain();
</script>

<template>
  <div class="main-article">
    <h2>Статьи</h2>
    <div class="main-article__container">
      <div
        class="main-article__body"
				:class="gridSize(article.size)"
        style="display: flex; flex-direction: column"
        v-for="article in articles"
        :key="article.text"
      >
        <p style="position: relative; z-index: 2; font-size: 24px; color: #fff;">{{ article.text }}</p>
        <img class="image" src="/src/assets/img/truth.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
