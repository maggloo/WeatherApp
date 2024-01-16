import React, {FC} from 'react';
import ProgressBar from '@/shared/ui/ProgressBar';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type AirPollutionInfoPropsType = {
	pollutionData: number
}
const AirPollutionInfo: FC<AirPollutionInfoPropsType> = ({ pollutionData }) => {
	console.log(pollutionData);
	return (
		<>
			<CardContent className="my-auto">
				<ProgressBar value={pollutionData}/>
			</CardContent>
			<CardFooter>
				{pollutionData <= 1
					? 'Air quality is good.'
					: pollutionData <= 2 ?
						'Air quality is fair.'
						: pollutionData <= 3 ?
							'Air quality is moderate.'
							: pollutionData <= 4 ?
								'Air quality is poor.'
								: 'Air quality is very poor.'
				}
			</CardFooter>
		</>
	);
};

export default AirPollutionInfo;
