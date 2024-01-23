<script setup lang="ts">
import { useArticle } from "@/use/useArticles";
import {
  computed,
  onBeforeMount,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import { useQuasar } from "quasar";
import { userMe } from "@/use/useUserAccount";
import { userCrm } from "@/use/useUserCrm";

const { editedArticle, isLoadArticle } = userCrm();

const { addArticel, addImg, imagesFiles, deletedImg, getArticle, editArticle } =
  useArticle();

const words = [
  "банк",
  "арбитраж",
  "бюджет",
  "налоги",
  "судьи",
  "финансирование",
];
const text = ref("");
const currentWord = ref("");
const dense = ref(false);
const $q = useQuasar();
const onRejected = (rejectedEntries: any) => {
  // Notify plugin needs to be installed
  // https://quasar.dev/quasar-plugins/notify#Installation
  $q.notify({
    type: "negative",
    message: `небольше 3-х изображений`,
    // message: `${rejectedEntries.length} только картинки и небольше 3 файлов`,
  });
};

const pushCurrentWord = () => {
  text.value = `${text.value} ${currentWord.value}, `;
  // currentWord.value = "";
};

const title = ref("");
const short_description = ref("");
const full_description = ref("");

const newArticel = computed(() => {
  return {
    author: {
      email: userMe.value.user.email,
      first_name: userMe.value.user.first_name,
      last_name: userMe.value.user.last_name,
      patronymic: userMe.value.user.patronymic,
    },
    title:
      title.value.length > 0
        ? title.value
        : editedArticle.value
        ? editedArticle.value.title
        : "",
    full_description:
      full_description.value.length > 0
        ? full_description.value
        : editedArticle.value
        ? editedArticle.value.full_description
        : "",
    short_description:
      short_description.value.length > 0
        ? short_description.value
        : editedArticle.value
        ? editedArticle.value.short_description
        : "",
    slug: editedArticle.value ? editedArticle.value.slug : "",
  };
});

// onBeforeMount (async()=>{
// 	if(editedArticle.value) editedArticle.value = await getArticle(editedArticle.value.slug)
// })

watch(currentWord, (newVal: any) => {
  pushCurrentWord();
});

onMounted(async () => {
  if (isLoadArticle.value) {
    watch(isLoadArticle, (newVal: any) => {
      if (newVal === false) {
        title.value = newArticel.value.title;
        short_description.value = newArticel.value.short_description;
        full_description.value = newArticel.value.full_description;
      }
    });
  }
});

onUnmounted(() => {
  editedArticle.value = null;
  isLoadArticle.value = false;
});
</script>

<template>
  <div
    class="user-crm--new-article__container"
    v-if="newArticel && !isLoadArticle"
  >
    <div class="user-crm--new-article__title">
      <div>Добавление статьи</div>
      <div>
        Уважаемый специалист, вы можете загрузить на наш сайт в "Базу знаний"
        специализированные тексты и статьи по специальности юрист и бухгалтер.
        Чем больше статей вы пишите, тем выше ваш рейтинг в нашем каталоге
        специалистов.
      </div>
    </div>
    <div class="user-crm--new-article__name">
      <div class="subtitle">Название</div>
      <q-input
        class="user-crm--new-article__body-input"
        outlined
        v-model="title"
        label="Название"
        type="text"
        placeholder="Введите название"
        :dense="dense"
      >
      </q-input>
    </div>
    <div class="user-crm--new-article__content">
      <div class="subtitle">Содержание</div>
      <q-editor
        v-model="full_description"
        :definitions="{
          bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
        }"
      />
    </div>
    <div class="user-crm--new-article__load-img">
      <div class="subtitle">Загрузить обложку</div>
      <div>
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
        <!-- <div><q-btn @click="addImg()"> Отправтиь изображения</q-btn></div> -->
        <!-- <q-btn color="primary" label="загрузить фото" /> -->
        <!-- {{ editedArticle.images }} -->
        <div
          v-if="editedArticle && editedArticle.images"
          style="display: flex; align-items: center"
        >
          <!-- <div>Имя картинкии: {{img}}</div> -->
          <div
            v-for="img in editedArticle.images"
            :key="img"
            style="position: relative; width: 200px; height: 200px"
          >
            <img class="image" :src="img.image" alt="img" />
            <div
              style="
                cursor: pointer;
                position: absolute;
                z-index: 5;
                right: 5px;
                top: 0;
                color: #fff;
              "
              @click="deletedImg(img.id)"
            >
              X
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="subtitle">Краткое описание в 1 предложение</div>
      <q-input
        class="user-crm--new-article__body-input"
        outlined
        v-model="short_description"
        label="Краткое описание"
        type="text"
        placeholder="Введите текст"
        :dense="dense"
      />
    </div>
    <div class="user-crm--new-article__theme-container">
      <div class="user-crm--new-article__theme-head">
        <div>
          <div class="subtitle">Тема</div>
          <q-select
            outlined
            v-model="currentWord"
            :options="words"
            label="Темы"
          />
        </div>
        <div>
          <div class="subtitle">Ключевые слова (3-4 слова через запятую)</div>
          <q-input
            class="user-crm--new-article__body-input"
            outlined
            v-model="text"
            type="text"
            placeholder="Ключевые слова"
            :dense="dense"
          />
        </div>
      </div>
      <div class="user-crm--new-article__theme-words">
        <div
          class="user-crm--new-article__theme-word"
          v-for="word in words"
          :key="word"
        >
          {{ word }}
        </div>
      </div>
    </div>
    <div class="user-crm--new-article__load-docs">
      <div class="user-crm--new-article__load-docs--header">
        <div>Загрузить не более 5 документов</div>
        <q-btn color="primary" label="загрузить документы" />
      </div>
      <div class="user-crm--new-article__load-docs--list">
        <div class="user-crm--new-article__load-docs--doc" v-for="item in 5">
          <div>Название.doc</div>
          <div>X</div>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: flex-end">
      <q-btn
        v-if="editedArticle"
        @click="editArticle(newArticel)"
        color="primary"
        label="отправить"
      />
      <q-btn
        v-else
        @click="addArticel(newArticel)"
        color="primary"
        label="отправить"
      />
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style lang="scss">
.crm-view__container {
  .q-editor__content {
    max-width: 100%;
  }
}
.q-editor__toolbar {
  justify-content: end;
}
.q-field__inner {
  background: #fff;
}
</style>
<style scoped lang="scss">
.user-crm--new-article {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .subtitle {
      color: #414141;
      font-size: 16px;
      font-weight: 600;
      line-height: 140%;
      margin-bottom: 20px;
    }
  }
  &__title {
    & div:first-child {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    & div:last-child {
      color: #414141;
    }
  }
  &__name {
  }
  &__body-input {
  }
  &__content {
    .q-editor__toolbar {
      justify-content: end;
    }
  }
  &__load-img {
    & div:last-child {
      display: flex;
      gap: 20px;
      align-items: center;
      & div {
        gap: 10px;
      }
    }
  }
  &__theme-container {
  }
  &__theme-head {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    & > div {
      flex: 1 1 45%;
    }
  }
  &__theme-words {
    display: flex;
    gap: 15px;
  }
  &__theme-word {
    color: #414141;
    cursor: pointer;
    font-size: 16px;
    border-radius: 44px;
    background: var(--WhiteCompas, #fff);
    padding: 10px 20px;
  }
  &__load-docs {
  }
  &__load-docs--header {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600 !important;
    color: #4b73db;
    margin-bottom: 20px;
  }
  &__load-docs--list {
    display: flex;
    gap: 20px;
  }
  &__load-docs--doc {
    display: flex;
    gap: 10px;
  }
}
@media (max-width: 1023px) {
  .user-crm--new-article {
    &__theme-words {
      flex-wrap: wrap;
    }
    &__load-docs--list {
      flex-wrap: wrap;
    }
  }
}
</style>
