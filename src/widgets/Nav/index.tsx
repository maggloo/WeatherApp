import React from 'react';
import {PlacesAutocomplete} from '@/shared/ui/PlacesAutocomplete';

export const Nav = () => {
	return (
		<div className='flex relative h-16 items-center justify-end py-4'>
			<PlacesAutocomplete />
		</div>
	);
};
