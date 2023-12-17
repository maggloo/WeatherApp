import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {weatherAPI} from '@/shared/api/weatherAPI';
import {ForecastSummaryResponseType, MainType, WeatherType} from '@/shared/types';

const initialState = {
	weather: [] as WeatherType[],
	currentDate: '',
	currentTime: '',
	currentCity: '',
	main: {} as MainType,
	sunrise: '',
	sunset: '',
	wind: {},
	visibility: 0,
	forecastList: [] as any[]
};


export const weatherSlice = createSlice({
	name: 'weather',
	initialState: initialState,
	reducers: {
		setCurrentWeather: (state, action: PayloadAction<{weather: ForecastSummaryResponseType}>) => {
			state.weather = action.payload.weather.weather;
			state.main = action.payload.weather.main;
		},
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

export const { setCurrentWeather } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
