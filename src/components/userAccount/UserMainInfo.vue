<script setup lang="ts">
import { useUser } from "@/use/useUserAccount";
import TheButton from "@/components/common/TheButton.vue";

const { user } = useUser();
</script>

<template>
  <div class="user-account--view__user-main--info user-main--info">
    <div class="user-main--info__user">
      <div class="user-main--info__avatar">
        <img src="@/assets/img/beardedMan.png" alt="" />
      </div>
      <div class="user-main--info__fio">
        {{ user.name }}
        <div class="user-main--info__place">
          svg
          {{ user.place }}
        </div>
      </div>
    </div>
    <div class="user-main--info__swap-tarif">
      
			<the-button :backgroundColor="'#4B73DB'" :textColor="'#fff'" :text="'сменить тариф'" />
    </div>
    <div class="user-main--info__tarif">
      <div class="user-main--info__tarif--name">
        Текущий тариф: {{ user.tarif.name }}
      </div>
      <div>
        <div class="user-main--info__tarif--city">
          Города:{{ user.tarif.city }}
        </div>
        <div class="user-main--info__tarif--services">
          Услуги:{{ user.tarif.services }}
        </div>
        <div class="user-main--info__tarif-form">
          Форма:{{ user.tarif.form }}
        </div>
        <div class="user-main--info__tarif-cloud">
          Облако:{{ user.tarif.cloud }}
        </div>
      </div>
    </div>
    <div class="user-main--info__rating">
      <div class="user-main--info__rating--position">позиция</div>
      <div class="user-main--info__rating-rate">рейтинг</div>
      <div class="user-main--info__rating-feed--back">отзывы</div>
    </div>
    <div>
      <div class="user-main--info__message"></div>
      <div class="user-main--info__views"></div>
      <div class="user-main--info__search"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
