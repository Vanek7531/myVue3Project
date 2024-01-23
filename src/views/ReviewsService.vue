<script setup lang="ts">
import { useArticle } from "@/use/useArticles";
import progressBar from "@/components/main/specialist/progressBar.vue";
import iconComment from "@/components/icons/iconComment.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";

const { backgroundStar } = useArticle();
const comments = [
  {
    autor: "Владиславоооч Степанович Евсеев",
    date: "21.03.2023",
    text: "Здравствуйте, сервис очень крутой! Вся необходимая информация в одном месте, юристы компетентны во всех вопросах, буду и дальше общаться только с ними... ",
    rating: 4,
    like: 10,
    disLike: 5,
  },
  {
    autor: "Владиславоооч Степанович Евсеев",
    date: "21.03.2023",
    text: "Здравствуйте, сервис очень крутой! Вся необходимая информация в одном месте, юристы компетентны во всех вопросах, буду и дальше общаться только с ними... ",
    rating: 4,
    like: 10,
    disLike: 5,
  },
  {
    autor: "Владиславоооч Степанович Евсеев",
    date: "21.03.2023",
    text: "Здравствуйте, сервис очень крутой! Вся необходимая информация в одном месте, юристы компетентны во всех вопросах, буду и дальше общаться только с ними... ",
    rating: 4,
    like: 10,
    disLike: 5,
  },
  {
    autor: "Владиславоооч Степанович Евсеев",
    date: "21.03.2023",
    text: "Здравствуйте, сервис очень крутой! Вся необходимая информация в одном месте, юристы компетентны во всех вопросах, буду и дальше общаться только с ними... ",
    rating: 4,
    like: 10,
    disLike: 5,
  },
  {
    autor: "Владиславоооч Степанович Евсеев",
    date: "21.03.2023",
    text: "Здравствуйте, сервис очень крутой! Вся необходимая информация в одном месте, юристы компетентны во всех вопросах, буду и дальше общаться только с ними... ",
    rating: 4,
    like: 10,
    disLike: 5,
  },
  {
    autor: "Владиславоооч Степанович Евсеев",
    date: "21.03.2023",
    text: "Здравствуйте, сервис очень крутой! Вся необходимая информация в одном месте, юристы компетентны во всех вопросах, буду и дальше общаться только с ними... ",
    rating: 4,
    like: 10,
    disLike: 5,
  },
];

const stages = [
  {
    id: 0,
    thresholdPoints: 0,
  },
  {
    id: 1,
    thresholdPoints: 1,
  },
  {
    id: 2,
    thresholdPoints: 2,
  },
  {
    id: 3,
    thresholdPoints: 3,
  },
  {
    id: 4,
    thresholdPoints: 4,
  },
];
</script>
<template>
  <div class="reviews-service">
    <div class="reviews-service_-title">отзывы о сервисе</div>
    <div class="reviews-service__comments">
      <div
        class="reviews-service__comment comment"
        v-for="comment in comments"
        :key="comment.autor"
      >
        <div class="comment__autor">
          <img src="@/assets/img/beardedMan.png" alt="" />
          {{ comment.autor }}
        </div>
        <div class="comment__date">{{ comment.date }}</div>
        <div class="comment__text">{{ comment.text }}</div>
        <div class="comment__rate">
          <progress-bar />
          <!-- <div class="grid-points">
            <div class="grid-points" >
              <div class="star w" v-for="stage in stages" :key="stage.id">
                <icon-star
                  style="cursor: pointer"
                  @click="chooseRating(stage.id)"
                  :color="backgroundStar(stage.thresholdPoints)"
                />
              </div>
              <q-tooltip
                anchor="center middle"
                self="top middle"
                v-if="isRated"
              >
                {{ message }}
              </q-tooltip>
            </div>
          </div> -->
          <div class="comment__reactions">
            <div>
              <icon-like />
              {{ comment.like }}
            </div>
            <div>
              <icon-dis-like />
              {{ comment.disLike }}
            </div>
            <icon-comment />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviews-service {
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__title {
    color: var(--BlueCompas, #4b73db);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
  }
  &__comments {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .comment {
    border-radius: 20px;
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    background: #fff;
    flex: 0 1 30%;
    &__autor {
      display: flex;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
    }
    &__date {
      color: #d7dbe5;
      text-align: right;

      /* Inter16Regular */
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
    &__text {
      color: var(--BlackCompas, #121212);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
    &__rate {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
    &__reactions {
      display: flex;
      align-items: center;
      gap: 10px;
      & > div {
        cursor: pointer;
        display: flex;
        align-items: center;
        // gap: 5px;
      }
    }
  }
}
</style>
