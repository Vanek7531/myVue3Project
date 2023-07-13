<script setup lang="ts">
import { useMain } from "@/use/useMainPage";
import { Swiper, SwiperSlide } from "swiper/vue";
import iconComment from "../icons/iconComment.vue";
import iconDownArrow from "../icons/iconDownArrow.vue";
import iconUpArrow from "../icons/iconUpArrow.vue";
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import { ref } from "vue";
const { questions } = useMain();

const open =ref(false)
				

</script>

<template>
  <div class="main-questions">
    <h2>вопросы и ответы</h2>
    <div class="main-questions__card card">
      <swiper
        class=""
        :slides-per-view="!open ? 3 : 8"
        :space-between="20"
        @swiper=""
        @slideChange=""
				:class="`${open ? 'open' : ''}`"
      >
        <swiper-slide
          fill="row"
          rows="2"
          v-for="question in questions"
          :key="question.fio"
        >
          <div class="card__container">
            <div class="card__header-container">
              <div class="card__header--fio">
                <div class="card__header--img">
                  <img src="@/assets/img/beardedMan.png" alt=""/>
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
        </swiper-slide>
      </swiper>
    </div>
		<div class="main-questions__arrow arrow-open" @click="open = !open">
			<icon-down-arrow v-if="!open"/>
			<icon-up-arrow v-else/>
		</div>
  </div>
</template>

<style lang="scss">
@import "/src/assets/styles/mainViewStyle.scss";
.main-questions {
  .swiper-wrapper {
    // grid-template-columns: repeat(4,minmax(0,1fr));
    // display: grid;
  }
}
</style>
