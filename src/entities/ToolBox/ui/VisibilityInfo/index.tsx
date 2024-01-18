import React, {FC} from 'react';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type VisibilityInfoPropsType = {
    visibility: number
}
const VisibilityInfo: FC<VisibilityInfoPropsType> = ({ visibility }) => {
	return (
		<>
			<CardContent className='my-auto'>
				<div>{Math.round(visibility / 1000)} km</div>
			</CardContent>
			<CardFooter>
				<p>
					{visibility >= 7
						? 'Perfectly clear view.'
						: visibility >= 4
							? 'Fairly clear view.'
							: 'Poor visibility.'}
				</p>
			</CardFooter>
		</>
	);
};

export default VisibilityInfo;
