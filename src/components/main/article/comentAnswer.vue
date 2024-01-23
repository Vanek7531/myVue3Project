<script setup lang="ts">
import { ref } from "vue";
import iconDownArrow from "@/components/icons/iconDownArrow.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
import { useArticle } from "@/use/useArticles";
import { userMe } from "@/use/useUserAccount";

defineProps({
  childs: {
    type: Object,
    default: "",
  },
  // backgroundColor: {
  //   type: String,
  //   default: "#fff",
  // },
  // textColor: {
  //   type: String,
  //   default: "#4B73DB",
  // },
});
const openComentAnswers = ref(false);

const {
  showInput,
  sendComment,
  commentText,
  chooseCurrentComment,
  currentComment,
  delCurrentComment,
  changeComment,
  isCnangeComment,
  // openComentAnswers,
} = useArticle();
</script>

<template>
  <div class="comment__child">
    <div @click="openComentAnswers = !openComentAnswers">
      {{ childs.length }} Ответы <icon-down-arrow />
    </div>
    <div v-if="openComentAnswers">
      <div
        class="article-view__comment comment"
        v-for="child in childs"
        :key="child"
      >
        <div class="comment__head">
          <div class="comment__head--img">
            <img src="/src/assets/img/beardedMan.png" alt="" />
          </div>
          <div class="comment__head--fio">
            {{ child.author_first_name }}
            {{ child.author_last_name }}
            {{ child.author_patronymic }}
          </div>
          <div class="comment__head--date">
            {{ child.time_create.slice(0, 10) }}
          </div>
          <div
            @click="chooseCurrentComment(child, true)"
            style="cursor: pointer"
            v-if="child.author_id == userMe.user.id"
          >
            Изменить комментарий
          </div>
          <div
            @click="delCurrentComment(child.id)"
            style="cursor: pointer"
            v-if="child.author_id == userMe.user.id"
          >
            Удалить комментарий
          </div>
        </div>
        <div class="comment__content">{{ child.content }}</div>
        <div class="comment__reactions">
          <div>
            <icon-like />
            5
          </div>
          <div>
            <icon-dis-like />
            5
          </div>
          <div style="cursor: pointer" @click="chooseCurrentComment(child)">
            ответить
          </div>
          <div
            v-if="
              showInput && currentComment.id && child.id == currentComment.id
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
        <div v-if="child.children.length > 0">
          <coment-answer :childs="child.children"> </coment-answer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment {
  border: none !important;
  padding-left: 20px !important;
}
@import "@/assets/styles/articlesStyle.scss";
</style>
