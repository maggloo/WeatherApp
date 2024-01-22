import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {PressureInfo} from '@/entities/WeatherWidgets';

type PressurePropsType = {
	pressure: number
}
export const Pressure: FC<PressurePropsType> = ({pressure}) => {

	return (
		<ToolBox header={'Pressure'} className='order-10 flex h-48 flex-col justify-between'>
			<PressureInfo pressure={pressure}/>
		</ToolBox>
	);
};

