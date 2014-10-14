var AppView = Backbone.View.extend({
	initialize: function(params) {
		this.fightsView = new FightsView({collection: this.model.get('fighters')});
	},
	
	render: function(){
		return this.$el.html([
			this.fightsView.$el
		]);
	}
});