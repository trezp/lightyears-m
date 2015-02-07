//player actions 
	//must draw a card 
	//must discard or play a card 
		//play a card on own stack 
			//mileage card or immunity card 
				//mileage card 
					//add to score 
				//immunity card 
					//become immune 
		//play a card on opponent's stack 
			//hazard card 
				//if oppenent has immunity, cannot play card 

//prompts 
	//Draw a card 
	//Choose a card 
		//You have chosen an immunity card. 
			//playSelf()
			//discard()
		//You have chosen an remedy card. 
			//playSelf()
			//discard()
		//You have chosen an hazard card. 
			//playOpponent()
			//discard()
		//You have chosen a mileage card. 
			//playSelf()
			//discard()


function playSelf(){	
	if(mileageCard){
		if (playerStalled){
			rejectPlay()
		} else {
			moveCardToPlayerStack()
			updateScore() 
		}
	} else if(remedyCard) {
		if (!playerStalled){
			rejectPlay()
		} else {
			moveCardToPlayerStack()
			updatePlayerStalled()
		}
	} else if (immunityCard) {
	   updateImmunity()
	} else {
		rejectPlay()
	}
	
} 

function playOpponent(){
	if(immunityCard || remedyCard || mileageCard){
		rejectPlay()
	} else if (opponent stalled = true) {
		rejectPlay()
	} else {
		moveCardToOpponentStack()
		updatePlayerStalled() 
	}
}

function moveCardToPlayerStack(){
	//move from hand to playerStack
}

function moveCardtoOpponentStack(){
	//move from hand to OpponentStack
}

function updatePlayerStalled(){
	if(stalled = true){
		stalled = false; 
	} else if (stalled = false){
		stalled = true; 
	}
}

function updateScore(){
	miles += mileagecard value 
}

function updateImmunity(){
	if(immunity = true){
		immunity = false; 
	} else if (immunity = false){
		immunity = true; 
	}
}

function discard(){
	//move card to discard stack
}

function rejectPlay(){
	//tell player they're attempting an illegal move 
	//if player stalled and trying to update mileage
	//if trying to play remedy or immunity card on opponent 
	//if trying to play unneeded remedy card 
	//if trying to play hazard card on already stalled opponent 
}

function dickMove(){
	//play an immunity card at the moment your opponent gives you
	//a hazard. Get bonus points.
}