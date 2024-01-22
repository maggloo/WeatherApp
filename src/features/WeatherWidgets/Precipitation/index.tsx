import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {PrecipitationInfo} from '@/entities/WeatherWidgets';
import {PrecipitationType} from '@/shared/types';

type PrecipitationPropsType = {
	precipitationInfo: PrecipitationType | undefined
	type:  string | undefined
}
export const Precipitation: FC<PrecipitationPropsType> = ({ precipitationInfo, type}) => {

	return (
		<ToolBox header="Index" className="order-6 flex h-48 flex-col justify-between">
			<PrecipitationInfo precipitation={precipitationInfo} typePrecipitation={type} />
		</ToolBox>
	);
};

