// Games = new Meteor.Collection('games');

// if(Meteor.isServer){
// 	Meteor.publish('games', function(){
// 		return Games.find({ currentTurn: this.userId });
// 	});
// 	Meteor.publish('players', function(){
// 		return Meteor.players.find();

// 	});
// }


// if(Meteor.isClient){
// 	Meteor.subscribe('games');
// 	Meteor.subscribe('players');
// }