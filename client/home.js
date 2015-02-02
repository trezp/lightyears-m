function otherId(game){
	return game.currentTurn[game.currentTurn[0] === Meteor.userId() ? 1 : 0]; 
}

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



Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
})