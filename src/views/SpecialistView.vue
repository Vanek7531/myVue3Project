<script setup lang="ts">
import router from "@/router";
import {
  computed,
  defineAsyncComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import iconExperience from "@/components/icons/iconExperience.vue";
import iconSignAnswer from "@/components/icons/iconSignAnswer.vue";
import iconCase from "@/components/icons/iconCase.vue";
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import iconSignQuestion from "@/components/icons/iconSignQuestion.vue";

import iconLike from "@/components/icons/iconLike.vue";
import iconHeart from "@/components/icons/iconHeart.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
import progressBar from "@/components/main/specialist/progressBar.vue";
import iconStar from "@/components/icons/iconStar.vue";
import { useSpecialists } from "@/use/useSpecialists";
import {
  checkStatusForUserId,
  openNewSocket,
  createSomething,
} from "@/use/alerts";
import { socketIo, textMsg, allChatMsg } from "@/use/soketIo";
import { userMe } from "@/use/useUserAccount";

const chatContainer = ref();
const subscribeName = ref("");
const subscribeEmail = ref("");
const { openSoketIo } = socketIo();

// Подскроливание вниз при изменении контента
watch(allChatMsg, (newVal) => {
  if (chatContainer.value && allChatMsg.value && newVal) {
    setTimeout(() => {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }, 100);
  }
});
const {
  newMessage,
  getUserStatus,
  statusS,
  openUserChatRoom,
  postChatShortId,
  currentChatUserId,
  closeUserChatRoom,
} = socketIo();
const {
  getSpecialists,
  allSpecialists,
  getSpecialist,
  specialist,
  backgroundStar,
  chooseRating,
  rating,
  message,
  isRated,
  stages,
} = useSpecialists();

const categories = [
  {
    name: "О специалисте",
    comp: "SpecialistAboutMe",
  },
  {
    name: "Квалификация",
    comp: "SpecialistExp",
  },
  {
    name: "Документы",
    comp: "SpecialistDocuments",
  },
  {
    name: "Отзывы",
    comp: "SpecialistRev",
  },
  {
    name: "Мои статьи",
    comp: "SpecialistArt",
  },
  {
    name: "Оплата",
    comp: "SpecialistPay",
  },
  {
    name: "Контакты",
    comp: "SpecialistContacts",
  },
];

const comp = ref("");
const textMessage = ref("");
const activeTab = ref("");
const statusUserId = ref();

const activeClass = (item: any) => {
  if (activeTab.value) {
    return activeTab.value.includes(`${item}`) ? "active" : "";
  }
};

const swapComp = (item: string) => {
  activeTab.value = item;
	openChat.value = false
  comp.value = defineAsyncComponent(
    () => import(`@/components/main/specialist/${item}.vue`)
  );
  // return import(`@/components/userAccount/${item}.vue`)
};

const openChat = ref(false)
const id = Number(router.currentRoute.value.params.id);

onMounted(async () => {
  getSpecialist(id);
  openSoketIo();

  currentChatUserId.value = id;
  setTimeout(() => {
    checkStatusForUserId(id);
    // postChatShortId(id);
    openUserChatRoom();
  }, 200);
  swapComp("SpecialistAboutMe");
  getUserStatus(id);
});
onUnmounted(() => {
  closeUserChatRoom();
});
</script>
<template>
  <div class="specialist-view" v-if="specialist">
    <!-- <main-seacrh /> -->
    <div class="specialist-view__container">
      <div class="specialist-view__categories-list">
        <div
          class="specialist-view__category"
          :class="activeClass(category.comp)"
          @click="swapComp(category.comp)"
          v-for="category in categories"
          :key="category.comp"
          style="cursor: pointer"
        >
          <div>{{ category.name }}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="24"
              viewBox="0 0 33 34"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.7165 11.2197L32.4895 15.9926C32.7824 16.2855 32.7824 16.7604 32.4895 17.0533L27.7165 21.8263C27.4236 22.1192 26.9488 22.1192 26.6559 21.8263C26.363 21.5334 26.363 21.0585 26.6559 20.7656L30.1485 17.273L-6.25944e-07 17.273L-4.76268e-07 15.773L30.1485 15.773L26.6559 12.2803C26.363 11.9874 26.363 11.5126 26.6559 11.2197C26.9488 10.9268 27.4236 10.9268 27.7165 11.2197Z"
                fill="#121212"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="specialist-view__specialist-card card">
        <div class="card__head">
          <div class="card__head-user--img">
            <!-- <img src="@/assets/img/specialistView.png" alt="" /> -->
            <img
              class="image"
              :src="`${specialist.user.avatar}`"
              alt="specImg"
            />
          </div>
          <div class="card__head-user--info">
            <div class="card__head-user--info__fio">
              {{ specialist.user.first_name }}
              {{ specialist.user.last_name }}
              {{ specialist.user.patronymic }}
            </div>
            <div class="card__head-user--info__post">
              <div>{{ specialist.user.role }}</div>
              <div class="grid-points" :class="isRated ? 'disable' : ''">
                <div class="star w" v-for="stage in stages" :key="stage.id">
                  <icon-star
                    style="cursor: pointer"
                    @click="chooseRating(stage.id)"
                    :color="backgroundStar(stage.thresholdPoints)"
                  />
                </div>
                <q-tooltip
                  anchor="center middle"
                  self="top middle"
                  v-if="isRated"
                >
                  {{ message }}
                </q-tooltip>
              </div>
            </div>
            <div class="card__head-user--info__details">
              <div>Стаж: {{ specialist.experience.total_experience }} лет</div>
              <div><icon-sign-question /> 30 отзывов</div>
              <div><icon-case /> 5 дел</div>
              <div>Город:</div>
              <div><icon-sign-answer /> 40 статей</div>
              <div><icon-experience />3 года</div>
            </div>
            <div class="card__head-user--info__status">
              <div>Верифицирован</div>
              <!-- v-show="statusS" -->
              <div :class="statusS == 'online' ? 'online' : ''">
                {{ statusS }}
              </div>
            </div>
          </div>
        </div>
        <div class="card__bottom">
          <div class="specialist-view__reactions">
            <div>
              <icon-heart />
              5
            </div>
            <div>
              <icon-like />
              15
            </div>
            <div>
              <icon-dis-like />
              8
            </div>
          </div>
          <q-btn
            style="border-radius: 20px; border: 1px solid #1847c1"
            flat
            color="primary"
            label="Написать специалисту"
            @click="openChat = !openChat"
          />
          <q-btn
            style="
              border-radius: 20px;
              border: 1px solid transparent;
              color: #414141;
            "
            flat
            color="black"
            label="Оставить отзыв"
          />
        </div>
      </div>
      <div class="specialist-view__categories">
        <!-- {{ comp }} comp -->
        <div class="card__center" v-if="userMe && openChat">
          {{ id }} - кому отправляю
          <br />
          {{ userMe.user.id }} - я sender
          <div
            class="card__center-chat--container"
            ref="chatContainer"
            v-if="allChatMsg"
          >
            <div class="card__center-chat--msg msg" v-for="msg in allChatMsg">
              <!-- <pre>{{ msg }}</pre> -->
              <div
                class="msg__sender"
                v-if="msg.sender === userMe.user.id && msg.text.length > 0"
              >
                {{ msg.text }}
              </div>
              <div
                class="msg__recipient"
                v-if="msg.sender === id && msg.text.length > 0"
              >
                {{ msg.text }}
              </div>
            </div>
          </div>
          <div class="card__center-chat--container" v-else>
            Нельзя начать чат с самим собой)
          </div>
          <q-input
            class="user-all--base__body-input"
            outlined
            v-model="textMessage"
            label="сообщение"
            placeholder="Введите ваше сообщение"
          >
          </q-input>
          <br />
          <q-btn
            :disable="textMessage.length <= 0"
            color="primary"
            label="отправить сообщение"
            @click="newMessage(textMessage), (textMessage = '')"
          />
        </div>
        <component v-else :is="comp" :user="specialist" />
      </div>
      <div class="specialist-view__subscribe">
        <p>Подпишитесь на Email рассылку</p>
        <p>Получайте новые заказы и полезные советы в числе первых</p>
        <q-input
          class="user-all--base__body-input"
          rounded
          outlined
          bg-color="blue-grey-5"
          v-model="subscribeName"
          label="Имя"
          type="text"
          placeholder="Имя"
        />
        <q-input
          class="user-all--base__body-input"
          rounded
          outlined
          bg-color="blue-grey-5"
          v-model="subscribeEmail"
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

    <div v-if="false" class="specialist-view__specialist-card card">
      <div class="card__left" v-if="false">
        <div class="card__left-user--img">
          <!-- <img src="@/assets/img/specialistView.png" alt="" /> -->
          <img class="image" :src="`${specialist.user.avatar}`" alt="specImg" />
        </div>
        <div class="card__left-user--info">
          <div>
            <div class="card__left-user--info__fio">
              {{ specialist.user.first_name }}
              {{ specialist.user.last_name }}
              {{ specialist.user.patronymic }}
            </div>
            <div class="card__left-user--info__post">
              {{ specialist.user.role }}
            </div>
            <div
              class="card__left-user--info__rating"
              style="position: relative"
            >
              <div class="grid-points" :class="isRated ? 'disable' : ''">
                <div class="star w" v-for="stage in stages" :key="stage.id">
                  <icon-star
                    style="cursor: pointer"
                    @click="chooseRating(stage.id)"
                    :color="backgroundStar(stage.thresholdPoints)"
                  />
                </div>
                <q-tooltip
                  anchor="center middle"
                  self="top middle"
                  v-if="isRated"
                >
                  {{ message }}
                </q-tooltip>
              </div>
              <!-- <progress-bar /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="card__center" v-if="userMe">
        {{ id }} - кому отправляю
        <br />
        {{ userMe.user.id }} - я sender
        <div
          class="card__center-chat--container"
          ref="chatContainer"
          v-if="allChatMsg"
        >
          <div class="card__center-chat--msg msg" v-for="msg in allChatMsg">
            <!-- <pre>{{ msg }}</pre> -->
            <div
              class="msg__sender"
              v-if="msg.sender === userMe.user.id && msg.text.length > 0"
            >
              {{ msg.text }}
            </div>
            <div
              class="msg__recipient"
              v-if="msg.sender === id && msg.text.length > 0"
            >
              {{ msg.text }}
            </div>
          </div>
        </div>
        <div class="card__center-chat--container" v-else>
          Нельзя начать чат с самим собой)
        </div>
        <q-input
          class="user-all--base__body-input"
          outlined
          v-model="textMessage"
          label="сообщение"
          placeholder="Введите ваше сообщение"
        >
        </q-input>
        <br />
        <q-btn
          :disable="textMessage.length <= 0"
          color="primary"
          label="отправить сообщение"
          @click="newMessage(textMessage), (textMessage = '')"
        />
      </div>
      <div v-if="false" class="card__right">
        <div class="card__right--exp">
          <div>Стаж</div>
          <div>{{ specialist.experience.total_experience }} лет</div>
        </div>
        <div class="card__right--city">
          <div>Город</div>
          <div>Волгоград</div>
        </div>
        <div class="card__right--status">
          <div @click="checkStatusForUserId(2)">Статус</div>
          <div v-show="statusS" :class="statusS == 'online' ? 'online' : ''">
            {{ statusS }}
          </div>
        </div>
        <!-- <div @click="openNewSocket()">openNewSocket</div>
        <div @click="createSomething()">Присоединится к комнате</div> -->
      </div>
    </div>
    <div v-if="false" class="specialist-view__reactions">
      <div>
        <icon-heart />
        5
      </div>
      <div>
        <icon-like />
        15
      </div>
      <div>
        <icon-dis-like />
        8
      </div>
    </div>
    <div v-if="false" class="specialist-view__all--categories">
      <div
        class="specialist-view__category"
        :class="activeClass(category.comp)"
        @click="swapComp(category.comp)"
        v-for="category in categories"
        :key="category.comp"
        style="cursor: pointer"
      >
        {{ category.name }}
      </div>
    </div>
    <div v-if="false" class="specialist-view__categories">
      <!-- {{ comp }} comp -->
      <component :is="comp" :user="specialist" />
    </div>
  </div>

  <div class="article-sceleton__container" v-else>
    <div class="q-pa-md">
      <q-item style="max-width: 800px; margin: 0 auto">
        <!-- <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section> -->

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption v-for="item in 15">
            <q-skeleton type="text" width="100%" height="40px" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/articlesStyle.scss";
.active {
  background: rgba(75, 115, 219, 0.15);
  line-height: 140%;
  & > div:nth-child(2) {
    display: block;
  }
}
</style>
<style lang="scss" scoped>
.grid-points {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  max-width: 200px;
}
.grid-points .f:first-child {
  .w {
    opacity: 0;
  }
}
.yellow {
  color: #ffc702;
}
.grid-points .f:last-child {
  .w::after {
    opacity: 0;
  }
}
.w {
  text-align: center;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // width: 5px;
  img {
    top: -5px;
    width: 40px;
    position: absolute;
    left: -20px;
  }
}
.disable {
  position: relative;
}
.disable::before {
  right: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  // background: red;
  z-index: 10;
  cursor: no-drop;
}
.stars-points {
  // height: 50px;
  > div:first-child {
    // opacity: 0;
  }
  // div:first-child{
  // 	display: none;
  // }
  @extend .grid-points;
}
.star {
  position: relative;
  // top: -25px;
  // &::after {
  //   content: "";
  //   height: 40px;
  //   z-index: 3;
  //   position: absolute;
  //   right: 0;
  //   top: 30px;
  //   border-right: 1px solid grey;
  // }
}
</style>
