import React, {FC} from 'react';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type SunsetInfoPropsType = {
    sunset: string
    sunrise: string
}

export const SunsetInfo: FC<SunsetInfoPropsType> = ({sunset, sunrise}) => {
	return (
		<>
			<CardContent className="mt-4">
				{sunset}
			</CardContent>
			<CardFooter>
				<p>
					Sunrise: {sunrise}
				</p>
			</CardFooter>
		</>
	);
};
