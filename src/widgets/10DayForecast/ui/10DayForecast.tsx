import React from 'react';
import {useAppSelector} from '@/app/store/store';
import {tenDayWeatherSelector} from '@/shared/selectors/weatherSelectors';
import TenDaysForecastInfo from '@/entities/ToolBox/ui/SummaryWeatherInfo/ui/TenDaysForecastInfo';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';

const TenDayForecast = () => {
	const forecast = useAppSelector(tenDayWeatherSelector);

	return (
		<ToolBox>
			<TenDaysForecastInfo forecastArray={forecast}/>
		</ToolBox>
	);
};

export default TenDayForecast;
