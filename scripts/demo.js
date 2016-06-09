(function() {
	'use strict';
	
	function initializeDemoData(demoData) {
		var match, matchViewModel,
			container = document.getElementById('bind-container'),
			listViewModel = new ListMatchViewModel();

		if (demoData) {
			for (var i = 0; i < demoData.matches.length; i++) {
				match = demoData.matches[i];
				matchViewModel = new ItemMatchViewModel(match.id, match.team1, match.team2, match.datetime);

				listViewModel.items.push(matchViewModel);
			}
		}

		ko.applyBindings(listViewModel, container);
	}

	initializeDemoData(initialData);
})();