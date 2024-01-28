import {AppStatusType} from '@/shared/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type initialStateType = {
    status: AppStatusType
}

const initialState: initialStateType = {
	status: 'loading'
};

export const appSlice = createSlice({
	name: 'app',
	initialState: initialState,
	reducers: {
		setAppStatus: (state, action: PayloadAction<AppStatusType>) => {
			state.status = action.payload;
		},
	},
});

export const { setAppStatus } = appSlice.actions;
export const appReducer = appSlice.reducer;


