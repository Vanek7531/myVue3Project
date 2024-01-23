<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import iconDisLike from "../icons/iconDisLike.vue";
import "swiper/css";
import { Pagination, Grid } from "swiper/modules";
import "swiper/css/pagination";
// 123
import iconDownArrow from "../icons/iconDownArrow.vue";
import iconUpArrow from "../icons/iconUpArrow.vue";
import iconComment from "../icons/iconComment.vue";
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
// import { allQuestionsInt } from "@/interfaces/intMainApp";
import { onMounted, ref, type Ref } from "vue";
import { useQuestions } from "@/use/useMainPage";
const { getQuestions, allQuestions, open, itemsColor, refAllQuestions } =
  useQuestions();

const modules = [Pagination, Grid];
onMounted(() => {
  getQuestions();
});
</script>

<template>
  <div
    class="main-questions"
    v-if="Array.isArray(refAllQuestions) && refAllQuestions.length > 0"
  >
    <h2>вопросы и ответы</h2>
    <div class="main-subtitle">
      Публикуем ответы на самые частые вопросы пользователей
    </div>
    <div class="main-questions__card card">
      <swiper
        :slidesPerView="3"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :grid="{
          rows: 2,
          fill: 'row',
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        {{ refAllQuestions }}
        <swiper-slide v-for="question in refAllQuestions" :key="question.id">
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
            </div>
            <div class="card__header--date">
              {{ question.pub_date.slice(0, 10) }}
            </div>

            <div class="card__main">
              {{ question.question_text }}
            </div>
            <div class="card__btn">ответить</div>

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
                7
              </div>
              <div><icon-dis-like />3</div>
            </div>
            <div class="card__words">
              <div v-for="item in 2">word</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- <div class="main-questions__arrow arrow-open" @click="open = !open">
      <icon-down-arrow v-if="!open" />
      <icon-up-arrow v-else />
    </div> -->
  </div>
  <div v-else-if="refAllQuestions && refAllQuestions.length > 0">
    <h2>вопросы и ответы</h2>
    {{ refAllQuestions }}
  </div>
  <div style="height: 350px" v-else>
    <h2>вопросы и ответы</h2>
    <!-- <q-item-section > -->
    <div class="sceleton-container">
      <div class="sceleton-body" v-for="item in 4">
        <q-skeleton />
        <q-skeleton />
        <q-skeleton />
        <q-skeleton />
      </div>
    </div>
    <!-- </q-item-section> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/mainViewStyle.scss";
.main-questions {
  .swiper-wrapper {
    // grid-template-columns: repeat(4,minmax(0,1fr));
    // display: grid;
  }
}
</style>
<style lang="scss" scoped>
.open {
  height: 715px;
  .card {
    &__container {
    }
  }
}
</style>
