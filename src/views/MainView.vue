<script setup lang="ts">
import MainSeacrh from '@/components/main/MainSeacrh.vue'
import MainArticleInteresting from '../components/main/MainArticleInteresting.vue'
import MainQuestions from '../components/main/MainQuestions.vue'
import MainSpecialists from '../components/main/MainSpecialists.vue'
import MainArticle from '../components/main/MainArticle.vue'

</script>

<template>
	<main>
		<h1>Главная</h1>
		<main-seacrh />
		<main-article-interesting/>
		<main-questions/>
		<main-specialists/>
		<main-article/>
	</main>
</template>
<style scoped lang="scss">
@import '/src/assets/styles/mainViewStyle.scss';
</style>

