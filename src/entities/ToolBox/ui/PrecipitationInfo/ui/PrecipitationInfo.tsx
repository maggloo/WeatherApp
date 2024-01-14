import React, {FC} from 'react';
import {PrecipitationType} from '@/shared/types';

type PrecipitationInfoPropsType = {
	precipitation: PrecipitationType | undefined
	typePrecip: string | undefined
}
const PrecipitationInfo: FC<PrecipitationInfoPropsType> = ({ precipitation, typePrecip }) => {
	return (
		<div>
			<p className='font-semibold'>
				{precipitation?.['1h'] || 0}mm <br></br>in the last 3h
			</p>
			<div className="mt-6 flex items-center pt-0 text-xs">
				{typePrecip
					? typePrecip === 'Snow'
						? 'Snowy conditions.' : 'Rainy conditions.'
					: 'Conditions are dry.'}
			</div>
		</div>

	);
};

export default PrecipitationInfo;
