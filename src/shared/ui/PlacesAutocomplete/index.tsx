import React from 'react';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {Input} from '@/shared/ui/Input';
import {List} from '@/shared/ui/List';
import AutocompletePrediction = google.maps.places.AutocompletePrediction;
import {useAppDispatch} from '@/app/store/store';
import {updateCurrentCity} from '@/features/SearchCities/model';

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

	const dispatch = useAppDispatch();

	const handleSelect =
        ({ description }: AutocompletePrediction) => () => {
        	// When the user selects a place, we can replace the keyword without request data from API// by setting the second parameter to "false"
        	setValue(description, false);
        	clearSuggestions();

        	// Get latitude and longitude via utility functions
        	getGeocode({ address: description }).then((results) => {
        		const { lat, lng } = getLatLng(results[0]);
        		dispatch(updateCurrentCity({lat, lng}));
        	});
        };

	return (
		<div className='absolute top-4 md:w-1/2 w-full'>
			<Input setValue={setValue} searchValue={value} disabled={!ready} placeholder={'Search city...'} />
			{!!data.length && <List data={data} handleSelect={handleSelect} status={status}/> }
		</div>
	);
};
