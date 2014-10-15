var AppModel = Backbone.Model.extend({
	
	initialize: function(params) {
		this.set('picks', new Picks());
		
		params.fighters.on('selected', function(fighter) {
			this.get('picks').add(fighter);
		}, this);
	},
	
	determine: function(winners) {
		console.log(winners);
		var picks = this.get('picks');
		var playerA = [];
		var playerB = [];
		for (var i = 0; i < picks.models.length; i++) {
			if (winners[i] === picks.models[i].attributes.pick) {
				console.log('PlayerA scores');
			} else {
				console.log('PlayerB scores');
			}
			// playerA.push(picks.models[i].attributes.pick);
			// playerA.push(picks.models[i].attributes.pickPhoto);
			// playerB.push(picks.models[i].attributes.oppPick);
			// playerB.push(picks.models[i].attributes.oppPickPhoto);
		}
	}
});