<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import IconSpecialists from '../icons/iconSpecialists.vue';
import IconQuestions from '../icons/iconQuestions.vue';
import IconArticle from '../icons/iconArticle.vue';
import IconMain from '../icons/iconMain.vue';

const props = defineProps({
	nav: {
		type: Object,
		default: '',
	},
})
const nameComp = computed(() => {
	return defineAsyncComponent(() => props.nav.name === 'главная'
		? import('../icons/iconMain.vue')
		: props.nav.name === 'статьи'
			? import('../icons/iconArticle.vue')
			: props.nav.name === 'вопросы'
				? import('../icons/iconQuestions.vue')
				: import('../icons/iconSpecialists.vue')
	);
})
// import("./components/icons/iconMain.vue")
</script>

<template>
	<div >
		<!-- <slot></slot> -->
		<RouterLink :class="nav.name !== 'главная' ? 'white-block' : ''" :to="nav.route">
			<component :is="nameComp" />
			<div v-if="nav.name !== 'главная'">{{ nav.name }}</div>
		</RouterLink>
	</div>
</template>

<style scoped lang="scss">
.white-block {
	background: #ffffff;
	width: 40px;
	height: 90px;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0 0 1rem 1rem;
	div {
		display: none;
	}
}

</style>