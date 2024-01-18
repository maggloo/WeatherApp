import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import AirPollutionInfo from '@/entities/ToolBox/ui/AirPollutionInfo/ui/AirPollutionInfo';
import {useAppSelector} from '@/app/store/store';
import {airPollutionSelector} from '@/shared/selectors/weatherSelectors';

const AirPollution = () => {
	const pollutionData = useAppSelector(airPollutionSelector);

	return (
		<ToolBox header={'Air pollution'} className="order-2 md:order-1 col-span-2 flex h-48 flex-col justify-between">
			<AirPollutionInfo pollutionData={pollutionData}/>
		</ToolBox>
	);
};

export default AirPollution;
