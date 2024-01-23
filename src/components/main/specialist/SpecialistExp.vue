<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="specialist-exp">
    <div class="specialist-exp__body">
      <div>Квалификация:</div>
      <div>
        <p>Основные области права, в которых вы специализируетесь:</p>
        {{ user.experience.additional_info }}
      </div>
      <div>
        <p>Опыт решения юридических вопросов в этих областях:</p>
        ---
      </div>
    </div>
    <div class="specialist-exp__body">
      <div>Профессиональные навыки</div>
      <div>
        <p>Владение языками (если применимо):</p>
        {{ user.languages }}
      </div>
      <div>
        <p>Навыки анализа и решения юридических вопросов:</p>
        {{ user.experience.professional_skills }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.specialist-exp {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  gap: 20px 40px;
  // justify-content: space-between;
  &__body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // flex: 0 1 40%;
    // display: flex;
    & > div:first-child {
      color: var(--blue-hover, #1847c1);
      font-size: 16px;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
      // margin-bottom: 15px;
    }
    & > div:not(:first-child) {
      p {
        font-weight: 600;
      }
      color: var(--style, #0f1137);
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
  }
}
</style>
