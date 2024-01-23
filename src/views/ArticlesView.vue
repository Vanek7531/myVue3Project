<script setup lang="ts">
import iconHeart from "@/components/icons/iconHeart.vue";
import iconComment from "@/components/icons/iconComment.vue";
import iconBookmark from "@/components/icons/iconBookmark.vue";
import iconTime from "@/components/icons/iconTime.vue";
import iconRepost from "@/components/icons/iconRepost.vue";
import { onMounted, type Ref } from "vue";
import { useArticles, useDigest } from "@/use/useArticles";
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import MainArticleInteresting from "@/components/main/MainArticleInteresting.vue";

const { getArticles, itemsColor, goTo } = useArticles();
const { allDigests, getDigests } = useDigest();

onMounted(() => {
  getArticles();
  getDigests();
});
</script>

<template>
  <section class="articles-view">
    <main-seacrh />
    <!-- <pre style="overflow: scroll; height: 400px;">{{ allDigests }}</pre> -->
    <div class="articles-view__type">
      <h2>Интересные статьи</h2>
    </div>
    <div class="articles-view__container" v-if="allDigests.length > 0">
      <div class="articles-view__digests-first">
        <!-- :class="gridSize(article.size)" -->
        <div
          class="articles-view__digest digest"
          v-for="digest in allDigests.slice(0, 8)"
          :key="digest.id"
        >
          <div class="digest__body-title">
            {{ digest.title }}
          </div>
          <img
            class="image"
            :src="digest.thumbnail"
            :alt="digest.title"
            srcset="/src/assets/img/Rectangle.png"
          />
          <div class="digest__body-detail" @click="goTo(digest.slug, 'digest')">
            Подробнее
          </div>
        </div>
      </div>
      <div class="articles-view__digests">
        <div
          class="articles-view__digest digest"
          v-for="digest in allDigests.slice(8, 15)"
          :key="digest.id"
        >
          <div class="digest__body-title">
            {{ digest.title }}
          </div>
          <div class="digest__body-subtitle">
            {{ digest.description }}
          </div>
          <img
            class="image"
            :src="digest.thumbnail"
            :alt="digest.title"
            srcset="/src/assets/img/Rectangle.png"
          />
          <div class="digest__body-detail" @click="goTo(digest.slug, 'digest')">
            Подробнее
          </div>
        </div>
      </div>
      <main-article-interesting />
    </div>
    <div class="article-sceleton__container" v-else>
      <div class="q-pa-md" v-for="item in 15">
        <q-item style="max-width: 300px">
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" width="65%" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/articlesStyle.scss";

.article-sceleton__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .q-pa-md {
    width: 30%;
  }
}
</style>
