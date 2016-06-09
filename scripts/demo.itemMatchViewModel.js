/**
* Item view model
*/
function ItemMatchViewModel(id, team1, team2, datetime) {
	var self = this;
	
	// Observable properties
	self.id = ko.observable();
	self.team1 = ko.observable(team1);
 	self.team2 = ko.observable(team2);
	self.datetime = ko.observable(datetime);

	self.formatDate = function() {
		return self.datetime().toLocaleDateString();
	}

	self.formatTime = function() {
		return self.datetime().toLocaleTimeString();
	}
}