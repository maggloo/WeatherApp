import {API_KEY, instance} from '@/shared/api/apiI';

export const weatherAPI = {
	getCurrentWeather(location: string) {
		return instance.get(`weather?q=${location}&appid=${API_KEY}&units=metric`);
	},
	getTenDaysWeather(location: string) {
		return instance.get(`forecast?q=${location}&cnt=10&appid=${API_KEY}&units=metric`);
	}
};

