import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {weatherAPI} from '@/shared/api/weatherAPI';

const initialState = {
	weather: [] as string[],
	currentDate: '',
	currentTime: '',
	currentCity: '',
	main: {},
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
		setCurrentWeather: (state, action: any) => {
			console.log(action);
		},
	},
});


export const getSummaryWeather = createAsyncThunk('weather/getSummaryWeather',
	async (location: string, { dispatch }) => {
		try {
			const res = await weatherAPI.getCurrentWeather(location);

			console.log(res.data);
		} catch (e) {
			console.log(e);
		}
	});
export const weatherReducer = weatherSlice.reducer;
