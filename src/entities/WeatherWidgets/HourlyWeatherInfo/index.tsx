import React, {FC} from 'react';
import {HourlyWeatherType} from '@/shared/types';
import WeatherIcon from '@/shared/ui/WeatherIcon/WeatherIcon';
import {hourCalculation} from '@/shared/utils/timeCalculation';

type OneHourWeatherInfoPropsType = {
	item: HourlyWeatherType
	index: number
}

export const OneHourWeatherInfo: FC<OneHourWeatherInfoPropsType> = ({item, index}) => {
	return (
		<div className="flex h-full flex-col justify-between">
			<div className="flex justify-center text-sm text-neutral-600">
				{index === 0 ? 'Now' : hourCalculation(item.dt)}
			</div>
			<div className="flex h-full items-center justify-center">
				<WeatherIcon src={item.weather[0].icon} alt={item.weather[0].icon} className={'h-8 w-8'}/>
			</div>
			<div className="flex justify-center">
				{Math.floor(item.temp)}
			</div>
		</div>
	);
};

