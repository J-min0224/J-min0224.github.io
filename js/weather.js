const API_KEY = "4cfffbbe84f79e8145197ae09a5cc1f8";

function onGeoGood(position) { //gives you the location
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weatherContainer = document.querySelector("#weather span:first-child");
    const cityContainer = document.querySelector("#weather span:last-child");
    cityContainer.innerText = data.name;
    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;

  }); // using fetch f, u can call url 
}
function onGeoError() {
  alert("GEOLOCATION DISABLED")
}

navigator.geolocation.getCurrentPosition(onGeoGood, onGeoError);