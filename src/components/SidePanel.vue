<script lang="ts">
import { CircleX } from "lucide-vue-next";
import { usePanelStore } from "../stores/panel";
import { useTasksStore } from "../stores/tasks";
export default {
  components: {
    CircleX,
  },
  data() {
    return {
      storePanel: usePanelStore(),
    };
  },
  created() {
    this.storePanel = usePanelStore();
  },
  computed: {
    isOpened() {
      if (!this.storePanel) {
        return false;
      }
      return this.storePanel.isPanelOpen;
    },
  },
  methods: {
    togglePanel() {
      this.storePanel.togglePanel(0);
    },
    completeTask(id: number) {
      const store = useTasksStore();
      store.toggleTask(id);
    },
  },
};
</script>
<template>
  <VueSidePanel hide-close-btn v-model="isOpened" width="24em" height="92vh">
    <div class="text-white">
      <span @click="togglePanel()" class="ml-auto table cursor-pointer p-3">
        <CircleX :size="32" />
      </span>
      <div class="vsp__body">
        <div class="p-4">
          <div class="mb-4">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <h1
                  class="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl"
                >
                  {{ storePanel.task.item }}
                </h1>
                <p class="mt-6 text-xl leading-8 text-white-700">
                  {{ storePanel.task.description || "No description" }}
                </p>
              </div>
            </div>
          </div>
          <button
            :class="{
              'bg-green-500': storePanel.task.completed,
              'bg-transparent': !storePanel.task.completed,
            }"
            class="border-2 border-green-600"
            @click="completeTask(storePanel.task.id)"
          >
            {{ storePanel.task.completed ? "Task complete" : "Complete task" }}
          </button>
        </div>
      </div>
    </div>
  </VueSidePanel>
</template>

<style>
.vsp {
  position: fixed !important;
  height: 92vh !important;
  top: 1rem !important;
  right: 1rem !important;
  bottom: auto !important;
  background-color: transparent !important;
  border: 1px solid #00000033;
  box-shadow: 0 5px 15px #00000033;
  z-index: 0;
  width: 24em;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  transition: transform 200ms;
}
.vsp__body {
  border-radius: 12px !important;
  background-color: #323232;
}
</style>
