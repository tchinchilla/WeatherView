
const latitude = 33.76
const longitude = -84.42
const url="https://api.open-meteo.com/v1/forecast?"

    async function getCurrentWeather() {
        try {
            const response = await fetch(`${url}latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
            const data = await response.json();
            const temperature = data.current.temperature_2m;
    
            const elementoTemperature = document.getElementById('temperature');
            elementoTemperature.textContent = `${temperature} `;
    } catch (error) {
        console.error('Error getting weather data:', error);
    }
}
getCurrentWeather();

async function getCurrentWindSpeed() {
    try {
        const response = await fetch(`${url}latitude=${latitude}&longitude=${longitude}&current=wind_speed_10m`);
        const data = await response.json();
        const windSpeed = data.current.wind_speed_10m;

        const elementoWindSpeed = document.getElementById('windSpeed');
        elementoWindSpeed.textContent = `${windSpeed} `;
} catch (error) {
    console.error('Error getting weather data:', error);
}
}
getCurrentWindSpeed();