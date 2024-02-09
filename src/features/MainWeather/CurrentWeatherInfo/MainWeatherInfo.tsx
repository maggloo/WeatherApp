import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {CurrentTemperatureInfo, CurrentTimeInfo, CurrentWeatherConditionsInfo} from '@/entities/MainWeatherInfo';
import {WeatherType} from '@/shared/types';
import dayjs from 'dayjs';
import {CityName} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/ui/currentCityInfo';

type MainWeatherInfoPropsType = {
	weather: WeatherType[];
	temp: number;
	dt: number;
	cityName: string;
}

const MainWeatherInfo: FC<MainWeatherInfoPropsType> = ({ weather, temp, dt, cityName }) => {

	const time = dayjs.unix(dt).format('HH:mm');
	const day = dayjs.unix(dt).format('dddd');
	const date = dayjs.unix(dt).format('DD.MM.YYYY');

	return (
		<ToolBox className={'flex w-full flex-col justify-between overflow-hidden md:h-[25rem] h-fit shrink-0 '}>
			<CurrentTimeInfo time={time} day={day} date={date} />
			<CurrentTemperatureInfo temperature={temp}/>
			<div className='flex justify-between items-end font-bold'>
				<CityName name={cityName} />
				{weather &&	<CurrentWeatherConditionsInfo weather={weather[0]}/>
				}
			</div>
		</ToolBox>
	);
};

export default MainWeatherInfo;
