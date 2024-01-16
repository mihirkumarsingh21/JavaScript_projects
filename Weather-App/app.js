  const apiKey = "b2ab6cd2ddfa5777bac933ba721ba98c";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");

  const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = (Math.round(data.main.temp) + "°C");
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";
}
// console.log(checkWeather(searchBox.value));

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})


