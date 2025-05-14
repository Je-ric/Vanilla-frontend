const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResults");

const API_KEY = 'YOU API HERE';

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        weatherResult.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
        );

        if (!response.ok) {
            throw Error('City Not Found')
        }

        const data = await response.json();

        weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <div class="results">
            <div class="weatherResult">
                <i class="fa-solid fa-temperature-three-quarters"></i>
                <p>Temperature: ${data.main.temp}°F</p>
            </div>
            <div class="weatherResult">
                <i class="fa-solid fa-temperature-half"></i>
                <p>Weather: ${data.weather[0].description}</p>
            </div>
            <!-- Display humidity -->
            <div class="weatherResult">
                <i class="fa-solid fa-droplet"></i>
                <p>Humidity: ${data.main.humidity}%</p>
            </div>
            <!-- Display wind speed -->
            <div class="weatherResult">
                <i class="fa-solid fa-wind"></i>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            </div>
        </div>
        `
    } catch (error) {
        weatherResult.innerHTML = `<p>Error: ${error.message}</p>`
    }
})