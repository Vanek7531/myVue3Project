<script setup lang="ts">
import { useMain } from "@/use/useMainPage";
import { Swiper, SwiperSlide } from "swiper/vue";
import iconComment from "../icons/iconComment.vue";
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import iconDownArrow from "../icons/iconDownArrow.vue";
import iconUpArrow from "../icons/iconUpArrow.vue";

import { ref } from "vue";
const { specialists } = useMain();
const open =ref(false)
</script>

<template>
  <div class="main-specialists">
    <h2>специалисты</h2>
    <div class="main-specialists__card card">
      <swiper
        :slides-per-view="!open ? 3 : 10"
        :space-between="0"
        @swiper=""
        @slideChange=""
				:class="`${open ? 'open' : ''}`"
      >
        <swiper-slide v-for="question in specialists" :key="question.fio">
          <div class="card__container">
            <div class="card__header">
              <div class="card__header--img">
                <img src="@/assets/img/specialist.png" alt=""/>
              </div>
              <p>{{ question.fio }}</p>
            </div>

            <div class="card__main">
              {{ question.text }}
            </div>
            <div class="card__statuses">
              <div>
                <icon-heart />
                {{ question.hearts }}
              </div>
              <div>
                <icon-like />
                {{ question.like }}
              </div>
              <div><icon-dis-like />{{ question.disLike }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
		<div class="main-specialists__arrow arrow-open" @click="open = !open">
			<icon-down-arrow v-if="!open"/>
			<icon-up-arrow v-else/>
		</div>
  </div>
</template>

<style lang="scss">
@import "/src/assets/styles/mainViewStyle.scss";
</style>
