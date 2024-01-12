function SearchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input-value").value;
  let apiKey = "0b8004f43d4a372b990e09e3241c3to7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayCurrentTemperature);
}

function displayCurrentTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement = temperature;
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.city;

  let searchForm = document.querySelector("weather-app-input");
  searchForm.addEventListener("submit", SearchCity);
}

function currentDate(date) {
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = daysOfTheWeek[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let TodaysDate = currentDate(new Date());
let dateElement = document.querySelector("#current-date");
dateElement.innerHTML = TodaysDate;
