import "./style.css";
import activateSubmitBtn from "./form";
import {
  getWeatherResponse,
  processWeatherResponse,
  showWeatherInfo,
} from "./weather";
import { startLoading, endLoading } from "./loading";
import { showError, removeError } from "./helper";

import RainImg from "./img/rain.png";
import SnowImg from "./img/snow.png";
import SunnyImg from "./img/sunny.png";

const form = document.querySelector("form");
const cityInput = document.querySelector("input[name='city']");
const submitBtn = document.querySelector("input[type='submit']");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  startLoading();
  removeError();
  getWeatherResponse(cityInput.value)
    .then((data) => {
      console.log(data);
      return processWeatherResponse(data);
    })
    .then((data) => {
      showWeatherInfo(data);
    })
    .catch((err) => {
      showError(err);
    })
    .finally(() => endLoading());
});

// activateSubmitBtn();
