<script setup lang="ts">
import { useTodosStore } from '../todos.store';
import TodoItem from './TodoItem.vue';

const store = useTodosStore()
const { change } = store
</script>
<template>
	<div v-for="item in store.list.filter((item) => item.checked)" :key="item.id">
		<TodoItem :item @on-checked="change(item.id, !item.checked)" />
	</div>
</template>