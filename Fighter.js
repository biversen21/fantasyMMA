var Fighter = Backbone.Model.extend({
	
	select: function(fighterPick){
		this.set({'pick': fighterPick});
    var checker = this.get('name');
    if (checker === fighterPick) {
			var newPhoto = this.get('photo');
			var oppPhoto = this.get('oppPhoto');
			var oppPick = this.get('opponent');
    } else {
    	var newPhoto = this.get('oppPhoto');
			var oppPhoto = this.get('photo');
			var oppPick = this.get('name');
    }
  	this.set({'pickPhoto': newPhoto});
		this.set({'oppPick': oppPick});
		this.set({'oppPickPhoto': oppPhoto});
				
		this.trigger('selected', this);
	}
	
});