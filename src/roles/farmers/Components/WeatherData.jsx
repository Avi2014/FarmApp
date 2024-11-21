const WeatherData = ({weather}) => {
    if(weather){
        return (
            <div>
                <section id="weather-results">
                    <h2 id="city-name">{weather.name}</h2>
                    <p id="temperature">{weather.main.temp} &deg;C</p>
                    <p id="description">{weather.weather[0].description }</p>
                    <img id="weather-icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
                </section>
            </div>
        )
    }
}

export default WeatherData