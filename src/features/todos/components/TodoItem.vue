<script setup lang="ts">
import type { TodoType } from '../todos.types';

const { item } = defineProps<{ item: TodoType }>()
defineEmits(['on-checked'])
</script>

<template>
	<div class="flex gap-2">
		<input type="checkbox" :checked="item.checked" @change="$emit('on-checked')" />
		<p>{{ item.text }}</p>
	</div>
</template>