var FightsView = Backbone.View.extend({
	tagName: "div class='fight'",
	
	initialize: function(){
		this.render();
	},
	
	render: function(){
		this.$el.children().detach();
		this.$el.html('<div>Fights</div><br>').append(
			this.collection.map(function(fighter){
				return new FighterView({model: fighter}).render();
			})
		);
	}
});