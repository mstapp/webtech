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
            this.showDataInList(model.getData(), this.list);
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

    var ListModel = function(){
        this.dataType = 'artists';
    };

    _.extend(ListModel.prototype, Backbone.Events, {

        fetch: function(callback) {
            // get JSON data from server, update view w/ data asynchronously
            var url = '/data/' + this.dataType + '.json';
            console.log('get data from ' + url);
            var self = this;
            $.getJSON(url, function (result) {
                console.log('REST call response data = ' + JSON.stringify(result));
                self.data = result;
                // notify observers that we've reset our state w/ new data
                self.trigger('reset');
            })
            .error(function(jqXHR, textStatus, errorThrown) {
                console.log('json error: ' + textStatus + ', error thrown: ' + errorThrown + ', text = ' + jqXHR.responseText);
            });
        },

        getData: function() {
            return this.data;
        },

        setDataType: function(type) {
            this.dataType = type;
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
