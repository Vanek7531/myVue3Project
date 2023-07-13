<script setup lang="ts">
import { ref } from 'vue';
import iconDownArrow from "../icons/iconDownArrow.vue";
import iconUpArrow from "../icons/iconUpArrow.vue";
const open =ref(false)

</script>

<template>
  <div class="main-article--interesting">
    <h2>интересные Статьи</h2>
    <div
		class="main-article--interesting__grid-container"
      v-if="open"
    >
      <div
				class="
				main-article--interesting__body"
        v-for="item in 9"
        :key="item"
      >
        <div
          style="
          "
        >
          Новое о банкротстве
        </div>
        <img
				class="image"
          src="/src/assets/img/billie-dollar-money-background.jpg"
          alt=""
        />
        <div>Подробнее</div>
      </div>
    </div>
    <div class="main-article--interesting__container" v-else>
      <!-- :style="`background: url('')`" -->
      <div
        v-for="item in 4"
        :key="item"
        class="main-article--interesting__body"
      >
        <p>Новое о банкротстве</p>
        <p>Подробнее</p>
      </div>
    </div>
		<div class="main-article__arrow arrow-open" @click="open = !open">
			<icon-down-arrow v-if="!open"/>
			<icon-up-arrow v-else/>
		</div>
  </div>
</template>

<style scoped lang="scss">
@import "/src/assets/styles/mainViewStyle.scss";
</style>
