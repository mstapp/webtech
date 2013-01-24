$(document).ready( function() {
    "use strict";

    $('#ui').text('hello there');

    var ListView = function(model){
        this.model = model;
    };

    _.extend(ListView.prototype, {

        viewRoot: '#ui',
        template: '#list-template',

        initialize: function() {
            //this.makeListElement(this.getRootUI());

            this.model.on('reset', this.render, this);
        },

        render: function() {
            if (!this.compiledTemplate) {
                this.compiledTemplate = _.template( $(this.template).html() );
            }
            var newMarkup = this.compiledTemplate(this.model.toJSON());
            $(this.viewRoot).html(newMarkup);
        },
    });

    var ListModel = Backbone.Collection.extend({
        url: '/data/artists.json',
        baseUrl: '/data/',

        setDataType: function(type) {
            this.url = this.baseUrl + type + '.json';
        },
    });

    var model = new ListModel();
    var view = new ListView(model);
    view.initialize();
    model.fetch();


    $('#topics').on('change', function(e) {
        console.log(e.type + ' event from ' + e.target.value);
        model.setDataType(e.target.value);
        model.fetch();
    });

});
