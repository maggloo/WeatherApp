import React, {FC} from 'react';
import {PrecipitationType} from '@/shared/types';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type PrecipitationInfoPropsType = {
	precipitation: PrecipitationType | undefined
	typePrecipitation: string | undefined
}
export const PrecipitationInfo: FC<PrecipitationInfoPropsType> = ({ precipitation, typePrecipitation }) => {
	return (
		<div>
			<CardContent className="mb-8">
				{precipitation?.['1h'] || 0}mm <br></br>in the last 3h
			</CardContent>
			<CardFooter>
				{typePrecipitation
					? typePrecipitation === 'snow'
						? 'Snowy conditions.' : 'Rainy conditions.'
					: 'Conditions are dry.'}
			</CardFooter>
		</div>

	);
};
