$(document).ready( function() {
    "use strict";

    $('#ui').text('hello there');

    var ListView = function(model){
        this.model = model;
        this.list = undefined;
    };

    _.extend(ListView.prototype, {

        initialize: function() {
            this.model.on('reset', this.render, this);
        },

        makeUI: function() {
            this.makeListElement(this.getRootUI());
            this.render();
        },

        render: function() {
            console.log('view render: data = ' + JSON.stringify(model.toJSON()));
            this.showDataInList(model.toJSON(), this.list);
        },


        // private api

        getRootUI: function() {
            return $('#ui');
        },

        makeListElement: function(rootui) {
            this.list = $("<ul />");
            this.list.appendTo(rootui);
        },

        showDataInList: function(data, list) {
            list.empty();
            _.each(data, function(el) {
                $('<li />').text(el.name).appendTo(list);
            });
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

    view.makeUI();
    model.fetch();


    $('#topics').on('change', function(e) {
        console.log(e.type + ' event from ' + e.target.value);
        model.setDataType(e.target.value);
        model.fetch();
    });

});
