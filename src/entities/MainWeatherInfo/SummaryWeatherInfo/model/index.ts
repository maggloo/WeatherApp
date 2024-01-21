import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {weatherAPI} from '@/shared/api/weatherAPI';
import {
	WeatherType,
	CurrentWeatherType, DailyWeatherType, HourlyWeatherType, WindType,
} from '@/shared/types';
import dayjs from 'dayjs';

type initialStateType = {
	weather: WeatherType[],
	currentDate: string,
	currentDay: string,
	currentTime: string,
	currentCity: string,
	dt: number,
	currentTemp: number,
	sunrise: string,
	sunset: string,
	wind: WindType,
	visibility: number,
	forecastList: DailyWeatherType[],
	hourlyWeather: HourlyWeatherType[],
	airPollution: number,
	uv: number,
	feelsLike: number,
	humidity: number,
	pressure: number
}

const initialState: initialStateType = {
	weather: [],
	currentDate: '',
	currentDay: '',
	currentTime: '',
	currentCity: '',
	dt: 0,
	currentTemp: 0,
	sunrise: '',
	sunset: '',
	wind: {} as WindType,
	visibility: 0,
	forecastList: [],
	hourlyWeather: [],
	airPollution: 0,
	uv: 0,
	feelsLike: 0,
	humidity: 0,
	pressure: 0
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
			state.sunset = dayjs.unix(action.payload.weather.sunset).format('HH:mm');
			state.sunrise = dayjs.unix(action.payload.weather.sunrise).format('HH:mm');
			state.wind = {
				speed: action.payload.weather.wind_speed,
				direction: action.payload.weather.wind_deg
			};
			state.uv = action.payload.weather.uvi;
			state.feelsLike = action.payload.weather.feels_like;
			state.humidity = action.payload.weather.humidity;
			state.visibility = action.payload.weather.visibility;
			state.pressure = action.payload.weather.pressure;
		},
		setTenDaysWeather: (state, action: PayloadAction<{weather: DailyWeatherType[]}>) => {
			state.forecastList = action.payload.weather;
		},
		setHourlyWeather: (state, action: PayloadAction<{weather: HourlyWeatherType[]}>) => {
			state.hourlyWeather = action.payload.weather;
		},
		setAirPollution: (state, action: PayloadAction<{pollution: number}>) => {
			state.airPollution = action.payload.pollution;
		},

	},
});


export const getSummaryWeather = createAsyncThunk('weather/getSummaryWeather',
	async (location: string, { dispatch }) => {
		try {
			const res = await weatherAPI.getCurrentWeather(location);
			const resPollution = await weatherAPI.getAirPollution(location);
			dispatch(setCurrentWeather({weather: res.data.current}));
			dispatch(setTenDaysWeather({weather: res.data.daily}));
			dispatch(setHourlyWeather({weather: res.data.hourly}));
			dispatch(setAirPollution({pollution: resPollution.data.list[0].main.aqi}));
		} catch (e) {
			console.log(e);
		}
	});

export const { setCurrentWeather, setTenDaysWeather, setHourlyWeather, setAirPollution } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
