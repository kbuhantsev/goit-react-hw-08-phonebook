import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const extraActions = [fetchTasks, addTask, deleteTask, toggleCompleted];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

// Case reducers
const fetchTasksSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addTaskSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteTaskSuccessReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const toggleCompletedSuccessReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.fulfilled, fetchTasksSuccessReducer)
      .addCase(addTask.fulfilled, addTaskSuccessReducer)
      .addCase(deleteTask.fulfilled, deleteTaskSuccessReducer)
      .addCase(toggleCompleted.fulfilled, toggleCompletedSuccessReducer)
      .addMatcher(getActions("pending"), pendingReducer)
      .addMatcher(getActions("rejected"), rejectedReducer)
      .addMatcher(getActions("fulfilled"), fulfilledReducer),
});

export const tasksReducer = tasksSlice.reducer;
