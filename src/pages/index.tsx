import React from 'react';

import {Provider} from 'react-redux';
import {store} from '@/app/store/store';
import Main from '@/pages/Main';
import '../app/globals.css';
import '@radix-ui/themes/styles.css';
import {Theme} from '@radix-ui/themes';
import Script from 'next/script';


export default function App() {

	return (
		<>
			<Provider store={store}>
				<Theme>
					<Main />
				</Theme>
			</Provider>
			<Script
				strategy={'beforeInteractive'}
				src={'https://maps.googleapis.com/maps/api/js?key=AIzaSyBG--65HDrid-7sV0CXIKL7xLMXsmzLhYs&libraries=places&callback=Function.prototype'}
			/>
		</>

	);
}
