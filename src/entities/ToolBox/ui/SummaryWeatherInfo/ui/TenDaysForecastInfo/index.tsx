import React, {FC} from 'react';
import {Slider} from '@/shared/ui/RangeSlider/RangeSlider';
import {DailyWeatherType} from '@/shared/types';
import {dayOfWeekCalculation} from '@/shared/utils/timeCalculation';
import Image from 'next/image';

type TenDaysForecastInfoPropsType = {
    forecastArray: DailyWeatherType[]
}
const TenDaysForecastInfo: FC<TenDaysForecastInfoPropsType> = ({forecastArray}) => {
	const temperatures = forecastArray.map((item: DailyWeatherType) => item.temp);
	const minTemperature = Math.min(...temperatures.map((temp) => temp.min));
	const maxTemperature = Math.max(...temperatures.map((temp) => temp.max));

	console.log(forecastArray);
	return (
		<div className="space-y-2 text-base font-normal md:mb-1">
			{ forecastArray.map((item, i) => (
				<div key={i}>
					<div className="flex w-full flex-row items-center justify-between gap-2 last:mb-0">
						<p className="min-w-[3rem] font-medium">{i === 0 ? 'Today' : dayOfWeekCalculation(item.dt)}</p>
						<div className="relative invert-0 dark:invert h-8 w-8">
							<Image src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt={item.weather[0].icon} fill />
						</div>
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
					{ i !== forecastArray.length - 1 && <div className="border-b mt-3"></div> }
				</div>
			))}
		</div>
	);
};

export default TenDaysForecastInfo;
