import React, {FC} from 'react';
import {tempCalculation} from '@/shared/utils';


type CurrentTemperatureInfoPropsType = {
	temperature: number
}
const CurrentTemperatureInfo: FC<CurrentTemperatureInfoPropsType> = ({ temperature }) => {
	return (
		<div className={'flex justify-center py-7 text-8xl font-bold md:py-10'}> {`${tempCalculation(temperature)}°`} </div>
	);
};

export default CurrentTemperatureInfo;
