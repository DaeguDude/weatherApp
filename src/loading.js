const loadingElem = document.querySelector(".weather__loader");

function startLoading() {
  loadingElem.classList.add("weather__loader--start");
}

function stopLoading() {
  loadingElem.classList.remove("weather__loader--start");
}

export { startLoading, stopLoading };
