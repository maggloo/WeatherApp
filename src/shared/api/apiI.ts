import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const API_KEY = 'f4f6c36d3b27dda8378774b9dd241b2f';
