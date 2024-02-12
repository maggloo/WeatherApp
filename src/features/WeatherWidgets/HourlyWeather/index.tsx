import React, {FC} from 'react';

import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {OneHourWeatherInfo} from '@/entities/WeatherWidgets';
import {HourlyWeatherType} from '@/shared/types';

type HourlyWeatherPropsType = {
	hourlyWeatherArray: HourlyWeatherType[]
}
export const HourlyWeather: FC<HourlyWeatherPropsType> = ({ hourlyWeatherArray}) => {
	return (
		<ToolBox className={'order-1 col-span-2 flex h-48 select-none flex-row items-center justify-between gap-10 overflow-hidden p-6 md:order-2 lg:order-3'}>
			{
				hourlyWeatherArray.slice(0, 5).map((item, i) => (
					<OneHourWeatherInfo key={i} item={item} index={i} />
				))
			}
		</ToolBox>
	);
};
