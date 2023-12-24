import {AppRootStateType} from '@/app/store/store';


export const weatherSelector = (state: AppRootStateType) => state.weather.weather;
export const tempSelector = (state: AppRootStateType) => state.weather.currentTemp;
// export const dtSelector = (state: AppRootStateType) => state.weather.dt;
export const dateSelector = (state: AppRootStateType) => state.weather.currentDate;
export const timeSelector = (state: AppRootStateType) => state.weather.currentTime;
export const daySelector = (state: AppRootStateType) => state.weather.currentDay;
export const tenDayWeatherSelector = (state: AppRootStateType) => state.weather.forecastList;

export const hourlyWeatherSelector = (state: AppRootStateType) => state.weather.hourlyWeather;
