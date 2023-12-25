import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {useAppSelector} from '@/app/store/store';
import {sunriseSelector, sunsetSelector} from '@/shared/selectors/weatherSelectors';
import SunsetInfo from '@/entities/ToolBox/ui/SunsetInfo/ui/SunsetInfo';

const Sunset = () => {

	const sunset = useAppSelector(sunsetSelector);
	const sunrise = useAppSelector(sunriseSelector);

	console.log(sunset, sunrise);
	return (
		<ToolBox header={'Sunset'} className="order-3 flex h-48 flex-col justify-between lg:order-2">
			<SunsetInfo sunset={sunset} sunrise={sunrise} />
		</ToolBox>
	);
};

export default Sunset;
