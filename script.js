function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "01e0419f5b522df0cdc2350945806f22";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherDiv = document.getElementById("weatherResult");

      if (data.cod === 200) {
        weatherDiv.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
      } else {
        weatherDiv.innerHTML = `<p>❌ City not found. Try again!</p>`;
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}
