import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import FeelsLikeInfo from '@/entities/ToolBox/ui/FeelsLikeInfo';
import {useAppSelector} from '@/app/store/store';
import {feelsLikeSelector, tempSelector} from '@/shared/selectors/weatherSelectors';

const FeelsLike = () => {

	const feelsLike = useAppSelector(feelsLikeSelector);
	const actualTemp = useAppSelector(tempSelector);

	return (
		<ToolBox header={'Feels like'} className='order-7 flex h-48 flex-col justify-between'>
			<FeelsLikeInfo feelsLikeTemp={feelsLike} actualTemp={actualTemp}/>
		</ToolBox>
	);
};

export default FeelsLike;
