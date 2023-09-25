<template>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <!-- Completed Tasks Title -->
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
           Completed Tasks
        </h5>
       <!-- Completed Tasks Item -->
        <ul class="my-4 space-y-3">
            <li v-for="task in completedTasks" :key="task">
                <p class="flex items-center justify-between p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="whitespace-nowrap">{{ task }}</span>
                    <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Completed</span>
                </p>
            </li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name: "completedTask",
        props:{
            completedTasks:Array,
        }
    }
</script>

<style scoped>

</style>