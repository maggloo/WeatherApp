import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const API_KEY = process.env.WEATHER_API_KEY;
