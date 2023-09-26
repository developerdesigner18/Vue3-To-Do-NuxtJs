import { test, mount } from "vitest";
import AddTask from "../components/addTask.vue";
import { testAddTask, testLoadTasks } from "./AddTask";
import {testCompletedTask} from './completedTask';
import {testToDoList} from './toDoList';

// You can also run the functions directly as tests if you prefer
test("testAddTask function", () => {
  testAddTask(); // Call the function as a test
});

test("testLoadTasks function", () => {
  testLoadTasks(); // Call the function as a test
});

test("testCompletedTask function", () => {
  testCompletedTask(); // Call the function as a test
})

test("testToDoList function", () => {
  testToDoList(); // Call the function as a test
})