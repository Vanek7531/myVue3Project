<script setup lang="ts">
import { useMain } from "@/use/useMainPage";
// import MainQuestions from '@/components/main/MainQuestions.vue';

const { questions } = useMain();
</script>

<template>
	<h1>Вопросы</h1>
  <div class="questions">
    <div
      class="questions__card card"
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
  </div>
</template>

<style lang="scss">
@import "/src/assets/styles/questionsStyle.scss";
</style>
