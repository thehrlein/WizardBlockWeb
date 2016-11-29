
	
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
	});
	
	
	// from index.js when click on start game
    function hideUnusedPlayerInputs() {
    	console.log("hideunsedplayer: " + players);
    	
    	switch(players) {
    	case "3":
    		$('.inputFour').hide();
    		$('.inputFive').hide();
    		$('.inputSix').hide();
    		break;
    	case "4":
    		break;
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
				console.log("tipp1 or stitch1 is not definied");
			} else {
				if (self.tippP1() == self.stitchP1()) {
					addScore = 20 + self.tippP1() * 10;
					console.log(addScore);
				} else {
					addScore = 0 - (Math.abs((self.tippP1() - self.stitchP1())) * 10);
					console.log(addScore);
				}
			}
			return addScore;
		});
		
		self.addP2 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP2() == 'undefined' || typeof self.stitchP2() == 'undefined') {
				console.log("tipp2 or stitch2 is not definied");
			} else {
				if (self.tippP2() == self.stitchP2()) {
					addScore = 20 + self.tippP2() * 10;
					console.log(addScore);
				} else {
					addScore = 0 - (Math.abs((self.tippP2() - self.stitchP2())) * 10);
					console.log(addScore);
				}
			}
			return addScore;
		});
		
		self.addP3 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP3() == 'undefined' || typeof self.stitchP3() == 'undefined') {
				console.log("tipp3 or stitch3 is not definied");
			} else {
				if (self.tippP3() == self.stitchP3()) {
					addScore = 20 + self.tippP3() * 10;
					console.log(addScore);
				} else {
					addScore = 0 - (Math.abs((self.tippP3() - self.stitchP3())) * 10);
					console.log(addScore);
				}
			}
			return addScore;
		});
		
		self.addP4 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP4() == 'undefined' || typeof self.stitchP4() == 'undefined') {
				console.log("tipp4 or stitch4 is not definied");
			} else {
				if (self.tippP4() == self.stitchP4()) {
					addScore = 20 + self.tippP4() * 10;
					console.log(addScore);
				} else {
					addScore = 0 - (Math.abs((self.tippP4() - self.stitchP4())) * 10);
					console.log(addScore);
				}
			}
			return addScore;
		});
		
		self.addP5 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP5() == 'undefined' || typeof self.stitchP5() == 'undefined') {
				console.log("tipp5 or stitch5 is not definied");
			} else {
				if (self.tippP5() == self.stitchP5()) {
					addScore = 20 + self.tippP5() * 10;
					console.log(addScore);
				} else {
					addScore = 0 - (Math.abs((self.tippP5() - self.stitchP5())) * 10);
					console.log(addScore);
				}
			}
			return addScore;
		});
		
		self.addP6 = ko.computed(function() {
			var addScore;
			if (typeof self.tippP6() == 'undefined' || typeof self.stitchP6() == 'undefined') {
				console.log("tipp6 or stitch6 is not definied");
			} else {
				if (self.tippP6() == self.stitchP6()) {
					addScore = 20 + self.tippP6() * 10;
					console.log(addScore);
				} else {
					addScore = 0 - (Math.abs((self.tippP6() - self.stitchP6())) * 10);
					console.log(addScore);
				}
			}
			return addScore;
		});
		
		
		self.totalP1 = ko.computed(function() {
			if (typeof self.addP1() == 'undefined') {
				console.log("addP1() is undefined");
			} else {
				console.log("addP1(): " + self.addP1());
				totalPlayerOne = totalPlayerOne + self.addP1();
				console.log("totalplayerone: " + totalPlayerOne + " - tipp: " + self.addP1());
				return totalPlayerOne;
			}
			return "";
		});
		
		self.totalP2 = ko.computed(function() {
			if (typeof self.addP2() == 'undefined') {
				console.log("addP2() is undefined");
			} else {
				console.log("addP2(): " + self.addP2());
				totalPlayerTwo = totalPlayerTwo + self.addP2();
				console.log("totalplayerTwo: " + totalPlayerTwo + " - tipp: " + self.addP2());
				return totalPlayerTwo;
			}
			return "";
		});
		
		self.totalP3 = ko.computed(function() {
			if (typeof self.addP3() == 'undefined') {
				console.log("addP3() is undefined");
			} else {
				console.log("addP3(): " + self.addP3());
				totalPlayerThree = totalPlayerThree + self.addP3();
				console.log("totalplayerThree: " + totalPlayerThree + " - tipp: " + self.addP3());
				return totalPlayerThree;
			}
			return "";
		});
		
		self.totalP4 = ko.computed(function() {
			if (typeof self.addP4() == 'undefined') {
				console.log("addP4() is undefined");
			} else {
				console.log("addP4(): " + self.addP4());
				totalPlayerFour = totalPlayerFour + self.addP4();
				console.log("totalplayerFour: " + totalPlayerFour + " - tipp: " + self.addP4());
				return totalPlayerFour;
			}
			return "";
		});
		
		self.totalP5 = ko.computed(function() {
			if (typeof self.addP5() == 'undefined') {
				console.log("addP5() is undefined");
			} else {
				console.log("addP5(): " + self.addP5());
				totalPlayerFive = totalPlayerFive + self.addP5();
				console.log("totalplayerFive: " + totalPlayerFive + " - tipp: " + self.addP5());
				return totalPlayerFive;
			}
			return "";
		});
		
		self.totalP6 = ko.computed(function() {
			if (typeof self.addP6() == 'undefined') {
				console.log("addP6() is undefined");
			} else {
				console.log("addP6(): " + self.addP6());
				totalPlayerSix = totalPlayerSix + self.addP6();
				console.log("totalplayerSix: " + totalPlayerSix + " - tipp: " + self.addP6());
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





	











