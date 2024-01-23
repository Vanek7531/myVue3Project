<script setup lang="ts">
import { onMounted, ref } from "vue";
import iconFilter from "@/components/icons/iconFilter.vue";
import TheInput from "@/components/common/TheInput.vue";
import TheButton from "@/components/common/TheButton.vue";
import { useMain } from "@/use/useMainPage";
import { Swiper, SwiperSlide } from "swiper/vue";
import httpService from "@/api/server";
import { userDeviceMobile } from "@/use/helper";
import iconMain from "../icons/iconMain.vue";
import IconSpecialists from "../icons/iconSpecialists.vue";
import IconQuestions from "../icons/iconQuestions.vue";
import IconArticle from "../icons/iconArticle.vue";
import navButtonIcon from "@/components//header/navButtonIcon.vue";
import { useApp } from "@/use/useMainApp";

const { inputSearchValue, words, targetInput, searchAll, searchResults, goTo } =
  useMain();

const { navMenu, headerBtns, activeClass, isUser } = useApp();

// const login = async () => {
//   try {
//     const response = await httpService.post(`/api/token/`, {
//       email: "admin@admin.admin",
//       password: "12345678",
//     });

//     return response;
//   } catch (error) {}
// };

const color = ref("#4B73DB");
const nav = ref({
  route: "/specialists",
  name: "специалисты",
});
onMounted(() => {
  // words.value.sort(() => Math.random() - 0.5);
});
</script>

<template>
  <div class="main-search">
    <div class="main-search__block">
      <div class="main-search__title">финансово - правовая Экосистема</div>
      <div class="main-search__sub--title">
        Сейчас у нас <span>1134 специалиста</span>
      </div>
      <div class="main-search__input">
        <div style="position: relative">
          <the-input
            :placeholder="'введите текст для поиска'"
            :type="'123'"
            v-model="inputSearchValue"
          />
          <!-- <div class="cross" @click="inputSearchValue = ''">x</div> -->
          <div class="cross" @click="searchAll()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.0954 11.2197L32.8684 15.9926C33.1613 16.2855 33.1613 16.7604 32.8684 17.0533L28.0954 21.8263C27.8026 22.1192 27.3277 22.1192 27.0348 21.8263C26.7419 21.5334 26.7419 21.0585 27.0348 20.7656L30.5274 17.273L0.378906 17.273L0.378906 15.773L30.5274 15.773L27.0348 12.2803C26.7419 11.9874 26.7419 11.5126 27.0348 11.2197C27.3277 10.9268 27.8026 10.9268 28.0954 11.2197Z"
                fill="#414141"
                fill-opacity="0.58"
              />
            </svg>
          </div>
        </div>
        <router-link to="/search">
          <icon-filter />
        </router-link>
        <div>
          <q-btn color="primary" @click="searchAll()" label="Найти" />
        </div>
      </div>
      <div class="main-search__container">
        <div class="main-search__sub--title" style="font-size: 16px">
          Выберите тему
        </div>
        <div class="main-search__words">
          <div
            class="main-search__word"
            v-for="word in words"
            :key="word"
            :class="inputSearchValue === word ? 'active' : ''"
          >
            <the-button @click="targetInput(word)" :text="word" />
          </div>
        </div>

        <swiper
          class="main-search__words"
          :slides-per-view="13"
          :space-between="5"
          @swiper=""
          @slideChange=""
          v-if="false"
        >
          <swiper-slide
            class="main-search__word"
            v-for="word in words"
            :class="inputSearchValue === word ? 'active' : ''"
            :key="word"
          >
            <the-button @click="targetInput(word)" :text="word" />
          </swiper-slide>
        </swiper>
      </div>
      <div
        class="main-search__search-container"
        v-if="
          searchResults &&
          searchResults.length > 0 &&
          Array.isArray(searchResults)
        "
      >
        <div
          v-for="(item, idx) in searchResults"
          :key="item"
          @click="goTo(item)"
        >
          <div v-if="item.slug">{{ idx + 1 }}) {{ item.slug }}</div>
          <div v-else>
            {{ idx + 1 }}) {{ item.last_name }} {{ item.first_name }}
          </div>
        </div>
      </div>
      <div class="main-search__search-container" v-else-if="searchResults">
        <div>{{ searchResults }}</div>
      </div>
    </div>
    <div class="main-search__routes" style="border-top: 1px solid white">
      <nav v-for="(nav, idx) in navMenu" :key="idx">
        <nav-button-icon :nav="nav">
          <!-- <RouterLink :to="nav.route">
								<component  :is="wat(nav.name)" />
							</RouterLink> -->
        </nav-button-icon>
      </nav>
    </div>
    <div class="main-search__help">
      <p>Устали искать?</p>
      <p>
        Задайте напрямую вопрос одному из авторов на сайте и получите ответ в
        течение 5 минут
      </p>
      <icon-main />
      <div>
        <q-btn
          style="border: 1px solid #4b73db"
          flat
          label="Задать вопрос онлайн"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mainViewStyle.scss";
.active {
  div {
    background: #d1d9ee !important;
  }
}

.cross {
  position: absolute;
  top: 3px;
  right: 10px;
  width: fit-content !important;
  cursor: pointer;
  padding: 2px;
  font-weight: 700;
  font-size: 22px;
}
</style>
