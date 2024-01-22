import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {UVInfo} from '@/entities/WeatherWidgets';

type UVIndexPropsType = {
	uvi: number
}
export const UVIndex: FC<UVIndexPropsType> = ({ uvi }) => {

	return (
		<ToolBox header="UV Index" className="order-5 flex h-48 flex-col justify-between">
			<UVInfo uvIndex={uvi}/>
		</ToolBox>
	);
};

