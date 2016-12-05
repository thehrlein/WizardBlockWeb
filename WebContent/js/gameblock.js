
	
	$(window).on("load", function() {
		console.log("gameblock js geladen!");
						
	function updateNames() {
		var playerOne = $('#playerNameInputOne').val();
		var playerTwo = $('#playerNameInputTwo').val();
		var playerThree = $('#playerNameInputThree').val();
		var playerFour = $('#playerNameInputFour').val();
		var playerFive = $('#playerNameInputFive').val();
		var playerSix = $('#playerNameInputSix').val(); 
		
		$('#playerNameOne').text(playerOne);
		$('#playerNameTwo').text(playerTwo);
		$('#playerNameThree').text(playerThree);
		$('#playerNameFour').text(playerFour);
		$('#playerNameFive').text(playerFive);
		$('#playerNameSix').text(playerSix); 

	}
	
	$("#playerNameInputOne, #playerNameInputTwo, #playerNameInputThree, #playerNameInputFour, " +
		"#playerNameInputFive, #playerNameInputSix").bind("change keyup", function(){ 
	    updateNames();
	    
    $('#startGame').click(hideUnusedPlayerInputs);
    
    $('#newRoundButton').click(hideUnusedPlayerInputs);

	});

	
	
	function hideGameBlockWarning() {
		$('#gameBlockWarning').hide();
	}
	
	function showGameBlockWarning() {
		$('#gameBlockWarning').show();
	}
	
	
    function hideUnusedPlayerInputs() {
    	
    	switch(players) {
    	case "3":
    		$('.inputFour').hide();
    		$('.inputFive').hide();
    		$('.inputSix').hide();
    		break;
    	case "4":
    		$('.inputFour').show();
    		$('.inputFive').hide();
    		$('.inputSix').hide();
    		break;
    	case "5":
    		$('.inputFour').show();
    		$('.inputFive').show();
    		$('.inputSix').hide();
    		break;
    	case "6":
    		$('.inputFour').show();
    		$('.inputFive').show();
    		$('.inputSix').show();
    	}
    };
    
	
	
	
	
	var currentGameRound = 1;
	var totalPlayerOne = 0;
	var totalPlayerTwo = 0;
	var totalPlayerThree = 0;
	var totalPlayerFour = 0;
	var totalPlayerFive = 0;
	var totalPlayerSix = 0;
	var allTippsTogether;
	var allStitchesTogether;
	var lastGameRound;
	var inputTippsArray = [];
	var inputStitchesArray = [];
	var alreadyAddedP1 = false;
	var alreadyAddedP2 = false;
	var alreadyAddedP3 = false;
	var alreadyAddedP4 = false;
	var alreadyAddedP5 = false;
	var alreadyAddedP6 = false;
	var oldAddP1 = 0;
	var oldAddP2 = 0;
	var oldAddP3 = 0;
	var oldAddP4 = 0;
	var oldAddP5 = 0;
	var oldAddP6 = 0;



	function checkIfEnteredStitchesAreEqualGameRound() {

		allStitchesTogether = 0;
		for (var i in inputStitchesArray) {

			if (typeof inputStitchesArray[i]() != 'undefined') {
				allStitchesTogether = parseFloat(allStitchesTogether) + parseFloat(inputStitchesArray[i]());
			} 
		}
		console.log("allStitchesTogether: " + allStitchesTogether);
		
		if (allStitchesTogether === currentGameRound) {
			console.log("Stiche gleich Anzahl möglicher Stiche");
			hideGameBlockWarning();
			return true;
		} else {
			console.log("Stiche ungleich Anzahl möglicher Stiche. Möglich: " + currentGameRound + " Eingetragen: " + allStitchesTogether);
			showGameBlockWarning();
			$('#gameBlockWarning').text("Die Anzahl gemachter Stiche ist ungleich der möglichen Stiche in dieser Runde. Möglich: " + currentGameRound + " Eingetragen: " + allStitchesTogether);

			return false
		}		
	}

	// nicht benötigt, da man tipps und ergebnisse zusammen einträgt bevor eine überprüfung stattfindet
	/* function checkIfEnteredTippsAreEqualGameRound() {
		
		allTippsTogether = 0;
		for (var i in inputTippsArray) {
			if (typeof inputTippsArray[i]() != 'undefined') {
				allTippsTogether = parseFloat(allTippsTogether) + parseFloat(inputTippsArray[i]());
			} 
		}
		console.log("allTippsTogether: " + allTippsTogether);
		
		if (allTippsTogether === currentGameRound) {
			console.log("Tipps gleich Anzahl möglicher Stiche");
			showGameBlockWarning();
			$('#gameBlockWarning').text("Die Anzahl der Tipps ist gleich der möglichen Stiche. Der letzte Spieler muss 1 Tipp mehr oder weniger angeben.");
			return true;
		} else {
			console.log("Tipps ungleich Anzahl möglicher Stiche");
			hideGameBlockWarning();
			return false
		}		
	} */
	
	function checkIfNobodyHasTooMuchTipps() {
		for (var i = 0; i < players; i++) {
			if (inputTippsArray[i]() > currentGameRound) {
				showGameBlockWarning();
				$('#gameBlockWarning').text("Spieler " + (i+1) + " hat mehr Stiche als möglich angesagt.")
				return false;
			}
		}
		hideGameBlockWarning();
		return true;
	}
	
	function checkIfNobodyHasNegativeInputs() {
		for (var i = 0; i < players; i++) {
			if (inputStitchesArray[i]() < 0) {
				showGameBlockWarning();
				$('#gameBlockWarning').text("Spieler " + (parseFloat(i)+1) + " hat eine negative Anzahl gemachter Stiche!");
				return false
			} 
			
			if (inputTippsArray[i]() < 0) {
				showGameBlockWarning();
				$('#gameBlockWarning').text("Spieler " + (parseFloat(i)+1) + " hat eine negative Anzahl angesagter Tipps!");
				return false
			} 
		}
		
		return true;
		
	}
	
	function checkAllInputs() {
		for (var i = 0; i < players; i++) {
			if (typeof inputTippsArray[i]() == 'undefined' || typeof inputStitchesArray[i]() == 'undefined') {
				console.log("Spieler " + (parseFloat(i) + 1) + " hat nichts eingegeben");
				showGameBlockWarning();
				$('#gameBlockWarning').text("Du hast nicht alle Tipps und gemachten Stiche für jeden Spieler eingetragen.")
				return false;
			}
		}
		console.log("Alle Tipps wurden eingegeben");
		hideGameBlockWarning();
		return true;
	}
	
	function checkIfGameIsOver() {
		console.log("players: " + players + " gameround: " + currentGameRound);
		if (players * currentGameRound === 60) {
			console.log("game over!");
			return true;
		} else {
			console.log("you have " + ((60 / players) - currentGameRound) + " rounds to play");
			return false;
		}
	}
	
	function calculateWinner() {
		var endScores = [
			{name: playerNameOne, score: totalPlayerOne}, 
			{name: playerNameTwo, score: totalPlayerTwo}, 
			{name: playerNameThree, score: totalPlayerThree}, 
			{name: playerNameFour, score: totalPlayerFour}, 
			{name: playerNameFive, score: totalPlayerFive}, 
			{name: playerNameSix, score: totalPlayerSix}
			];
		
		var winner = endScores[0];
		
		for (var i = 1; i < players; i++) {
			if (endScores[i].score > winner.score) {
				winner = endScores[i];
			}
			
		}
		console.log("Winner: " + winner.name);
		return winner.name;

	}
	
	function setCurrentInputMaximum() {
		$('.tipp').attr({
			"min": 0,
			"max": currentGameRound
		});
	}
	
	function setAlreadyAddedToFalse() {
		alreadyAddedP1 = false;
		alreadyAddedP2 = false;
		alreadyAddedP3 = false;
		alreadyAddedP4 = false;
		alreadyAddedP5 = false;
		alreadyAddedP6 = false;
	};


	
	function GameRound(t1, t2, t3, t4, t5, t6, s1, s2, s3, s4, s5, s6) {
		var self = this;
		self.gameRound = currentGameRound;
		self.tippP1 = ko.observable(t1);
		self.tippP2 = ko.observable(t2);
		self.tippP3 = ko.observable(t3);
		self.tippP4 = ko.observable(t4);
		self.tippP5 = ko.observable(t5);
		self.tippP6 = ko.observable(t6);

		self.stitchP1 = ko.observable(s1);
		self.stitchP2 = ko.observable(s2);
		self.stitchP3 = ko.observable(s3);
		self.stitchP4 = ko.observable(s4);
		self.stitchP5 = ko.observable(s5);
		self.stitchP6 = ko.observable(s6);
		
		
		inputTippsArray[0] = self.tippP1;
		inputTippsArray[1] = self.tippP2;
		inputTippsArray[2] = self.tippP3;
		inputTippsArray[3] = self.tippP4;
		inputTippsArray[4] = self.tippP5;
		inputTippsArray[5] = self.tippP6;

		inputStitchesArray[0] = self.stitchP1;
		inputStitchesArray[1] = self.stitchP2;
		inputStitchesArray[2] = self.stitchP3;
		inputStitchesArray[3] = self.stitchP4;
		inputStitchesArray[4] = self.stitchP5;
		inputStitchesArray[5] = self.stitchP6;


		self.addP1 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP1() == 'undefined' || typeof self.stitchP1() == 'undefined') {
			} else {
				if (self.tippP1() == self.stitchP1()) {
					addScore = 20 + self.tippP1() * 10;
				} else {
					addScore = 0 - (Math.abs((self.tippP1() - self.stitchP1())) * 10);
				}
			}
			return addScore;
		});
		
		self.addP2 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP2() == 'undefined' || typeof self.stitchP2() == 'undefined') {
			} else {
				if (self.tippP2() == self.stitchP2()) {
					addScore = 20 + self.tippP2() * 10;
				} else {
					addScore = 0 - (Math.abs((self.tippP2() - self.stitchP2())) * 10);
				}
			}
			return addScore;
		});
		
		self.addP3 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP3() == 'undefined' || typeof self.stitchP3() == 'undefined') {
			} else {
				if (self.tippP3() == self.stitchP3()) {
					addScore = 20 + self.tippP3() * 10;
				} else {
					addScore = 0 - (Math.abs((self.tippP3() - self.stitchP3())) * 10);
				}
			}
			return addScore;
		});
		
		self.addP4 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP4() == 'undefined' || typeof self.stitchP4() == 'undefined') {
			} else {
				if (self.tippP4() == self.stitchP4()) {
					addScore = 20 + self.tippP4() * 10;
				} else {
					addScore = 0 - (Math.abs((self.tippP4() - self.stitchP4())) * 10);
				}
			}
			return addScore;
		});
		
		self.addP5 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP5() == 'undefined' || typeof self.stitchP5() == 'undefined') {
			} else {
				if (self.tippP5() == self.stitchP5()) {
					addScore = 20 + self.tippP5() * 10;
				} else {
					addScore = 0 - (Math.abs((self.tippP5() - self.stitchP5())) * 10);
				}
			}
			return addScore;
		});
		
		self.addP6 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP6() == 'undefined' || typeof self.stitchP6() == 'undefined') {
			} else {
				if (self.tippP6() == self.stitchP6()) {
					addScore = 20 + self.tippP6() * 10;
				} else {
					addScore = 0 - (Math.abs((self.tippP6() - self.stitchP6())) * 10);
				}
			}
			return addScore;
		});
		
		
		self.totalP1 = ko.computed(function() {
			if (typeof self.addP1() == 'undefined') {
			} else {
				if(!alreadyAddedP1) {
					oldAddP1 = self.addP1();
					totalPlayerOne = totalPlayerOne + self.addP1();
					alreadyAddedP1 = true;
					return totalPlayerOne;
				} else {
					totalPlayerOne = totalPlayerOne - oldAddP1 + self.addP1();
					oldAddP1 = self.addP1();
					return totalPlayerOne;
				}
			}
			return "";
		}); 
		
		self.totalP2 = ko.computed(function() {
			if (typeof self.addP2() == 'undefined') {
			} else {
				if(!alreadyAddedP2) {
					oldAddP2 = self.addP2();
					totalPlayerTwo = totalPlayerTwo + self.addP2();
					alreadyAddedP2 = true;
					return totalPlayerTwo;
				} else {
					totalPlayerTwo = totalPlayerTwo - oldAddP2 + self.addP2();
					oldAddP2 = self.addP2();
					return totalPlayerTwo;
				}
			}
			return "";
		}); 
		
		self.totalP3 = ko.computed(function() {
			if (typeof self.addP3() == 'undefined') {
			} else {
				if(!alreadyAddedP3) {
					oldAddP3 = self.addP3();
					totalPlayerThree = totalPlayerThree + self.addP3();
					alreadyAddedP3 = true;
					return totalPlayerThree;
				} else {
					totalPlayerThree = totalPlayerThree - oldAddP3 + self.addP3();
					oldAddP3 = self.addP3();
					return totalPlayerThree;
				}
			}
			return "";
		}); 
		
		self.totalP4 = ko.computed(function() {
			if (typeof self.addP4() == 'undefined') {
			} else {
				if(!alreadyAddedP4) {
					oldAddP4 = self.addP4();
					totalPlayerFour = totalPlayerFour + self.addP4();
					alreadyAddedP4 = true;
					return totalPlayerFour;
				} else {
					totalPlayerFour = totalPlayerFour - oldAddP4 + self.addP4();
					oldAddP4 = self.addP4();
					return totalPlayerFour;
				}
			}
			return "";
		}); 
		
		self.totalP5 = ko.computed(function() {
			if (typeof self.addP5() == 'undefined') {
			} else {
				if(!alreadyAddedP5) {
					oldAddP5 = self.addP5();
					totalPlayerFive = totalPlayerFive + self.addP5();
					alreadyAddedP5 = true;
					return totalPlayerFive;
				} else {
					totalPlayerFive = totalPlayerFive - oldAddP5 + self.addP5();
					oldAddP5 = self.addP5();
					return totalPlayerFive;
				}
			}
			return "";
		}); 
		
		self.totalP6 = ko.computed(function() {
			if (typeof self.addP6() == 'undefined') {
			} else {
				if(!alreadyAddedP6) {
					oldAddP6 = self.addP6();
					totalPlayerSix = totalPlayerSix + self.addP6();
					alreadyAddedP6 = true;
					return totalPlayerSix;
				} else {
					totalPlayerSix = totalPlayerSix - oldAddP6 + self.addP6();
					oldAddP6 = self.addP6();
					return totalPlayerSix;
				}
			}
			return "";
		}); 
		
		setCurrentInputMaximum();
				
	};
	

	
	function WizardBlock() {
	    var self = this;   
	    
	    self.rounds = ko.observableArray([
	        new GameRound()
	    ]); 
	    
	    self.addRound = function() {
	    	lastGameRound = currentGameRound - 1;
			
	    	var allTippsEntered = checkAllInputs();

	    	if (allTippsEntered ) {
		    	var nobodyHasMoreTippsThanCurrentGameRound = checkIfNobodyHasTooMuchTipps(); 
		    	
		    	if (nobodyHasMoreTippsThanCurrentGameRound){
		    		var nobodyHasNegativeInputs = checkIfNobodyHasNegativeInputs();
		    		
		    		if (nobodyHasNegativeInputs) {
		    			var allStitchesEqualGameRound = checkIfEnteredStitchesAreEqualGameRound();
		    	    	
			    	    if (allStitchesEqualGameRound) {
			    	    	
			    	    	var gameOver = checkIfGameIsOver();
			    	    	if (!gameOver) {
			    	    		currentGameRound++;
			    	    		setAlreadyAddedToFalse();
			    	    		self.rounds.push(new GameRound());
			    	    		setCurrentInputMaximum();
			    	    	} else {
			    	    		$('#newRoundButton').hide();
			    	    		var winner = calculateWinner();
			    	    		alert("Winner: " + winner);
			    	    	}
			    	    	
			    	    	
			    	    }
			    	}
		    	}
	    	}
	    	
	    	
	    };
	    

	}
	


	ko.applyBindings(new WizardBlock());
	
	
	
});





	











