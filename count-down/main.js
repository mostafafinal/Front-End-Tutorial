const counter = setInterval(() => {
  const dateNow = new Date().getTime();
  const targetDate = new Date("13 Dec, 2024").getTime();

  const diffTime = targetDate - dateNow;
  // Handling Time
  let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  // Sending To The Page
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  // Action on the counter reaches zero
  if (diffTime < 0) {
    clearInterval(counter);
  }
}, 1000);
