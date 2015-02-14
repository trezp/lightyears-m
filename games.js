Games = new Meteor.Collection('games');

Meteor.methods({
	//to be called each time a player selects a game with a new player. 
	//New game created and inserted into the Games collection. 
	createGame: function(otherPlayerId){
		game = Game.createGame([Meteor.userId(), otherPlayerId]);
		Games.insert(game);
	}, 

	//Returns the player's name from Account IU 
	'player' : function(){
		player = Meteor.user().username;
		return player
	},

	'hand' : function(){
		hand = Games.findOne().players[Meteor.userId()].hand;
	},

	'score': function(){
		score = Games.findOne().players[Meteor.userId()].score;
		return score 
	},

	'updateScore' : function(){
		//Find game and player in the Games collection 
		//Increment player score in the Games collection based on the value of 
		//the chosen card 
	},

	'immunity' : function(){
		immunity = Games.findOne().players[Meteor.userId()].immunity;
		return immunity
	},

	'getMovementStatus' : function(){
		//checked status of "stalled" property on the player object
		//stalled = Games.findOne().players[Meteor.userId()].stalled;
		//return stalled 
		//returning "Traveling" for game testing purposes
		getMovementStatus = "Traveling"
		return getMovementStatus
	},
	
	'checkScore' : function(){
		Meteor.call('score')
		console.log("You've traveled " + score + " light years!")
	},

	'discard' : function(){
		//Move the chose card object from the player's hand to the discard array 
	},

	'drawCard' : function(){
		//Pop a card out of the deck array and place into player's hand array
	},

	'playSelf' : function(){
		//Called when player calls are card that can only be played on self (ie, is
			//not a hazard card)
	}, 

	'playOppenent' : function(){
		//Called when player calls a card that can only be played on opponent 
		//Adjusts oppenent's "stalled" property
		//Oppenent cannot play mileage cards when stalled out 
	}, 

	'updateImmunity' : function(){
		//Updates immunity property of player object. When player has a certain immunity,
		//opponent cannot play those hazard cards
	},

	'moveCardToOpponentStack' : function(){
		//move hazard card from player hand array to opponent's hand array 
	},

	'updatedPlayerStalled' : function(){
		//Changed the value of opponent "stalled" property based on the 
		//title of the hazard card 
	}, 

	'moveCardToPlayerStack' : function(){
		//Move card from player's hand array to player's stack array. These are 
		//cards the player has collected but can no longer play. 
	}, 

	'moveCardToOpponentStack' : function(){
		//Move card from player's hand array to opponent's stack array. 
	}, 

	'rejectPlay' : function(){
		//Alert player that they are attempting an illegal move. 
	}, 

	'sneakyMove' : function(){
		//When an opponent plays a hazard card && the player has an immunity card that
		//matches this hazard, the player can play that immunity card at any point
		//Call extra turn function 
		//Assign extra points to player score
	},

	'extraTurn' : function(){
	
	},

	'declareWinner' : function(){
		//if player score === 1000, declare a winner. 
		//End game.
	}
});
