import React, {useEffect} from 'react';

import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import {
	dateSelector,
	daySelector,
	tempSelector,
	timeSelector,
	weatherSelector
} from '@/shared/selectors/weatherSelectors';
import {CurrentTemperatureInfo, CurrentTimeInfo, CurrentWeatherConditionsInfo} from '@/entities/MainWeatherInfo';
import {getSummaryWeather} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/model';


const MainWeatherInfo = () => {

	const dispatch = useAppDispatch();
	const weather = useAppSelector(weatherSelector);
	const temp = useAppSelector(tempSelector);
	const day = useAppSelector(daySelector);
	const time = useAppSelector(timeSelector);
	const date = useAppSelector(dateSelector);

	useEffect(() => {
		dispatch(getSummaryWeather('Minsk'));
	}, []);

	return (
		<ToolBox className={'flex w-full flex-col justify-between overflow-hidden md:h-[25rem] h-fit shrink-0 '}>
			<CurrentTimeInfo time={time} day={day} date={date} />
			<CurrentTemperatureInfo temperature={temp}/>
			{ weather[0] &&
                <CurrentWeatherConditionsInfo weather={weather[0]}/>
			}
		</ToolBox>
	);
};

export default MainWeatherInfo;
