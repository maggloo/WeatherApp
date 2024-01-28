import React from 'react';
import Image from 'next/image';
import Loader from '@/shared/assets/preloader/preloader.svg';

export const Loading = () => {
	return (
		<div className="flex w-full h-[80vh] items-center justify-center">
			<Image src={Loader} alt={'loading'} priority />
		</div>
	);
};

