import React, {FC} from 'react';
import CardContent from '@/shared/ui/CardContent';
import ProgressBar from '@/shared/ui/ProgressBar';


type UVInfoPropsType = {
	uvIndex: number
}
export const UVInfo: FC<UVInfoPropsType> = ({uvIndex}) => {
	return (
		<>
			<CardContent className="my-auto">
				<div className="mb-2">
					<div> {Math.round(uvIndex)} </div>
					<div> {
						uvIndex <= 2 ?
							'Low'
							: uvIndex <= 5 ?
								'Moderate'
								: uvIndex <= 7 ?
									'High'
									: uvIndex <= 10 ?
										'Very high'
										: 'Extreme'

					} </div>
				</div>
				<ProgressBar value={uvIndex * 8} />
			</CardContent>
		</>
	);
};
