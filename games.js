Games = new Meteor.Collection('games');

Meteor.methods({
	createGame: function(otherPlayerId){
			var game = Game.createGame([Meteor.userId(), otherPlayerId]);
			Games.insert(game);
		}
	
});

