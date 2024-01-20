const options = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': '82ce55057cmsh0641cc14bbf2750p1043c7jsn2f312ee9a468',
	  'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
  };
  
  const getWeather = (city) => {
	cityName.innerHTML = city;
  
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	  .then(response => {
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
		return response.json();
	  })
	  .then(response => {
		console.log(response);
  
		temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

	  })
	  .catch(err => {
		console.error('Error fetching weather data:', err);
	  });
  };
  
  submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
  });
  
  // Initial call with a default city
  getWeather("Delhi");
  