import expect from 'expect';
import { addTask } from '../src/actions';
import { ADD_TASK } from '../src/constants';
import { task, tasks } from '../src/reducers';

describe('actions', () => {
  it('should create an action to add a First task', () => {
    const name = 'First task';
    const text = 'Detail text for first task';
    const expectedAction = {
      type: ADD_TASK,
      payload: {
        id: 1,
        name,
        text
      }
    };
    expect(addTask(name, text)).toEqual(expectedAction);
  });

  it('should create an action to add a Second task', () => {
    const name = 'Second task';
    const text = 'Detail text for second task';
    const expectedAction = {
      type: ADD_TASK,
      payload: {
        id: 2,
        name,
        text
      }
    };
    expect(addTask(name, text)).toEqual(expectedAction);
  });
});

describe('reducers', () => {
  const initialState = {
    id: 0,
    name: 'Task name',
    text: 'Detail text'
  };

  it('should return the initial state', () => {
    expect(task(undefined, {})).toEqual(initialState);
  });

  it('should return next state', () => {
    const state = [initialState];
    const nextState = {
      id: 1,
      name: 'Next task',
      text: 'Detail text'
    };
    expect(tasks(state, {
      type: ADD_TASK,
      payload: nextState
    })).toEqual([initialState, nextState]);
  })
});
