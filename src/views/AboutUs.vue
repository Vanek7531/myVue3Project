<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

const numbersAboutUs = [
  {
    name: "Реализованных проектов",
    img: "",
  },
  {
    name: "Реализованных проектов",
    img: "",
  },
  {
    name: "Реализованных проектов",
    img: "",
  },
  {
    name: "Реализованных проектов",
    img: "",
  },
];
const advantages = [
  {
    name: "В частности, укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации как самодостаточных.",
    img: "",
  },
  {
    name: "В частности, укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации как самодостаточных.",
    img: "",
  },
  {
    name: "В частности, укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации как самодостаточных.",
    img: "",
  },
  {
    name: "В частности, укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации как самодостаточных.",
    img: "",
  },
  {
    name: "В частности, укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации как самодостаточных.",
    img: "",
  },
];
</script>

<template>
  <div class="about-us">
    <div class="about-us__title">сделаем ваш бизнес эффективнее!</div>
    <div>
      <div class="about-us__title">О нас</div>
      <div class="about-us__text">
        В частности, укрепление и развитие внутренней структуры влечет за собой
        процесс внедрения и модернизации как самодостаточных, так и внешне
        зависимых концептуальных решений. Разнообразный и богатый опыт говорит
        нам, что перспективное планирование в значительной степени обусловливает
        важность переосмысления внешнеэкономических политик. Идейные соображения
        высшего порядка, а также реализация намеченных плановых заданий создаёт
        предпосылки для поэтапного и последовательного развития общества.
      </div>
    </div>
    <div>
      <div class="about-us__title">за нас говорят цифры</div>
      <div class="about-us__numbers numbers">
        <div
          class="numbers__number"
          v-for="num in numbersAboutUs"
          :key="num.name"
        >
          <div class="numbers__number-round round">{{}}</div>
          <div class="numbers__number-text">{{ num.name }}</div>
        </div>
      </div>
    </div>
    <div>
      <div class="about-us__title">Слово от директора</div>
      <div class="about-us__word--director">
        <div class="round"></div>
        <div class="about-us__text">
          В частности, укрепление и развитие внутренней структуры влечет за
          собой процесс внедрения и модернизации как самодостаточных, так и
          внешне зависимых концептуальных решений. Разнообразный и богатый опыт
          говорит нам, что перспективное планирование в значительной степени
          обусловливает важность переосмысления внешнеэкономических политик.
          Идейные соображения высшего порядка, а также реализация намеченных
          плановых заданий создаёт предпосылки для поэтапного и
          последовательного развития общества.
        </div>
      </div>
    </div>
    <div class="about-us__line">
      запланированные на ближайшие годы сложные и интересные проекты стимулируют
      наше стремление к лидерству, совершенствованию и инновациям
    </div>
    <div>
      <div class="about-us__title">Наши клиенты</div>
      <div class="about-us__clients">
        <swiper
          class=""
          :slides-per-view="8"
          :space-between="20"
          @swiper=""
          @slideChange=""
        >
          <swiper-slide
            class="round"
            fill="row"
            rows="2"
            v-for="it in 15"
            :key="it"
          >
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div>
      <div class="about-us__title">признание и награды</div>
      <div class="about-us__awards">
        <div v-for="img in 4"></div>
      </div>
    </div>
    <div>
      <div class="about-us__title">Преимущества</div>
      <div class="about-us__advantages">
        <ul>
          <li v-for="adv in advantages" :key="adv.name">
            {{ adv.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-us {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  & > div:first-child {
    text-align: center;
		margin-bottom: 0;
  }
  &__title {
    color: var(--BlueCompas, #4b73db);
    text-align: start;
    /* Inter18caps */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    text-transform: lowercase;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  &__text {
    color: var(--BlackCompas, #121212);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
  .round {
    border: 2px solid #4b73db;
    border-radius: 50%;
    min-width: 135px;
    height: 135px;
  }
  .numbers {
    display: flex;
    justify-content: space-around;
    &__number {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
    &__number-round {
      display: flex;
      flex-direction: column;
      gap: 10px;
      // border: 2px solid #4b73db;
      // border-radius: 50%;
      // width: 135px;
      // height: 135px;
    }
    &__number-text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: var(--BlackCompas, #121212);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
      max-width: 140px;
    }
  }
  &__word--director {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__line {
    padding: 0px 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--WhiteCompas, #fff);
    background: var(--BlueCompas, #4b73db);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    height: 70px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 140%; /* 22.4px */
  }
  &__clients {
    display: flex;
    justify-content: space-between;
    gap: 5%;
  }
  &__awards {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    & > div {
      border-radius: 12px;
      background: #d9d9d9;
      width: 300px;
      height: 203px;
    }
  }
  &__advantages {
    li {
      color: var(--BlackCompas, #121212);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
  }
}
</style>
