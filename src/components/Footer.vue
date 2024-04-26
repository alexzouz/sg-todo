<template>
  <div class="rounded mt-5">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <p
            class="text-sm underline"
            :class="{ 'text-gray-400': showCompleted }"
            @click="toggleAll()"
          >
            All
          </p>
          <p
            class="text-xs underline"
            :class="{ 'text-gray-400': !showCompleted }"
            @click="toggleFilter()"
          >
            Complete tasks
          </p>
        </div>
        <button
          class="text-xs bg-red-600 text-white"
          @click="deleteAllComplete()"
        >
          Remove complete tasks
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useTasksStore } from "../stores/tasks";
export default {
  name: "Footer",
  data() {
    return {
      showCompleted: false,
    };
  },
  methods: {
    toggleAll() {
      this.showCompleted = false;
      this.$router.push({ name: "Home" });
    },
    toggleFilter() {
      this.showCompleted = !this.showCompleted;
      if (this.showCompleted) {
        this.$router.push({
          name: "TaskFilter",
          params: { status: "completed" },
        });
      } else {
        this.$router.push({
          name: "TaskFilter",
          params: { status: "active" },
        });
      }
    },
    deleteAllComplete() {
      const taskStore = useTasksStore();
      taskStore.deleteAllCompletedTasks();
    },
  },
};
</script>
