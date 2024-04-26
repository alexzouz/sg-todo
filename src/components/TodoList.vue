<template>
  <ul class="task-list" v-if="tasks.length">
    <li
      class="rounded mb-2 flex items-center p-1 hover:bg-gray-100 m-1"
      v-for="task in tasks"
      :key="task.id"
    >
      <input
        class="hidden"
        type="checkbox"
        :id="task.id.toString()"
        :checked="task.completed"
        @input="toggleTask(task.id)"
      />
      <label
        class="flex items-center h-10 px-2 cursor-pointer"
        :for="task.id.toString()"
      >
        <span
          class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full"
        >
          <svg
            class="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span class="ml-4 text-sm">{{ task.item }}</span>
      </label>
      <span
        @click="togglePanel(task)"
        class="ml-auto text-xs text-blue-500 cursor-pointer"
        title="Delete Task"
        >Show</span
      >
      <span
        @click="deleteTodo(task.id)"
        class="ml-4 text-xs text-red-500 cursor-pointer"
        title="Delete Task"
        >Delete</span
      >
    </li>
  </ul>
  <div v-else class="p-4">
    <h3 class="text-gray-600">Please add a task</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { usePanelStore } from "../stores/panel";
import { useTasksStore } from "../stores/tasks";

export default defineComponent({
  data() {
    const tasksStore = useTasksStore();
    const route = useRoute();
    return {
      route: route,
      tasksStore: tasksStore,
    };
  },
  computed: {
    tasks(): any {
      const filterStatus = this.route.params.status as string;

      if (!filterStatus) return this.tasksStore.tasks;
      return this.tasksStore.tasks.filter((task) => {
        if (filterStatus === "completed") return task.completed;
        if (filterStatus === "active") return !task.completed;
        return true;
      });
    },
  },
  methods: {
    toggleTask(id: number) {
      this.tasksStore.toggleTask(id);
    },
    deleteTodo(id: number) {
      this.tasksStore.deleteTask(id);
    },
    togglePanel(task: any) {
      const panelStore = usePanelStore();
      panelStore.togglePanel(task);
    },
  },
});
</script>

<style>
input[type="checkbox"]:checked + label span:first-of-type {
  background-color: #10b981;
  border-color: #10b981;
  color: #fff;
}

input[type="checkbox"]:checked + label span:nth-of-type(2) {
  text-decoration: line-through;
  color: #9ca3af;
}
</style>
