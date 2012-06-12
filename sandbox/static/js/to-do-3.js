(function($){


	var Item = Backbone.Model.extend({

		initialize: function(){
			console.log('created new item');
		}

		// defaults: {
		// 	item_text: '',
		// 	item_id: ''
		// },


	});      
	

	var List = Backbone.Collection.extend({
		model: Item
	});

	var ItemView = Backbone.View.extend({
	    tagName: 'li', 
	    initialize: function(){
	      _.bindAll(this, 'render');
	    },
	    render: function(){
	      $(this.el).html(this.model.get('item_text')  + ' <input type="checkbox" name="item" value="' + this.model.get('item_id') + '" />');
	      $(this.el).attr('id', 'item' + this.model.get('item_id'));
	      return this;
	    }
    });
  
	var ListView = Backbone.View.extend({    

		el: $('.list-wrapper'), // attaches `this.el` to an existing element.

		events: {
		  'click button#add': 'addItem',
		  'change input[type=checkbox]': 'updateItemStatus'
		},

		initialize: function(){
		  _.bindAll(this, 'render', 'addItem', 'updateItemStatus', 'appendItem'); // fixes loss of context for 'this' within methods
		   
		  this.collection = new List();
	      this.collection.bind('add', this.appendItem); // collection event binder

	      this.counter = 0;
	      this.render();

	      var item = new Item({item_text:"i'm new!"});
	      this.collection.add(item);

		},

		render: function(){
		  $(this.el).append('<input type="text" value="" id="new-item" />');
		  $(this.el).append("<button id='add'>Add list item</button>");
		  $(this.el).append("<ul></ul>");
		},

		addItem: function(){
		  this.counter++;
		  var new_item_val = $('#new-item').val();

		  if(new_item_val != ''){
	  		var item = new Item();
	  		item.set({
	  			item_text: new_item_val,
	  			item_id: this.counter
	  		});
	  		this.collection.add(item);
		  		//console.log(item);
		  }
		  

		},

		appendItem: function(item){
			var itemView = new ItemView({
	        	model: item
	      	});
	      	$('ul', this.el).append(itemView.render().el);
		},

		updateItemStatus: function(event){
		  var clicked_item = $(event.currentTarget).attr('value');
		  var list_item = $('li#item' + clicked_item, this.el);
		  if(list_item.hasClass('done')){
		      list_item.removeClass('done');
		  } else {
		    list_item.addClass('done');
		  }
		  //console.log($(event.currentTarget).attr('value'));
		}

  	});


	var listView = new ListView();      
})(jQuery);