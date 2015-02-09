Router.route('layout');

Router.route('/', function() {
	this.render('layout');
});

Router.route('/game/:_id', function(){
	this.render('play', {data : Games.findOne(this.params._id)});
});

