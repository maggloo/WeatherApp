import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {weatherAPI} from '@/shared/api/weatherAPI';
import {ForecastTenDayResponseType, ForecastSummaryResponseType, ListType, MainType, WeatherType} from '@/shared/types';
import dayjs from 'dayjs';

const initialState = {
	weather: [] as WeatherType[],
	currentDate: '',
	currentDay: '',
	currentTime: '',
	currentCity: '',
	main: {} as MainType,
	sunrise: '',
	sunset: '',
	wind: {},
	visibility: 0,
	forecastList: [] as ListType[]
};


export const weatherSlice = createSlice({
	name: 'weather',
	initialState: initialState,
	reducers: {
		setCurrentWeather: (state, action: PayloadAction<{weather: ForecastSummaryResponseType}>) => {
			state.weather = action.payload.weather.weather;
			state.main = action.payload.weather.main;
			state.currentDate = dayjs.unix(action.payload.weather.dt).format('DD.MM.YYYY');
			state.currentTime = dayjs.unix(action.payload.weather.dt).format('HH:mm');
			state.currentDay = dayjs.unix(action.payload.weather.dt).format('dddd');
		},

		setTenDaysWeather: (state, action: PayloadAction<{weather: ForecastTenDayResponseType}>) => {
			state.forecastList = action.payload.weather.list;
		}
	},
});


export const getSummaryWeather = createAsyncThunk('weather/getSummaryWeather',
	async (location: string, { dispatch }) => {
		try {
			const res = await weatherAPI.getCurrentWeather(location);

			dispatch(setCurrentWeather({weather: res.data}));
			console.log(res.data);
		} catch (e) {
			console.log(e);
		}
	});

export const getTenDayWeather = createAsyncThunk('weather/getTenDaysWeather',
	async (location: string, { dispatch }) => {
		try {
			const res = await weatherAPI.getTenDaysWeather(location);

			dispatch(setTenDaysWeather({weather: res.data}));
			console.log(res.data);
		} catch (e) {
			console.log(e);
		}
	});

export const { setCurrentWeather, setTenDaysWeather } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
