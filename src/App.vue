<script setup lang="ts">
const activeClassColor = "text-green-500"
</script>

<template>
	<div class="flex flex-col h-dvh w-dvw p-5 gap-5">
		<div class="flex w-100 justify-between">
			<h1 class="text-purple-600">Logo: Vue 3 + Router + tailwindcss</h1>
			<p>
				<strong>Current route path:</strong> {{ $route.fullPath }}
			</p>
			<nav class="flex gap-2">
				<RouterLink to="/" :active-class="activeClassColor">Home</RouterLink>
				<RouterLink to="/about" :active-class="activeClassColor">About</RouterLink>
			</nav>
		</div>
		<main>
			<RouterView />
		</main>
	</div>
</template>

<style scoped></style>
