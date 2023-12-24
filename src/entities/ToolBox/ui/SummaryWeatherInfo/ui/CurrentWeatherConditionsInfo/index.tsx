import React, {FC} from 'react';
import {WeatherType} from '@/shared/types';
import WeatherIcon from '@/shared/ui/WeatherIcon/WeatherIcon';


type CurrentWeatherConditionsInfoPropsType = {
    weather: WeatherType
}
const CurrentWeatherConditionsInfo: FC<CurrentWeatherConditionsInfoPropsType> = ({weather }) => {
	return (
		<>
			<WeatherIcon src={weather.icon} alt={weather.icon} className={'h-9 w-9'}/>
			<div className={'font-semibold'}>{weather.main}</div>
		</>
	);
};

export default CurrentWeatherConditionsInfo;
