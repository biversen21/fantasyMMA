var FighterView = Backbone.View.extend({
	tagName: 'div',
	
	template: _.template('<span class="<%= name %>"><img src="<%= photo %>" >(<%= name %>)</span> vs <span class="<%= opponent %>">(<%= opponent %>)<img src="<%= oppPhoto %>" ></span>'),
	
	events: {
		'click span': function(el){
			this.model.select(el.currentTarget.className);
		}
	},
	
	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
});