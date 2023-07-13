<script setup lang="ts">
import TheButton from '@/components/common/TheButton.vue'
import navButtonIcon from '@/components//header/navButtonIcon.vue'
import { useApp } from '@/use/useMainApp'

const { navMenu, headerBtns, activeClass } = useApp()
</script>

<template>
	<header>
		<div class="nav-menu">
			<!-- <icon-main /> -->
			<nav   v-for="(nav, idx) in navMenu" :key="idx">
				<nav-button-icon :class="activeClass(nav)" :nav="nav">
					<!-- <RouterLink :to="nav.route">
						<component  :is="wat(nav.name)" />
					</RouterLink> -->
				</nav-button-icon>
			</nav>
		</div>
		<div class="nav-buttons">
			<the-button v-for="(item, idx) in headerBtns" :key="idx" :text="item"/>
		</div>
	</header>
</template>


<style  lang="scss">
@import '/src/assets/styles/headerStyle.scss';
.active {
	.white-block{
		width: 100px;
		background: #4B73DB;
		svg {
			display: none;
		}
		div {
			display: block !important;
		}
	}
}
</style>