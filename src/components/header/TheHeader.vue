<script setup lang="ts">
import { onMounted, ref } from "vue";
import TheButton from "@/components/common/TheButton.vue";
import navButtonIcon from "@/components//header/navButtonIcon.vue";
import { activaMainPageTab, useApp } from "@/use/useMainApp";
import { useUser } from "@/use/useUserAccount";
import iconDownArrow from "../icons/iconDownArrow.vue";
import { isUserAuth } from "@/use/helper";
import { showQuestion } from "@/use/useMainApp";
import { count } from "@/use/alerts";
import IconMain from "../icons/iconMain.vue";
import iconLearn from "../icons/iconLearn.vue";
import AlertsWindow from "./AlertsWindow.vue";
import { clickOutSide as vClickOutSide } from "@mahdikhashan/vue3-click-outside";
import router from "@/router";
import { logOut } from "@/use/useAuthorization";

const { user, goOnTatiffs } = useUser();
const showAlerts = ref(false);

const { navMenu, headerBtns, activeClass, isUser } = useApp();
const onItemClick = () => {};
const closeAlerts = () => {
  showAlerts.value = false;
};

const routes = [
  {
    path: "/articles",
    name: "Статьи",
  },
  {
    path: "/questions",
    name: "Вопросы",
  },
  {
    path: "/specialists",
    name: "Специалисты",
  },
  {
    path: "",
    name: "О сервисе",
  },
  {
    path: "",
    name: "Новости",
  },
  {
    path: "",
    name: "Тарифы",
  },
  {
    path: "/frequent-questions",
    name: "Частые вопросы",
  },
];
</script>

<template>
  <header class="header">
    <div
      class="header__main--route"
      @click="router.push('/'), (activaMainPageTab = 'all')"
    >
      <icon-main />
      <div>URIST.RU</div>
    </div>
    <div class="header__other--route">
      <div
        v-for="route in routes"
        :key="route.name"
        @click="router.push(route.path)"
      >
        {{ route.name }}
      </div>
    </div>
    <!-- <div class="header__new--post"></div> -->
    <div class="header__nav-buttons" v-if="isUserAuth && !isUser">
      <q-btn flat label="выбрать тариф" @click.stop="goOnTatiffs()" />
      <!-- <q-btn @click.stop="showQuestion = !showQuestion" label="задать вопрос" /> -->
      <q-btn
        color="primary"
        label="в лк"
        @click="router.push('/userAccount')"
      />
    </div>
    <div class="header__nav-buttons" v-if="!isUserAuth">
      <div class="header__new--post">
        <icon-learn />
        <div>Написать пост</div>
      </div>
      <q-btn
        @click="router.push('/login')"
        style="border: 1px solid #4b73db"
        flat
        label="Регистрация"
      />
      <q-btn @click="router.push('/login')" push color="primary" label="Вход" />
    </div>
    <div class="header__nav-buttons" v-if="isUserAuth && isUser">
      <div class="header__new--post">
        <icon-learn />
        <div>Написать пост</div>
      </div>
      <q-btn color="primary" label="Выйти" @click="logOut()" />
    </div>
  </header>
</template>

<style lang="scss">
@import "@/assets/styles/userViewStyle.scss";

@import "@/assets/styles/headerStyle.scss";
.header__nav-menu {
  .active {
    .white-block {
      width: 100px;
      background: #4b73db;
      svg {
        display: none;
      }
      div {
        display: block !important;
      }
    }
  }
}
.router-link-active {
  .white-block {
    width: 100px;
    background: #4b73db;
    svg {
      display: none;
    }
    div {
      display: block !important;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
