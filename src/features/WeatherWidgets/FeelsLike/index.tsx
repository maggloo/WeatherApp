import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppSelector} from '@/app/store/store';
import {feelsLikeSelector, tempSelector} from '@/shared/selectors/weatherSelectors';
import {FeelsLikeInfo} from '@/entities/WeatherWidgets';

export const FeelsLike = () => {

	const feelsLike = useAppSelector(feelsLikeSelector);
	const actualTemp = useAppSelector(tempSelector);

	return (
		<ToolBox header={'Feels like'} className='order-7 flex h-48 flex-col justify-between'>
			<FeelsLikeInfo feelsLikeTemp={feelsLike} actualTemp={actualTemp}/>
		</ToolBox>
	);
};

