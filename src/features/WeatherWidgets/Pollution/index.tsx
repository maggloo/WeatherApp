import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppSelector} from '@/app/store/store';
import {airPollutionSelector} from '@/shared/selectors/weatherSelectors';
import {AirPollutionInfo} from '@/entities/WeatherWidgets';

export const Pollution = () => {
	const pollutionData = useAppSelector(airPollutionSelector);

	return (
		<ToolBox header={'Air pollution'} className="order-2 md:order-1 col-span-2 flex h-48 flex-col justify-between">
			<AirPollutionInfo pollutionData={pollutionData}/>
		</ToolBox>
	);
};

