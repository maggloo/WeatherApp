import React from 'react';

import {Provider} from 'react-redux';
import {store} from '@/app/store/store';
import Main from '@/pages/Main';


export default function App() {

	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}
