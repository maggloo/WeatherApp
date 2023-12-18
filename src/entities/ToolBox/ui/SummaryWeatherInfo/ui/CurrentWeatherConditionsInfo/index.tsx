import React, {FC} from 'react';
import {WeatherType} from '@/shared/types';
import Image from 'next/image';


type CurrentWeatherConditionsInfoPropsType = {
    weather: WeatherType
}
const CurrentWeatherConditionsInfo: FC<CurrentWeatherConditionsInfoPropsType> = ({weather }) => {
	return (
		<>
			<div className={'relative invert-0 dark:invert h-9 w-9'}>
				<Image src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt={'weather'} fill/>
			</div>

			<div className={'font-semibold'}>{weather.main}</div>
		</>
	);
};

export default CurrentWeatherConditionsInfo;
