import React, {useEffect} from 'react';
import CurrentTimeInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentTimeInfo';
import CurrentTemperatureInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentTemperatureInfo';
import CurrentWeatherConditionsInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentWeatherConditionsInfo';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import {
	dateSelector,
	daySelector,
	mainSelector,
	timeSelector,
	weatherSelector
} from '@/shared/selectors/weatherSelectors';
import {getSummaryWeather} from '@/entities/ToolBox/ui/SummaryWeatherInfo/model';

const MainWeatherInfo = () => {

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

export default MainWeatherInfo;
