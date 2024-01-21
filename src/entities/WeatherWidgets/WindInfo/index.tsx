import React from 'react';
import Image from 'next/image';
import windRose from '@/shared/assets/images/compass.svg';
import {GiArrowhead} from 'react-icons/gi';
import {WindType} from '@/shared/types';
import CardContent from '@/shared/ui/CardContent';
import CardFooter from '@/shared/ui/CardFooter';

type WindInfoPropsType = {
    wind:  WindType
}

export const WindInfo = (props: WindInfoPropsType) => {
	return (
		<div className="relative">
			<CardContent className="flex relative justify-center">
				<Image src={windRose} alt={'compass'} height={120} width={120}/>
				<GiArrowhead size={'35%'} className="text-gray-800 absolute origin-center top-[31%] left-[34%]" style={{ transform: `rotate(${props.wind.direction + 50}deg)`}}/>
			</CardContent>
			<CardFooter className='text-sm font-semibold absolute -top-[29px] right-0 md:-top-[34.5px] text-neutral-600'>
				{props.wind.speed}m/s
			</CardFooter>
		</div>
	);
};

