import React, {useEffect} from 'react';
import MainWeather from '@/widgets/MainWeather';
import {getSummaryWeather} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/model';
import {useAppDispatch} from '@/app/store/store';
import WeatherWidgets from '@/widgets/WeatherWidgets';
import {Nav} from '@/widgets/Nav';

const Main = () => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSummaryWeather({lat: 53.9006, lng: 27.5590}));
	}, []);


	return (
		<div className="container mx-auto flex min-h-screen flex-col px-[1rem] antialiased md:px-[2rem]">
			<div className="flex-grow">
				<Nav />
				<div className="flex flex-col gap-4 md:flex-row">
					<MainWeather />
					<WeatherWidgets />
				</div>
			</div>
		</div>
	);
};

export default Main;
