<script setup lang="ts">
import iconHeart from "@/components/icons/iconHeart.vue";
import iconComment from "@/components/icons/iconComment.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
import iconTime from "@/components/icons/iconTime.vue";
import iconDownArrow from "@/components/icons/iconDownArrow.vue";
import { computed, ref } from "vue";
import { useUser } from "@/use/useUserAccount";
import httpService from "@/api/server";
const { getUserMe, userMe } = useUser();

const words = ["банкротство", "банк", "адвокат", "пенсия", "наследство"];

const searchText = ref("");
const currentQuestion = ref();
const showQuestions = ref(true);
const openQuestion = async (slug: string) => {
  // currentQuestion.value = await
  const { data } = await httpService.get(`/api/questions/${slug}/`);
  console.log("data", data);
  currentQuestion.value = data;
  showQuestions.value = false;
};

const favoriteQuestions = computed(() => {
  if (searchText.value.length > 0 && userMe.value) {
    return userMe.value.favorite_questions.filter((el: any) => {
      console.log("el", el);
      return el.question_text.includes(searchText.value);
    });
  } else if (userMe.value) {
    return userMe.value.favorite_questions;
  } else {
    ["вопросов нет"];
  }
});
</script>

<template>
  <div class="user-crm--my-questions my-questions">
    <div class="my-questions__head">+Добавить вопрос</div>
    <div class="my-questions__search-container" v-if="showQuestions">
      <div>X</div>
      <div>
        <q-input
          class="user-all--base__body-input"
          outlined
          v-model="searchText"
          label="Вопрос"
          type="text"
          placeholder="Введите вопрос"
          :dense="false"
          clearable
          clear-icon="close"
        >
        </q-input>
        <q-btn label="искать" type="submit" color="primary" />
      </div>
    </div>
    <div class="my-questions__all-questions">
      <q-btn
        v-if="!showQuestions"
        @click="showQuestions = true"
        label="назад к вопросам"
        type="submit"
        color="primary"
      />
    </div>
    <div class="my-questions__container" v-if="showQuestions && userMe">
      <div
        class="my-questions__question-body"
        v-for="(question, idx) in favoriteQuestions"
        :key="idx"
      >
        <div class="my-questions__question-head">
          <img src="@/assets/img/beardedMan.png" alt="beardedMan" />
          <div class="my-questions__question-head--fio">
            <p>
              {{ question.author_full_name }}
            </p>
          </div>
        </div>
        <div class="my-questions__question-date">
          {{ question.added_at.slice(0, 10) }}
        </div>
        <div class="my-questions__question-text">
          {{ question.question_text }}
        </div>
        <div class="my-questions__question-reactions">
          <div>
            <icon-heart />
            123
          </div>
          <div>
            <icon-comment />
            24
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
        <div class="my-questions__question-actions">
          <div>добавить на доску</div>
          <div>комментировать</div>
        </div>
        <div
          class="my-questions__question-action"
          @click="openQuestion(question.slug)"
        >
          <q-btn color="primary">Открыть вопрос</q-btn>
        </div>
        <div class="my-questions__question-words" v-if="idx % 2 === 0">
          <div class="my-questions__question-word" v-for="word in words">
            {{ word }}
          </div>
        </div>
      </div>
      <div
        v-if="favoriteQuestions && favoriteQuestions.length <= 0"
        style="margin: 0 auto"
      >
        <div class="my-questions__question-body">вопросов нету</div>
      </div>
    </div>

    <div v-else>
      <div class="my-questions__question-body">
        <div class="my-questions__question-head">
          <img src="@/assets/img/beardedMan.png" alt="" />
          <div class="my-questions__question-head--fio">
            <p>
              {{ currentQuestion.author_last_name }} <br />
              {{ currentQuestion.author_patronymic }}
              {{ currentQuestion.author_first_name }}
            </p>
          </div>
        </div>
        <div class="my-questions__question-date">21.03.2023</div>
        <div class="my-questions__question-text">
          {{ currentQuestion.question_text }}
        </div>
        <div
          style="justify-content: flex-start; gap: 20px"
          class="my-questions__question-reactions"
        >
          <div>
            <icon-heart />
            123
          </div>
          <div>
            <icon-comment />
            {{ currentQuestion.comments }}
          </div>
          <div>
            <icon-like />
            {{ currentQuestion.like }}
          </div>
          <div>
            <icon-dis-like />
            {{ currentQuestion.dislike }}
          </div>
        </div>
        <div class="my-questions__question-words">
          <div class="my-questions__question-word" v-for="word in words">
            {{ word }}
          </div>
        </div>
      </div>
      <div class="my-questions__question-words">Комментарии</div>
      <div
        class="my-questions__comment comment"
        v-for="comment in 2"
        :key="comment"
      >
        <div class="comment__head">
          <div class="comment__head--img">
            <img src="/src/assets/img/beardedMan.png" alt="" />
          </div>
          <div class="comment__head--fio">Брянский Андрей</div>
          <div class="comment__head--date">1 апреля 2018</div>
        </div>
        <div class="comment__content">
          А вы не думали подать на злодея заявление в полицию по ст. 159 УК РФ
          "Мошенничество" могу помочь грамотно составить заявление, чтоб в
          полиции не надиктовали на отказной.
        </div>
        <div class="comment__reactions">
          <div>
            <icon-like />
            5
          </div>
          <div>
            <icon-dis-like />
            5
          </div>
          <div>ответить</div>
        </div>
        <div v-if="true">
          <coment-answer> </coment-answer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-questions {
  &__head {
    text-align: end;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 30px;
  }
  &__container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__search-container {
    border-radius: 12px;
    background: #fff;
    padding: 20px 20px 60px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    & > div:first-child {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    }
    & > div:last-child {
      display: flex;
      gap: 20px;
      & > label:first-child {
        flex: 0 1 90%;
      }
    }
  }
  &__all-questions {
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;
  }
  &__question-body {
    border-radius: 12px;
    background: var(--WhiteCompas, #fff);
    flex: 0 1 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
  }
  &__question-head {
    display: flex;
    gap: 10px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  &__question-head--fio {
    font-size: 16px;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
  }
  &__question-date {
    color: #d7dbe5;
    font-size: 16px;
    line-height: 140%; /* 22.4px */
  }
  &__question-text {
    color: #121212;
  }
  &__question-reactions {
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
    }
  }
  &__question-actions {
    display: flex;
    justify-content: space-between;
    text-decoration: underline;
    cursor: pointer;
  }
  &__question-words {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  &__question-word {
    border-radius: 44px;
    background: var(--GrayTAGCompas, #d1d9ee);
    padding: 10px 15px;
  }
  .comment {
    border-bottom: 1px solid var(--gray-fon-compas, #919cb8);
    background: var(--white-compas, #fff);
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__head {
      display: flex;
      gap: 40px;
      align-items: center;
    }
    &__head--fio {
      color: #4b73db;
      font-size: 16px;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
    }
    &__head--img {
      border-radius: 50%;
    }
    &__head--date {
      color: #414141;
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
    &__content {
      color: #121212;
      line-height: 140%; /* 22.4px */
    }
    &__reactions {
      display: flex;
      gap: 20px;
      & > div {
        display: flex;
        align-items: center;
        // justify-content: center;
      }
      & > div:last-child {
        color: var(--blue-compas, #4b73db);
        font-size: 12px;
        font-weight: 400;
        line-height: 28px; /* 233.333% */
        text-decoration-line: underline;
      }
    }
    &__child {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: start;
      & > div:first-child {
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
