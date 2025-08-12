<script setup lang="ts">
import { useTodosStore } from '../features/todos/todos.store';

const store = useTodosStore()
</script>
<template>
	<div>
		About Page
	</div>
	<div class="flex justify-center">
		<p>{{ JSON.stringify(store.list) }}</p>
	</div>
</template>
<style></style>