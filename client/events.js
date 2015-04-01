Template.play.events({
	
	'mouseenter .card' : function(){
		$('.hoverMenuItem').removeClass('hidden');
	},

	'mouseleave .card' : function(){
		$('.hoverMenuItem').addClass('hidden');

	},

	'click .deck' : function(event, target){
		Meteor.call('hand')
		Meteor.call('checkScore')
	}, 

	'click #play' : function(event, target){

		Meteor.call('score')	
		Meteor.call('immunity')
		Meteor.call('getMovementStatus')
		Meteor.call('player')
		Meteor.call('playSelf')
		Meteor.call('updateScore')
		// console.log(target.data)
		// var currentGame = Games.findOne()._id
		// var currentScore = Games.findOne().players[Meteor.userId()].score
		// Games.update({_id: this._id}, {$inc: {currentScore: 10}})	
		
		//if the player is stalled, they can't play a mileage card
		if(this.cardType === "mileageCard"){
			if (getMovementStatus === "Stalled"){
			Meteor.call('rejectPlay')
		} else {
			Meteor.call('moveCardToPlayerStack')
			Meteor.call('updateScore')
			}
		}
		//if the "fixes" property of the played card matches the "stalled" property, move card
		//and update score 
		if(this.cardType === "remedy" && getMovementStatus === this.fixes) {
		 	Meteor.call('moveCardToPlayerStack')
			Meteor.call('updateScore')
		} else {
			Meteor.call('rejectPlay')
		} 
		//if the cardType is immunity, updates immunity 

		if (this.cardType === "immunityCard") {
	   		Meteor.call('updateImmunity')
	   		Meteor.call('extraTurn')
		} 
		//OPPONENT MUST NOT ALREADY BE STALLED
		if(this.cardType === "hazard"){
			Meteor.call('playOppenent')
		} 
	},

	'click #discard' : function(event, target){
		console.log("This has been pretend thrown away.");
	}
});