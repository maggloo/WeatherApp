import React, {FC} from 'react';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type FeelsLikeInfoPropsType = {
	feelsLikeTemp: number
	actualTemp: number
}
const FeelsLikeInfo: FC<FeelsLikeInfoPropsType> = ({ feelsLikeTemp, actualTemp }) => {
	return (
		<>
			<CardContent className='my-auto'>
				<div>{Math.round(feelsLikeTemp)}&deg;</div>
			</CardContent>
			<CardFooter>
				{ Math.round(feelsLikeTemp) > Math.round(actualTemp)
					? 'Feels warmer than the actual temperature.'
					: Math.round(feelsLikeTemp) < Math.round(actualTemp)
						? 'Feels colder than the actual temperature.'
						: 'Feels like the actual temperature.'
				}
			</CardFooter>
		</>
	);
};

export default FeelsLikeInfo;
