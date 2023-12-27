import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  activeId: "",
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const id = nanoid();
      const newProject = { ...action.payload, id };
      state.projects.push(newProject);
      state.activeId = id;
    },
    addTask: (state, action) => {
      const { activeId, projects } = state;
      const taskWithId = { ...action.payload, id: nanoid() };
      const activeProject = projects.find((project) => project.id === activeId);
      if (activeProject) {
        activeProject.tasks.push(taskWithId);
      }
    },
    updateTask: (state, action) => {
      const { projectId, taskId, updatedTask } = action.payload;
      const project = state.projects.find((p) => p.id === projectId);
      if (project) {
        const taskIndex = project.tasks.findIndex((t) => t.id === taskId);
        if (taskIndex !== -1) {
          project.tasks[taskIndex] = {
            ...project.tasks[taskIndex],
            ...updatedTask,
          };
        }
      }
    },
    toggleProjectActive: (state, action) => {
      state.activeId = action.payload;
    },
  },
});

export const { addProject, toggleProjectActive, addTask, updateTask } =
  projectsSlice.actions;

export default projectsSlice.reducer;
