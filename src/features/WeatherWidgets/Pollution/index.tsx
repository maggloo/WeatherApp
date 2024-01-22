import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {AirPollutionInfo} from '@/entities/WeatherWidgets';

type PollutionPropsType = {
	pollutionData?: number
}
export const Pollution: FC<PollutionPropsType> = ({ pollutionData }) => {

	return (
		<ToolBox header={'Air pollution'} className="order-2 md:order-1 col-span-2 flex h-48 flex-col justify-between">
			{ pollutionData && <AirPollutionInfo pollutionData={pollutionData}/> }
		</ToolBox>
	);
};

