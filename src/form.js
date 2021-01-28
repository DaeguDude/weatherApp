// import { getWeatherResponse, getWeatherInfo } from "./weather";
// import Loading from "./loading";
// import Weather from "./weather";

// const form = document.querySelector("form");
// const cityInput = document.querySelector("input[name='city']");
// const submitBtn = document.querySelector("input[type='submit']");

// export default function activateSubmitBtn() {
//   submitBtn.addEventListener("click", (event) => {
//     doNotRefresh(event);
//     myLoading.start();
//     const cityName = cityInput.value;

//     fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=962edb7f9ab1add3416718398c95a830`,
//       { mode: "cors" }
//     )
//       .then((response) => {
//         myLoading.stop();
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const weather = new Weather();
//         console.log(weather);
//         weather.showInfo(getWeatherInfo(data));
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         const weather = new Weather();
//         console.log(weather);
//         myLoading.stop();
//       });

//     function doNotRefresh(event) {
//       event.preventDefault();
//     }
//   });
// }
