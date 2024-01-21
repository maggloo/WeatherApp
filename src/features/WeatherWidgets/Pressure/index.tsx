import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppSelector} from '@/app/store/store';
import {pressureSelector} from '@/shared/selectors/weatherSelectors';
import {PressureInfo} from '@/entities/WeatherWidgets';

export const Pressure = () => {

	const pressure = useAppSelector(pressureSelector);

	return (
		<ToolBox header={'Pressure'} className='order-10 flex h-48 flex-col justify-between'>
			<PressureInfo pressure={pressure}/>
		</ToolBox>
	);
};

