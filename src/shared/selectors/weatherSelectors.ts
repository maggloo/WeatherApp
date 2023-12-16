import {AppRootStateType} from '@/app/store/store';

export const weatherSelector = (state: AppRootStateType) => state.weather.weather;

export const mainSelector = (state: AppRootStateType) => state.weather.main;
