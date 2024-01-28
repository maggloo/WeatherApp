export type ForecastSummaryResponseType = {
    lat: string
    lon: string
    timezone: string
    timezone_offset: number
    current: CurrentWeatherType
    hourly: HourlyWeatherType[]
    daily: DailyWeatherType[]
}
export type CurrentWeatherType = {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    snow?: PrecipitationType
    rain?: PrecipitationType
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: WeatherType[]
}

export type HourlyWeatherType = {
    dt: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: WeatherType[]
    pop: number
    rain?: PrecipitationType
    snow?: PrecipitationType
}

export type AirPollutionType = {
    coord: { lon: number, lat: number },
    list: ListType[]
}

type ListType = {
    dt: number
    main: { aqi: number }
    components: ComponentsType
}

type ComponentsType = {
    co: number
    no: number
    no2: number
    o3: number
    so2: number
    pm2_5: number
    pm10: number
    nh3: number
}

export type PrecipitationType = {
    '1h': number
}

export type DailyWeatherType = {
    dt: number
    sunrise: number
    sunset: number
    moonrise: number
    moonset: number
    moon_phase: number
    summary: string
    temp: TempType
    feels_like: FeelsLikeType
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: WeatherType[]
    clouds: number
    pop: number
    rain: number
    uvi: number
}

export type AppStatusType = 'idle' | 'loading' | 'success' | 'error';


export type TempType = {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
}

export type FeelsLikeType = Omit<TempType, 'min' | 'max'>


export type WeatherType = {
    description: string
    icon: string
    id: number
    main: string
}
