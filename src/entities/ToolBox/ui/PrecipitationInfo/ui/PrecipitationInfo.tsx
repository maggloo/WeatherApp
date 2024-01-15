import React, {FC} from 'react';
import {PrecipitationType} from '@/shared/types';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type PrecipitationInfoPropsType = {
	precipitation: PrecipitationType | undefined
	typePrecipitation: 'Snow' | 'Rain' | undefined
}
const PrecipitationInfo: FC<PrecipitationInfoPropsType> = ({ precipitation, typePrecipitation }) => {
	return (
		<div>
			<CardContent className="mb-6">
				{precipitation?.['1h'] || 0}mm <br></br>in the last 3h
			</CardContent>
			<CardFooter>
				{typePrecipitation
					? typePrecipitation === 'Snow'
						? 'Snowy conditions.' : 'Rainy conditions.'
					: 'Conditions are dry.'}
			</CardFooter>
		</div>

	);
};

export default PrecipitationInfo;
