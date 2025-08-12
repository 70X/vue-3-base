<script setup lang="ts">
import { useRouter } from 'vue-router'

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
</template>
<style></style>