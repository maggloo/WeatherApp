import React from 'react';
import {useAppSelector} from '@/app/store/store';
import {hourlyWeatherSelector} from '@/shared/selectors/weatherSelectors';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import OneHourWeatherInfo from '@/entities/ToolBox/ui/HourlyWeatherInfo/ui/OneHourWeatherInfo';

const HourlyWeather = () => {

	const hourlyWeatherArray = useAppSelector(hourlyWeatherSelector);

	return (
		<ToolBox header={false} className={'order-first col-span-2 flex h-48 select-none flex-row items-center justify-between gap-12 overflow-hidden p-6 md:order-2'}>
			{
				hourlyWeatherArray.slice(0, 7).map((item, i) => (
					<OneHourWeatherInfo key={i} item={item} index={i} />
				))
			}
		</ToolBox>
	);
};

export default HourlyWeather;
