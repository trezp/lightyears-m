Games = new Meteor.Collection('games');

Meteor.methods({

	createGame: function(otherPlayerId){
		game = Game.createGame([Meteor.userId(), otherPlayerId]);
		Games.insert(game);
	}, 

	'player' : function(){
		player = Meteor.user().username
		return player
	},

	'score': function(){
		score = Games.findOne().players[Meteor.userId()].score;
		return score 
	},

	'stalled' : function(){
		stalled = Games.findOne().players[Meteor.userId()].stalled;
		return stalled 
	},

	'immunity' : function(){
		immunity = Games.findOne().players[Meteor.userId()].immunity;
		return immunity
	},

	'checkScore' : function(){

	},

	'discard' : function(){

	},

	'playSelf' : function(){
		console.log("This is hooked up correctly")
	}, 

	'playOppenent' : function(){

	}, 

	'updateScore' : function(){

	},

	'updateImmunity' : function(){

	},

	'moveCardToOpponentStack' : function(){

	},

	'updatedPlayerStalled' : function(){

	}, 

	'moveCardToPlayerStack' : function(){

	}, 

	'moveCardToOpponentStack' : function(){

	}, 

	'rejectPlay' : function(){

	}, 

	'sneakyMove' : function(){

	},

	'extraTurn' : function(){

	},

	'declareWinner' : function(){

	}
});
