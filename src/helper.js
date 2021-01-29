function unixTimeStampConverter(unixTimeStamp) {
  const date = new Date(unixTimeStamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();

  const formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
}

const error = document.querySelector(".error");
function showError(text) {
  error.innerText = text;
}

function removeError() {
  error.innerText = "";
}

export { unixTimeStampConverter, showError, removeError };
