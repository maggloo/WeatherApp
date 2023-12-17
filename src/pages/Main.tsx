import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import {getSummaryWeather} from '@/entities/ToolBox/ui/SummaryWeatherInfo/model';
import {mainSelector, weatherSelector} from '@/shared/selectors/weatherSelectors';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import CurrentTemperatureInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentTemperatureInfo';

const Main = () => {

	const dispatch = useAppDispatch();
	const weather = useAppSelector(weatherSelector);
	const main = useAppSelector(mainSelector);

	useEffect(() => {
		dispatch(getSummaryWeather('Minsk'));
	}, []);


	return (
		<ToolBox>
			<div>{weather[0] && weather[0].main}</div>
			<CurrentTemperatureInfo temperature={main.temp}/>
		</ToolBox>
	);
};

export default Main;
