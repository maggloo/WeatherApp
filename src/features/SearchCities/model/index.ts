import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	getSummaryWeather,
} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/model';

export type cityType = {
	lat: number
	lng: number
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
		try {
			dispatch(setCurrentCity({city: city}));
			dispatch(getSummaryWeather(city));
		} catch (e) {
			console.log(e);
		}
	});


export const { setCurrentCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
