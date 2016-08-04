import { ADD_TASK } from '../constants';

let nextTaskID = 0;
export function addTask(name, text) {
  return {
    type: ADD_TASK,
    payload: {
      id: nextTaskID += 1,
      name,
      text
    }
  };
}
