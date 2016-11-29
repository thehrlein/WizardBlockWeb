   $(window).on('load', function(){
	   console.log("index js geladen!");
       $('#wrongNumber').hide();
       $('#startGame').hide();
       hidePlayerInputs();
	   hidePlayerInputWarnings();
	   isSwitchStitchesChecked();
	   hideChangePlayerNamesNavBar();
	   hideGameBlock();
	   
	   $('#players').keyup(function(){
		   console.log("keyup jquery");
		   howMuchPlayers();
	   });
	   
	   $('#switchStitches').click(function(){
		   isSwitchStitchesChecked();
	   });
	   
	   $('#players').on('change', function(){
		   howMuchPlayers();
	   });
	   
	   $('#startGame').on('click', function(){
		   playerNameArray = [];
		   
		   switch(players) {
		   case "6":
			   checkPlayerSixInput();
		   case "5":
			   checkPlayerFiveInput();
		   case "4":
			   checkPlayerFourInput();
		   case "3":
			   checkPlayerThreeInput();
			   checkPlayerTwoInput();
			   checkPlayerOneInput();
			   break;
		   default:
			   console.log("Keine Anzahl Spieler gewählt!");
		   }
		   
		   showIsEveryNameEnteredArray();
		   openGameBlock();
	   });
	   

	   
   });
   

   
   // variablen
   var playerNameOne;
   var playerNameTwo;
   var playerNameThree;
   var playerNameFour;
   var playerNameFive;
   var playerNameSix;
   var playerNameArray = [];
   var isEveryNameEnteredArray = [true, true, true, true, true, true];
   var isEveryNameEntered = false;
   var editSettings = false;
  
   

   
   // methoden
   function hideChangePlayerNamesNavBar() {
	   $('#changePlayerNames').hide();
   }
   
   function showChangePlayerNamesNavBar() {
	   $('#changePlayerNames').show();
   }
   
    function hidePlayerInputs() {
    	$('#playerSix').hide();
    	$('#playerFive').hide();
    	$('#playerFour').hide();    	
    	$('#playerThree').hide();
    	$('#playerTwo').hide();
    	$('#playerOne').hide();
    };
    
    function toggleNavBarButton() {
    	if (editSettings) {
    		openGameBlock();
    	} else {
        	showContentSettings();
    	}
    }
    
    function openGameBlock() {
    	console.log(isEveryNameEntered);
    	if (isEveryNameEntered) {
    		editSettings = false;
    		hideContentSettings();
    		showChangePlayerNamesNavBar();
    		$('#changePlayerNames').text("Spielernamen ändern");
    		hideUnusedPlayerInputs();
    	}
    }
    

    
    function hideContentSettings() {
		$('#contentSettings').hide();
		$('#contentGameblock').show();
    }
    
    function showContentSettings() {
		$('#startGame').text("Spiel fortsetzen");
		$('#changePlayerNames').text("Spiel fortsetzen");
		$('#contentSettings').show();
		hideGameBlock();
		editSettings = true;
    }
    
    function hideGameBlock() {
		$('#contentGameblock').hide();
    }
    
    function showIsEveryNameEnteredArray() {
    	for (var s in isEveryNameEnteredArray) {
			console.log(isEveryNameEnteredArray[s]);
			if (isEveryNameEnteredArray[s] == false) {
				isEveryNameEntered = false;
				break;
			} else {
				isEveryNameEntered = true;
			}
		}
    }
    
    function checkPlayerSixInput() {
    	playerNameSix = $('#playerSix input').val();
		console.log(playerNameSix);
		if (playerNameSix.length > 0) {
			playerNameArray.push(playerNameSix);
	    	$('#warningPlayerSix').hide();
	    	isEveryNameEnteredArray[5] = true;
		} else {
	    	$('#warningPlayerSix').show();
	    	isEveryNameEnteredArray[5] = false;
		}
    }
    
    function checkPlayerFiveInput() {
    	playerNameFive = $('#playerFive input').val();
		console.log(playerNameFive);
		if (playerNameFive.length > 0) {
			playerNameArray.push(playerNameFive);
	    	$('#warningPlayerFive').hide();
	    	isEveryNameEnteredArray[4] = true;
		} else {
	    	$('#warningPlayerFive').show();
	    	isEveryNameEnteredArray[4] = false;
		}
    }
    
    function checkPlayerFourInput() {
    	playerNameFour = $('#playerFour input').val();
		console.log(playerNameFour);
		if (playerNameFour.length > 0) {
			playerNameArray.push(playerNameFour);
	    	$('#warningPlayerFour').hide();
	    	isEveryNameEnteredArray[3] = true;
		} else {
	    	$('#warningPlayerFour').show();
	    	isEveryNameEnteredArray[3] = false;
		}
    }
    
    function checkPlayerThreeInput() {
    	playerNameThree = $('#playerThree input').val();
		console.log(playerNameThree);
		if (playerNameThree.length > 0) {
			playerNameArray.push(playerNameThree);
	    	$('#warningPlayerThree').hide();
	    	isEveryNameEnteredArray[2] = true;
		} else {
	    	$('#warningPlayerThree').show();
	    	isEveryNameEnteredArray[2] = false;
		}
    }
    
    function checkPlayerTwoInput() {
    	playerNameTwo = $('#playerTwo input').val();
		console.log(playerNameTwo);
		if (playerNameTwo.length > 0) {
			playerNameArray.push(playerNameTwo);
	    	$('#warningPlayerTwo').hide();
	    	isEveryNameEnteredArray[1] = true;
		} else {
	    	$('#warningPlayerTwo').show();
	    	isEveryNameEnteredArray[1] = false;
		}
    }
    
    function checkPlayerOneInput() {
    	playerNameOne = $('#playerOne input').val();
		console.log(playerNameOne);
		if (playerNameOne.length > 0) {
			playerNameArray.push(playerNameOne);
	    	$('#warningPlayerOne').hide();
	    	isEveryNameEnteredArray[0] = true;
		} else {
	    	$('#warningPlayerOne').show();
	    	isEveryNameEnteredArray[0] = false;
		}
    }
        	
   
    function hidePlayerInputWarnings() {
    	$('#warningPlayerOne').hide();
    	$('#warningPlayerTwo').hide();
    	$('#warningPlayerThree').hide();
    	$('#warningPlayerFour').hide();
    	$('#warningPlayerFive').hide();
    	$('#warningPlayerSix').hide();


    }
    
    function isSwitchStitchesChecked() {
       if($("#switchStitches").is(':checked')) {
    	   console.log("--> switch stitches IS checked");
     	    $("#pSwitchStitches").text("Ja. Die Anzahl der Tipps darf gleich " +
     	    	"der Anzahl möglicher Stiche sein.");  // checked
       } else {
    	   console.log("--> switch stitches IS NOT checked");
		    $("#pSwitchStitches").text("Nein. Sollte die Anzahl der Tipps " +
		    	"gleich der möglichen Anzahl Stiche sein, muss der letzte " +
			  	"Spieler 1 Stich mehr oder weniger tippen.");  // unchecked	
		   }
	   };
   
    
   	function howMuchPlayers() {
   		players = $('#players').val();
   		console.log("players: " + players);
   		checkNumber();
   	};
   	   	
   	function showPlayerNameInputs() {
   		
 	   hidePlayerInputWarnings();

   		console.log("show player name inputs, depending on players (" + players +")");
   		switch (players) {
   		case "3":
   	    	$('#playerThree').show();
   	    	$('#playerTwo').show();
   	    	$('#playerOne').show();
   	    	$('#playerSix').hide();
   	    	$('#playerFive').hide();
   	    	$('#playerFour').hide();
   	    	break;
   		case "4":
   	    	$('#playerThree').show();
   	    	$('#playerTwo').show();
   	    	$('#playerOne').show();
   			$('#playerFour').show();
   	    	$('#playerFive').hide();
   			break;
   		case "5":
   	    	$('#playerThree').show();
   	    	$('#playerTwo').show();
   	    	$('#playerOne').show();
   			$('#playerFour').show();
   			$('#playerFive').show();
   	    	$('#playerSix').hide();
   	    	break;
   		case "6":
   	    	$('#playerThree').show();
   	    	$('#playerTwo').show();
   	    	$('#playerOne').show();
   			$('#playerFour').show();
   			$('#playerFive').show();
   	    	$('#playerSix').show();
   	    	break;
   	    default:
   	    	hidePlayerInputs();
   		}
   	};

   	function checkNumber() {
   		console.log("onkeydown");
   		if ($('#players').val() > 2 && $('#players').val() < 7) {
   			console.log(players + " is valid");
   			$('#wrongNumber').hide();
   	   		showPlayerNameInputs();
   	   		$('#startGame').show();
   		}
   		else {
   			console.log(players + " is not a valid player number");
   			$('#players').val("");
   			$('#wrongNumber').show();
   			hidePlayerInputs();
   	   		$('#startGame').hide();
   		}
   	};
   	
