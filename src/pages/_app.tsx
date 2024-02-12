import { Provider } from 'react-redux';
import {store} from '@/app/store/store';
import {Theme} from '@radix-ui/themes';
import Main from '@/pages/Main';
import Script from 'next/script';
import React from 'react';


export default function App() {
	return (
		<Provider store={store}>
			<Theme>
				<Main />
			</Theme>

			<Script
				strategy={'beforeInteractive'}
				src={'https://maps.googleapis.com/maps/api/js?key=AIzaSyBG--65HDrid-7sV0CXIKL7xLMXsmzLhYs&libraries=places&callback=Function.prototype'}
			/>
		</Provider>
	);
}
