<script setup lang="ts">
import TheButton from "@/components/common/TheButton.vue";
import iconMain from "../icons/iconMain.vue";
import { isUserAuth } from "@/use/helper";
import { logOut } from "@/use/useAuthorization";
</script>

<template>
  <footer class="footer">
    <div>
      <icon-main />
    </div>
    <div>
      <p>специалистам</p>
      <p>личный кабинет</p>
      <p>заявки</p>
      <p>оплата</p>
      <p>мобильная версия</p>
    </div>
    <div>
      <p>база знаний</p>
      <p>партнерская программа</p>
      <p>рекламодателям</p>
    </div>
    <div>
      <p>о компании</p>
      <RouterLink to="/reviews-service">
        <p>отзывы о компании</p>
      </RouterLink>
      <p>вакансии</p>
      <p>открытые статьи</p>
      <p>блог</p>
    </div>
    <div>
      <RouterLink to="/support-service">
        <p>служба поддержки</p>
      </RouterLink>
      <RouterLink to="/user-crm">
        <p>CRM</p>
      </RouterLink>
      <RouterLink to="/offer-agreement">
        <p>ДОГОВОР-ОФЕРТА</p>
      </RouterLink>
      <RouterLink to="/about-us">
        <p>О НАС</p>
      </RouterLink>
      <p>+7 123 456 78 90</p>
    </div>
    <div style="display: flex; flex-direction: row;">
      <RouterLink to="/userAccount/UserAllBase">
        <q-btn color="primary" label="в лк" />
      </RouterLink>
      <RouterLink to="/login" v-if="!isUserAuth">
        <q-btn color="primary" label="Войти" />
      </RouterLink>
      <div v-else>
        <q-btn color="primary" label="Выйти" @click="logOut()" />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/styles/footerStyle.scss";

a {
  text-decoration: none;
  color: #414141;
}
</style>
