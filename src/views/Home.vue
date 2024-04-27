<template>
  <Toaster />
  <SidePanel />
  <Header />
  <TodoForm />
  <TodoList />
  <Footer />
</template>

<script>
import { Toaster } from "vue-sonner";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import SidePanel from "../components/SidePanel.vue";
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";

export default {
  components: {
    Toaster,
    Footer,
    Header,
    SidePanel,
    TodoForm,
    TodoList,
  },
};
</script>
