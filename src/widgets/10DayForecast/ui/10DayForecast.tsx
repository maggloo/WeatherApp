import React from 'react';
import {useAppSelector} from '@/app/store/store';
import {tenDayWeatherSelector} from '@/shared/selectors/weatherSelectors';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import ForecastForOneDayInfo from '@/entities/ToolBox/ui/TenDaysForecastInfo/ui/ForecastForOneDayInfo/ui';
import {DailyWeatherType} from '@/shared/types';

const TenDayForecast = () => {
	const forecast = useAppSelector(tenDayWeatherSelector);

	const temperatures = forecast.map((item: DailyWeatherType) => item.temp);
	const minTemperature = Math.min(...temperatures.map((temp) => temp.min));
	const maxTemperature = Math.max(...temperatures.map((temp) => temp.max));

	return (
		<ToolBox header className={'h-fit shrink-0'}>
			<div className="space-y-2 text-base font-normal md:mb-1">
				{ forecast.map((item, i) => (
					<ForecastForOneDayInfo
						key={i}
						forecastArrayLength={forecast.length}
						item={item}
						index={i}
						maxTemperature={maxTemperature}
						minTemperature={minTemperature}
					/>
				))}
			</div>
		</ToolBox>
	);
};

export default TenDayForecast;
