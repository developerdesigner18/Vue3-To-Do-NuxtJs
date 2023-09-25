// tests/CompletedTask.spec.js
import { test } from 'vitest';
import { mount } from 'vitest/vue';
import CompletedTask from '@/components/CompletedTask.vue';

test('CompletedTask.vue - should render completed tasks', () => {
  const completedTasks = ['Task 1', 'Task 2'];
  const wrapper = mount(CompletedTask, {
    propsData: {
      completedTasks,
    },
  });

  const completedTaskElements = wrapper.findAll('.group');
  expect(completedTaskElements.length).toBe(2);
});
