// tests/AddTask.spec.js
import { test } from 'vitest';
import { mount } from 'vitest/vue';
import AddTask from '@/components/AddTask.vue';

test('AddTask.vue - should add a task to tasks and localStorage', async () => {
  const wrapper = mount(AddTask);
  const input = wrapper.find('input');
  const addButton = wrapper.find('button');

  input.element.value = 'New Task';
  await addButton.trigger('click');

  const tasks = wrapper.vm.tasks;
  expect(tasks).toContain('New Task');
  expect(localStorage.setItem).toHaveBeenCalledWith(
    'tasks',
    JSON.stringify(['New Task'])
  );
});

test('AddTask.vue - should load tasks from localStorage on mount', () => {
  localStorage.getItem.mockReturnValueOnce(JSON.stringify(['Task 1', 'Task 2']));
  const wrapper = mount(AddTask);

  const tasks = wrapper.vm.tasks;
  expect(tasks).toEqual(['Task 1', 'Task 2']);
});
