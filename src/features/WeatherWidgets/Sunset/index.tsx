import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {SunsetInfo} from '@/entities/WeatherWidgets';
import dayjs from 'dayjs';

type SunsetPropsType = {
	sunset: number
	sunrise: number
}
export const Sunset: FC<SunsetPropsType> = ({sunset, sunrise}) => {

	const sunsetFormat = dayjs.unix(sunset).format('HH:mm');
	const sunriseFormat = dayjs.unix(sunrise).format('HH:mm');

	return (
		<ToolBox header={'Sunset'} className="order-3 flex h-48 flex-col justify-between lg:order-2">
			<SunsetInfo sunset={sunsetFormat} sunrise={sunriseFormat} />
		</ToolBox>
	);
};

