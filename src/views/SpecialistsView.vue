<script setup lang="ts">
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import iconHeart from "@/components/icons/iconHeart.vue";
import iconSignQuestion from "@/components/icons/iconSignQuestion.vue";
import iconExperience from "@/components/icons/iconExperience.vue";
import iconSignAnswer from "@/components/icons/iconSignAnswer.vue";
import iconPoint from "@/components/icons/iconPoint.vue";
import iconCase from "@/components/icons/iconCase.vue";
import iconStar from "@/components/icons/iconStar.vue";
import iconSubscribe from "@/components/icons/iconSubscribe.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
import TheWords from "@/components/common/TheWords.vue";
import { useSpecialists } from "@/use/useSpecialists";
import { onMounted } from "vue";

const { getSpecialists, allSpecialists, getSpecialist, } = useSpecialists();

const items = [
  {
    color: "#1D9B22",
  },
  {
    color: "#3159A6",
  },
  {
    color: "#A63131",
  },
  {
    color: "#6D15A3",
  },
  {
    color: "#4B73DB",
  },
  {
    color: "#B148AC",
  },
];

onMounted(() => {
  getSpecialists();
});
</script>

<template>
  <div>
    <main-seacrh />
    <section class="specialists-view">
      <h2>Специалисты</h2>
      <div class="main-subtitle">
        Самые экспертные публикации от востребованных специалистов
      </div>
		<the-words/>

      <!-- <pre style="overflow: scroll; height: 400px;">{{ allArticles }}</pre> -->
      <div
        class="specialists-view__container"
        v-if="allSpecialists && allSpecialists.length > 0"
      >
        <div
          v-for="specialist in allSpecialists"
          class="specialists-view__card card"
          :key="specialist.pk"
        >
          <div class="card__header">
            <div class="card__header--img">
              <img
                class="image"
                :src="specialist.user_avatar"
                :alt="specialist"
              />
            </div>
            <div>
              <!-- <div class="card__header-subscribe">
                <icon-subscribe />подписаться
              </div> -->
              <div class="card__header--fio">
                <p>{{ specialist.user_full_name }}</p>
              </div>
              <p>Юрист по праву</p>
            </div>
          </div>
          <div class="card__body">
            <div class="card__city">
              <iconPoint /> Москва <iconPoint /> Волгоград
            </div>
            <div class="card__text">
              {{ specialist.about_me.slice(0, 80) }}...
            </div>
            <div class="card__statistics">
              <div>
                <icon-sign-question /> {{ specialist.questions }} вопросов
              </div>
              <div><icon-sign-answer />{{ specialist.answers }} ответов</div>
              <div><icon-case /> 5 дел</div>
              <div><icon-experience />3 года</div>
            </div>
            <div class="card__city"></div>
            <div class="card__expert--reactions">
              <div class="card__expert--avatars">
                <div>Рейтинг:</div>
                <div v-for="el in 5">
                  <icon-star />
                </div>
                <div
                  v-if="false"
                  v-for="(item, idx) in items"
                  :key="idx"
                  :style="`transform: translate(-${
                    idx * 15
                  }px,0); background: ${item.color}`"
                ></div>
              </div>
            </div>
            <div class="card__reactions">
              <div>
                <icon-heart />
                123
              </div>
              <div>
                <icon-like />
                {{ specialist.like }}
              </div>
              <div>
                <icon-dis-like />
                {{ specialist.dislike }}
              </div>
            </div>
          </div>
          <div class="card__status-spec">Онлайн</div>
          <RouterLink :to="`/specialists/${specialist.pk}`"
            ><q-btn
              style="border-radius: 20px; border: 1px solid #1847c1"
              flat
              color="primary"
              label="Перейти в профиль"
          /></RouterLink>
        </div>
      </div>
      <div v-else>LOAD</div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/articlesStyle.scss";
</style>
