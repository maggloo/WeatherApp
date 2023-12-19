export type ForecastSummaryResponseType = {
    base: string
    clouds: CloudsType
    cod: number
    coord: CoordType
    dt: number //timestamp
    id: number
    main: MainType
    name: string
    sys: SysType
    timezone: number
    visibility: number
    wind: WindType
    weather: WeatherType[]
}
export type ForecastTenDayResponseType = {
    city: {
        coord: CoordType
        country: string
        id: number
        name: string
        population: number
        timezone: number
    }
    cnt: number
    cod: string
    list: ListType[]
    message: any
}


export type ListType = {
    dt: number //timestamp
    sunrise: number
    sunset: number
    temp: TempType
    feels_like: FeelsLikeType
    pressure: number
    humidity: number
    weather: WeatherType[]
    deg: number
    gust: number
    speed: number
    clouds: number
    pop: number
    rain: number
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

export type CoordType = {
    lat: number
    lon: number
}
export type CloudsType = {
    all: number
}
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
export type SysType = {
    country: string
    id: number
    sunrise: number //timestamp
    sunset: number //timestamp
    type: number
}
export type WindType = {
    deg: number
    gust: number
    speed: number
}
export type WeatherType = {
    description: string
    icon: string
    id: number
    main: string
}
