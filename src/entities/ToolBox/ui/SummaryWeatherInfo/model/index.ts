import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {weatherAPI} from '@/shared/api/weatherAPI';
import {
	WeatherType,
	CurrentWeatherType, DailyWeatherType
} from '@/shared/types';
import dayjs from 'dayjs';

const initialState = {
	weather: [] as WeatherType[],
	currentDate: '',
	currentDay: '',
	currentTime: '',
	currentCity: '',
	dt: 0 as number,
	currentTemp: 0 as number,
	sunrise: '',
	sunset: '',
	wind: {},
	visibility: 0,
	forecastList: [] as DailyWeatherType[]
};


export const weatherSlice = createSlice({
	name: 'weather',
	initialState: initialState,
	reducers: {
		setCurrentWeather: (state, action: PayloadAction<{weather: CurrentWeatherType}>) => {
			state.weather = action.payload.weather.weather;
			state.currentTemp = action.payload.weather.temp;
			state.dt = action.payload.weather.dt;
			state.currentDate = dayjs.unix(action.payload.weather.dt).format('DD.MM.YYYY');
			state.currentTime = dayjs.unix(action.payload.weather.dt).format('HH:mm');
			state.currentDay = dayjs.unix(action.payload.weather.dt).format('dddd');
		},

		setTenDaysWeather: (state, action: PayloadAction<{weather: DailyWeatherType[]}>) => {
			state.forecastList = action.payload.weather;
		}
	},
});


export const getSummaryWeather = createAsyncThunk('weather/getSummaryWeather',
	async (location: string, { dispatch }) => {
		try {
			const res = await weatherAPI.getCurrentWeather(location);
			dispatch(setCurrentWeather({weather: res.data.current}));
			console.log(res.data.daily);
			dispatch(setTenDaysWeather({weather: res.data.daily}));
		} catch (e) {
			console.log(e);
		}
	});

export const { setCurrentWeather, setTenDaysWeather } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
