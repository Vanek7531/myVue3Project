<script setup lang="ts">
import iconComment from "@/components/icons/iconComment.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconHeart from "@/components/icons/iconHeart.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
import { useMain } from "@/use/useMainPage";
import httpService from "@/api/server";
import { type allQuestionsInt } from "../interfaces/intMainApp";
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import { useQuestions } from "@/use/useQuestions";
import TheWords from "@/components/common/TheWords.vue";

import { onMounted, ref, type Ref } from "vue";
// import MainQuestions from '@/components/main/MainQuestions.vue';

const { questions } = useMain();
const { openQuestion } = useQuestions();

const allQuestions: Ref<allQuestionsInt[] | []> = ref([]);

const getQuestions = async () => {
  try {
    const { data } = await httpService.get("/api/questions/");
    // allQuestions.value = data
    // setTimeout(()=> {
    allQuestions.value = data.results;
    // },1000)
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getQuestions();
});
</script>

<template>
  <div>
    <main-seacrh />
    <h2>ВОПРОС - ОТВЕТ</h2>
    <div class="main-subtitle">
      Самые экспертные публикации от востребованных специалистов
    </div>
    <the-words />
    <!-- <div class="questions-view__type">
      <div>Все</div>
      <div>Популярные</div>
			
    </div> -->
    <div class="questions-view" v-if="allQuestions.length > 0">
      <!-- <pre style="overflow: scroll; height: 400px;">{{ allQuestions }}</pre> -->
      <div
        v-if="false"
        class="questions-view__card card"
        v-for="question in questions"
        :key="question.fio"
      >
        <div class="card__container">
          <div class="card__header-container">
            <div class="card__header--fio">
              <div class="card__header--img">
                <img src="@/assets/img/beardedMan.png" alt="" />
              </div>
              <p>{{ question.fio }}</p>
            </div>
            <div class="card__header--date">{{ question.date }}</div>
          </div>
          <div class="card__statuses">
            <div>
              <icon-heart />
              {{ question.hearts }}
            </div>
            <div>
              <icon-comment />
              {{ question.comment }}
            </div>
            <div>
              <icon-like />
              {{ question.like }}
            </div>
            <div><icon-dis-like />{{ question.disLike }}</div>
          </div>
          <div class="card__main">
            {{ question.text }}
          </div>
          <div class="card__btn">ответить</div>
        </div>
      </div>

      <div
        v-if="false"
        class="questions-view__card card"
        v-for="question in allQuestions"
        :key="question.id"
      >
        <div class="card__container">
          <div class="card__header-container">
            <div class="card__header--fio">
              <div class="card__header--img">
                <img src="@/assets/img/beardedMan.png" alt="" />
              </div>
              <p>
                {{ question.author_last_name }} <br />
                {{ question.author_first_name }}
                {{ question.author_patronymic }}
              </p>
            </div>
            <div class="card__header--date">
              {{ question.pub_date.slice(0, 10) }}
            </div>
          </div>
          <div class="card__statuses">
            <div>
              <icon-heart />
              5
            </div>
            <div>
              <icon-comment />
              125
            </div>
            <div>
              <icon-like />
              5
            </div>
            <div><icon-dis-like />7</div>
          </div>
          <div class="card__main">
            {{ question.question_text }}
          </div>
          <div class="card__btn" @click="openQuestion(question.slug)">
            ответить
          </div>
        </div>
      </div>
      <div
        v-for="question in allQuestions"
        class="questions-view__card card"
        :key="question.id"
      >
        <div class="card__header">
          <div class="card__header--img">
            <img
              class="image"
              src="@/assets/img/beardedMan.png"
              alt="question"
            />
          </div>
          <div>
            <!-- <div class="card__header-subscribe">
                <icon-subscribe />подписаться
              </div> -->
            <div class="card__header--fio">
              <p>{{ question.author_last_name }} {{ question.author_first_name }}</p>
              <p>{{ question.author_patronymic }}</p>
            </div>
            <p>Пенсионер</p>
          </div>
        </div>
        <div class="card__body">
          <div class="card__text">
            {{ question.question_text.slice(0, 80) }}...
          </div>
          <div class="card__btn" @click="openQuestion(question.slug)">
            Ответить
          </div>
          <div class="card__reactions">
            <div>
              <icon-heart />
              {{ question.favorite }}
            </div>
            <div>
              <icon-comment />
              {{ question.like }}
            </div>
            <div>
              <icon-like />
              {{ question.like }}
            </div>
            <div>
              <icon-dis-like />
              {{ question.dislike }}
            </div>
          </div>
          <div class="card__words">
            <div v-for="item in 2">word</div>
          </div>
        </div>
      </div>
    </div>
    <div class="quetion-sceleton__container" v-else>
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
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/questionsStyle.scss";

.quetion-sceleton__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .q-pa-md {
    width: 30%;
  }
}
</style>
