import * as SliderPrimitive from '@radix-ui/react-slider';
import React, {useState} from 'react';

type SliderProps = {
    className?: string
    min: number
    max: number
    minStepsBetweenThumbs?: number
    formatLabel?: (value: number) => string
    value?: number[] | readonly number[]
    onValueChange?: (values: number[]) => void
}
const Slider = React.forwardRef(({ className,
	min,
	max,
	formatLabel,
	value,
	onValueChange,
	...props}: SliderProps, forwardedRef) => {
	const initialValue = Array.isArray(value) ? value : [min, max];
	const [localValues, setLocalValues] = useState(initialValue);
	const handleValueChange = (newValues: number[]) => {
		setLocalValues(newValues);
		if (onValueChange) {
			onValueChange(newValues);
		}
	};

	return (
		<SliderPrimitive.Root
			ref={forwardedRef as React.RefObject<HTMLDivElement>}
			min={min}
			max={max}
			value={localValues}
			onValueChange={handleValueChange}
			disabled={true}
			className={`relative flex w-full max-w-[17rem] touch-none select-none items-center md:max-w-[8rem] ${className}`}
			{...props}
		>
			<SliderPrimitive.Track className="relative h-1.5 w-full grow select-none overflow-hidden rounded-full bg-gray-300">
				<SliderPrimitive.Range className="absolute h-full rounded-full bg-gradient-to-l from-green-300 to-blue-400" />
			</SliderPrimitive.Track>
		</SliderPrimitive.Root>
	);
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
