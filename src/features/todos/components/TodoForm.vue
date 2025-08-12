<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '../todos.store';

const text = ref("")
const { add } = useTodosStore()
const onSubmit = () => {
	if (text.value) {
		add(text.value)
		text.value = ""
	}
}
</script>
<template>
	<div class="flex gap-2">
		<input v-model="text" class="border">
		<button @click="onSubmit" :disabled="text === ''" class="p-2 rounded-md"
			:class="text === '' ? 'bg-gray-200' : 'bg-purple-500'">Add</button>
	</div>
</template>