import {useAppDispatch} from '@/app/store/store';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {updateCurrentCity} from '@/features/SearchCities/model';
import AutocompletePrediction = google.maps.places.AutocompletePrediction;
import {useRouter} from 'next/router';


export const usePlacesAutocompleteHook = () => {
	const router = useRouter();

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

	const handleSelect = ({ description }: AutocompletePrediction) => () => {
        	// When the user selects a place, we can replace the keyword without request data from API// by setting the second parameter to "false"
        	setValue(description, false);
        	clearSuggestions();

        	// Get latitude and longitude via utility functions
        	getGeocode({ address: description }).then((results) => {
        		const { lat, lng } = getLatLng(results[0]);
			const { place_id } = results[0];
        		dispatch(updateCurrentCity({lat: lat.toString(), lng: lng.toString(), name: description}));
			router.push(`/?lat=${lat}&lon=${lng}&id=${place_id}`);
        	});
	};

	return {
		handleSelect,
		value,
		ready,
		status,
		data,
		setValue
	};
};
