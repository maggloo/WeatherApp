import React, {useEffect} from 'react';
import MainWeather from '@/widgets/MainWeather';
import {getSummaryWeather} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/model';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import WeatherWidgets from '@/widgets/WeatherWidgets';
import {Nav} from '@/widgets/Nav';
import {appStatusSelector} from '@/shared/selectors/weatherSelectors';
import {Loading} from '@/shared/ui/Loading';

const Main = () => {

	const dispatch = useAppDispatch();
	const status = useAppSelector(appStatusSelector);

	useEffect(() => {
		dispatch(getSummaryWeather({lat: 53.9006, lng: 27.5590}));
	}, []);

	console.log(status);
	return (
		<div className="container mx-auto flex min-h-screen flex-col px-[1rem] antialiased md:px-[2rem]">
			<div className="flex-grow">
				<Nav />
				{
					status === 'loading' ? <Loading /> :
						<div className="flex flex-col gap-4 md:flex-row">
							<MainWeather />
							<WeatherWidgets />
						</div>
				}
			</div>
		</div>
	);
};

export default Main;
