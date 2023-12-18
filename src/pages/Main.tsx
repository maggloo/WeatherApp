import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import {getSummaryWeather} from '@/entities/ToolBox/ui/SummaryWeatherInfo/model';
import {
	dateSelector,
	daySelector,
	mainSelector,
	timeSelector,
	weatherSelector
} from '@/shared/selectors/weatherSelectors';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import CurrentTemperatureInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentTemperatureInfo';
import CurrentWeatherConditionsInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentWeatherConditionsInfo';
import CurrentTimeInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentTimeInfo';

const Main = () => {

	const dispatch = useAppDispatch();
	const weather = useAppSelector(weatherSelector);
	const main = useAppSelector(mainSelector);
	const day = useAppSelector(daySelector);
	const time = useAppSelector(timeSelector);
	const date = useAppSelector(dateSelector);

	useEffect(() => {
		dispatch(getSummaryWeather('Minsk'));
	}, []);

	return (
		<ToolBox>
			<CurrentTimeInfo time={time} day={day} date={date} />
			<CurrentTemperatureInfo temperature={main.temp}/>
			{ weather[0] &&
				<CurrentWeatherConditionsInfo weather={weather[0]}/>
			}
		</ToolBox>
	);
};

export default Main;
