<script setup lang="ts">
import httpService from "@/api/server";
import { useUser, userMe } from "@/use/useUserAccount";

// defineProps<{ item: {} }>();

let props = defineProps({
  item: {
    type: String || Number,
    default: "",
  },
});

const ageRules = [
  (val: any) =>
    (val !== null &&
      val !== "" &&
      (typeof val === "number" || typeof val === "string")) ||
    "Введите корректное значение",
  // val:any => (val > 0 && val < 100) || 'Please type a real age'
];

const changeUserMe = async () => {
  try {
    console.log(
      "userMe.value.experience.total_experience",
      typeof userMe.value.experience.total_experience
    );
    const { data } = await httpService.patch("/api/profile/me/", {
      experience: {
        // id: userMe.value.experience.id,
        total_experience: props.item,
      },
      // user: {},
    });
    userMe.value = data;

    // getUserMe();

    // userMe.value = data;
    // console.log("userMe.value", userMe.value);
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div v-if="props.item">
    {{ typeof props.item }}
    {{ props.item }}
    <q-form
      style="display: flex"
      class="user-all--experience__container"
      @submit="changeUserMe"
    >
      <q-input
        class="user-all--experience__body-input"
        outlined
        v-model="props.item"
        label="Ваш стаж*"
        hint="Ваш общий стаж"
        type="number"
        :rules="ageRules"
      >
      </q-input>
      <q-btn color="primary" label="добавить" type="submit" />
    </q-form>
  </div>
</template>

<style scoped></style>
