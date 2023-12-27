import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './Projects';

export const store = configureStore({
  reducer: {
    projects: projectsReducer
  }
});
