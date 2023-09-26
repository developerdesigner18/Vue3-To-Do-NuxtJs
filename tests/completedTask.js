// tests/CompletedTask.spec.js
import { test } from 'vitest';
import { mount } from 'vitest';
import CompletedTask from '../components/completedTask.vue';

export function testCompletedTask() {

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
}
