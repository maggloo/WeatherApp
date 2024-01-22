import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {DailyWeatherType} from '@/shared/types';
import {ForecastForOneDayInfo} from '@/entities/MainWeatherInfo';

type TenDayForecastPropsType = {
	forecast: DailyWeatherType[];
}
const TenDayForecast: FC<TenDayForecastPropsType> = ({forecast}) => {

	const temperatures = forecast.map((item: DailyWeatherType) => item.temp);
	const minTemperature = Math.min(...temperatures.map((temp) => temp.min));
	const maxTemperature = Math.max(...temperatures.map((temp) => temp.max));

	return (
		<ToolBox header={'10-Day Forecast'} className={'h-fit shrink-0'}>
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
