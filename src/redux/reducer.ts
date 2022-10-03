import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filterAction } from './ItemsActions';
import { itemsInitialState } from './items-init-state';
import { createSlice } from '@reduxjs/toolkit';
import { addUsers, deleteUser, fetchUsers } from './ItemsOperations';

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: itemsInitialState.add,
  extraReducers: {
    [fetchUsers.fulfilled.toString()]: (_, action) => action.payload,
    [addUsers.fulfilled.toString()]: (state, action) => [...state, action.payload],
    [deleteUser.fulfilled.toString()]: (state, action) => state.filter(item => item.id !== action.payload),
  },
  reducers: {}
});

const filterReducer = createReducer(itemsInitialState.filter, {
  [filterAction.toString()]: (_, action) => action.payload,
});

export const mainReducer = combineReducers({
  items: phoneBookSlice.reducer,
  filter: filterReducer,
});
