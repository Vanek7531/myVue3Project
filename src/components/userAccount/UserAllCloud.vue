<script setup lang="ts">
import { defineAsyncComponent, onMounted, provide, ref, shallowRef } from "vue";
import { useUser, openCreateFolder } from "@/use/useUserAccount";

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
} = useUser();

const categories = [
  {
    name: "Мой диск",
    comp: "cloudDisk",
  },
  {
    name: "Доступные мне",
    comp: "cloudAvailable",
  },
  {
    name: "Недавние",
    comp: "cloudRecent",
  },
  {
    name: "Избранные",
    comp: "cloudFavorites",
  },
  {
	name: "Корзина",
    comp: "cloudBasket",
  },
];

const activeTab = ref("");
const comp = shallowRef("");

const activeClass = (item: any) => {
  if (activeTab.value) {
    return activeTab.value.includes(`${item}`) ? "active" : "";
  }
};

const cloudSwapComp = (item: string) => {
  activeTab.value = item;
	openCreateFolder.value = true
  comp.value = defineAsyncComponent(
    () => import(`@/components/userAccount/cloud/${item}.vue`)
  );
  // return import(`@/components/userAccount/${item}.vue`)
};

const folderName = ref("");

onMounted(() => {
  cloudSwapComp("cloudDisk");
  // getUserMe();

  // getUserCLoudFiles();
  takeCloudSpaceInfo();
});
</script>

<template>
  <div class="user-all--cloud">
    <div
      class="user-all--cloud__container"
      v-if="
        userCurrentTariff && userCurrentTariff.tariff_name !== 'Отсутствует'
      "
    >
      <!-- 123 -->

      <!-- 123 -->
      <div class="user-all--cloud__documents-types">
        <div
          :class="activeClass(category.comp)"
          @click="cloudSwapComp(category.comp)"
          v-for="category in categories"
          :key="category.comp"
        >
          {{ category.name }}
        </div>
      </div>
      <div class="specialist-view__categories" v-show="openCreateFolder">
        <component :is="comp" />
      </div>
      <div v-show="!openCreateFolder" class="specialist-view__categories">
        <div class="user-all--cloud__new-folder" e>
          <div>создать папку</div>
          <q-input outlined v-model="folderName"></q-input>
          <div>
            <div>Отмена</div>
            <div>Создать</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/userViewStyle.scss";
.active {
  text-decoration-line: underline;
  color: #4b73db;
}
</style>
