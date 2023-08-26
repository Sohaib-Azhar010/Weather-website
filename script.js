function getWeathher() {
    let cityname = document.getElementById("cityname").value;
    let weathericon = document.querySelector('.weather-icon');
 

  axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=c0f43bfd3256480f9d755520232108&q=${cityname}&aqi=yes`
    )

    .then(function (response) {
      let weatherdata = response.data;
      console.log(weatherdata);

      document.getElementById("city").innerHTML = cityname;
      document.getElementById("humidity").innerHTML =
        weatherdata.current.humidity + "%";
      document.getElementById("wind").innerHTML =
        weatherdata.current.wind_kph + " km/h";
      document.getElementById("temp").innerHTML =
        weatherdata.current.temp_c + "°C";


      if (weatherdata.current.condition.text == "Clouds") {
        weathericon.src = "Imgs/clouds.png";
      } else if (weatherdata.current.condition.text == "Sunny" || "Clear") {
        weathericon.src = "Imgs/clear.png";
      } else if (weatherdata.current.condition.text == "Partly cloudy") {
        weathericon.src = "Imgs/mist.png";
      } else if (weatherdata.current.condition.text == "Drizzle") {
        weathericon.src = "Imgs/drizzle.png";
      } else if (weatherdata.current.condition.text == "Overcast") {
        weathericon.src = "Imgs/rain.png";
      } else {
        weathericon.src = "Imgs/snow.png";
      }
    })
    .catch(function (error) {
      alert(error);
    });
}
