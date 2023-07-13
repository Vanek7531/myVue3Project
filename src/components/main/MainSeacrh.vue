<script setup lang="ts">
import { onMounted, ref } from "vue";
import iconFilter from "@/components/icons/iconFilter.vue";
import TheInput from "@/components/common/TheInput.vue";
import TheButton from "@/components/common/TheButton.vue";
import { useMain } from "@/use/useMainPage";
import { Swiper, SwiperSlide } from "swiper/vue";

import { userDeviceMobile } from "@/use/helper";

const { inputSearchValue, words, targetInput } = useMain();

onMounted(() => {
  // words.value.sort(() => Math.random() - 0.5);
});
</script>

<template>
  <div class="main-search">
    <div class="main-search__block">
      <div class="main-search__input">
        <div>
          <the-input
            :placeholder="'введите текст для поиска'"
            :type="'123'"
            v-model="inputSearchValue"
          />
        </div>
        <div>
          <icon-filter />
        </div>
        <div>
          <the-button :text="'Найти'" />
        </div>
      </div>
      <div class="main-search__container">
        <swiper
          class="main-search__words"
          :slides-per-view="18"
          :space-between="5"
          @swiper=""
          @slideChange=""
        >
          <swiper-slide
            class="main-search__word"
            v-for="word in words"
						:class="inputSearchValue === word ? 'active' : ''"
            :key="word"
          >
            <the-button @click="targetInput(word)" :text="word" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="main-search__help">
      <p>Устали искать?</p>
      <p>
        Задайте напрямую вопрос одному из авторов на сайте и получите ответ в
        течение 5 минут
      </p>
      <div>
        <the-button
          :backgroundColor="'#4B73DB'"
          :text-color="'#fff'"
          :text="'Задать вопрос онлайн'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "/src/assets/styles/mainViewStyle.scss";
.active {
	div{

		background: #D1D9EE!important;
	}
}
</style>
