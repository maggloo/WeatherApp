import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import PrecipitationInfo from '@/entities/ToolBox/ui/PrecipitationInfo/ui/PrecipitationInfo';
import {useAppSelector} from '@/app/store/store';
import {precipitationSelector} from '@/shared/selectors/weatherSelectors';

const Precipitation = () => {

	const precipitationInfo = useAppSelector(precipitationSelector);


	const typePrecip = precipitationInfo && (precipitationInfo.rain ? 'Rain' : precipitationInfo.snow ? 'Snow' : undefined);

	return (
		<ToolBox header="Precipitation" className="order-6 flex h-48 flex-col justify-between">
			<PrecipitationInfo precipitation={precipitationInfo && (precipitationInfo.rain || precipitationInfo.snow)} typePrecip={typePrecip} />
		</ToolBox>
	);
};

export default Precipitation;
