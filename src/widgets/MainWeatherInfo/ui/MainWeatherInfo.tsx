import React, {useEffect} from 'react';
import CurrentTimeInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentTimeInfo';
import CurrentTemperatureInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentTemperatureInfo';
import CurrentWeatherConditionsInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/CurrentWeatherConditionsInfo';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import {
	dateSelector,
	daySelector,
	tempSelector,
	timeSelector,
	weatherSelector
} from '@/shared/selectors/weatherSelectors';
import {getSummaryWeather} from '@/entities/ToolBox/ui/SummaryWeatherInfo/model';

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
