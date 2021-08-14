// mobx
import { makeAutoObservable } from 'mobx';

// instance
import instance from './instance';

// tasks class
class TaskStore {
  tasks = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // fetching tasks
  fetchTasks = async () => {
    try {
      const response = await instance.get('/tasks');
      this.tasks = response.data;
      this.loading = false;
    } catch (error) {
      console.error('fetch Task: ', error);
    }
  };

  // delete task
  deleteTask = async (taskId) => {
    try {
      await instance.delete(`/tasks/${taskId}`);
      const updatedTasks = (this.tasks = this.tasks.filter(
        (task) => task.id !== taskId
      ));
      this.tasks = updatedTasks;
    } catch (error) {
      console.error(error);
    }
  };

  // create task
  createTask = async (newTask) => {
    try {
      const response = await instance.post('/tasks', newTask);
      this.tasks.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // update task
  updateTask = async (updatedTask) => {
    try {
      const response = await instance.put(
        `/tasks/${updatedTask.id}`,
        updatedTask
      );
      const task = this.tasks.find((task) => task.id === response.data.id);
      for (const key in task) task[key] = response.data[key];
    } catch (error) {
      console.error(error);
    }
  };

  // fetch one task
  getTaskById = (taskId) => this.tasks.find((task) => task.id === taskId);
}

// new instance of taskStore
const taskStore = new TaskStore();
// fetching tasks before exporting
taskStore.fetchTasks();
// exporting taskStore
export default taskStore;
