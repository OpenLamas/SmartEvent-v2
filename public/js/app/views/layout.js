define([
  'text!app/templates/layout.html',

  'app/views/nomUser.js'
],

function(template, ViewNomUser){
  var LayoutView = Backbone.View.extend({
    template: _.template(template),

    events: {

    },

    initialize: function(){
    },

    render: function(){
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });

  return LayoutView;
});