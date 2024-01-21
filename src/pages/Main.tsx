import React from 'react';
import MainWeather from '@/widgets/MainWeather';
import WeatherWidgets from '@/widgets/WeatherWidgets';

const Main = () => {
	return (
		<div className="container mx-auto flex min-h-screen flex-col px-[1rem] antialiased md:px-[2rem]">
			<div className="flex-grow">
				<div className="flex flex-col gap-4 md:flex-row">
					<MainWeather />
					<WeatherWidgets />
				</div>
			</div>
		</div>
	);
};

export default Main;
