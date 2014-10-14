var Fighter = Backbone.Model.extend({
	
	select: function(fighterPick){
		this.set({'pick': fighterPick});
    var checker = this.get('name');
    if (checker === fighterPick) {
			var newPhoto = this.get('photo');
    } else {
    	var newPhoto = this.get('oppPhoto');
    }
  	this.set({'pickPhoto': newPhoto});		
		this.trigger('selected', this);
	}
	
});