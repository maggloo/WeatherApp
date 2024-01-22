import {AppRootStateType} from '@/app/store/store';

export const currentWeatherSelector = (state: AppRootStateType) => state.weather.current;
export const dailyWeatherSelector = (state: AppRootStateType) => state.weather.daily;
export const hourlyWeatherSelector = (state: AppRootStateType) => state.weather.hourly;
