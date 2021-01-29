import "./style.css";
import {
  checkStatus,
  getWeatherJson,
  getPrimaryWeatherInfo,
  showWeatherInfo,
} from "./weather";
import { startLoading, stopLoading } from "./loading";
import { showError, removeError } from "./helper";

import RainImg from "./img/rain.png";
import SnowImg from "./img/snow.png";
import SunnyImg from "./img/sunny.png";

const form = document.querySelector("form");
const cityInput = document.querySelector("input[name='city']");
const submitBtn = document.querySelector("input[type='submit']");

function getWeatherUnit(unit) {
  if (unit === "metric") {
    return "metric";
  } else if (unit === "fahrenheit") {
    return "imperial";
  }
}

function startApp() {
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    startLoading();
    removeError();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        cityInput.value
      }&units=${getWeatherUnit(
        "fahrenheit"
      )}&appid=962edb7f9ab1add3416718398c95a830`
    )
      .then(checkStatus)
      .then(getWeatherJson)
      .then(getPrimaryWeatherInfo)
      .then(showWeatherInfo)
      .catch(showError)
      .finally(stopLoading);
  });
}

startApp();
