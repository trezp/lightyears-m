Template.userList.helpers({
	users : function(){
		var myid = Meteor.userId(),
		cantPlay = [myid];

	Games.find({ inProgress: true }).forEach(function (game) {
		cantPlay.push(game.currentTurn[game.currentTurn[0] === myid ? 1 : 0]);
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

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
})