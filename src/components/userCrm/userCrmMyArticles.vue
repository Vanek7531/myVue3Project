<script setup lang="ts">
import { useArticles } from "@/use/useArticles";
import { userCrm } from "@/use/useUserCrm";
import { onMounted } from "vue";

const { getUserArticles, allUserArticles } = useArticles();
const { swapComp, editedArticle, getArticle  } = userCrm();

onMounted(() => {
  getUserArticles();
});
</script>

<template>
  <div
    class="user-crm--my-articles my-articles__container"
    v-if="allUserArticles"
  >
    <div class="my-articles__title">
      <!-- <pre>{{ allUserArticles }}</pre> -->
      <div>Мои статьи</div>
      <div style="cursor: pointer;" @click="swapComp('userCrmNewArticle')">+ Новая статья</div>
    </div>
    <div class="my-articles__article-container">
      <div
        class="my-articles__article-body"
        v-for="article in allUserArticles"
        :key="article.id"
      >
        <div class="my-articles__article-name">
          <div>{{ article?.title }}</div>
          <div>{{ article?.short_description }}</div>
          <div>Добавлена в раздел {{ article.time_create.slice(0, 10) }}</div>
        </div>
        <div class="my-articles__article-promote">
          <q-btn @click="">продвигать</q-btn>
        </div>
        <div class="my-articles__article-views">
          <div>Просмотров</div>
          <div>1567</div>
        </div>
        <div class="my-articles__article-saved">
          <div>Сохранили</div>
          <div>321</div>
        </div>
        <div class="my-articles__article-edit">
					<!-- {{ article.slug }} -->
          <q-btn
            @click="swapComp('userCrmNewArticle'), getArticle(article.slug)"
            color="primary"
            label="редактировать"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped lang="scss">
.my-articles {
  &__container {
    font-size: 16px;
    line-height: 150%;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    & > div:first-child {
      color: var(--BlueCompas, #4b73db);
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  &__article-container {
    margin-left: -20px;
    max-height: 550px;
    overflow-y: scroll;
    display: flex;
    padding-right: 10px;
    flex-direction: column;
    gap: 20px;
  }
  &__article-body {
    border-radius: 0px 16px 16px 0px;
    border-top: 1px solid var(--BlueCompas, #4b73db);
    border-right: 1px solid var(--BlueCompas, #4b73db);
    border-bottom: 1px solid var(--BlueCompas, #4b73db);
    background: var(--WhiteCompas, #fff);
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__article-name {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 0 1 35%;

    & > div:first-child {
    }
    & > div:nth-child(2) {
      color: #414141;
      font-size: 14px;
    }
    & > div:last-child {
      font-size: 12px;
      color: #919cb8;
    }
  }
  &__article-promote {
  }
  &__article-views {
    color: var(--DarkGrayCompas, #414141);
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
  &__article-saved {
    @extend .my-articles__article-views;
  }
  &__article-edit {
  }
}
</style>
