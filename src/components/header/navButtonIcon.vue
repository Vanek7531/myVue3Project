<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
import IconSpecialists from "../icons/iconSpecialists.vue";
// import IconQuestions from '../icons/iconQuestions.vue';
// import IconArticle from '../icons/iconArticle.vue';
// import IconMain from '../icons/iconMain.vue';

import { useApp } from "@/use/useMainApp";
const { activaMainPageTab } = useApp();

const props = defineProps({
  nav: {
    type: Object,
    default: "",
  },
});
const nameComp = computed(() => {
  return defineAsyncComponent(() =>
    props.nav.name === "статьи"
      ? import("../icons/iconArticle.vue")
      : props.nav.name === "вопросы"
      ? import("../icons/iconQuestions.vue")
      : import("../icons/iconSpecialists.vue")
  );
});

const getActive = (item: string) => {
  if (activaMainPageTab.value === item) activaMainPageTab.value = "all";
  else {
    activaMainPageTab.value = item;
  }
};
// import("./components/icons/iconMain.vue")
const color = ref("#4B73DB");
</script>

<template>
  <div>
    <!-- <slot></slot> -->
    <!-- <div class="route" :to="nav.route"> -->
    <!-- {{ nav }} -->
    <!-- <pre>{{ nameComp }} activaMainPageTab</pre> -->
    <div
      class="route"
      :class="activaMainPageTab === nav.name ? 'active' : 'no-active'"
      @mouseenter="color = '#3AC908'"
      @mouseleave="color = '#4B73DB'"
      @click="getActive(nav.name)"
    >
      <component
        :is="nameComp"
        :color="activaMainPageTab === nav.name ? '#fff' : color"
      />
      <div class="text">{{ nav.name }}</div>
    </div>
    <!-- <div v-if="nav.name !== 'главная'">{{ nav.name }}</div> -->
    <!-- </div> -->
  </div>
</template>

<style scoped lang="scss">
.active {
  border-radius: 12px 12px 0px 0px;
  background: #4b73db;
  width: 95px;
  transition: all 0.7s cubic-bezier(0.6, -0.28, 0.74, 0.05);
  overflow: hidden;
  .text {
    display: block;
  }
}
.route {
  display: flex;
  align-items: center;
  color: #ffffff;
  flex-direction: column;
  gap: 2px;
  height: 60px;
  svg {
    min-height: 24px;
  }
}
.text {
  height: 10px;
  display: none;
}

.no-active {
  width: 40px;
  transition: all 0.5s linear;
  background: #f8f8fb;
  overflow: hidden;
}
.white-block1 {
  background: #ffffff;
  width: 40px;
  height: 90px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 1rem 1rem;
  div {
    display: none;
  }
}
</style>
