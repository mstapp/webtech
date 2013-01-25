$(document).ready( function() {
    "use strict";

    // View
    var ListView = Backbone.View.extend({
        template: '#list-template',

        initialize: function() {
            this.model.on('reset', this.render, this);
        },

        render: function() {
            if (!this.compiledTemplate) {
                this.compiledTemplate = _.template( $(this.template).html() );
            }
            var newMarkup = this.compiledTemplate(this.model.toJSON());
            this.$el.html(newMarkup);
            return this;
        },
    });


    // Model
    var ListModel = Backbone.Collection.extend({
        url: '/data/artists.json',
        baseUrl: '/data/',

        setDataType: function(type) {
            this.url = this.baseUrl + type + '.json';
        },
    });


    // Page-level controller code
    var model = new ListModel();
    var view = new ListView( {model: model, el:$('#ui') } );
    view.initialize();
    model.fetch();

    $('#topics').on('change', function(e) {
        console.log(e.type + ' event from ' + e.target.value);
        model.setDataType(e.target.value);
        model.fetch();
    });

});
