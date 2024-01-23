<script setup lang="ts"></script>

<template>
  <div class="specialist-review">
    <div class="specialist-review__body" v-for="item in 4">
      <div style="display: flex; gap: 20px;">
        <div class="specialist-review__body--fio">
          Вячеслав Константинович Корчевский
        </div>
        <div class="specialist-review__body--date">21.03.2023</div>
      </div>

      <div class="specialist-review__body--content">
        У меня, как у первого покупателя, возникло много вопросов в процессе.
        Каждый день я задавал вопрос Александру, и он всегда быстро отвечала и
        либо давала правильный ответ, либо мог связать меня с кем-то, кто это
        сделал. Во время работы с Александром было совершенно ясно, что он
        действительно заботится о своих клиентах и усердно работает, чтобы
        сделать их счастливыми. Очень рекомендую его всем своим друзьям, и я
        знаю, что буду обращаться к нему снова в будущем!
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/articlesStyle.scss";
</style>
