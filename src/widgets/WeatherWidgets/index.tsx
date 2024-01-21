import React from 'react';
import {
	FeelsLike,
	HourlyWeather,
	Humidity,
	Pollution,
	Precipitation, Pressure,
	Sunset,
	UVIndex, Visibility,
	Wind
} from '@/features/WeatherWidgets';

const WeatherWidgets = () => {

	return (
		<div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
			<Pollution />
			<HourlyWeather />
			<Wind />
			<Sunset />
			<UVIndex />
			<Precipitation />
			<FeelsLike />
			<Visibility />
			<Humidity />
			<Pressure />
		</div>
	);
};

export default WeatherWidgets;
