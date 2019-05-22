// CS 330 - Homework 3 starter code

// This is the JSON (JavaScript Object Notation) object that stores all of our 
// album information. 
var events = [
  {
    title: "Settlers of Catan",
    genre: "modern strategy",
    complexity: 2.34,
    min_players: 3,
    max_players: 4,
    playtime: 90,
    date: "7/12/19",
    time: "5:00 PM",
    street_address: "560 Foxrun CT",
    city: "Evanston",
    state: "IL",
    comment: "Bring Snacks"
  },
  {
    title: "Azul",
    genre: "Abstract Strategy",
    complexity: 1.8,
    min_players: 2,
    max_players: 4,
    playtime: 45,
    date: "05/25/19",
    time: "7:30 PM",
    street_address: "500 Pulaski rd",
    city: "Chicago",
    state: "IL",
    comment: "Get ready for a fun time"
  },
  {
    title: "BlackJack",
    genre: "Cards",
    complexity: 1.51,
    min_players: 2,
    max_players: 10,
    playtime: 30,
    date: "06/1/19",
    time: "10:00 PM",
    street_address: "2107 lake st",
    city: "Evanston",
    state: "IL",
    comment: ""
  },
  {
    title: "Die Tavernen im Tiefen Thal",
    genre: "Dice",
    complexity: 2.71,
    min_players: 2,
    max_players: 4,
    playtime: 60,
    date: "08/25/19",
    time: "12:00 PM",
    street_address: "1720 Melvina ave",
    city: "Chicago",
    state: "IL",
    comment: ""
  },
  {
    title: "Icaion",
    genre: "RPG",
    complexity: "",
    min_players: 2,
    max_players: 4,
    playtime: 120,
    date: "06/20/19",
    time: "11:00 AM",
    street_address: "560 Lincoln st",
    city: "Evanston",
    state: "IL",
    comment: "Get ready for a long game"
  },
  {
    title: "Just One",
    genre: "Party",
    complexity: 1.17,
    min_players: 3,
    max_players: 7,
    playtime: 20,
    date: "6/20/19",
    time: "2:20 PM",
    street_address: "8720 Long st",
    city: "Chicago",
    state: "IL",
    comment: ""
  }
];

// Fill in this function to dyamically construct the HTML elements for the album list
function buildeventlist() {
  var eventList = document.getElementById("event-list");
  for (let event of events) {
    var eventDiv = document.createElement('div');
    let child = '';
    eventDiv.classList.add('event-wrapper');
    child += `<p class="event-title">Title: ${event.title}</p>`;
    child += `<p class="event-address">Address: ${event.street_address}</p>`;
    child += `<p class="event-city"> City: ${event.city}</p>`;
    child += `<p class="event-date">Date: ${event.date}</p>`;
    child += `<p class="event-time">Time: ${event.time}</p>`;
    eventDiv.innerHTML = child;
    if (eventList != null) {
      eventList.appendChild(eventDiv);
    }
  }
}
