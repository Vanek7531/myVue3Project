<script setup lang="ts">
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import iconComment from "../icons/iconComment.vue";

import { useUser } from "@/use/useUserAccount";
const { comp, categories, swapComp, advices } = useUser();
</script>

<template>
  <div class="user-account--view__user-all--advice user-all--advice">
    <div class="user-all--advice__container">
      <div
        class="user-all--advice__body"
        v-for="advice in advices"
        :key="advice.fio"
      >
        <div class="user-all--advice__header-container">
          <div class="user-all--advice__header--fio">
            <div class="user-all--advice__header--img">
              <img src="@/assets/img/beardedMan.png" alt="" />
            </div>
            <div>
              <p>{{ advice.fio }}</p>
              <div class="user-all--advice__main">
                {{ advice.post }}
              </div>
            </div>
          </div>
          <div class="user-all--advice__header--close">X</div>
        </div>

        <div class="user-all--advice__statuses">
          <div>
            <icon-heart />
            {{ advice.hearts }}
          </div>
          <div>
            <icon-comment />
            {{ advice.comment }}
          </div>
          <div>
            <icon-like />
            {{ advice.like }}
          </div>
          <div><icon-dis-like />{{ advice.disLike }}</div>
        </div>

        <!-- <div class="user-all--advice__btn">ответить</div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
