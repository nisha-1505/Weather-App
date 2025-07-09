async function getWeather() {
  const city = document.getElementById('locationInput').value;
  const apiKey = 'f2d406fc261ae5aed38c4eee3ae82881';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod == 200) {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
      document.getElementById('weatherResult').innerHTML = result;
    } else {
      document.getElementById('weatherResult').innerHTML = '<p>City not found!</p>';
    }
  } catch (error) {
    console.error(error);
    document.getElementById('weatherResult').innerHTML = '<p>Error fetching data.</p>';
  }
}
