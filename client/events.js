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
		console.log(this.title, this.cardType, this.value);
	},

	'click #discard' : function(event, target){
		alert("This has been pretend thrown away.");
	}
});