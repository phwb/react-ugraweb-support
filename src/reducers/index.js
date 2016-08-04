import { ADD_TASK } from '../constants/index';

const initialState = {
  id: 0,
  name: 'Task name',
  text: 'Detail text'
};

export const task = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return {
        id: payload.id,
        name: payload.name,
        text: payload.text
      };
    default:
      return state;
  }
};

export const tasks = (state = [], action) => {
  const { type } = action;

  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        task(undefined, action)
      ];
    default:
      return state;
  }
};
