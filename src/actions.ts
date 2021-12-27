import { APP_CONFIG } from './config'
import { toWeatherModel } from './utils'

export const fetchWeatherDataForCity = async (city: string) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='
        .concat(city)
        .concat(`&appid=${APP_CONFIG.WEATHER_API_KEY}`)
        .concat(`&units=metric`)

    const { weatherState, temperature } = await fetch(url)
        .then(response => response.json())
        .then(data => toWeatherModel(data))
        .catch(error => {
            throw new Error('Failed to fetch weather data')
        })

    return {
        weatherState,
        temperature
    }
}
