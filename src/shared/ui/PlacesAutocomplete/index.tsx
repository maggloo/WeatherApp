import React from 'react';
import {Input} from '@/shared/ui/Input';
import {List} from '@/shared/ui/List';
import {usePlacesAutocompleteHook} from '@/shared/ui/PlacesAutocomplete/model';

export const PlacesAutocomplete = () => {
	const { handleSelect,
		value,
		ready,
		status,
		data,
		setValue } = usePlacesAutocompleteHook();

	return (
		<div className='absolute top-4 md:w-1/2 w-full'>
			<Input setValue={setValue} searchValue={value} disabled={!ready} placeholder={'Search city...'} />
			{!!data.length && <List data={data} handleSelect={handleSelect} status={status}/> }
		</div>
	);
};
