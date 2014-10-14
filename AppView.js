var AppView = Backbone.View.extend({
	initialize: function(params) {
		this.fightsView = new FightsView({collection: this.model.get('fighters')});
		this.picksView = new PicksView({collection: this.model.get('picks')});
	},
	
	render: function(){
		return this.$el.html([
			this.fightsView.$el,
			this.picksView.$el
		]);
	}
});