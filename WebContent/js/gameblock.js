
	
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
	
	
    function hideUnusedPlayerInputs() {
    	console.log("hideunsedplayer: " + players);
    	
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
				totalPlayerOne = totalPlayerOne + self.addP1();
				return totalPlayerOne;
			}
			return "";
		});
		
		self.totalP2 = ko.computed(function() {
			if (typeof self.addP2() == 'undefined') {
			} else {
				totalPlayerTwo = totalPlayerTwo + self.addP2();
				return totalPlayerTwo;
			}
			return "";
		});
		
		self.totalP3 = ko.computed(function() {
			if (typeof self.addP3() == 'undefined') {
			} else {
				totalPlayerThree = totalPlayerThree + self.addP3();
				return totalPlayerThree;
			}
			return "";
		});
		
		self.totalP4 = ko.computed(function() {
			if (typeof self.addP4() == 'undefined') {
			} else {
				totalPlayerFour = totalPlayerFour + self.addP4();
				return totalPlayerFour;
			}
			return "";
		});
		
		self.totalP5 = ko.computed(function() {
			if (typeof self.addP5() == 'undefined') {
			} else {
				totalPlayerFive = totalPlayerFive + self.addP5();
				return totalPlayerFive;
			}
			return "";
		});
		
		self.totalP6 = ko.computed(function() {
			if (typeof self.addP6() == 'undefined') {
			} else {
				totalPlayerSix = totalPlayerSix + self.addP6();
				return totalPlayerSix;
			}
			return "";
		});

		currentGameRound++;
	};
	
	
	function WizardBlock() {
	    var self = this;   
	    
	    self.rounds = ko.observableArray([
	        new GameRound()
	    ]); 
	    
	    self.addRound = function() {
	        self.rounds.push(new GameRound());
	    };
	    

	}

	ko.applyBindings(new WizardBlock());
	
	
	
});





	











