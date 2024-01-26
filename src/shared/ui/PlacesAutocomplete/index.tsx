import React from 'react';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {Input} from '@/shared/ui/Input';
import {List} from '@/shared/ui/List';

export const PlacesAutocomplete = () => {

	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		callbackName: 'YOUR_CALLBACK_NAME',
		requestOptions: {
			types: ['(cities)'],
		},
		debounce: 300,
	});

	const handleSelect =
        ({ description }: never) => () => {
        	// When the user selects a place, we can replace the keyword without request data from API// by setting the second parameter to "false"
        	setValue(description, false);
        	clearSuggestions();

        	// Get latitude and longitude via utility functions
        	getGeocode({ address: description }).then((results) => {
        		const { lat, lng } = getLatLng(results[0]);
        		console.log('📍 Coordinates: ', { lat, lng });
        	});
        };

	return (
		<div>
			{/* We can use the "status" to decide whether we should display the dropdown or not */}
			<Input setValue={setValue} searchValue={value} disabled={!ready} placeholder={'Search city...'} />
			<List data={data} handleSelect={handleSelect} status={status}/>
		</div>
	);
};