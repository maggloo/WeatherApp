import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	getSummaryWeather,
} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/model';
import {setAppStatus} from '@/app/model';
import {setToLocalStorage} from '@/shared/utils/setToLocalStorage';

export type cityType = {
	lat: string | string[]
	lng: string | string[]
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
			setToLocalStorage(city, 'current-city');
			dispatch(getSummaryWeather(city));
			dispatch(setAppStatus('success'));
		} catch (e) {
			console.log(e);
			dispatch(setAppStatus('error'));
		}
	});


export const { setCurrentCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
