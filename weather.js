const apiKey = "";
const cityName = "New York";
const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

// Promise
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // returns promise
//   })
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((err) => {
//     console.error("Error:", error);
//   });

// How will I do it in async / await

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response);
}

getData();
