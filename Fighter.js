var Fighter = Backbone.Model.extend({
	select: function(){
		this.trigger('selected', this);
	}
});