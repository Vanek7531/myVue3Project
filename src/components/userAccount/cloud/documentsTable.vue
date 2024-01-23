<script setup lang="ts">
import { onBeforeMount, onUnmounted, ref } from "vue";
import TheActionsModal2 from "@/components/common/TheActionsModal2.vue";
import TheActionsModal from "@/components/common/TheActionsModal.vue";
import { inject } from "vue";
import { useUser } from "@/use/useUserAccount";
import { clickOutSide as vClickOutSide } from "@mahdikhashan/vue3-click-outside";

const {
  getUserCLoudFiles,
  userCLoudFiles,
  delCurrentCLoudFile,
  copyCloudFileUrl,
  downloadCloudFile,
} = useUser();

defineProps({
  documents: {
    type: Object,
    default: [],
  },
});

// const activeTab = inject("activeTab");
const currentDoc = ref();
const openActionsCloudFile = ref(false);

const openActionsCurrentDoc = (doc: any) => {
  if (currentDoc.value && currentDoc.value.id === doc.id) {
    close();
  } else {
    currentDoc.value = doc;
    openActionsCloudFile.value = true;
  }
};
// const urlll = new URL(`@/assets/svg/${'wordSvg'}.svg`, import.meta.url).href;

const close = () => {
  console.log("1321132");
  currentDoc.value = null;
  openActionsCloudFile.value = false;
};

const takeIconType = (fileName: string) => {
  if (!fileName) return "";
  return fileName.split(".")[1];
};

const selectImg = (type: string) => {
  // return `@/assets/svg/${type}.svg`;
  return new URL(`@/assets/svg/${type}.svg`, import.meta.url).href;
  // return new URL('/src/assets/images/logo.svg', import.meta.url)
  // return `${require(`@/assets/img/${type}.svg`)} 480w,`;
};
onBeforeMount(() => {});

// const documents = [
//   {
//     name: "Сканы паспорта",
//     date: "02.12.2022",
//     volume: "1Мб",
//     action: "Загрузить",
//   },
//   {
//     name: "Доверенность",
//     date: "02.12.2022",
//     volume: "2Мб",
//     action: "Загрузить",
//   },
// ];
</script>

<template>
  <div class="table" v-if="documents && documents.length > 0">
    <div
      class="table-head"
      style="display: flex; justify-content: space-between; color: #121212"
    >
      <div>Название папки</div>
      <div>Дата создания</div>
      <div>Объем</div>
      <div>Действия</div>
    </div>
    <div class="table-body" v-for="doc in documents" :key="doc.id">
      <div>
        <img
          :src="`/src/assets/svg/${takeIconType(doc?.file_name)}.svg`"
          :alt="takeIconType(doc?.file_name)"
          style="padding-right: 10px"
        />
        <div style="width: 150px">
          {{
            doc?.file_name.length > 15
              ? doc?.file_name.slice(0, 15) + "..."
              : doc?.file_name
          }}
        </div>
      </div>
      <div v-if="doc.uploaded_at">
        {{ doc?.uploaded_at.slice(0, 10) }}
      </div>
      <div>статика 1Мб</div>
      <div style="position: relative; display: flex">
        <the-actions-modal-2>
          <template v-slot:header>
            <!-- content for the header slot -->
            <img
              @click.stop="openActionsCurrentDoc(doc)"
              style="cursor: pointer; padding: 3px"
              src="@/assets/svg/filter.svg"
              alt=""
            />
          </template>
          <div
            v-click-out-side="close"
            class="action-modal__container"
            v-if="openActionsCloudFile && currentDoc.id === doc.id"
          >
            <div>Открыть доступ</div>
            <div @click="copyCloudFileUrl(doc.file_url), close()">
              Копировать ссылку
            </div>
            <div>Переместить</div>
            <div>Копировать</div>
            <div>В Избранное</div>
            <div>Переименовать</div>
            <div @click="downloadCloudFile(doc.file_url), close()">Скачать</div>
            <div @click="delCurrentCLoudFile(doc), close()">Удалить</div>
          </div>
        </the-actions-modal-2>
      </div>
    </div>
  </div>
  <div v-else>Документов нету</div>
</template>

<style lang="scss" scoped>
.table {
  max-height: 450px;
  min-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      flex: 0 0 20%;
      text-align: center;
      justify-content: center;
      max-width: 250px;
    }
    & > div:first-child {
      flex: 0 1 50%;
      text-align: center;
      justify-content: space-around;
      max-width: 200px;
    }
  }
}
.table-head {
  color: #121212;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 20px;
}
.table-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4b73db;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  border-bottom: 1px solid #919cb8;
  padding: 10px 0;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    // gap: 5px;
    align-items: center;
  }
}
</style>

<style scoped lang="scss">
.action-modal {
  &__container {
    z-index: 2;
    position: absolute;
    border-radius: 7px;
    border: 1px solid var(--GrayFonCompas, #919cb8);
    background: var(--WhiteCompas, #fff);
    left: -85px;
    top: -50px;
    overflow: hidden;
  }
}
@media (max-width: 1023px) {
  .action-modal {
    &__container {
      right: -35px;
    }
  }
}
</style>
<style lang="scss">
.action-modal__container {
  & div {
    cursor: pointer;
  }
  & > div {
    padding: 5px;
  }
  & > div:hover {
    background: #4b73db;
    color: #fff;
  }
}
</style>
