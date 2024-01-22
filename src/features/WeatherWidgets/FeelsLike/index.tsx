import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {FeelsLikeInfo} from '@/entities/WeatherWidgets';

type FeelsLikePropsType = {
	feelsLikeTemp: number
	actualTemp: number
}
export const FeelsLike: FC<FeelsLikePropsType> = ({feelsLikeTemp, actualTemp}) => {

	return (
		<ToolBox header={'Feels like'} className='order-7 flex h-48 flex-col justify-between'>
			<FeelsLikeInfo feelsLikeTemp={feelsLikeTemp} actualTemp={actualTemp}/>
		</ToolBox>
	);
};

