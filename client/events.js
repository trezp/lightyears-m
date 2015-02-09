Template.play.events({
	'click .card' : function(event, target){
		console.log(this.title, this.cardType, this.value)
	}
});
