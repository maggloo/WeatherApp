import {combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({});
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().prepend(thunk)
});


export type AppRootStateType = ReturnType<typeof store.getState>
