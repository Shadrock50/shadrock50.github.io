const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.3275&lon=-110.2929&appid=e08721ddcc9e417e3776e412ea731ea8&units=imperial';

function weather(){
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let day = 1;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        let d = new Date();
        date = d.getDay();

        document.getElementById("currentTemp").innerHTML = jsObject.current.temp;
        document.getElementById("condition").innerHTML = jsObject.current.weather[0].main;
        document.getElementById("humidity").innerHTML = jsObject.current.humidity;

        for (var i = 1; i < 4; i++){

            actualDate = date + i;

            while (actualDate > dayofWeek.length - 1) {
                actualDate = actualDate - 7;
            }

            document.getElementById(`date-${i}`).innerHTML = dayofWeek[actualDate];
            document.getElementById(`temp-${i}`).innerHTML = "Average Temp: " + jsObject.daily[i].temp.day + " &deg;F";
            document.getElementById(`condition-${i}`).innerHTML = "Condition: " + jsObject.daily[i].weather[0].main;
        }
    });
}