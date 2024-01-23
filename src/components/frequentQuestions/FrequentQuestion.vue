<script setup lang="ts">
import { ref } from "vue";
import iconDownArrow from "../icons/iconDownArrow.vue";
import iconRightArrow from "../icons/iconRightArrow.vue";

defineProps({
  question: {
    type: Object,
    default: {},
  },
});
const openQuestion = ref(false);
</script>

<template>
  <div class="question" @click="openQuestion = !openQuestion">
    <div class="question__head">
      <div>{{ question.title }}</div>
      <div v-if="!openQuestion">
        <icon-down-arrow :size="40" :color="'#121212'"/>
      </div>
      <div v-else>
				<icon-right-arrow :color="'#121212'"/>
      </div>
    </div>
    <div class="question__body" v-if="openQuestion">
      {{ question.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #121212;
  gap: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &__head {
    display: flex;
    justify-content: space-between;
		font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    text-transform: uppercase;
  }
  &__body {
		color: var(--DarkGrayCompas, #414141);

/* Inter16Regular */
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
  }
}
</style>
