// tests/ToDoList.spec.js
import { test } from 'vitest';
import { mount } from 'vitest/vue';
import ToDoList from '@/components/ToDoList.vue';

test('ToDoList.vue - should render tasks and call taskCompleted and deleteTask', async () => {
  const tasks = ['Task 1', 'Task 2'];
  const wrapper = mount(ToDoList, {
    propsData: {
      tasks,
    },
  });

  const taskElements = wrapper.findAll('.group');
  expect(taskElements.length).toBe(2);

  const taskCompletedSpy = jest.spyOn(wrapper.vm, 'taskCompleted');
  const deleteTaskSpy = jest.spyOn(wrapper.vm, 'deleteTask');

  await taskElements[0].find('.fa-square-check').trigger('click');
  await taskElements[1].find('.fa-trash').trigger('click');

  expect(taskCompletedSpy).toHaveBeenCalledWith('Task 1');
  expect(deleteTaskSpy).toHaveBeenCalledWith('Task 2');
});
