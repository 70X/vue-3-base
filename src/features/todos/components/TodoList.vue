<script setup lang="ts">
import { reactive } from 'vue';
import TodoItem from './TodoItem.vue';

const list = [{ id: "abc", text: "Buy a bike", checked: false }]

const state = reactive({ list })

function onChecked(id: string, flag: boolean) {
	state.list = state.list.map((item) => {
		if (item.id === id) {
			item.checked = flag;
		}
		return item;
	})
}

</script>
<template>
	<div v-for="item in state.list" :key="item.id">
		<TodoItem :item @on-checked="onChecked(item.id, !item.checked)" />
	</div>
</template>