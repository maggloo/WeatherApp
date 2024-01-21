import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppSelector} from '@/app/store/store';
import {visibilitySelector} from '@/shared/selectors/weatherSelectors';
import {VisibilityInfo} from '@/entities/WeatherWidgets';

export const Visibility = () => {

	const visibility = useAppSelector(visibilitySelector);

	return (
		<ToolBox header={'Visibility'} className='order-9 flex h-48 flex-col justify-between'>
			<VisibilityInfo visibility={visibility}/>
		</ToolBox>
	);
};

