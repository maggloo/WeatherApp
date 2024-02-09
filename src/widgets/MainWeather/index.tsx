import React from 'react';
import MainWeatherInfo from '@/features/MainWeather/CurrentWeatherInfo/MainWeatherInfo';
import TenDayForecast from '@/features/MainWeather/10DayForecast/10DayForecast';
import { useAppSelector} from '@/app/store/store';
import {
	currentCityNameSelector,
	currentWeatherSelector,
	dailyWeatherSelector
} from '@/shared/selectors/weatherSelectors';

const MainWeather = () => {

	const currentWeatherInfo = useAppSelector(currentWeatherSelector);
	const dailyWeatherType = useAppSelector(dailyWeatherSelector);
	const currentCityName = useAppSelector(currentCityNameSelector);

	return (
		<div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
			<MainWeatherInfo weather={currentWeatherInfo.weather} temp={currentWeatherInfo.temp} dt={currentWeatherInfo.dt} cityName={currentCityName}/>
			<TenDayForecast forecast={dailyWeatherType} />
		</div>
	);
};

export default MainWeather;
