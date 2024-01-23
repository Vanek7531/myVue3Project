<script setup lang="ts">
import iconHeart from "@/components/icons/iconHeart.vue";
import iconComment from "@/components/icons/iconComment.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";

defineProps({
  user: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="crm-favourites__container" v-if="user && user.favorite_questions">
    <div
      class="crm-favourites__body"
      v-for="question in user.favorite_questions"
      :key="question.id"
    >
      <div class="crm-favourites__head">
        <img src="@/assets/img/beardedMan.png" alt="" />
        <div>Владиславоооч Степанович Евсеев</div>
      </div>
      <div class="crm-favourites__date">{{ question.added_at.slice(0,10) }}</div>
      <div class="crm-favourites__text">
        Здравствуйте, я пенсионер имею ли я право ездит в пригородных
        электричках бесплатно? (больше никаких льгот) Я банкрот
      </div>
      <div class="crm-favourites__statuses" v-if="true">
        <div>
          <icon-heart />
          5
        </div>
        <div>
          <icon-comment />
          5
        </div>
        <div>
          <icon-like />
          5
        </div>
        <div><icon-dis-like />6</div>
      </div>
      <div class="crm-favourites__btn">ответить</div>
    </div>
  </div>
  <div class="crm-favourites__container" v-else>
		У вас нет избранных вопросов
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
    border-radius: 12px;
    background: var(--WhiteCompas, #fff);
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 420px;
    padding: 20px;
  }
  &__head {
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      border-radius: 50%;
    }
    div {
      font-weight: 600;
    }
  }
  &__date {
    color: #d7dbe5;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
  &__text {
    color: #121212;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
  &__statuses {
    display: flex;
    gap: 10px;
    & > div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  &__btn {
    text-align: end;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
