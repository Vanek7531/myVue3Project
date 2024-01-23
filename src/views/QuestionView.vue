<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import iconHeart from "@/components/icons/iconHeart.vue";
import iconComment from "@/components/icons/iconComment.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconTime from "@/components/icons/iconTime.vue";
import iconRepost from "@/components/icons/iconRepost.vue";
import iconDownArrow from "@/components/icons/iconDownArrow.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
import { useArticle } from "@/use/useArticles";
// import getQuestion from "@/components/main/question/getQuestion.vue";
import iconStar from "@/components/icons/iconStar.vue";
import { useQuasar } from "quasar";
import { useQuestion } from "@/use/useQuestions";
const $q = useQuasar();

const {
  getQuestion,
  question,
  itemsColor,
  chooseRating,
  rateArticle,
  questionInputText,
	
} = useQuestion();

const onRejected = (rejectedEntries: any) => {
  // Notify plugin needs to be installed
  // https://quasar.dev/quasar-plugins/notify#Installation
  $q.notify({
    type: "negative",
    message: `небольше 3-х изображений`,
    // message: `${rejectedEntries.length} только картинки и небольше 3 файлов`,
  });
};
const slug = router.currentRoute.value.params.questionSlug;

const saveFile = (type: string) => {
  if (type === "pdf" && question.value.question_pdf) {
    window.open(question.value.question_pdf, "_blank");
  }
};

onMounted(() => {
  console.log("slug", slug);
    getQuestion(slug);
});
</script>
<template>
  <div class="question-view" v-if="question">
    <main-seacrh />
    <div class="card">
      <div class="card__header">
        <div class="card__header--fio">
          <div class="card__header--img">
            <img src="@/assets/img/lady.png" alt="" />
          </div>
          <div>
            <p>
              {{ question.author_last_name }} {{ question.author_first_name }}
              {{ question.author_patronymic }}
            </p>
            <div class="card__header--date">21.03.2023</div>
          </div>
        </div>
      </div>
      <div class="card__expert--reactions">
        <div class="card__expert--avatars">
          <div
            v-for="(item, idx) in itemsColor"
            :key="idx"
            :style="`transform: translate(-${idx * 15}px,0); background: ${
              item.color
            }`"
          ></div>
        </div>
        <div>6 экспертов согласны</div>
        <div>
          <icon-time />
          5 минут
        </div>
      </div>
    </div>
    <div class="question-view__container">
      <div class="question-view__title">
        {{ question.title }}
      </div>
      <div class="question-view__body">
        {{ question.content }}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste cumque
        temporibus qui molestiae quisquam laborum fugit voluptatem rem nobis
        distinctio eum impedit maxime dolores laudantium ab, quis eveniet quidem
        voluptatum.
        <div class="question-view__body-images">
          <div
            class="question-view__body-image"
            v-for="img in question.images"
            :key="img.id"
          >
            <div >X</div>
            <img
              class="image"
              :src="img.image"
              srcset="/src/assets/img/billie-dollar-money-background.jpg"
              :alt="img.id"
            />
          </div>
          <!-- class="image" -->
        </div>
      </div>
    </div>


    <div class="question-view__reactions">
      <div>
        <icon-heart />
        123
      </div>
      <div>
        <icon-comment />
        24
      </div>
      <div style="cursor: pointer" @click="rateArticle('like')">
        <icon-like />
        {{ question.like }}
      </div>
      <div style="cursor: pointer" @click="rateArticle('dislike')">
        <icon-dis-like />
        {{ question.dislike }}
      </div>
      <icon-repost />
    </div>
    <div class="question-view__tags">
      <div>банкротство</div>
      <div>банк</div>
      <div>пенсия</div>
      <div>наследство</div>
      <div>банкротство</div>
      <div>банкротство</div>
      <div>банк</div>
      <div>пенсия</div>
      <div>наследство</div>
    </div>
    <div class="q-gutter-sm">
      <q-editor
        v-model="questionInputText"
        :definitions="{
          bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
        }"
      />
    </div>
    <div class="question-view__comments-send">
      <q-btn color="primary" @click=""> Отправить</q-btn>
    </div>
    <div class="question-view__comments" v-if="false">
      <div>Все отзывы <icon-down-arrow /></div>
      <div
        class="question-view__comment comment"
        v-for="comment in question.comments"
        :key="comment.id"
      >
        <div class="comment__head">
          <div class="comment__head--img">
            <img src="/src/assets/img/beardedMan.png" alt="" />
          </div>
          <div class="comment__head--fio">
            {{ comment.author_first_name }}
            {{ comment.author_last_name }}
            {{ comment.author_patronymic }}
          </div>
          <div class="comment__head--date">
            <!-- {{ comment.time_create.slice(0, 10) }} -->
          </div>
        </div>
        <div class="comment__content">{{ comment.content }}</div>
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
        <!-- <div
          
          @click="openComentAnswers = !openComentAnswers"
          v-if="comment.children.length > 0"
        >
          {{ comment.children.length }} Ответы <icon-down-arrow />
        </div> -->
        <!-- <div v-if="comment.children.length > 0">
          <coment-answer :childs="comment.children"> </coment-answer>
        </div> -->
      </div>
    </div>
  </div>

  <div class="question-sceleton__container" v-else>
    <div class="q-pa-md">
      <q-item style="max-width: 800px; margin: 0 auto">
        <!-- <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section> -->

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption v-for="item in 15" :key="item">
            <q-skeleton type="text" width="100%" height="40px" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/questionsStyle.scss";
</style>
<style lang="scss" scoped>
.grid-points {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  max-width: 200px;
}
.grid-points .f:first-child {
  .w {
    opacity: 0;
  }
}
.yellow {
  color: #ffc702;
}
.grid-points .f:last-child {
  .w::after {
    opacity: 0;
  }
}
.w {
  text-align: center;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // width: 5px;
  img {
    top: -5px;
    width: 40px;
    position: absolute;
    left: -20px;
  }
}
.disable {
  position: relative;
}
.disable::before {
  right: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  // background: red;
  z-index: 10;
  cursor: no-drop;
}
.stars-points {
  // height: 50px;
  > div:first-child {
    // opacity: 0;
  }
  // div:first-child{
  // 	display: none;
  // }
  @extend .grid-points;
}
.star {
  position: relative;
  // top: -25px;
  // &::after {
  //   content: "";
  //   height: 40px;
  //   z-index: 3;
  //   position: absolute;
  //   right: 0;
  //   top: 30px;
  //   border-right: 1px solid grey;
  // }
}
.question-view {
  &__body {
    color: #121212;
    min-height: 600px;
    position: relative;
  }
  &__images {
    margin: 10px 0;
    display: flex;
    gap: 20px;
    align-items: center;
  }
  &__body-images {
    margin-top: 30px;
    display: flex;
    gap: 20px;
    // div {
    // 	position: absolute;
    // 	z-index: 10;
    // 	right: 0;
    // 	top: 0;
    // }
  }
  &__body-image {
    position: relative;

    width: 400px;
    height: 400px;
    & > div:first-child {
      cursor: pointer;
      position: absolute;
      z-index: 10;
      right: 10px;
      top: 10px;
      color: #fff;
    }
  }
  &__title {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
  }
  &__container {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 5px;
  }
  &__reactions {
    display: flex;
    gap: 0.6rem;
    color: #121212;

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .card {
    padding: 2rem 0;
    border-radius: 12px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    &__header {
    }
    &__header--fio {
      display: flex;
      p {
        font-weight: 600;
        font-size: 18px;
        margin: 0;
      }
    }
    &__header--date {
      color: #d7dbe5;
    }
    &__header--img {
      border-radius: 2rem;
      min-width: 40px;
      height: 40px;
      overflow: hidden;
      margin-right: 0.2rem;
    }

    &__images {
      overflow-y: overlay;
      height: 250px;
      padding-right: 0.8rem;
    }
    &__image {
      position: relative;
      padding: 1rem 1rem 70%;
      margin-bottom: 1rem;
    }
    &__body {
    }
    &__expert--reactions {
      display: flex;
      justify-content: space-between;
      color: #121212;
      position: relative;
      padding-left: 5rem;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__expert--avatars {
      top: 2px;
      position: absolute;
      left: 0;
      div {
        border-radius: 2rem;
        width: 24px;
        height: 24px;
        transform: translate(-5px, 0);
      }
    }
  }

  &__comments {
    margin-top: 30px;
    & > div:first-child {
      display: flex;
      align-items: center;
    }
    & > div:nth-child(2) {
      border-radius: 12px 12px 0px 0px;
    }
    & > div:last-child {
      border-radius: 0px 0px 12px 12px;
    }
  }
  &__comments-send {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  .comment {
    border: 1px solid var(--gray-fon-compas, #919cb8);
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
  &__documents {
    margin-top: 20px;
    // display: flex;
    & > div:first-child {
      text-decoration: underline;
      cursor: pointer;

      margin-bottom: 15px;
    }
  }
  &__documents-list {
    display: flex;
    // justify-content: space-between;
    gap: 0 30px;
    & > div {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
  &__tags {
    display: flex;
    margin: 20px 0 40px;
    gap: 5px;
    color: var(--dark-gray-compas, #414141);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    justify-content: space-between;
    & > div {
      padding: 10px 20px;
      border-radius: 44px;
      background: var(--gray-tag-compas, #d1d9ee);
    }
  }
}

@media (max-width: 1023px) {
  .question-view {
    &__tags {
      flex-wrap: wrap;
    }
  }
}

@media (max-width: 767px) {
  .question-view {
    .card__expert--reactions {
      flex-direction: column;
    }
    &__tags {
      flex-wrap: wrap;
    }
  }
}
</style>
