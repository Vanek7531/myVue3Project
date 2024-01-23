<script setup lang="ts">
import { useMain } from "@/use/useMainPage";
import httpService from "@/api/server";
import { onMounted, ref, type Ref } from "vue";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useArticle, useDigest } from "@/use/useArticles";

const { articles, gridSize } = useMain();

const { specialists } = useMain();
const open = ref(false);

const { allDigests, getDigests, goTo, refAllDigests } = useDigest();

const modules = [Pagination];

onMounted(() => {
  getDigests();
});
</script>

<template>
  <div class="main-digests">

    <div
      class="main-digests__container"
      v-if="Array.isArray(refAllDigests) && refAllDigests.length > 0"
    >
    <h2>Интересные статьи</h2>
      <!-- :class="gridSize(article.size)" -->
      <div
        class="main-digests__body"
        v-if="false"
        style="display: flex; flex-direction: column"
        v-for="digests in allDigests.slice(0, 8)"
        :key="digests.title"
      >
        <p style="position: relative; z-index: 2; font-size: 24px; color: #fff">
          {{ digests.title }}
        </p>
        <img
          class="image"
          srcset="/src/assets/img/truth.png"
          :src="digests.thumbnail"
          :alt="digests.title"
        />
      </div>
      <div class="main--digests__card card">
        <swiper
          :slidesPerView="4"
          :spaceBetween="20"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="digests in refAllDigests.slice(0,7)"
            :key="digests.id"
            style="cursor: pointer"
            @click="goTo(digests.slug, 'digest')"
          >
            <img class="image" src="/src/assets/img/Rectangle.png" alt="" />
            <div>{{ digests.title }}</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div v-else-if="refAllDigests && refAllDigests.length > 0">
      <h2>Интересные статьи*</h2>
      {{ refAllDigests }}
    </div>
    <div style="display: flex; gap: 20px" v-else>
      <div
        class="main-article--interesting__body"
        style="height: 400px; padding: 0; flex: 0 1 25%"
        v-for="el in 4"
        :key="el"
      >
        <q-skeleton style="height: 100%" />
      </div>
      .
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mainViewStyle.scss";
</style>
