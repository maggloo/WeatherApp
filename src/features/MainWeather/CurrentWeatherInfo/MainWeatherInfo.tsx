import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {CurrentTemperatureInfo, CurrentTimeInfo, CurrentWeatherConditionsInfo} from '@/entities/MainWeatherInfo';
import {WeatherType} from '@/shared/types';
import dayjs from 'dayjs';

type MainWeatherInfoPropsType = {
	weather: WeatherType[];
	temp: number;
	dt: number
}

const MainWeatherInfo: FC<MainWeatherInfoPropsType> = ({ weather, temp, dt }) => {

	const time = dayjs.unix(dt).format('HH:mm');
	const day = dayjs.unix(dt).format('dddd');
	const date = dayjs.unix(dt).format('DD.MM.YYYY');

	return (
		<ToolBox className={'flex w-full flex-col justify-between overflow-hidden md:h-[25rem] h-fit shrink-0 '}>
			<CurrentTimeInfo time={time} day={day} date={date} />
			<CurrentTemperatureInfo temperature={temp}/>
			{weather &&	<CurrentWeatherConditionsInfo weather={weather[0]}/>
			}
		</ToolBox>
	);
};

export default MainWeatherInfo;
