<script setup lang="ts">
import TheButton from "@/components/common/TheButton.vue";
import iconMain from "../icons/iconMain.vue";
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
      <p>вакансии</p>
      <p>открытые статьи</p>
      <p>блог</p>
    </div>
    <div>
      <p>служба поддержки</p>
      <p>+7 123 456 78 90</p>
    </div>
    <div>
		<RouterLink  to="/userAccount">
			<the-button
        :backgroundColor="'#4B73DB'"
        :textColor="'#fff'"
				:text="'Войти'"
				/>
		</RouterLink>

    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/styles/footerStyle.scss";
</style>
