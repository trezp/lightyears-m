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

function Card (title, value, stops, slows) {
  this.title = title;
  this.value = value; 
  this.stops = false;
  this.slows = false;  
};

function makeDeck () {
  cards = [];

  for (var i = 0; i < 10; i++) {
    cards.push(new Card("25 light years", 25));
    cards.push(new Card("50 light years",50));
    cards.push(new Card("75 light years",75));
  };
  for (var i = 0; i < 12; i++) {
    cards.push(new Card("100 light years",100));
  };
  for (var i = 0; i < 4; i++) {
    cards.push(new Card("200 light years",200));
  };
  for (var i = 0; i < 5; i++) {
    cards.push(new Card("Stop", 0, true, false));
  };
  for (var i = 0; i < 3; i++) {
    cards.push(new Card("Out of Fuel", 0, true, false));
    cards.push(new Card("Engine Failure", 0, true, false));
    cards.push(new Card("Alien Abduction", 0, true, false));
    cards.push(new Card("Lost in Space", 0, true, true));
  };
  for (var i = 0; i < 14; i++) {
    cards.push(new Card("Take off"));
  };
  for (var i = 0; i < 6; i++) {
    cards.push(new Card("Plutonium"));
    cards.push(new Card("Repairs"));
    cards.push(new Card("Escape"));
    cards.push(new Card("Directions"));
  };
   	cards.push(new Card("Driving Ace"));
    cards.push(new Card("Force Field"));
    cards.push(new Card("Interstellar Diplomat"));
    cards.push(new Card("Map of the Universe"));

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
		}
	});
	return playerObject;
};