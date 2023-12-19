import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import {getTenDayWeather} from '@/entities/ToolBox/ui/SummaryWeatherInfo/model';
import {tenDayWeatherSelector} from '@/shared/selectors/weatherSelectors';

const TenDayForecast = () => {
	const dispatch = useAppDispatch();
	const forecast = useAppSelector(tenDayWeatherSelector);

	useEffect(() => {
		dispatch(getTenDayWeather('Minsk'));
	}, []);
	console.log(forecast);
	return (
		<div>

		</div>
	);
};

export default TenDayForecast;
