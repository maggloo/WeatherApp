import React, {FC} from 'react';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type PressureInfoPropsType = {
    pressure: number
}
export const PressureInfo: FC<PressureInfoPropsType> = ({ pressure }) => {
	return (
		<>
			<CardContent className='my-auto'>
				<div>{pressure} hPa</div>
			</CardContent>
			<CardFooter>
				<p>
					{pressure < 1000
						? 'Low pressure.'
						: pressure >= 1000 && pressure <= 1010
							? 'Normal pressure.'
							: 'High pressure.'}
				</p>
			</CardFooter>
		</>
	);
};

