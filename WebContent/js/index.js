   $(window).on('load', function(){
	   console.log("index js geladen!");
	   
	   // hide unused stuff at the beginning
       $('#wrongNumber').hide();
       $('#startGame').hide();
       hidePlayerInputs();
	   hidePlayerInputWarnings();
	//   isSwitchStitchesChecked();
	   hideChangePlayerNamesNavBar();
	   hideGameBlock();
	   
	   // after number entered in player number input field
	   $('#players').keyup(function(){
		   howMuchPlayers();
		   checkNumber();
	   });
	   
	 /*  $('#switchStitches').click(function(){
		   isSwitchStitchesChecked();
	   }); */
	   
	   // player number input field arrow up down pressed
	   $('#players').on('change', function(){
		   howMuchPlayers();
		   checkNumber();
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
	   
	   // click on navigation button for changing player names / resume game
	   $('#changePlayerNames').click(toggleNavBarButton);

	   
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
        	showSettings();
    	}
    }
    
    function openGameBlock() {
    	if (isEveryNameEntered) {
    		editSettings = false;
    		hideSettings();
    		showChangePlayerNamesNavBar();
    		$('#changePlayerNames').text("Spielernamen ändern");
    	}
    }
    

    
    function hideSettings() {
		$('#settings').hide();
		showGameBlock();
    }
    
    function showGameBlock() {
		$('#gameblock').show();
    }
    
    function showSettings() {
		$('#startGame').text("Spiel fortsetzen");
		$('#changePlayerNames').text("Spiel fortsetzen");
		$('#settings').show();
		hideGameBlock();
		editSettings = true;
    }
    
    function hideGameBlock() {
		$('#gameblock').hide();
    }
    
    function showIsEveryNameEnteredArray() {
    	for (var s in isEveryNameEnteredArray) {
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
    
  /*  function isSwitchStitchesChecked() {
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
	   }; */
   
    
    // check player number input value
   	function howMuchPlayers() {
   		players = $('#players').val();
   		
   	};
   	   	
   	function showPlayerNameInputs() {
   		
 	    hidePlayerInputWarnings();

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
   		if ($('#players').val() > 2 && $('#players').val() < 7) {
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
   	
