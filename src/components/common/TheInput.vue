<script setup lang="ts">
defineProps<{ placeholder: string; type: string, modelValue: string }>()
defineEmits(['update:modelValue'])

</script>

<template>
	<input 
		:value="modelValue" 
		@input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" 
		:placeholder="placeholder" 
		:type="type" 
		class="p-6 rounded-[40px] text-gray text-2xl focus:outline-none" 
	/>
</template>
