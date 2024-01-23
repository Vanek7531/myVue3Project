<script setup lang="ts">
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import MainArticleInteresting from "@/components/main/MainArticleInteresting.vue";
import MainQuestions from "../components/main/MainQuestions.vue";
import MainSpecialists from "../components/main/MainSpecialists.vue";
import MainDigests from "../components/main/MainDigests.vue";
import { ref } from "vue";
import { useApp } from "@/use/useMainApp";

const { activaMainPageTab } = useApp();
const accept = ref(false);
const fullName = ref("");
const email = ref("");
const thematic = ref(null);
const thematics = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const userQuestion = ref("");
</script>

<template>
  <main>
    <main-seacrh />
    <main-digests
      v-show="activaMainPageTab === 'статьи' || activaMainPageTab === 'all'"
    />
    <main-questions
      v-show="activaMainPageTab === 'вопросы' || activaMainPageTab === 'all'"
    />
    <main-specialists
      v-show="activaMainPageTab === 'специалисты' || activaMainPageTab === 'all'"
    />
    <main-article-interesting
      v-show="activaMainPageTab === 'статьи' || activaMainPageTab === 'all'"
    />
  </main>
</template>
<style lang="scss">
@import "@/assets/styles/mainViewStyle.scss";
.question-form {
  max-width: 600px;
  max-height: 700px;
  overflow: auto;
  margin: 100px auto 0;
  border-radius: 12px;
  background: #fff;
  padding: 30px 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
      display: flex;
      justify-content: center;
    }
    // gap: 20px;
  }
  .q-field--filled .q-field__control {
    background: #fff;
    border-radius: 12px;
    border: 1px solid #919cb8;
  }
}
</style>
