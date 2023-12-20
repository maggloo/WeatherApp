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

export type TempType = {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
}

export type FeelsLikeType = Omit<TempType, 'min' | 'max'>

export type MainType = {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
}

export type WeatherType = {
    description: string
    icon: string
    id: number
    main: string
}
