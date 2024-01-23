<script setup lang="ts">
import router from "@/router";
import { onMounted, onUnmounted, ref } from "vue";
import MainSeacrh from "@/components/main/MainSeacrh.vue";
import iconHeart from "@/components/icons/iconHeart.vue";
import iconComment from "../components/icons/iconComment.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconTime from "@/components/icons/iconTime.vue";
import iconRepost from "@/components/icons/iconRepost.vue";
import iconDownArrow from "@/components/icons/iconDownArrow.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
import { useArticle } from "@/use/useArticles";
import comentAnswer from "@/components/main/article/comentAnswer.vue";
import iconStar from "@/components/icons/iconStar.vue";
import { useQuasar } from "quasar";
import { currentComp } from "@/use/useUserCrm";
const $q = useQuasar();
import { userMe } from "@/use/useUserAccount";

const {
  getArticle,
  article,
  itemsColor,
  articleInputText,
  openComentAnswers,
  rating,
  stages,
  chooseRating,
  backgroundStar,
  isRated,
  message,
  addImg,
  imagesFiles,
  rateArticle,
  deletedImg,
  showInput,
  sendComment,
  commentText,
  chooseCurrentComment,
  currentComment,
  commentArticleText,
  delCurrentComment,
  isCnangeComment,
  changeComment,
} = useArticle();

const onRejected = (rejectedEntries: any) => {
  // Notify plugin needs to be installed
  // https://quasar.dev/quasar-plugins/notify#Installation
  $q.notify({
    type: "negative",
    message: `небольше 3-х изображений`,
    // message: `${rejectedEntries.length} только картинки и небольше 3 файлов`,
  });
};
const slug = router.currentRoute.value.params.articleSlug;

const saveFile = (type: string) => {
  if (type === "pdf" && article.value.article_pdf) {
    window.open(article.value.article_pdf, "_blank");
  }
};
onMounted(() => {
  getArticle(slug);
});
onUnmounted(() => {
  article.value = null;
});
</script>
<template>
  <div class="article-view" v-if="article && article.slug">
    <main-seacrh />
    <div class="card" v-if="false">
      <div class="card__header">
        <div class="card__header--fio">
          <div class="card__header--img">
            <img src="@/assets/img/lady.png" alt="" />
          </div>
          <div>
            <p>Александрия Святославовна Романова</p>
            <div class="card__header--date">21.03.2023</div>
          </div>
        </div>
      </div>
      <div class="card__expert--reactions">
        <div class="card__expert--avatars">
          <div
            v-for="(item, idx) in itemsColor"
            :key="idx"
            :style="`transform: translate(-${idx * 15}px,0); background: ${
              item.color
            }`"
          ></div>
        </div>
        <div>6 экспертов согласны</div>
        <div>
          <icon-time />
          5 минут
        </div>
      </div>
    </div>
    <div class="article-view__container">
      <div class="article-view__title">
        {{ article.title }}
      </div>
      <div class="article-view__body">
        {{ article.short_description }}
        <div v-html="article.full_description"></div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nesciunt
          eligendi porro saepe dolore! Libero quam reiciendis voluptatibus
          saepe, architecto odio reprehenderit? Cum dolorum suscipit, blanditiis
          quidem ullam mollitia adipisci?
        </div>
        <div
          class="article-view__body-images"
          v-if="article.images && article.images.length > 0"
        >
          <div
            class="article-view__body-image"
            v-for="img in article.images"
            :key="img.id"
          >
            <div @click="deletedImg(img.id)">X</div>
            <img class="image" :src="img.image" :alt="img.image" />
          </div>
          <!-- class="image" -->
        </div>
        <div class="article-view__body-images" v-else>
          <div class="article-view__body-image">
            <img
              class="image"
              :src="article.thumbnail"
              srcset="/src/assets/img/billie-dollar-money-background.jpg"
              :alt="article.slug"
            />
          </div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nesciunt
          eligendi porro saepe dolore! Libero quam reiciendis voluptatibus
          saepe, architecto odio reprehenderit? Cum dolorum suscipit, blanditiis
          quidem ullam mollitia adipisci?
        </div>
      </div>
    </div>
    <div class="grid-points" :class="isRated ? 'disable' : ''" v-if="false">
      <div class="star w" v-for="stage in stages" :key="stage.id">
        <icon-star
          style="cursor: pointer"
          @click="chooseRating(stage.id)"
          :color="backgroundStar(stage.thresholdPoints)"
        />
      </div>
      <q-tooltip anchor="center middle" self="top middle" v-if="isRated">
        {{ message }}
      </q-tooltip>
    </div>

    <div class="article-view__reactions">
      <div style="cursor: no-drop">
        <icon-heart />
        123
      </div>
      <div style="cursor: no-drop">
        <icon-comment />
        24
      </div>
      <div style="cursor: pointer" @click="rateArticle('like')">
        <icon-like />
        {{ article.like }}
      </div>
      <div style="cursor: pointer" @click="rateArticle('dislike')">
        <icon-dis-like />
        {{ article.dislike }}
      </div>
      <icon-repost style="cursor: no-drop" />
    </div>
    <div class="article-view__tags">
      <div>Пенсия</div>
      <div>Наследство</div>
      <div>Банкротство</div>
      <div>Банк</div>
    </div>
    <div class="article-view__images" v-if="userMe">
      <q-uploader
        ref="imagesFiles"
        hide-upload-btn
        multiple
        max-files="3"
        style="max-width: 300px"
        label="Прикрепите фото к статье"
        @rejected="onRejected"
        accept=".jpg, .jpeg, .gif, .png, .webp"
      />
      <div><q-btn @click="addImg()">Отправить изображения</q-btn></div>
    </div>
    <div class="article-view__documents">
      <!-- <div>скачать все</div> -->
      <div class="article-view__documents-list">
        <!-- <div><img src="/src/assets/svg/wordSvg.svg" alt="word" />word</div>
        <div><img src="/src/assets/svg/excelSvg.svg" alt="excel" />excel</div> -->
        <div>Скачайте статью в удобном формате:</div>

        <div
          @click="saveFile('pdf')"
          :style="`cursor: ${
            !article.article_pdf ? 'not-allowed' : 'pointer'
          };`"
        >
          <img src="/src/assets/svg/pdfSvg.svg" alt="pdf" />
          <q-tooltip v-if="!article.article_pdf">
            Ссылка на файл отсутвует
          </q-tooltip>
        </div>
      </div>
    </div>

    <div v-if="userMe">
      <div
        style="
          color: #212121;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
        "
      >
        Оставьте свой комментарий
      </div>
      <div class="q-gutter-sm">
        <q-editor
          v-model="commentArticleText"
          :definitions="{
            bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
          }"
        />
      </div>
      <div class="article-view__comments-send">
        <q-btn color="primary" @click="sendComment(true)"> Отправить</q-btn>
      </div>
    </div>
    <div class="article-view__comments" v-if="userMe">
      <div>Все отзывы <icon-down-arrow /></div>
      <div
        class="article-view__comment comment"
        v-for="comment in article.comments"
        :key="comment.id"
      >
        <div class="comment__head">
          <div class="comment__head--img">
            <img src="/src/assets/img/beardedMan.png" alt="" />
          </div>
          <div class="comment__head--fio">
            {{ comment.author_first_name }}
            {{ comment.author_last_name }}
            {{ comment.author_patronymic }}
          </div>
          <div class="comment__head--date">
            {{ comment.time_create.slice(0, 10) }}
          </div>
          <div
            @click="chooseCurrentComment(comment, true)"
            style="cursor: pointer"
            v-if="comment.author_id == userMe.user.id"
          >
            Изменить комментарий
          </div>
          <div
            @click="delCurrentComment(comment.id)"
            style="cursor: pointer"
            v-if="comment.author_id == userMe.user.id"
          >
            Удалить комментарий
          </div>
        </div>
        <div class="comment__content">{{ comment.content }}</div>
        <div class="comment__reactions">
          <div>
            <icon-like />
            5
          </div>
          <div>
            <icon-dis-like />
            5
          </div>
          <div style="cursor: pointer" @click="chooseCurrentComment(comment)">
            ответить
          </div>
          <div
            v-if="
              showInput && currentComment.id && comment.id == currentComment.id
            "
          >
            <q-input
              outlined
              label="Ваш комментарий"
              type="text"
              v-model="commentText"
            >
              <template v-slot:after>
                <q-btn
                  @click="changeComment()"
                  round
                  dense
                  flat
                  icon="send"
                  v-if="isCnangeComment"
                />
                <q-btn
                  @click="sendComment()"
                  round
                  dense
                  flat
                  icon="send"
                  v-else
                />
              </template>
            </q-input>
          </div>
        </div>
        <!-- <div
          
          @click="openComentAnswers = !openComentAnswers"
          v-if="comment.children.length > 0"
        >
          {{ comment.children.length }} Ответы <icon-down-arrow />
        </div> -->
        <div v-if="comment.children.length > 0">
          <coment-answer :childs="comment.children"></coment-answer>
        </div>
      </div>
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
