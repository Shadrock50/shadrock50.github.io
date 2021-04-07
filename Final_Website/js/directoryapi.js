const requestURL = '../json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
    
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['company'];
    for (let i = 0; i < companies.length; i++) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        card.className = "business_cards"
        h2.textContent = companies[i].name;
        p1.textContent = "Contact Information: " + companies[i].phone;
        p2.textContent = "Address: " + companies[i].address;


        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);


        document.querySelector('div.directories').appendChild(card);
    }

  });