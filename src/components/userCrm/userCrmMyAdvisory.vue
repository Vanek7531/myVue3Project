<script setup lang="ts">
import iconHeart from "../icons/iconHeart.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
</script>

<template>
  <div class="user-crm--my-advisory my-advisory__container">
    <div class="my-advisory__title">Вас порекомендовали</div>
    <div class="my-advisory__people-container">
      <div class="my-advisory__people-body" v-for="item in 8">
        <div class="my-advisory__people-header">
          <img src="@/assets/img/specialistMan.png" alt="man" />
          <div>Александр Станиславович Малютин</div>
        </div>
        <div class="my-advisory__people-statuses">
          <div>
            <icon-heart />
            5
          </div>
          <div>
            <icon-like />
            5
          </div>
          <div>
            <icon-dis-like />
            5
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-advisory {
  &__container {
  }
  &__title {
    color: var(--BlueCompas, #4b73db);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  &__people-container {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    gap: 20px;
  }
  &__people-body {
    border-radius: 12px;
    background: var(--WhiteCompas, #fff);
    padding: 40px 30px 10px;
    min-height: 115px;
  }
  &__people-header {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    & > div {
      max-width: 170px;
    }
  }
  &__people-statuses {
    display: flex;
    gap: 20px;
    align-items: center;
    & > div {
      display: flex;
      align-items: center;
    }
  }
}
@media (max-width: 1023px) {
  .my-advisory {
    &__people-container {
      justify-content: space-around;
    }
  }
}
</style>
