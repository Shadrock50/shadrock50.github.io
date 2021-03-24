const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=e08721ddcc9e417e3776e412ea731ea8&units=imperial';
const fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=e08721ddcc9e417e3776e412ea731ea8&units=imperial'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('weatherCurrent').textContent = jsObject.weather[0].main
    });

fetch(fiveDayURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let day = 1;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        jsObject.list.forEach(x => {

            if (x.dt_txt.includes("18:00:00")) {
                let d = new Date(x.dt_txt);

                document.getElementById(`dayOfWeek${day}`).textContent = dayofWeek[d.getDay()];
                let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
                let altText = x.weather[0].description;
                document.getElementById(`day${day}`).setAttribute('src', imagesrc);
                document.getElementById(`day${day}`).setAttribute('alt', altText);
                document.getElementById(`description${day}`).innerHTML = x.main.temp + "&#176;F"
                day++;

            };
        });
    });