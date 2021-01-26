function getWeatherResponse(cityName) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=962edb7f9ab1add3416718398c95a830`,
    { mode: "cors" }
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

class WeatherForm {
  constructor(elem) {
    this.elem = elem;
  }

  getWeatherResponse(cityName) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=962edb7f9ab1add3416718398c95a830`,
      { mode: "cors" }
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
}

class Loader {
  constructor(elem) {
    this.elem = elem;
  }

  start() {
    this.elem.classList.add("weather__loader--start");
  }

  stop() {
    this.elem.classList.remove("weather__loader--start");
  }
}

const myLoader = new Loader(document.querySelector(".weather__loader"));
myLoader.start();

const myWeatherForm = new WeatherForm(
  document.querySelector(".weather__header form")
);

console.log(myWeatherForm);
