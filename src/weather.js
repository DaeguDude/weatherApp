import { unixTimeStampConverter } from "./helper";

const temperature = document.querySelector(".weather__temperature");
const feelsLike = document.querySelector(".weather__feelsLike");
const humidity = document.querySelector(".weather__humidity");
const sunrise = document.querySelector(".weather__sunrise");
const sunset = document.querySelector(".weather__sunset");
const myImage = document.querySelector(".weather__img");

function getWeatherResponse(cityName) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=962edb7f9ab1add3416718398c95a830`,
    { mode: "cors" }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("We could not find the city");
    }
    return response.json();
  });
}

function processWeatherResponse(weatherData) {
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;
  const temperature = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const weatherIcon = weatherData.weather[0].icon;

  return { sunrise, sunset, temperature, feelsLike, humidity, weatherIcon };
}

function showWeatherInfo(weatherInfo) {
  temperature.innerText = weatherInfo.temperature;
  feelsLike.innerText = weatherInfo.feelsLike;
  humidity.innerText = weatherInfo.humidity;
  sunrise.innerText = unixTimeStampConverter(weatherInfo.sunrise);
  sunset.innerText = unixTimeStampConverter(weatherInfo.sunset);

  const weatherIconURL = `http://openweathermap.org/img/wn/${weatherInfo.weatherIcon}@4x.png`;
  myImage.src = weatherIconURL;
}

export { getWeatherResponse, processWeatherResponse, showWeatherInfo };
