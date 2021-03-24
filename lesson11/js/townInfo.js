const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var townList = [0, 2, 6];

function homePage() {
fetch(townURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let i = 1;
        townList.forEach(element => {

            //Home Page info
            altText = "Image of " + jsObject.towns[element].name;
            imagesrc = "img/" + jsObject.towns[element].photo;
            document.getElementById(`town-${i}-title`).textContent = jsObject.towns[element].name;
            document.getElementById(`town-${i}-motto`).textContent = jsObject.towns[element].motto;
            document.getElementById(`town-${i}-info-1`).textContent = "Year Founded: " + jsObject.towns[element].yearFounded;
            document.getElementById(`town-${i}-info-2`).textContent = "Population: " + jsObject.towns[element].currentPopulation;
            document.getElementById(`town-${i}-info-3`).textContent = "Average Rainfall: " + jsObject.towns[element].averageRainfall;
            document.getElementById(`town-image-${i}`).setAttribute('src', imagesrc);
            document.getElementById(`town-image-${i}`).setAttribute('alt', altText);
            i = i + 1
        });
        
    });

}

function townEvents(){
    fetch(townURL)
    .then((response) => response.json())
    .then((jsObject) => {
        var location;
        if (document.getElementById("homeID").innerHTML == "Preston"){
            location = 6;
        }
        else if (document.getElementById("homeID").innerHTML == "Fish Haven"){
            location = 2;
        }
        else{
            location = 0;
        }
        let eventList = jsObject.towns[location].events;

        eventList.forEach(element =>{
            
            let p = document.createElement('p');
            p.textContent = element;
            document.querySelector('div.upcomingEvents').appendChild(p);

        });
        
    });
}