import React from 'react';
import MainWeatherInfo from '@/widgets/MainWeatherInfo/ui/MainWeatherInfo';
import TenDayForecast from '@/widgets/10DayForecast/ui/10DayForecast';

const Main = () => {
	return (
		<>
			<MainWeatherInfo />
			<TenDayForecast />
		</>
	);
};

export default Main;
