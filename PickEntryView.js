var PickEntryView = Backbone.View.extend({
	tagName: "div class='picks'",
	
	template: _.template('<span class="<%= pick %>"><img src="<%= pickPhoto %>" ><%= pick %></span>'),
	
  render: function(){
  	return this.$el.html(this.template(this.model.attributes));
  }
})