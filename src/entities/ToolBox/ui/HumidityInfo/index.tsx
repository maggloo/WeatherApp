import React, {FC} from 'react';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type HumidityInfoPropsType = {
    humidity: number
}
const HumidityInfo: FC<HumidityInfoPropsType> = ({ humidity }) => {
	return (
		<>
			<CardContent className='my-auto'>
				<div>{Math.round(humidity)}&#37;</div>
			</CardContent>
			<CardFooter>
				<p>
					{humidity < 40
						? 'Low humidity.'
						: humidity < 70
							? 'Moderate humidity.'
							: 'High humidity.'}
				</p>
			</CardFooter>
		</>
	);
};

export default HumidityInfo;
