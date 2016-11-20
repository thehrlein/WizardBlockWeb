

$(window).on("load", function() {
	console.log("gameblock js geladen!");
	
	// just for developing, delete later
	//$('#contentSettings').hide();
})


// just for developing, delete later
players = 6;
isEveryNameEntered = true;

function PlayerNames() {
	var self = this;
	
	self.playerNameOne = ko.observable("Spieler 1");
}

ko.applyBindings(new PlayerNames());