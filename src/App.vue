<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import TheHeader from './components/header/TheHeader.vue'
import TheFooter from './components/footer/TheFooter.vue'

</script>

<template>

	<TheHeader/>
	<div class="wrapper">
		<RouterView />
	</div>
	<the-footer/>
</template>

<style scoped lang="scss">
@import '/src/assets/styles/headerStyle.scss';
</style>
