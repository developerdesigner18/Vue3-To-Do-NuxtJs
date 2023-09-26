<template>
    <div class="mt-5">
      <!-- Form to Add Task -->
      <form @submit.prevent="addTask">
        <!-- Input to Add Task -->
        <input
          class="b-gray-400 p-3 border-2 border-blue-400 rounded-full mr-2"
          type="text"
          v-model="task"
        />
        <!-- Button to Add Task -->
        <button
          class="rounded-full border-2 border-blue-500 p-3 text-white bg-blue-500 font-bold"
          @click="addTask"
          type="button"
        >
          Add Task
        </button>
      </form>
      <!-- List of Tasks Component -->
      <center class="mt-5">
        <ToDoList :tasks="tasks" />
      </center>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';

  
  const task = ref('');
  const tasks = ref([]);
  
  const addTask = () => {
    tasks.value.push(task.value);
    // Add the data to localStorage
    const getTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    getTasks.push(task.value);
    localStorage.setItem('tasks', JSON.stringify(getTasks));
    task.value = '';
  };
  
  onBeforeMount(() => {
    // Get the data from localStorage
    tasks.value = JSON.parse(localStorage.getItem('tasks')) || [];
  });
  </script>
  