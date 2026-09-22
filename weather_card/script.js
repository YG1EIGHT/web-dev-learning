const apikey = "your api key ";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weather_icon = document.getElementsByClassName("weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiURL + city+ `&appid=${apikey}`);
  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  else{
  let data = await response.json();

  document.querySelector(".city").innerHTML = data.main.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main=="Clouds"){
    weather_icon.src = "images/clouds.png";
  }
  else if (data.weather[0].main=="Rain"){
      weather_icon.src = "images/rain.png";
  }
  else if (data.weather[0].main=="Drizzle"){
      weather_icon.src = "images/drizzle.png";
  }
  else if (data.weather[0].main=="Mist"){
      weather_icon.src = "images/mist.png";
  }
  else{
     weather_icon.src = "images/clear.png";
  }
  document.querySelector(".weather").computedStyleMap.display="block";
  document.querySelector(".error").style.display="none";
}
}

document.querySelector("button").addEventListener("click",()=>{
    let cityname = document.querySelector("input").value;
    checkWeather(cityname);
})

