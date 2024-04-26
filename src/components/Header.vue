<template>
  <header class="text-center">
    <h1 class="text-5xl font-black">To do list on Vue.js</h1>
    <p class="text-xl font-semibold mb-8">You have {{ nbTasks }} tasks.</p>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTasksStore } from "../stores/tasks";

export default defineComponent({
  data() {
    const store = useTasksStore();
    return {
      store,
      nbTasks: store.tasks.length,
    };
  },
  created() {
    this.$watch(
      () => this.store.tasks.length,
      () => {
        this.nbTasks = this.store.tasks.length;
      }
    );
  },
});
</script>
