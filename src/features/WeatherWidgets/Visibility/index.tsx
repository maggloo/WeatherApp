import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {VisibilityInfo} from '@/entities/WeatherWidgets';

type VisibilityPropsType = {
	visibility: number
}
export const Visibility: FC<VisibilityPropsType> = ({ visibility}) => {

	return (
		<ToolBox header={'Visibility'} className='order-9 flex h-48 flex-col justify-between'>
			<VisibilityInfo visibility={visibility}/>
		</ToolBox>
	);
};

