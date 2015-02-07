Router.route('layout');

Router.route('/', function() {
	this.render('layout');
});

Router.route('/game/:_id', function(){
	this.render('play');
	game = Games.findOne();
	game.players = Games.findOne().players[]
});

