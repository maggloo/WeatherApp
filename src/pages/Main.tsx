import React from 'react';
import MainWeatherInfo from '@/widgets/MainWeatherInfo/ui/MainWeatherInfo';
import TenDayForecast from '@/widgets/10DayForecast/ui/10DayForecast';
import HourlyWeather from '@/widgets/HourlyWeather/ui/HourlyWeather';
import Sunset from '@/widgets/Sunset/ui/Sunset';
import Windrose from '@/widgets/Wind/ui/Windrose';
import Precipitation from '@/widgets/Precipitation/ui/Precipitation';
import AirPollution from '@/widgets/Pollution/ui/AirPollution';
import UVIndex from '@/widgets/UVIndex';
import FeelsLike from '@/widgets/FeelsLike';
import Humidity from '@/widgets/Humidity/Humidity';
import Visibility from '@/widgets/Visibility';
import Pressure from '@/widgets/Pressure';

const Main = () => {
	return (
		<div className="container mx-auto flex min-h-screen flex-col px-[1rem] antialiased md:px-[2rem]">
			<div className="flex-grow">
				<div className="flex flex-col gap-4 md:flex-row">
					<div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
						<MainWeatherInfo />
						<TenDayForecast />
					</div>
					<div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
						<AirPollution />
						<HourlyWeather />
						<Windrose />
						<Sunset />

						<UVIndex />
						<Precipitation />
						<FeelsLike />
						<Humidity />
						<Visibility />
						<Pressure />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
