<script setup lang="ts"></script>
<template>
  <div class="my-seals">
    <div class="my-seals__title">
      <div>Мои подписи</div>
      <div>+ Добавить подпись</div>
    </div>
    <div class="my-seals__table">
      <div class="my-seals__container">
        <div class="my-seals__body" v-for="item in 3">
          <div>1 Название подписи.png</div>
          <div>
            <img src="@/assets/svg/filter.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-seals {
  &__title {
    display: flex;
    justify-content: space-between;
    & > div:first-child {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 20px;
    }
    & > div:last-child {
      text-decoration: underline;
    }
  }
  &__container {
    padding: 10px;
    border-radius: 0px 12px 12px 0px;
    background: var(--WhiteCompas, #fff);
  }
  &__body {
    max-width: 80%;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    color: #414141;
  }
}
</style>
