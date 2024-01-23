<script setup lang="ts">
import iconComment from "../icons/iconComment.vue";
import iconLike from "../icons/iconLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import { ref } from "vue";
import httpService from "@/api/server";

const text = ref("");
</script>

<template>
  <div class="user-account--view__user-all--base-info user-all--base-info">
    <!-- <pre>{{ some }}</pre> -->
    <div class="user-all--base-info__container">
      <div class="user-all--base-info__header">
        <div class="user-all--base-info__header-fio">
          <div>
            <img src="./../../assets/img/beardedMan.png" alt="" />
            <div>Александр Станиславович Малютин</div>
          </div>
          <div>21.03.2023</div>
        </div>
        <div class="user-all--base-info__card-statuses">
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
            15
          </div>
          <div><icon-dis-like />5</div>
        </div>
      </div>
      <div>
        Добрый вечер, я являюсь ветераном труда и пенсионером, не являюсь
        собственником жилья, просто прописана в квартире мужа (он собственник,
        не пенсионер). Отказывают в реализации льготы на содержание жилья,
        ссылаясь на жилищный кодекс, остальные льготы на коммунальные услуги
        учитывают.
      </div>
    </div>
    <div class="user-all--base-info__chat">
      <div>Здравствуйте, чем я могу вам помочь?</div>
      <div>
        Здравствуйте, есть квартира, у нее 4 собственника, отец, мать, сын,
        дочь, я-сын, хочу подарить свою долю матери, но живем мы далеко друг от
        друга и возможности приехать нет, можно ли через нотариуса по месту
        моего пребывания оформить договор дарения и подать его в Росреестр?
      </div>
      <div>Хорошо, еще пару моментов уточните пожалуйста</div>
      <div>Да, конечно</div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        libero odit fuga voluptatum obcaecati itaque quia reiciendis, sequi
        molestias unde quidem totam ipsum. Officiis fugit culpa, laudantium
        omnis magnam et.
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        libero odit fuga voluptatum obcaecati itaque quia reiciendis, sequi
        molestias unde quidem totam ipsum. Officiis fugit culpa, laudantium
        omnis magnam et.
      </div>
    </div>
    <div class="user-all--base-info__textarea">
      <div class="q-pa-md q-gutter-sm">
        <q-editor
          v-model="text"
          :definitions="{
            bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/questionsStyle.scss";
</style>
