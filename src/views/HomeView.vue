<script setup lang="ts">
import { useRouter } from 'vue-router'
import TodoList from '../features/todos/components/TodoList.vue';

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
	<TodoList />
</template>
<style></style>