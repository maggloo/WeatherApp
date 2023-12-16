import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import {getSummaryWeather} from '@/entities/ToolBox/ui/MainInfo/model';
import {mainSelector, weatherSelector} from '@/shared/selectors/weatherSelectors';

const Main = () => {

	const dispatch = useAppDispatch();
	const weather = useAppSelector(weatherSelector);
	const main = useAppSelector(mainSelector);

	useEffect(() => {
		dispatch(getSummaryWeather('Minsk'));
	}, []);
	const tempCalculation = (temp: number) => Math.round(temp);

	return (
		<div>
			{weather[0] && weather[0].main}
			<h1 className={'text-3xl font-bold underline'} > {tempCalculation(main.temp)} </h1>
		</div>
	);
};

export default Main;
