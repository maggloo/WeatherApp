import {AppRootStateType} from '@/app/store/store';


export const weatherSelector = (state: AppRootStateType) => state.weather.weather;
export const tempSelector = (state: AppRootStateType) => state.weather.currentTemp;
// export const dtSelector = (state: AppRootStateType) => state.weather.dt;
export const dateSelector = (state: AppRootStateType) => state.weather.currentDate;
export const humiditySelector = (state: AppRootStateType) => state.weather.humidity;
export const visibilitySelector = (state: AppRootStateType) => state.weather.visibility;
export const pressureSelector = (state: AppRootStateType) => state.weather.pressure;

export const timeSelector = (state: AppRootStateType) => state.weather.currentTime;
export const daySelector = (state: AppRootStateType) => state.weather.currentDay;
export const sunsetSelector = (state: AppRootStateType) => state.weather.sunset;
export const sunriseSelector = (state: AppRootStateType) => state.weather.sunrise;
export const windSelector = (state: AppRootStateType) => state.weather.wind;
export const precipitationSelector = (state: AppRootStateType) => state.weather.hourlyWeather[0];
export const tenDayWeatherSelector = (state: AppRootStateType) => state.weather.forecastList;
export const hourlyWeatherSelector = (state: AppRootStateType) => state.weather.hourlyWeather;
export const feelsLikeSelector = (state: AppRootStateType) => state.weather.feelsLike;
export const uvIndexSelector = (state: AppRootStateType) => state.weather.uv;
export const airPollutionSelector = (state: AppRootStateType) => state.weather.airPollution;
