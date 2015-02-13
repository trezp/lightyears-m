Template.play.events({
	'click .card' : function(event, target){

		// console.log(this.title, this.cardType, this.value)
	},

	// 'mouseenter .card' : function(){
	// 	$('.hoverMenuItem').removeClass('hidden');
	// },

	// 'mouseleave .card' : function(){
	// 	$('.hoverMenuItem').addClass('hidden');

	// },

	'click .deck' : function(event, target){
		
		console.log(this.title, this.cardType, this.value);
	}, 

	'click #play' : function(event, target){
		Meteor.call('score')	
		Meteor.call('immunity')
		Meteor.call('stalled')
		Meteor.call('player')
		console.log(player + ", your score is " + score +
		 ", your immunity is " + immunity + ", and your status is " + stalled +
		 ". The card you clicked on was " + this.title)

		
	},

	'click #discard' : function(event, target){
		alert("This has been pretend thrown away.");
	}
});