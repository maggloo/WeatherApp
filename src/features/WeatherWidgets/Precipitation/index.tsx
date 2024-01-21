import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppSelector} from '@/app/store/store';
import {precipitationSelector} from '@/shared/selectors/weatherSelectors';
import {PrecipitationInfo} from '@/entities/WeatherWidgets';

export const Precipitation = () => {

	const precipitationInfo = useAppSelector(precipitationSelector);


	const typePrecipitation = precipitationInfo && (precipitationInfo.rain ? 'Rain' : precipitationInfo.snow ? 'Snow' : undefined);

	return (
		<ToolBox header="Index" className="order-6 flex h-48 flex-col justify-between">
			<PrecipitationInfo precipitation={precipitationInfo && (precipitationInfo.rain || precipitationInfo.snow)} typePrecipitation={typePrecipitation} />
		</ToolBox>
	);
};

