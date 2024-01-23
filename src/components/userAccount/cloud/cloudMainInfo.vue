<script setup lang="ts">
import { defineAsyncComponent, onMounted, provide, ref } from "vue";
import { useUser } from "@/use/useUserAccount";

import iconClip from "@/components/icons/iconClip.vue";
import iconFolder from "@/components/icons/iconFolder.vue";
import { socketIo } from "@/use/soketIo";

const { takeCloudSpaceInfo, cloudSpace } = socketIo();
const dense = ref(true);
const text = ref("");
const {
  getUserCLoudFiles,
  userCLoudFiles,
  getUserMe,
  cloudFile,
  addCLoudFile,
  swapComp,
  userCurrentTariff,
  openCreateFolder,
} = useUser();

const activeTab = ref("");

onMounted(() => {
  // getUserMe();

  // getUserCLoudFiles();
  takeCloudSpaceInfo();
});
</script>
<template>
  <div
    class="cloud-main--info"
    v-if="userCurrentTariff && userCurrentTariff.tariff_name !== 'Отсутствует'"
  >
    <div class="cloud-main--info__body">
      <div class="cloud-main--info__body-name">Поиск файлов</div>
      <q-input
        class="cloud-main--info__body-input"
        outlined
        v-model="text"
        :dense="dense"
      >
      </q-input>
      <q-btn rounded color="primary" label="Найти" />
    </div>
    <div class="cloud-main--info__actions">
      <div @click="openCreateFolder = !openCreateFolder">
        <icon-folder />
        <div>+ Создать папку</div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M7 6.79515V5.26704C7 2.92059 9.02462 1 11.4998 1H11.5002C13.9754 1 16 2.9234 16 5.26704V19.733C16 22.0759 13.9702 24 11.5002 24H11.4998C8.99164 24 7.04558 22.1198 7.04558 19.773V11.7937C7.04558 10.4378 8.21537 9.32853 9.64527 9.32853H9.64564C11.0755 9.32853 12.2453 10.4399 12.2453 11.7937V18.0197"
            stroke="#4B73DB"
            stroke-width="1.5"
            stroke-miterlimit="22.9256"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>Загрузить файл</div>
      </div>
    </div>
    <div class="cloud-main--info__storage">
      <div class="cloud-main--info__storage-left">
        <div v-if="cloudSpace">
          Использовано {{ cloudSpace.remaining_space }} из
          {{ cloudSpace.quota }}
        </div>
        <q-btn
          outlined
          color="primary"
          rounded
          @click="swapComp('UserAllTariffs')"
          >Увеличить объем хранилища</q-btn
        >
      </div>
      <div class="cloud-main--info__storage-right">
        <img src="/src/assets/img/ChartPie.png" alt="" />
        <div class="cloud-main--info__storage-right--info">
          <div>Документы</div>
          <div>Видео</div>
          <div>Иные файлы</div>
        </div>
      </div>
    </div>

    <div
      v-if="false"
      style="
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
      "
    >
      <!-- <icon-clip /> -->
      <q-uploader
        ref="cloudFile"
        hide-upload-btn
        multiple
        max-files="3"
        style="max-width: 600px; width: 70%"
        label="Отправить файлы в облако"
        accept=".jpg, .jpeg, .gif, .png, .webp, .xlsx"
      />
      <!-- <q-file color="primary" clearable  v-model="cloudFile" label="Отправить файлы в облако">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file> -->
      <div>
        <q-btn :disable="!cloudFile" @click="addCLoudFile()"
          >Загрузить файл</q-btn
        >
      </div>
      <!-- <div>Загрузить файл</div> -->
    </div>
  </div>
  <div class="user-all--cloud__container" v-else>
    <div class="user-all--cloud__body" style="padding: 20px">
      <!-- <div> -->
      <div style="color: #121212">Купите подписку для доступа к диску</div>
      <q-btn
        @click="swapComp('UserAllTariffs')"
        color="primary"
        label="купить"
      />
      <!-- </div> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
.cloud-main--info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
    // .q-editor {
    //   flex: 1 1 70%;
    // }
  }
  &__body-name {
    flex: 0 1 15%;
    color: var(--black-compas, #121212);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
  &__documents-types {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    max-width: 70%;
    color: #919cb8;
  }
  &__storage {
    display: flex;
    justify-content: space-between;
    // flex-direction: column;
    gap: 10px;
  }
  &__storage-left {
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 0 1 40%;
    color: var(--BlackCompas, #121212);

    /* Inter16Regular */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    .q-btn {
      max-width: 250px;
      text-transform: lowercase;
    }
  }
  &__storage-right {
    flex: 0 1 35%;
    display: flex;
    gap: 10px;
  }
  &__actions {
    display: flex;
    gap: 20px;
    & > div {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
  }
  &__storage-right--info {
    display: flex;
    flex-direction: column;
    & > div {
      padding-left: 40px;
      position: relative;
      color: #212121;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 22.4px */
      &::before {
        position: absolute;
        width: 30px;
        height: 4px;
        content: "";
        background: #dfdefa;
        left: 0;
        border-radius: 20px;
        top: 9px;
      }
      &:first-child {
        &::before {
          background: #e71d36;
        }
      }
      &:nth-child(2) {
        &::before {
          background: #9de484;
        }
      }
    }
  }

  &__body-input {
    flex: 1 1 50%;
  }
}
</style>
