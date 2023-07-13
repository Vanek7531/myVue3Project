<script setup lang="ts">
defineProps({
	text: {
		type: String,
		default: '',
	},
	backgroundColor: {
		type: String,
		default: '#fff',
	},
	textColor: {
		type: String,
		default: '#4B73DB',
	}
})
</script>

<template>
	<div class="button" :style="`background: ${backgroundColor}; color: ${textColor}`">
		{{ text }}
	</div>
</template>

<style scoped lang="scss">
.button {
	padding: 0.6rem 1.3rem;
	background: #fff;
	border-radius: 0.5rem;
	cursor: pointer;
	text-align: center;
}
</style>