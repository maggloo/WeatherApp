import React, {FC} from 'react';
import {dayOfWeekCalculation} from '@/shared/utils/timeCalculation';
import WeatherIcon from '@/shared/ui/WeatherIcon/WeatherIcon';
import {Slider} from '@/shared/ui/RangeSlider/RangeSlider';
import {DailyWeatherType} from '@/shared/types';


type ForecastForOneDayInfoPropsType = {
    index: number
    item: DailyWeatherType
    minTemperature: number
    maxTemperature: number
    forecastArrayLength: number
}
const ForecastForOneDayInfo: FC<ForecastForOneDayInfoPropsType> = ({
	index,
	item,
	maxTemperature,
	minTemperature,
	forecastArrayLength}) => {
	return (
		<div>
			<div className="flex w-full flex-row items-center justify-between gap-2 last:mb-0">
				<p className="min-w-[3rem] font-medium">{index === 0 ? 'Today' : dayOfWeekCalculation(item.dt)}</p>
				<WeatherIcon alt={item.weather[0].icon} src={item.weather[0].icon} className={'h-8 w-8'}/>
				<div className="flex w-[60%] flex-row gap-2 overflow-hidden">
					<div className="flex w-full select-none flex-row items-center justify-between gap-2 pr-2 text-sm">
						<p className="flex w-[3rem] min-w-fit justify-end text-neutral-600 dark:text-neutral-400">
							{Math.floor(item.temp.min)}&deg;
						</p>
						<Slider min={minTemperature} max={maxTemperature} value={[item.temp.min, item.temp.max]} />
						<p className="flex w-[3rem] min-w-fit justify-end">
							{Math.floor(item.temp.max)}&deg;
						</p>
					</div>
				</div>
			</div>
			{ index !== forecastArrayLength - 1 && <div className="border-b mt-3"></div> }
		</div>
	);
};

export default ForecastForOneDayInfo;
