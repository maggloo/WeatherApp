import {API_KEY, instance} from '@/shared/api/apiI';
import {AirPollutionType, ForecastSummaryResponseType} from '@/shared/types';
import {cityType} from '@/features/SearchCities/model';

export const weatherAPI = {
	getCurrentWeather(location: Omit<cityType, 'name'>) {
		return instance.get<ForecastSummaryResponseType>(`onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`);
	},
	getAirPollution(location: Omit<cityType, 'name'>) {
		return instance.get<AirPollutionType>(`air_pollution?lat=${location.lat}&lon=${location.lng}&appid=${API_KEY}`);
	}
};

