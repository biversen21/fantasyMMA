var OpponentEntryView = Backbone.View.extend({
	tagName: "div class='opponent-picks'",
	
	template: _.template('<span class="<%= oppPick %>"><img src="<%= oppPickPhoto %>" ><%= oppPick %></span>'),
	
  render: function(){
  	return this.$el.html(this.template(this.model.attributes));
  }
});