import React, {useEffect} from 'react';
import {useAppDispatch} from '@/app/store/store';
import {getSummaryWeather} from '@/entities/ToolBox/ui/MainInfo/model';

const Main = () => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSummaryWeather('Minsk'));
	}, []);


	return (
		<div>
            Main
		</div>
	);
};

export default Main;
