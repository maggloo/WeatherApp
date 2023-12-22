import React from 'react';
import MainWeatherInfo from '@/widgets/MainWeatherInfo/ui/MainWeatherInfo';
import TenDayForecast from '@/widgets/10DayForecast/ui/10DayForecast';

const Main = () => {
	return (
		<div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
			<MainWeatherInfo />
			<TenDayForecast />
		</div>
	);
};

export default Main;
