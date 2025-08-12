<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import { useTodosStore } from '../todos.store';

const store = useTodosStore()
const { change } = store
</script>
<template>
	<div v-for="item in store.list" :key="item.id">
		<TodoItem :item @on-checked="change(item.id, !item.checked)" />
	</div>
</template>