var AppModel = Backbone.Model.extend({
	
	initialize: function(params) {
		this.set('picks', new Picks());
		
		params.fighters.on('selected', function(fighter) {
			this.get('picks').add(fighter);
		}, this);
	}
});