function unixTimeStampConverter(unixTimeStamp) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unixTimeStamp * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  const seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
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
