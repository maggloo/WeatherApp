import React from 'react';
import MainWeatherInfo from '@/features/MainWeather/CurrentWeatherInfo/MainWeatherInfo';
import TenDayForecast from '@/features/MainWeather/10DayForecast/10DayForecast';

const MainWeather = () => {
	return (
		<div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
			<MainWeatherInfo />
			<TenDayForecast />
		</div>
	);
};

export default MainWeather;
