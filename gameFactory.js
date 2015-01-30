GameFactory = {};

GameFactory.createGame = function(){

};

function createPlayers(ids){
	var playerObject = {};

	ids.forEach(function(id) {
		playerobject[id] = {
			hand: [],
			stack: [],
			score: [],
			stalled: true
		}
	});
};