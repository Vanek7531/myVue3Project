<script setup lang="ts">
import { ref } from "vue";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
const modules = [Pagination];

defineProps({
  user: {
    type: Object,
    default: {},
  },
});
const openDialog = ref(false);
const slide = ref(1);
</script>

<template>
  <div class="specialist-docs">
    <div class="specialist-docs__doc" v-for="item in 14">
      <div>
        <img class="image" src="/src/assets/img/Rectangle.png" alt="" />
      </div>
      <div @click="openDialog = !openDialog">На весь экран</div>
      <q-dialog v-model="openDialog">
        <swiper
          :slidesPerView="1"
          :spaceBetween="20"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(el, idx) in 14" style="cursor: pointer">
            <img class="image" src="/src/assets/img/Rectangle.png" alt="" />
            <p
              style="
                position: relative;
                z-index: 11;
                font-size: 24px;
                padding-left: 10px;
              "
            ></p>
          </swiper-slide>
        </swiper>
      </q-dialog>
    </div>
  </div>
</template>
<style lang="scss">
// .specialist-docs {
.q-dialog__backdrop {
  background: rgba(0, 0, 0, 0.1) !important;
}
// }
</style>
<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 60vw;
  overflow: hidden !important;
}

.specialist-docs {
  max-height: 520px;
  overflow-y: auto;
  display: flex;
  // flex-wrap: wrap;
  gap: 20px 40px;
  // justify-content: space-between;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  &__doc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    flex: 0 1 20%;
    & > div:first-child {
      position: relative;
      height: 150px;
      border-radius: 7px;
      overflow: hidden;
      width: 150px;
    }
    & > div:last-child {
      cursor: pointer;
      color: var(--DarkGrayCompas, #414141);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      text-decoration-line: underline;
    }
  }
}
</style>
