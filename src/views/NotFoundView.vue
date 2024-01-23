<template>
  <div class="not-found--page__container">
    <div class="not-found--page__title">404</div>
    <div class="not-found--page__img">
      <img src="@/assets/img/NotFoundPage.png" alt="" />
    </div>
    <div class="not-found--page__subtitle">Вот несколько полезных ссылок</div>
    <div class="not-found--page__btns">
      <RouterLink to="/"> <div>главная</div></RouterLink>
      <RouterLink to="/articles"> <div>статьи</div></RouterLink>
      <RouterLink to="/questions"> <div>вопросы</div></RouterLink>
      <RouterLink to="/specialists"> <div>специалисты</div></RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.not-found--page {
  color: var(--blue-compas, #4b73db);
  font-weight: 400;
  line-height: 110%; /* 44px */
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
  &__title {
    font-size: 40px;
  }
  &__img {
  }
  &__subtitle {
  }
  &__btns {
    display: flex;
    gap: 10px;
    & > a {
			text-decoration: none;
      border-radius: 44px;
      border: 1px solid var(--blue-compas, #4b73db);
      background: var(--white-compas, #fff);
      padding: 10px 20px;
      cursor: pointer;
			color: var(--blue-compas, #4B73DB);
    }
  }
}
</style>
