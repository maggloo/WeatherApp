import React from 'react';
import {useAppSelector} from '@/app/store/store';
import {windSelector} from '@/shared/selectors/weatherSelectors';
import { WiDirectionUp } from 'react-icons/wi';
const Windrose = () => {
	const wind = useAppSelector(windSelector);
	console.log(wind);


	return (
		<div>
			<div className="h-48 relative">
				<span className="absolute t-8">N</span>
				<span className="absolute b-8">E</span>
				<span>S</span>
				<span>W</span>
			</div>
			<WiDirectionUp size={'100'} style={{ transform: `rotate(${wind.direction + 180}deg)` }}/>
			<div>
				<p>
					{wind.speed}m/s
				</p>
			</div>
		</div>
	);
};

export default Windrose;
