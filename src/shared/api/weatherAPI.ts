import {API_KEY, instance} from '@/shared/api/apiI';
import {ForecastSummaryResponseType} from '@/shared/types';

export const weatherAPI = {
	getCurrentWeather(location: string) {
		return instance.get<ForecastSummaryResponseType>(`onecall?lat=53.9&lon=27.5667&exclude=minutely,alerts&units=metric&appid=${API_KEY}`);
	},
};

