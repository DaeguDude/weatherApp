const form = document.querySelector("form");
const cityInput = document.querySelector("input[name='city']");
const submitBtn = document.querySelector("input[type='submit']");

submitBtn.addEventListener("click", (e) => {
  preventRefreshingPage(e);
});

function preventRefreshingPage(e) {
  e.preventDefault();
}
