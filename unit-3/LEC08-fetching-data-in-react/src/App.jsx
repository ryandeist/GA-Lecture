import { useEffect, useState } from 'react'
import * as weatherService from './services/weatherService'
import './App.css'
import WeatherSearch from './components/WeatherSearch'
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState('')
  const fetchData = async (city) => {
    const data = await weatherService.show(city)
    const weatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    }
    setWeather(weatherState)
  }

  useEffect(() => {
    fetchData('Denver')
  }, [])

  return (
    <>
      <h1>Weather App</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </>
  );
}

export default App

