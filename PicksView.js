var PicksView = Backbone.View.extend({
	tagName: 'div',
	
	initialize: function(){
		this.render();
		this.listenTo(this.collection, 'add', function(){ this.render() });
	},
	
	render: function(){
		this.$el.children().detach();
		
		this.$el.html('<span>Current Picks</span>').append(
			this.collection.map(function(fighter){
				return new PickEntryView({model: fighter}).render();
			})
		).append('<span class="opponent-header">Opponent Picks</span>').append(
			this.collection.map(function(fighter){
			  return new OpponentEntryView({model: fighter}).render();
			})
		);
	}
});