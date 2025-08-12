<script setup>
const loading = defineProps(['loading'])
</script>
<template>
	<div v-if="loading" class="flex">
		<div class="text-2xl font-semibold pr-4">Loading...</div>
		<div class="animate-spin text-4xl">😶‍🌫️</div>
	</div>
</template>