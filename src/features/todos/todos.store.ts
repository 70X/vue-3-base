import { reactive } from "vue";
import type { TodoType } from "./todos.types";
import { defineStore } from "pinia";

function uniqid() {
  return (
    Math.random().toString(16).slice(2) +
    new Date().getTime() +
    Math.random().toString(16).slice(2)
  );
}

export const useTodosStore = defineStore("todos", () => {
  let list = reactive<TodoType[]>([
    { id: uniqid(), text: "Buy a bike", checked: false },
  ]);

  const add = (text: string) => {
    list.push({ id: uniqid(), text, checked: false });
  };
  const remove = (id: string) => {
    list = list.filter((item) => item.id !== id);
  };
  const change = (id: string, flag: boolean) => {
    list.map((item) => {
      if (item.id === id) {
        item.checked = flag;
      }
    });
  };
  return { list, add, remove, change };
});
