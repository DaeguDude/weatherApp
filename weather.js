const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

function getWeatherResponse(cityName) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
  )
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      getWeatherInfo(data);
    })
    .catch((err) => console.log(err));
}

function getWeatherInfo(weatherData) {
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;
  const temperature = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;

  console.log({ sunrise, sunset, temperature, feelsLike, humidity });
}

getWeatherResponse("Daegu");
