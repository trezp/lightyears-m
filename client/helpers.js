///////////////// GAME SCREEN HELPERS /////////////////////
//return values from properties of the game object in Games collection in database 
Template.play.helpers({

	hand : function(){
		if (this.players){
			return this.players[Meteor.userId()].hand;
		};
	},

	test : function(){
		if (this.players){
			return this.find().fetch()[0].players[Meteor.userId()]
		}
	},

	currentUser : function(){
		return "Kal-El";
		// if (Meteor.user()) {
		// 	// return Meteor.user().username
		// };
	},

	opponent : function(){
		return "Alf";
		// if (Meteor.user()) {
		// 	for (var player in this.players){
		// 		if (player !== Meteor.userId()){
		// 			return this.players[player].username
		// 		}
		// 	}
			
		// }
	},

	opponentStatus : function(){
		return "Out of Plutonium"
		// if (Meteor.user()) {
		// 	for (var player in this.players){
		// 		if (player !== Meteor.userId()){
		// 			return this.players[player].stalled
		// 		}
		// 	}
			
		// }
	},

	stalled : function(){
		return "Abducted"
		// if (this.players){
		// 	return "Traveling" 
			
		// }
	},

	opponentScore: function(){
		return "500 light years"
		// if (Meteor.user()) {
		// 	for (var player in this.players){
		// 		if (player !== Meteor.userId()){
		// 			return this.players[player].score 
		// 		}
		// 	}
			
		// }
	},

	statusMessage : function(){
		return "You need an Escape card to continue."
		// if (this.players){
		// 	if (this.players[Meteor.userId()].stalled === "Stalled"){
		// 	return("To move on, you must REMEDY your situation.");
		// } else if (this.players[Meteor.userId()].stalled === "Traveling"){
		// 	return("You're gliding through space.");
		// } else {
		// 	return("Preparing for take off...");
		// }
		// }
		
		    
	},

	score : function(){
		return 925
		// if (this.players){
		// 	return this.players[Meteor.userId()].score
		// }
		
	}, 

	immunity: function(){
		return "Map of the Universe"
	// 	if (this.players){
	// 		if (this.players[Meteor.userId()].immunity === "No immunities" ){
	// 		return "No immunities"
	// 	} else {
	// 		return this.players[Meteor.userId()].immunity 
	// 	}
	// }	
	},


	
});


///////////// HOMESCREEN HELPERS////////////////
Template.userList.helpers({
	users : function(){
		var myid = Meteor.userId(),
		cantPlay = [myid];

	Games.find({ inProgress: true }).forEach(function (game) {
		cantPlay.push(otherId(game));
	});

	return Meteor.users.find({_id: {$not: { $in: cantPlay}}}); 

	},

	currentUser : function(){
		return Meteor.user().username
	}
});

Template.userItem.events({
'click button' : function(event, template){
	Meteor.call('createGame', template.data._id);
	}
});

Template.gameList.helpers({
	games: function(){
		return Games.find({ inProgress: true}).map(function (game){
			game.opponent = Meteor.users.findOne(otherId(game)).username;
			game.started = moment(game.started).fromNow();
			return game; 
		});
	}
});

function otherId(game){
	return game.currentTurn[game.currentTurn[0] === Meteor.userId() ? 1 : 0]; 
}

//sign in by username 
Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
})