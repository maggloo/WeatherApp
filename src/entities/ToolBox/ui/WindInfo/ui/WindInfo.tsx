import React from 'react';
import Image from 'next/image';
import windRose from '@/shared/assets/images/compass.svg';
import {GiArrowhead} from 'react-icons/gi';
import {WindType} from '@/shared/types';

type WindInfoPropsType = {
    wind:  WindType
}

const WindInfo = (props: WindInfoPropsType) => {
	return (
		<div>
			<div className="flex relative justify-center">
				<Image src={windRose} alt={'compass'} height={120} width={120}/>
				<GiArrowhead size={'35%'} className="text-gray-800 absolute origin-center top-[31%] left-[34%]" style={{ transform: `rotate(${props.wind.direction + 50}deg)`}}/>
			</div>
			<div className="flex justify-center pt-3">
				<p className="text-sm font-semibold">
					{props.wind.speed}m/s
				</p>
			</div>
		</div>
	);
};

export default WindInfo;
