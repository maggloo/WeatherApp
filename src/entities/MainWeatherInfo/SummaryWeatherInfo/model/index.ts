import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {weatherAPI} from '@/shared/api/weatherAPI';
import {
	CurrentWeatherType, DailyWeatherType, HourlyWeatherType,
} from '@/shared/types';
import {cityType, setCurrentCity} from '@/features/SearchCities/model';
import {setAppStatus} from '@/app/model';

type initialStateType = {
	current: CurrentWeatherType & {pollution?: number},
	hourly: HourlyWeatherType[]
	daily: DailyWeatherType[]
}

const initialState: initialStateType = {
	current: {} as CurrentWeatherType & {pollution?: number},
	hourly: [],
	daily: []
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState: initialState,
	reducers: {
		setCurrentWeather: (state, action: PayloadAction<{weather: CurrentWeatherType}>) => {
			state.current = action.payload.weather;
		},
		setTenDaysWeather: (state, action: PayloadAction<{weather: DailyWeatherType[]}>) => {
			state.daily = action.payload.weather;
		},
		setHourlyWeather: (state, action: PayloadAction<{weather: HourlyWeatherType[]}>) => {
			state.hourly = action.payload.weather;
		},
		setAirPollution: (state, action: PayloadAction<{pollution: number}>) => {
			state.current.pollution = action.payload.pollution;
		},
	},
});


export const getSummaryWeather = createAsyncThunk('weather/getSummaryWeather',
	async (location: cityType, { dispatch }) => {
		dispatch(setAppStatus('loading'));
		try {
			const res = await weatherAPI.getCurrentWeather({lat: location.lat, lng: location.lng});
			const resPollution = await weatherAPI.getAirPollution({lat: location.lat, lng: location.lng});
			dispatch(setCurrentWeather({weather: res.data.current}));
			dispatch(setTenDaysWeather({weather: res.data.daily}));
			dispatch(setHourlyWeather({weather: res.data.hourly}));
			dispatch(setCurrentCity({city: location}));
			dispatch(setAirPollution({pollution: resPollution.data.list[0].main.aqi}));
			dispatch(setAppStatus('success'));
		} catch (e) {
			console.log(e);
			dispatch(setAppStatus('error'));
		}
	});

export const { setCurrentWeather, setTenDaysWeather, setHourlyWeather, setAirPollution } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
