import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {HumidityInfo} from '@/entities/WeatherWidgets';

type HumidityPropsType = {
	humidity: number
}
export const Humidity: FC<HumidityPropsType> = ({humidity}) => {

	return (
		<ToolBox header={'Humidity'} className='order-8 flex h-48 flex-col justify-between'>
			<HumidityInfo humidity={humidity}/>
		</ToolBox>
	);
};

