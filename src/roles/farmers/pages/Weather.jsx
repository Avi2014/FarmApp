import { useState } from 'react'
import axios from "axios"
import WeatherData from '../Components/WeatherData'
import './weather.css'
import Navbar from '../Components/Navbar'

const Weather = () => {

  const apiKey = 'e20a6d627e398e3e683d153457069d1e'
  const [weather, setWeather] = useState(null)
  const [city, setCity] =  useState('')
  
  const handleClick = (e) => {
    e.preventDefault()
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      if (city) {
        axios.get(url)
        .then(res => res.data)
        .then(data => {
          setWeather(data)
          console.log(data)
        })
      }
  }

  return (
    <div>
      <Navbar />
      <div className='weather-body'>
      <div className="weather-container">
		<h1>Weather Forcast</h1>
    <form id="weather-form" onSubmit={handleClick}>
      <div className="weather-search-bar">
    <input type="text" id="city-input" className='weather-search-input' placeholder="Enter city name..." value={city} onChange={(e) => setCity(e.target.value)}></input>
    <button className='weather-search-button'>Search</button>
    </div>
    </form>
    <div id="weather-details">
    <WeatherData weather={weather}/>
    </div>
    
  </div>
    </div>
    </div>
  )
}

export default Weather