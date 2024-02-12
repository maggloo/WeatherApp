import React from 'react';
import {useRouter} from 'next/router';
import {Button} from '@radix-ui/themes';

export const Error = () => {
	const {replace, reload} = useRouter();

	const onClickHandler = () => {
		void replace('/');
		setTimeout(() => {
			reload();
		}, 500);
	};

	return (
		<div className={'flex justify-center flex-col items-center mt-24 gap-16'}>
			<p>There was a problem loading the weather data.</p>
			<Button onClick={onClickHandler}> Go back to Home </Button>
		</div>
	);
};
