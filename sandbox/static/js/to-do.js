(function($){
  // **ListView class**: Our main app view.
  var ListView = Backbone.View.extend({    
    
    el: $('.list-wrapper'), // attaches `this.el` to an existing element.
    // `initialize()`: Automatically called upon instantiation. Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
    
    events: {
      'click button#add': 'addItem',
      'change input[type=checkbox]': 'updateItemStatus'
    },

    initialize: function(){
      _.bindAll(this, 'render', 'addItem', 'updateItemStatus'); // fixes loss of context for 'this' within methods
       
       this.counter = 0; // total number of items added thus far
       this.render(); // not all views are self-rendering. This one is.

    },
    
    render: function(){
      $(this.el).append('<input type="text" value="" id="new-item" />');
      $(this.el).append("<button id='add'>Add list item</button>");
      $(this.el).append("<ul></ul>");
    },

    addItem: function(){
      this.counter++;
      var new_item = $('#new-item').val();

      if(new_item != ''){
        $('ul', this.el).append('<li id="item' + this.counter + '">' + new_item + ' <input type="checkbox" name="item" value="' + this.counter + '" /></li>');
      }

    },

    updateItemStatus: function(event){
      console.log($(event.currentTarget).attr('value'));
    }

  });

  // **listView instance**: Instantiate main app view.
  var listView = new ListView();      
})(jQuery);