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
import {useAppSelector} from '@/app/store/store';
import {currentWeatherSelector, hourlyWeatherSelector} from '@/shared/selectors/weatherSelectors';

const WeatherWidgets = () => {

	const currentWeather = useAppSelector(currentWeatherSelector);
	const hourlyWeather = useAppSelector(hourlyWeatherSelector);

	return (

		<div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
			<Pollution pollutionData={currentWeather.pollution}/>
			<HourlyWeather hourlyWeatherArray={hourlyWeather}/>
			<Wind wind_deg={currentWeather.wind_deg} wind_speed={currentWeather.wind_speed}/>
			<Sunset sunset={currentWeather.sunset} sunrise={currentWeather.sunrise}/>
			<UVIndex uvi={currentWeather.uvi}/>
			<Precipitation precipitationInfo={currentWeather.snow || currentWeather.rain} type={Object.keys(currentWeather).find(el => el === 'snow' || el === 'rain')}/>
			<FeelsLike feelsLikeTemp={currentWeather.feels_like} actualTemp={currentWeather.temp}/>
			<Visibility visibility={currentWeather.visibility}/>
			<Humidity humidity={currentWeather.humidity}/>
			<Pressure pressure={currentWeather.pressure}/>
		</div>
	);
};

export default WeatherWidgets;
