import {API_KEY, instance} from '@/shared/api/apiI';

export const weatherAPI = {
	getCurrentWeather(location: string) {
		return instance.get(`weather?lat=51.5073219&lon=-0.1276474$appid=${API_KEY}`);
	}
};

