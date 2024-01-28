import {combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {weatherReducer} from '@/entities/MainWeatherInfo/SummaryWeatherInfo/model';
import {citiesReducer} from '@/features/SearchCities/model';
import {appReducer} from '@/app/model';

const rootReducer = combineReducers({
	weather: weatherReducer,
	cities: citiesReducer,
	app: appReducer
});
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().prepend(thunk)
});


export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
