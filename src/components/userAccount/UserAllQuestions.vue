<script setup lang="ts">
import { useUser, userMe } from "@/use/useUserAccount";
import TheButton from "@/components/common/TheButton.vue";
import iconComment from "../icons/iconComment.vue";
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import { ref } from "vue";
const { questions } = useUser();

import httpService from "@/api/server";

const text = ref("");
const questionText = ref("");
const create = ref(false);
const question = ref();
const newQuestion = ref(false);

const takeQuestions = async (slug: string) => {
  try {
    const { data } = await httpService.get(`/api/questions/${slug}/`);
    create.value = true;
    question.value = data;
  } catch {}
};

const ageRules = [
  (val: any) =>
    (val !== null &&
      val !== "" &&
      (typeof val === "number" || typeof val === "string")) ||
    "Введите корректное значение",
  // val:any => (val > 0 && val < 100) || 'Please type a real age'
];
const changeQuestions = async (id: number) => {
  try {
    const { data } = await httpService.put(`/api/questions/${id}/`, {
      question_text: question.value.question_text,
    });
    return data;
  } catch {
    return {};
  }
};

const sendQuestion = async () => {
  const { data } = await httpService.post(`/api/questions/`, {
    question_text: questionText.value,
  });
};
</script>

<template>
  <div class="user-account--view__user-all--questions user-all--questions">
    <q-form>
      <div v-if="!create" class="user-all--questions__statistic">
        <div><span>Создано вопросов:</span>15</div>
        <div><span>Закрытых вопросов:</span>5</div>
        <div><span>Открытых вопросов:</span>10</div>
        <the-button
          :backgroundColor="'#4B73DB'"
          :textColor="'#fff'"
          :text="'Создать вопрос'"
          @click="newQuestion = true"
        />
      </div>
      <div
        v-if="!create && userMe && !newQuestion"
        class="user-all--questions__container"
      >
        <div
          class="user-all--questions__body"
          v-for="question in userMe.favorite_questions"
          :key="question.text"
          @click="takeQuestions(question.slug)"
        >
          <div class="user-all--questions__date">
            {{ question.added_at.slice(0, 10) }}
          </div>
          <div class="user-all--questions__text">{{ question.slug }}</div>
          <div class="user-all--questions__statuses">
            <div>
              <icon-heart />
              17
            </div>
            <div>
              <icon-comment />
              12
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
          <div class="user-all--questions__btn">ответить</div>
        </div>
      </div>
      <div v-if="create && question && !newQuestion">
        <div v-if="false" style="width: 40%">
          <div style="display: flex; align-items: center">
            <img src="@/assets/img/beardedMan.png" alt="" />
            <div>
              {{ question.author_first_name }}
              {{ question.author_last_name }}
              {{ question.author_patronymic }}
            </div>
          </div>
          <div class="user-all--questions__statuses">
            <div>
              <icon-heart />
              {{ question.favorite }}
            </div>
            <div>
              <icon-comment />
              {{ question.comments }}
            </div>
            <div>
              <icon-like />
              {{ question.like }}
            </div>
            <div><icon-dis-like />{{ question.dislike }}</div>
          </div>
          <div></div>
        </div>
        <div class="card__container">
          <div class="card__header-container">
            <div class="card__header--fio">
              <div>
                <div class="card__header--img">
                  <img src="@/assets/img/beardedMan.png" alt="" />
                </div>
                <p>
                  {{ question.author_first_name }}
                  {{ question.author_last_name }}
                  {{ question.author_patronymic }}
                </p>
              </div>
              <div class="card__statuses">
                <div>
                  <icon-heart />
                  {{ question.favorite }}
                </div>
                <div>
                  <icon-comment />
                  {{ question.comments }}
                </div>
                <div>
                  <icon-like />
                  {{ question.like }}
                </div>
                <div><icon-dis-like />{{ question.dislike }}</div>
              </div>
            </div>
            <div class="card__header--date">{{ question.pub_date }}</div>
          </div>

          <div class="card__main">
            <q-input v-model="question.question_text"></q-input>
            <q-btn
              color="primary"
              label="Изменить текст вопроса"
              @click="changeQuestions(question.slug)"
            />
          </div>
          <!-- <div class="card__btn">ответить</div> -->
        </div>
        <div class="user-all--questions__answers">
          <div
            class="user-all--questions__answer"
            v-for="item in 5"
            :key="item"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              voluptate voluptates excepturi iste cupiditate error dolore
              veritatis nam nulla delectus rem! Sunt iste, error aliquam aliquid
              commodi obcaecati modi suscipit?
            </p>
          </div>
        </div>
        <q-editor
          v-model="text"
          :definitions="{
            bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
          }"
          :rules="ageRules"
        />
        <q-btn
          style="margin-top: 20px"
          color="primary"
          label="Отправить ответ"
        />
      </div>
      <div v-if="newQuestion">
        Новый вопрос
        <q-editor
          v-model="questionText"
          :definitions="{
            bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
          }"
          :rules="ageRules"
        />
        <q-btn
          style="margin-top: 20px"
          color="primary"
          label="Отправить"
          @click="sendQuestion()"
        />
      </div>
    </q-form>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/userViewStyle.scss";
@import "@/assets/styles/questionsStyle.scss";
</style>
