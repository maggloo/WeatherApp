import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	getSummaryWeather,
} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/model';
import {setAppStatus} from '@/app/model';

export type cityType = {
	lat: number
	lng: number
	name: string
}

type initialStateType = {
    currentCity: cityType
}

const initialState: initialStateType = {
	currentCity: {} as cityType
};

export const citiesSlice = createSlice({
	name: 'cities',
	initialState: initialState,
	reducers: {
		setCurrentCity: (state, action: PayloadAction<{ city: cityType }>) => {
			state.currentCity = action.payload.city;
		},
	},
});

export const updateCurrentCity = createAsyncThunk('weather/setCurrentCity',
	async (city: cityType, { dispatch }) => {
		dispatch(setAppStatus('loading'));
		try {
			dispatch(setCurrentCity({city: city}));
			dispatch(getSummaryWeather(city));
			dispatch(setAppStatus('success'));
		} catch (e) {
			console.log(e);
			dispatch(setAppStatus('error'));
		}
	});


export const { setCurrentCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
