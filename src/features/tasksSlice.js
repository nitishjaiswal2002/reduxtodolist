import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('tasks')) || []
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
    removeTask(state, action) {
      state.items = state.items.filter(task => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
    editTask(state, action) {
      const task = state.items.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        localStorage.setItem('tasks', JSON.stringify(state.items));
      }
    },
    toggleTaskCompletion(state, action) {
      const task = state.items.find(task => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.items));
      }
    }
  }
});

export const { addTask, removeTask, editTask, toggleTaskCompletion } = tasksSlice.actions;

export default tasksSlice.reducer;
