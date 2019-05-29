// CS 330 - Homework 3 starter code

// This is the JSON (JavaScript Object Notation) object that stores all of our
// album information.
var events = [
  {
    title: "Settlers of Catan",
    genre: "Modern Strategy",
    complexity: "2.34",
    min_players: "3",
    max_players: "4",
    playtime: "90",
    date: "06/12/19",
    time: "5:00 PM",
    street_address: "560 Foxrun Ct",
    city: "Evanston",
    state: "IL",
    comment: "Bring Snacks",
    playstyle: "Competitive"
  },
  {
    title: "Azul",
    genre: "Abstract Strategy",
    complexity: "1.8",
    min_players: "2",
    max_players: "4",
    playtime: "45",
    date: "06/10/19",
    time: "7:30 PM",
    street_address: "500 Pulaski Rd",
    city: "Chicago",
    state: "IL",
    comment: "Get ready for a fun time",
    playstyle: "Casual"
  },
  {
    title: "BlackJack",
    genre: "Cards",
    complexity: "1.51",
    min_players: "2",
    max_players: "10",
    playtime: "30",
    date: "06/15/19",
    time: "8:00 PM",
    street_address: "2107 Lake St",
    city: "Evanston",
    state: "IL",
    comment: "",
    playstyle: "Casual"
  },
  {
    title: "Yahtzee",
    genre: "Dice",
    complexity: "1.19",
    min_players: "2",
    max_players: "10",
    playtime: "60",
    date: "06/12/19",
    time: "12:00 PM",
    street_address: "1720 Melvina Ave",
    city: "Chicago",
    state: "IL",
    comment: "",
    playstyle: "Competitive"
  },
  {
    title: "Icaion",
    genre: "RPG",
    complexity: "4",
    min_players: "2",
    max_players: "4",
    playtime: "120",
    date: "06/14/19",
    time: "11:00 AM",
    street_address: "560 Lincoln St",
    city: "Evanston",
    state: "IL",
    comment: "Get ready for a long game",
    playstyle: "Competitive"
  },
  {
    title: "Just One",
    genre: "Party",
    complexity: "1.17",
    min_players: "3",
    max_players: "7",
    playtime: "20",
    date: "06/11/19",
    time: "2:20 PM",
    street_address: "8720 Long St",
    city: "Chicago",
    state: "IL",
    comment: "",
    playstyle: "Competitive"
  }
];

// document.getElementsByTagName('select')[0].onchange=function(){

// Fill in this function to dyamically construct the HTML elements for the album list
function buildeventlist() {
  var eventList = document.getElementById("event-list");

  //Clear the list
  var child = eventList.firstChild;
  while(child) {
    eventList.removeChild(child);
    child = eventList.firstChild;
  }

  // Get the values of the selectors
  var category_selector = document.getElementById("category-selector");
  var tryhard_selector = document.getElementById("tryhard-selector");
  var player_selector = document.getElementById("player-selector");
  var category = category_selector[category_selector.selectedIndex].text;
  var tryhard = tryhard_selector[tryhard_selector.selectedIndex].text;
  var player = player_selector[player_selector.selectedIndex].text;

  for (let event of events) {
    // if the category doesn't match continue;
    if(category !== "Select") {
      if(category.toLowerCase() !== event.genre.toLowerCase()) {
        continue;
      }
    }
    // also track player count
    if(player !== "Select") {
      let to_continue = true;
      if(player === "1-4") {
        if(event.max_players < 5) {
          to_continue = false;
        }
      }
      else if(player === "5-10") {
        if(event.max_players < 11 && event.max_players > 4) {
          to_continue = false;
        }
      }
      else if(player === "10+") {
        if(event.max_players > 10) {
          to_continue = false;
        }
      }
      if(to_continue) {
        continue;
      }
    }
    // Also track playstyle
    if(tryhard !== "Select" && tryhard.toLowerCase() !== event.playstyle.toLowerCase()) {
      continue;
    }



    var eventDiv = document.createElement('div');
    let child = '';
    eventDiv.classList.add('event-wrapper');
    eventDiv.classList.add('w3-theme-l3');
    child += `

    <div class="game-div">
    <p class="event-title">${event.title} (${event.playstyle})</p>
    <p class="event-title">Max Players: ${event.max_players}</p>
    <p class="event-time">Playtime: ${event.playtime} min</p>
    </div>

    <div class="game-div">
    <p class="event-title">Genre: ${event.genre}</p>
    <p class="event-title">${event.date}, ${event.time}</p>
    <p class="event-address">${event.street_address}, ${event.city}, ${event.state}</p>
    </div>

    <form action="./index.html">
    <button>Join</button>
    </form>
    `;

    eventDiv.innerHTML = child;
    if (eventList != null) {
      eventList.appendChild(eventDiv);
    }
  }
}

function handleSignIn() {
    let button = document.getElementById("sign-in");
    if(button.innerHTML != "SIGN IN") {
        let popup = document.getElementById("popup-out");
        popup.style.display = "block";
        return 0;
    }
    let popup = document.getElementById("popup-in");
    popup.style.display = "block";
    return 0;
}

function handleStoreName() {
    let username = document.getElementById("username");
    let button = document.getElementById("sign-in");
    let popup = document.getElementById("popup-in");

    popup.style.display = "none";

    sessionStorage.setItem("username", username.value);
    button.innerHTML = sessionStorage.getItem("username");

    return 0;
}

function handleSignOut() {
    sessionStorage.removeItem("username");
    document.getElementById("sign-in").innerHTML = "SIGN IN";
    document.getElementById("popup-out").style.display = "none";
    return 0;
}

function startUp() {
    if(sessionStorage.getItem("username") === null) {
        let button = document.getElementById("sign-in");
        button.value = "SIGN IN";
        return 0;
    }
    let button = document.getElementById("sign-in");
    button.innerHTML = sessionStorage.getItem("username");
    return 0;
}
