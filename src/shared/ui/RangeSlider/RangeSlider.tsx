import * as SliderPrimitive from '@radix-ui/react-slider';
import React, {FC, useEffect, useState} from 'react';

type SliderProps = {
    className?: string
    min: number
    max: number
    minStepsBetweenThumbs?: number
    value?: number[] | readonly number[]
}
export const Slider: FC<SliderProps> = ({ className,
	min,
	max,
	value,
	...props}) => {

	const initialValue = Array.isArray(value) ? value : [min, max];
	const [localValues, setLocalValues] = useState(initialValue);

	useEffect(() => {
		setLocalValues(initialValue);
	}, [initialValue]);

	return (
		<SliderPrimitive.Root
			min={min}
			max={max}
			value={localValues}
			disabled={true}
			className={'relative flex w-full max-w-[17rem] touch-none select-none items-center md:max-w-[8rem]'}
			{...props}
		>
			<SliderPrimitive.Track className="relative h-1.5 w-full grow select-none overflow-hidden rounded-full bg-gray-300">
				<SliderPrimitive.Range className="absolute h-full rounded-full bg-gradient-to-l from-green-300 to-blue-400" />
			</SliderPrimitive.Track>
		</SliderPrimitive.Root>
	);
};
