import { defineStore } from "pinia";
import { toast } from "vue-sonner";

interface Task {
  item: string;
  description: string;
  id: number;
  completed: boolean;
}

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: [] as Task[],
      id: 0,
    };
  },
  getters: {
    completedTasks: (state) => {
      const myTasks = state.tasks;
      myTasks.filter((task) => task.completed);
    },
    activeTasks: (state) => {
      const myTasks = state.tasks;
      myTasks.filter((task) => !task.completed);
    },
  },
  actions: {
    addTask(item: string, description: string) {
      this.tasks.push({ item, description, id: this.id++, completed: false });
      toast.success("Task added successfully!");
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      toast.success("Task deleted successfully!");
    },
    deleteAllCompletedTasks() {
      this.tasks = this.tasks.filter((task) => !task.completed);
    },
    toggleTask(id: number) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
  persist: true,
});
