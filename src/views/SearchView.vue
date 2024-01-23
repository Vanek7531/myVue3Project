<script setup lang="ts">
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import { ref } from "vue";

const text = ref("");
const thematic = ref("");
const thematics = ref(["1", "4", "2"]);
const results = ref(null);
</script>

<template>
  <main-seacrh />
  <div class="seacth-view">
    <div class="seacth-view__search-result">
      Результаты поиска: Юристы Банкротство
    </div>
    <div class="seacth-view__container">
      <div class="seacth-view__left">
        <div class="seacth-view__params">
          <div class="seacth-view__param">
            Поиск
            <q-select
              outlined
              rounded
              bg-color="blue-grey-5"
              v-model="thematic"
              :options="thematics"
              label="Поиск"
            />
          </div>
          <div class="seacth-view__param">
            Категория
            <q-select
              outlined
              rounded
              bg-color="blue-grey-5"
              v-model="thematic"
              :options="thematics"
              label="Категория"
            />
          </div>
          <div class="seacth-view__param">
            Город
            <q-select
              outlined
              rounded
              bg-color="blue-grey-5"
              v-model="thematic"
              :options="thematics"
              label="Город"
            />
          </div>
          <div class="seacth-view__param">
            Организационная форма
            <q-select
              outlined
              rounded
              bg-color="blue-grey-5"
              v-model="thematic"
              :options="thematics"
              label="Организационная форма"
            />
          </div>
          <div class="seacth-view__param">
            Опыт работы
            <q-select
              outlined
              rounded
              bg-color="blue-grey-5"
              v-model="thematic"
              :options="thematics"
              label="Опыт работы"
            />
          </div>
          <div class="seacth-view__param">
            Специализация
            <q-select
              outlined
              rounded
              bg-color="blue-grey-5"
              v-model="thematic"
              :options="thematics"
              label="Специализация"
            />
          </div>
          <div class="seacth-view__param">
            Статус на сайте
            <q-select
              outlined
              rounded
              bg-color="blue-grey-5"
              v-model="thematic"
              :options="thematics"
              label="Статус на сайте"
            />
          </div>
        </div>
        <div
          class="specialist-view__subscribe"
          style="
            border-radius: 30px;
            background: #fff;
            box-shadow: 2px 7px 10.9px 0px rgba(160, 154, 154, 0.15);
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          "
        >
          <p>Подпишитесь на Email рассылку</p>
          <p>Получайте новые заказы и полезные советы в числе первых</p>
          <q-input
            class="user-all--base__body-input"
            rounded
            outlined
            bg-color="blue-grey-5"
            v-model="text"
            label="Имя"
            type="text"
            placeholder="Имя"
          />
          <q-input
            class="user-all--base__body-input"
            rounded
            outlined
            bg-color="blue-grey-5"
            v-model="text"
            label="Email"
            type="email"
            placeholder="Email"
          />
          <q-btn
            style="border-radius: 20px; border: 1px solid #1847c1"
            flat
            color="primary"
            label="Оформить подписку"
          />
        </div>
      </div>
      <div class="seacth-view__results results">
        <div v-if="results"></div>
        <div class="results__not-found" v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
          >
            <path
              d="M22.7636 12L22.4636 24.5739H19.5364L19.2455 12H22.7636ZM21 30C20.4485 30 19.9758 29.8145 19.5818 29.4435C19.1939 29.0725 19 28.6203 19 28.087C19 27.5652 19.1939 27.1188 19.5818 26.7478C19.9758 26.3768 20.4485 26.1913 21 26.1913C21.5394 26.1913 22.0061 26.3768 22.4 26.7478C22.8 27.1188 23 27.5652 23 28.087C23 28.4406 22.9061 28.7623 22.7182 29.0522C22.5364 29.342 22.2939 29.5739 21.9909 29.7478C21.6939 29.9159 21.3636 30 21 30Z"
              fill="#4B73DB"
            />
            <circle
              cx="20.5"
              cy="20.5"
              r="19.75"
              stroke="#4B73DB"
              stroke-width="1.5"
            />
          </svg>
          <p>По Вашему запросу ничего не найдено.</p>
          <p>Попробуйте еще и вам повезет!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.seacth-view {
  margin-top: 40px;
  &__search-result {
  }
  &__container {
    margin-top: 20px;
    display: flex;
    gap: 20px;
  }
  &__left {
    flex: 0 1 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__params {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
    // height: 700px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 2px 7px 10.9px 0px rgba(160, 154, 154, 0.15);
  }
  &__param {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: var(--BlueCompas, #4b73db);

    /* Inter16Regular */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }

  .results {
    flex: 0 1 70%;
    max-height: 1000px;
    overflow-y: auto;
    &__not-found {
			display: flex;
			align-items: center;
			flex-direction: column;
			gap: 10px;
			padding: 40px 0;
			justify-content: center;
    }
  }
}
</style>
