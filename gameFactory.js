Game = {};

Game.createGame = function(playerId){
	var deck = makeDeck(); 
	var players = createPlayers(playerId); 

	Game.deal(players, deck);


	return {
		deck : deck,
		players: players,
		currentTurn: playerId,
		inProgress: true, 
		started: new Date()
	}
};

function Card (title, value, cardType, fixes) {
  this.title = title;
  this.value = value; 
  this.cardType = cardType;
  this.fixes = "none";
};

function makeDeck () {
  cards = [];

  for (var i = 0; i < 10; i++) {
    cards.push(new Card("25 light years", 25, "mileageCard"));
    cards.push(new Card("50 light years",50, "mileageCard"));
    cards.push(new Card("75 light years",75, "mileageCard"));
  };
  for (var i = 0; i < 12; i++) {
    cards.push(new Card("100 light years",100, "mileageCard"));
  };
  for (var i = 0; i < 4; i++) {
    cards.push(new Card("200 light years",200, "mileageCard"));
  };
  for (var i = 0; i < 5; i++) {
    cards.push(new Card("Grounded", 0, true, false, "hazard"));
  };
  for (var i = 0; i < 3; i++) {
    cards.push(new Card("Out of Fuel", 0, "hazard"));
    cards.push(new Card("Engine Failure", 0, "hazard"));
    cards.push(new Card("Alien Abduction", 0, "hazard"));
    cards.push(new Card("Lost in Space", 0, "hazard"));
  };
  for (var i = 0; i < 14; i++) {
    cards.push(new Card("Take off", "remedy", "Grounded" ));
  };
  for (var i = 0; i < 6; i++) {
    cards.push(new Card("Plutonium", 0, "remedy", "Out of Fuel"));
    cards.push(new Card("Repairs", 0, "remedy", "Engine Failure"));
    cards.push(new Card("Escape", 0, "remedy", "Alien Abduction"));
    cards.push(new Card("Directions", 0, 'remedy', "Lost In Space"));
  };
   	cards.push(new Card("Superstar Astronaut", "immunity"));
    cards.push(new Card("Force Field", 0, "immunity"));
    cards.push(new Card("Interstellar Diplomat", 0, "immunity"));
    cards.push(new Card("Map of the Universe", 0, "immunity"));

    return _.shuffle(cards); 
};

Game.deal = function(players, deck) {
    for (var i = 0; i < 6; i++) {
    	Object.keys(players).forEach(function(id){
    		players[id].hand.push(deck.shift());
    	});
    
    }
  };

function createPlayers(ids){
	var playerObject = {};

	ids.forEach(function(id) {
		playerObject[id] = {
			hand: [],
			stack: [],
			score: 0,
			stalled: true
      immunity: "none"
		}
	});
	return playerObject;
};