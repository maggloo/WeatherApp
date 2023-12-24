import React from 'react';
import MainWeatherInfo from '@/widgets/MainWeatherInfo/ui/MainWeatherInfo';
import TenDayForecast from '@/widgets/10DayForecast/ui/10DayForecast';
import HourlyWeather from '@/widgets/HourlyWeather/ui/HourlyWeather';

const Main = () => {
	return (
		<div className="flex flex-col gap-4 md:flex-row">
			<div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
				<MainWeatherInfo />
				<TenDayForecast />
			</div>
			<div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
				<HourlyWeather />
			</div>
		</div>
	);
};

export default Main;
