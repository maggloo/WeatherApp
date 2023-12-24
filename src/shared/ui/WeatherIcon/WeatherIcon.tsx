import React, {FC} from 'react';
import Image from 'next/image';

type WeatherIconPropsType = {
    src: string
    alt: string
	className?: string
}
const WeatherIcon: FC<WeatherIconPropsType> = ({src, alt, className}) => {
	return (
		<div className={`relative invert-0 dark:invert ${className}`}>
			<Image src={`https://openweathermap.org/img/wn/${src}@4x.png`} alt={alt} sizes={'100%'} fill />
		</div>
	);
};

export default WeatherIcon;
