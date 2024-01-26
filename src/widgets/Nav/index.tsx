import React from 'react';
import {PlacesAutocomplete} from '@/shared/ui/PlacesAutocomplete';

export const Nav = () => {
	return (
		<div className='flex items-center justify-end py-4'>
			<div className='w-full flex justify-end'>
				<PlacesAutocomplete />
			</div>
		</div>
	);
};
