<script setup lang="ts">
import httpService from "@/api/server";

import { useUser, userMe } from "@/use/useUserAccount";
import { ref, watch } from "vue";
import IconDownArrow from "../icons/iconDownArrow.vue";

const {
  cheackAdress,
  adresses,
  currentValue,
  chooseAdress,
  showAdresses,
  disableAdd,
} = useUser();

// const comp1 = computed(() => {
//   console.log(".modelValue ", inputVal.value?.modelValue);
//   if (inputVal.value?.modelValue.length >= 2) {
//     console.log("??");
//     cheackAdress(currentValue.value);
//   }
//   return inputVal.value?.modelValue || "";
// });
const stopClearSearch = () => {
  currentValue.value = "";
  disableAdd.value = true;
  adresses.value = [];
};

const changeUserMe = async () => {
  try {
    const { data } = await httpService.patch("/api/profile/me/", {
      // working_area: [
      //   {
      //     name: currentValue.value,
      //   },
      // ],
      // working_area: userMe.value.working_area.push({
      //   name: currentValue.value,
      // }),
      working_area: [
        ...userMe.value.working_area,
        { name: currentValue.value },
      ],
    });
    userMe.value = data;
    stopClearSearch();
  } catch (error) {
    console.log(error);
  }
};

const inputVal = ref();

const some = () => {
  console.log("somesome");
};

let timer: any;

watch(currentValue, (newVal) => {
  if (newVal.length <= 0) {
    stopClearSearch();
  }

  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    if (newVal) {
      cheackAdress(currentValue.value);
    }
  }, 500);
  // if (newVal && newVal.length >= 1) {
  //   cheackAdress(currentValue.value);
  // }
});
</script>

<template>
  <div class="user-all--city">
    <div class="user-all--city__container">
      <div class="user-all--city__choose">
        <div>Выберите адресс</div>
        <div style="position: relative">
          <q-input outlined v-model="currentValue" label="Города">
            <div
              style="
                z-index: 10;
                position: absolute;
                right: -5px;
                top: 10px;
                cursor: pointer;
              "
              @click="showAdresses = !showAdresses"
            >
              <icon-down-arrow />
            </div>
          </q-input>
          <div
            class="user-all--city__adresses"
            v-if="adresses && adresses.length > 0 && showAdresses"
          >
            <div
              class="user-all--city__adress"
              v-for="adress in adresses"
              :key="adress"
              @click="chooseAdress(adress)"
            >
              {{ adress }}
            </div>
          </div>
        </div>
        <div>
          <q-btn
            :disable="disableAdd"
            color="primary"
            label="добавить"
            @click="changeUserMe()"
          />
        </div>
      </div>
      <div class="user-all--city__info">
        <div>
          <div>Город</div>
          <div>Статус</div>
        </div>
        <div v-for="item in userMe.working_area" :key="item.city">
          <div>{{ item.name }}</div>
          <div>Статус бы...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
