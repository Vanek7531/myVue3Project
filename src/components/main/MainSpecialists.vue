<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Pagination, Grid } from "swiper/modules";
import "swiper/css/pagination";

import { useMain } from "@/use/useMainPage";
import iconComment from "../icons/iconComment.vue";
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import iconDownArrow from "../icons/iconDownArrow.vue";
import iconUpArrow from "../icons/iconUpArrow.vue";
import httpService from "@/api/server";
import { onMounted, ref, type Ref } from "vue";
import type { allDigestsInt } from "@/interfaces/intMainApp";
const { specialists } = useMain();
const open = ref(false);

import { useSpecialists } from "@/use/useSpecialists";

const { getSpecialists, allSpecialists, getSpecialist, refAllSpecialists } =
  useSpecialists();

const allDigests: Ref<allDigestsInt[] | []> = ref([]);
const modules = [Pagination, Grid];

onMounted(() => {
  getSpecialists();
});
</script>

<template>
  <div
    class="main-specialists"
    v-if="Array.isArray(refAllSpecialists) && refAllSpecialists.length > 0"
  >
    <h2>специалисты</h2>
    <div class="main-subtitle">
      Самые экспертные публикации от востребованных специалистов
    </div>
    <!-- <pre style="overflow: scroll; height: 400px">{{ allDigests }}</pre> -->
    <div class="main-specialists__card card">
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
        <swiper-slide
          v-for="specialist in refAllSpecialists"
          :key="specialist.pk"
        >
          <div class="card__container">
            <!-- <pre>{{ specialist }}</pre> -->
            <div class="card__header-container">
              <div
                class="card__header--fio"
                @click="getSpecialist(specialist.pk)"
              >
                <div class="card__header--img">
                  <img class="image" :src="specialist.user_avatar" alt="" />
                </div>
                <p>
                  {{ specialist.user_full_name }}
                </p>
              </div>
            </div>
            <div class="card__header--date">2023-12-27</div>
            <div class="card__main">
              {{ specialist.about_me.slice(0, 95) }}...
            </div>
            <div class="card__btn">Написать специалисту</div>

            <div class="card__statuses">
              <div>
                <icon-heart />
                17
              </div>
              <div>
                <icon-like />
                {{ specialist.like }}
              </div>
              <div><icon-dis-like /> {{ specialist.dislike }}</div>
            </div>
            <div class="card__words">
              <div v-for="item in 2">word</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- <div class="main-specialists__arrow arrow-open" @click="open = !open">
      <icon-down-arrow v-if="!open" />
      <icon-up-arrow v-else />
    </div> -->
  </div>
  <div v-else-if="refAllSpecialists && refAllSpecialists.length > 0">
    <h2>специалисты</h2>
    {{ refAllSpecialists }}
  </div>
  <div style="height: 350px" v-else>
    <h2>специалисты</h2>
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
</style>
<style lang="scss" scoped>
.open {
  height: 825px;
}
</style>
