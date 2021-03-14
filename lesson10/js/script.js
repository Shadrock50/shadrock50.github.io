function createDropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function todayDate(){

    var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    today = new Date().toLocaleTimeString('en-us', options);
    document.getElementById("footerDate").innerHTML = today.split(' ')[0] + ' ' + today.split(' ')[1] + ' ' + today.split(' ')[2] + ' ' + today.split(', ')[2];

}

  function displayBanner(){
    var checkDay = ''
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    today = new Date().toLocaleTimeString('en-us', options)
    if (today.split(', ')[0] == "Friday") {
        var x = document.getElementById("banner");
        x.className = "displayedBanner";
    }
  }