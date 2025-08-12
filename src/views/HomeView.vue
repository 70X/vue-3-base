<script setup lang="ts">
import { useRouter } from 'vue-router'
import TodoList from '../features/todos/components/TodoList.vue';
import TodosCompleted from '../features/todos/components/TodosCompleted.vue';
import TodoForm from '../features/todos/components/TodoForm.vue';

const router = useRouter()

function goToAbout() {
	router.push('/about')
}
</script>
<template>
	<div>
		Home Page -
		<button class="bg-blue-200 text-white p-2 rounded-md" @click="goToAbout">Go to About</button>
	</div>

	<div class="flex items-center justify-center m-10 gap-2">
		Add new item:
		<TodoForm />
	</div>
	<div class="flex">
		<div class="w-[50%]">
			<h1>TODO:</h1>
			<TodoList />
		</div>
		<div>
			<h1>Completed</h1>
			<TodosCompleted />
		</div>
	</div>
</template>
<style></style>