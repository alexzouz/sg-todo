<template>
  <form @submit.prevent="addItemAndClear()">
    <div class="flex mt-4">
      <div class="mr-2">
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 mr-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="todo"
          type="text"
          placeholder="Add a new task (required)"
        />
        <textarea
          class="shadow appearance-none border rounded w-full py-2 mr-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="description"
          type="text"
          placeholder="Add a description"
        />
      </div>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toast } from "vue-sonner";
import { useTasksStore } from "../stores/tasks";

export default defineComponent({
  data() {
    return {
      todo: "",
      description: "",
    };
  },
  methods: {
    addItemAndClear() {
      if (this.todo.trim() === "") {
        toast.warning("Task name is required");
        return;
      }
      const store = useTasksStore();
      store.addTask(this.todo, this.description);
      this.todo = "";
      this.description = "";
    },
  },
});
</script>
