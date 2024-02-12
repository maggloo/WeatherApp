import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/app/store/store';
import {Nav} from '@/widgets/Nav';
import {appStatusSelector} from '@/shared/selectors/weatherSelectors';
import {Loading} from '@/shared/ui/Loading';
import {Error} from '@/shared/ui/Error';
import {getStartCity} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/model';
import MainWeather from '@/widgets/MainWeather';
import WeatherWidgets from '@/widgets/WeatherWidgets';
import {useRouter} from 'next/router';

const Main = () => {
	const status = useAppSelector(appStatusSelector);
	const dispatch = useAppDispatch();
	const {query, isReady} = useRouter();


	useEffect(()=> {
		if (isReady && query.lat && query.lon && query.id) {
			dispatch(getStartCity({lat: query.lat, lng: query.lon, id: query.id as string}));
		} else if (isReady) {
			dispatch(getStartCity());
		}
	}, [isReady]);

	return (
		<>
			<div className="container mx-auto flex min-h-screen flex-col px-[1rem] antialiased md:px-[2rem]">
				<div className="flex-grow">
					<Nav />
					{
						status === 'loading' ? <Loading /> :
							status === 'success' ?
								<div className="flex flex-col gap-4 md:flex-row">
									<MainWeather />
									<WeatherWidgets />
								</div>
								: <Error />
					}
				</div>
			</div>
		</>
	);
};

export default Main;
