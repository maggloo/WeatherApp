import React from 'react';
import {useAppSelector} from '@/app/store/store';
import {windSelector} from '@/shared/selectors/weatherSelectors';
import { GiArrowhead } from 'react-icons/gi';
import windRose from './compass-with-earth-cardinal-points-directions-svgrepo-com.svg';
import Image from 'next/image';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
const Windrose = () => {
	const wind = useAppSelector(windSelector);
	console.log(wind);


	return (
		<ToolBox className="h-48">
			<div>
				<div className="flex relative justify-center">
					<Image src={windRose} alt={'compass'} height={120} width={120}/>
					<GiArrowhead size={'35%'} className="text-gray-800 absolute origin-center top-[31%] left-[34%]" style={{ transform: `rotate(${wind.direction + 50}deg)`}}/>
				</div>
				<div className="flex justify-center pt-3">
					<p className="text-sm font-semibold">
						{wind.speed}m/s
					</p>
				</div>
			</div>

		</ToolBox>
	);
};

export default Windrose;
