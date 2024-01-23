<script setup lang="ts">
import { useUser } from "@/use/useUserAccount";
import TheButton from "@/components/common/TheButton.vue";
import iconLike from "../icons/iconLike.vue";
import iconDisLike from "../icons/iconDisLike.vue";
import iconHeart from "../icons/iconHeart.vue";
import iconPoint from "../icons/iconPoint.vue";
import { onMounted } from "vue";
const {
  user,
  isLawyer,
  getUserMe,
  userMe,
  swapComp,
  comp,
  getHistorySearch,
  historySearch,
  userCurrentTariff,
} = useUser();

onMounted(() => {
  getUserMe();
  getHistorySearch();
  // getUserTariff()
});
</script>

<template>
  <div
    class="user-account--view__user-main--info user-main--info"
    v-if="userMe"
  >
    <div class="user-main--info__user" @click="swapComp('UserAllBase')">
      <div class="user-main--info__avatar">
        <img src="@/assets/img/beardedMan.png" alt="" />
      </div>
      <div class="user-main--info__fio">
        {{ userMe.user.first_name }}
        {{ userMe.user.last_name }}
        {{ userMe.user.patronymic }}
        <div class="user-main--info__place">
          <icon-point />
          {{ userMe.address }}
        </div>
      </div>
    </div>
    <div
      class="user-main--info__swap-tarif"
      style="display: flex; flex-direction: column; gap: 10px"
    >
      <q-btn
        style="width: 100%"
        @click="swapComp('UserAllTariffs')"
        color="primary"
        label="сменить тариф"
      />
      <!-- <q-btn
        style="width: 100%"
        @click="swapComp('UserAllLongTariffs')"
        color="primary"
        label="сменить тариф подробно"
      /> -->
    </div>
    <div class="user-main--info__tarif">
      <div class="user-main--info__tarif--name" v-if="userCurrentTariff">
        <span>Текущий тариф</span>: {{ userCurrentTariff.tariff_name }}
      </div>
      <div class="user-main--info__tarif--name" v-else>
        <span>Текущий тариф</span>: -
      </div>
      <div class="user-main--info__tarif--info">
        <div class="user-main--info__tarif--city">
          <span>Города:</span>{{ user.tarif.city }}
        </div>
        <div class="user-main--info__tarif--services">
          <span>Услуги:</span>{{ user.tarif.services }}
        </div>
        <div class="user-main--info__tarif-form">
          <span>Форма:</span>{{ user.tarif.form }}
        </div>
        <div class="user-main--info__tarif-cloud">
          <span>Облако:</span>{{ user.tarif.cloud }}
        </div>
      </div>
    </div>
    <div v-if="isLawyer" class="user-main--info__rating">
      <div class="user-main--info__rating--position">
        позиция
        <div>
          <icon-dis-like />
          {{ user.rating.position }}
        </div>
      </div>
      <div class="user-main--info__rating-rate">
        рейтинг
        <div>
          <icon-like />
          {{ user.rating.rate }}
        </div>
      </div>
      <div class="user-main--info__rating-feed--back">
        отзывы
        <div>
          <icon-heart />
          {{ user.rating.feedBack }}
        </div>
      </div>
    </div>
    <div class="user-main--info__video" v-if="isLawyer">
      <div class="user-main--info__video-record">
        <img src="@/assets/svg/playerPlay.svg" alt="" />
        <div>записать видео</div>
      </div>
      <div class="user-main--info__video-mine">мои видео</div>
    </div>
    <div class="user-main--info__data">
      <div class="user-main--info__messages">
        мои сообщения
        <div
          class="user-main--info__message"
          v-for="message in user.messages"
          :key="message.name"
        >
          <div class="user-main--info__message-header">
            <img src="" alt="" />
            <div class="user-main--info__message-name">{{ message.name }}</div>
            <div class="user-main--info__message-text">{{ message.text }}</div>
          </div>
          <div class="user-main--info__message-text"></div>
        </div>
      </div>
      <div class="user-main--info__views">
        <div class="user-main--info__views--statistics">
          статистика просмотров
          <p>за 5 дней</p>
        </div>
        <div class="user-main--info__views--graph">
          <img class="image" src="@/assets/img/graph.jpg" alt="" />
        </div>
      </div>
      <div class="user-main--info__searches">
        мои поиски
        <div class="user-main--info__search">
          <div v-for="word in historySearch" :key="word">
            {{ word }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="user-account--view__user-main--info user-main--info" v-else>
    LOAD
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
