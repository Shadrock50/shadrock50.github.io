
document.getElementById('lastModified').innerHTML = "<p> Last Updated: " + document.lastModified + "</p>";
document.getElementById('current-year').innerHTML = new Date().getFullYear();

function dropDown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function changeStyles() {
  var x = document.getElementById("changeStyles");
  if (x.className === "directories") {
    x.className = "directoriesGrid";
  }
  else {
    x.className = "directories";
  }
}