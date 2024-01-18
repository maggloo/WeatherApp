import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppSelector} from '@/app/store/store';
import {humiditySelector} from '@/shared/selectors/weatherSelectors';
import HumidityInfo from '@/entities/ToolBox/ui/HumidityInfo';

const Humidity = () => {

	const humidity = useAppSelector(humiditySelector);

	return (
		<ToolBox header={'Humidity'} className='order-8 flex h-48 flex-col justify-between'>
			<HumidityInfo humidity={humidity}/>
		</ToolBox>
	);
};

export default Humidity;
