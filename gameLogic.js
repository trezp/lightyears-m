

// //player actions 
// 	//must draw a card every turn 
// 	//must discard a card or play a card every turn 
// 		//play a card on own stack 
// 			//mileage card or immunity card 
// 				//mileage card 
// 					//add to score 
// 				//immunity card 
// 					//become immune 
// 		//play a card on opponent's stack 
// 			//hazard card 
// 				//if oppenent has immunity, cannot play card 
// 	//if no moves
// 		//discard 
// function playerChoice(){
// 	//Choose a card 
// 		//You have chosen an immunity card. 
// 			//Play
// 				//playSelf()
// 			//Discard 	
// 				//discard()
// 		//You have chosen an remedy card. 
// 			//Play
// 				//playSelf()
// 			//Discard 	
// 				//discard()
// 		//You have chosen an hazard card. 
// 			//Play on Oppenent 
// 				//playOpponent()
// 			//Discard
// 				//discard()
// 		//You have chosen a mileage card.
// 			//Travel {{numberOfMiles}} 
// 				//playSelf()
// 			//Discard
// 				//discard()

// }
	
// //examines the cardType and calls appropriate functions 
// function playSelf(){
// 	//if the player is stalled, they can't play a mileage card
// 	if(cardType === "mileageCard"){
// 		if (player.stalled !== "none"){
// 			rejectPlay()
// 		} else {
// 			moveCardToPlayerStack()
// 			updateScore() 
// 		}
// 	//the player can't play a remedy card unless they are stalled  
// 	} else if(cardType === "remedy") {
// 		//the value of stalled will be the name of the hazard card. What the card fixes and the type of 
// 		//stall must match 
// 		if (card.fixes === player.stalled) {
// 			rejectPlay(); 
// 		//prevents player from playing unneccessary remedy card 
// 		} else if (player.stalled = "none"){
// 			rejectPlay()
// 		} else {
// 			moveCardToPlayerStack()
// 			updatePlayerStalled()
// 		}
// 	//if the cardType is immunity, updates immunity 
// 	} else if (cardType === "immunityCard") {
// 	   updateImmunity()
// 	   extraTurn();
// 	} else {
// 		rejectPlay();
// 	}
	
// } 

// function playOpponent(){
// 	//if player tries to play anything but a hazard card on opponent, play is rejected 
// 	if(immunityCard || remedyCard || mileageCard || player.stalled = true){
// 		rejectPlay();
// 	//if the player tries to play a card to which opponent is immunity, play is rejected 
// 	//THESE AREN'T GOING TO MATCH UP. FIX! GIVE IMMUNITY CARDS A PREVENTS PROPERTY 
// 	} else if (player.immunity === card.title){
// 		rejectPlay();  
// 	} else if {
// 		moveCardToOpponentStack();
// 		updatePlayerStalled(); 
// 	} 
// }

// function moveCardToPlayerStack(){
// 	//move from hand to playerStack
// }

// function moveCardtoOpponentStack(){
// 	//move from hand to OpponentStack
// }

// function updatePlayerStalled(){
// 	//If the player has no hazards, set the value of player.stalled to the value of card.fixes 
// 	if(player.stalled === "none"){
// 		player.stalled = card.fixes; 
// 		//if the player 
// 	} else if (player.stalled = card.title) {

// 	}
// }

// function updateScore(){
// 	miles += mileagecard value 
// }

// function updateImmunity(){
// 	if(immunityCard.title = "Superstar Astronaut"){
// 		player.immunity = "Superstar Astronaut"; 
// 	} 

// 	if(immunityCard.title = "Force Field"){
// 		player.immunity = "Force Field"; 
// 	} 

// 	if(immunityCard.title = "Interstellar Diplomat"){
// 		player.immunity = "Interstellar Diplomat"; 
// 	} 

// 	if(immunityCard.title = "Map of the Universe"){
// 		player.immunity = "Map of the Universe"; 
// 	} 


// }

// function discard(){
// 	//move card to discard stack
// }

// function rejectPlay(){
// 	//tell player they're attempting an illegal move:
// 		//if player stalled and trying to update mileage
// 		//if trying to play remedy or immunity card on opponent 
// 		//if trying to play unneeded remedy card 
// 		//if trying to play hazard card on already stalled opponent 
// }

// function dickMove(){
// 	//play an immunity card at the moment your opponent gives you
// 	//a hazard. Get bonus points.
// 	extraTurn(); 
// }

// function extraTurn(){
// 	//initiate extra turn 
// }