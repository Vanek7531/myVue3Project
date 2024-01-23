<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  alert: {
    type: Object,
    default: {
      text: {
        type: String,
        default: "",
      },
      push: {
        type: Boolean,
        default: false,
      },
      sms: {
        type: Boolean,
        default: false,
      },
      email: {
        type: Boolean,
        default: false,
      },
    },
  },
});
// text: {
// 	type: String,
// 	default: '',
// },
// push: {
// 	type: Boolean,
// 	default: false,
// },
// sms: {
// 	type: Boolean,
// 	default: false,
// },
// email: {
// 	type: Boolean,
// 	default: false,
// }
const showMore = ref(false);

// watch(props.alert, () => {
// 	props.alert.email = props.alert.sms = props.alert.push
//   deep: true;
// });
</script>

<template>
  <div class="user-all--alert__body">
    <div
      class="user-all--alert__body-basic"
      style="cursor: pointer"
      @click="showMore = true"
    >
      <div class="user-all--alert__body-basic--text">
        <div>{{ alert.text }}</div>
        <div>
          По своей сути рыба текст является альтернативой традиционному lorem
          ipsum
        </div>
      </div>
      <div>
        <q-checkbox
          left-label
          v-model="alert.push"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
        />
      </div>
    </div>
    <div class="user-all--alert__body-additional" v-show="showMore">
      <div>
        <q-checkbox left-label v-model="alert.email" label="Эл почта" />
      </div>
      <div><q-checkbox left-label v-model="alert.sms" label="SMS" /></div>
      <div style="cursor: pointer" @click.prevent="showMore = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M6 15.5156L12 9.51562"
            stroke="#4B73DB"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M18 15.5156L12 9.51562"
            stroke="#4B73DB"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/userViewStyle.scss";
</style>
