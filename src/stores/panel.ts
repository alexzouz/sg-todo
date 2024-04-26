import { defineStore } from "pinia";

export const usePanelStore = defineStore("panel", {
  state: () => ({
    isPanelOpen: false,
    task: {} as any,
  }),
  actions: {
    togglePanel(this: any, task: any) {
      this.task = task;
      this.isPanelOpen = !this.isPanelOpen;
    },
  },
  persist: true,
});
