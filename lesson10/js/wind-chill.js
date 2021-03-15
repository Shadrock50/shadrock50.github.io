function windChill(){


    setTimeout (function() {
        let initTemp = document.getElementById("highTemp").innerText;
        let windSpeed = document.getElementById("windSpeed").innerText;
        var windChill = 0;

        if (initTemp < 50 && windSpeed > 3.0) {
            windChill = 35.74 + (0.6215 * initTemp) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * initTemp * Math.pow(windSpeed, .13));
            windChill = Math.trunc(windChill);
            document.getElementById("windChill").innerHTML = windChill + " &#176;f";
        }
        else{
            document.getElementById("windChill").innerHTML = "N/A";
        }
}, 1000 );

}