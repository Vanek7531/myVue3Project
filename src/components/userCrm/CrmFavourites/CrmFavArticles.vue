<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="crm-favourites__container" v-if="user">
    <div
      class="crm-favourites__body"
      v-for="digest in user.favorite_digests"
      :key="digest.id"
    >
      <img
        class="image"
        src="/src/assets/img/billie-dollar-money-background.jpg"
        alt=""
      />
      <div class="crm-favourites__head">{{ digest.slug }}</div>
      <div class="crm-favourites__bottom">Подробнее</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.crm-favourites {
  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__body {
    position: relative;
    height: 280px;
    max-width: 300px;
    border-radius: 12px;
    overflow: hidden;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
      position: relative;
      z-index: 1;
    }
  }
  &__head {
    color: var(--WhiteCompas, #fff);

    /* Inter24SemiboldCAPS */
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    text-transform: uppercase;
  }
  &__bottom {
    color: var(--WhiteCompas, #fff);
    text-align: end;
    /* Inter12RegularLINE */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 233.333% */
    text-decoration-line: underline;
    cursor: pointer;
  }
}
</style>
