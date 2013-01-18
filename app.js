$(document).ready( function() {
    "use strict";

    $('#ui').text('hello there');

    var ListMaker = function(){
        this.foo = 1;
    };

    _.extend(ListMaker.prototype, {

        makeUI: function() {
            var list = this.makeListElement(this.getRootUI());
            var self = this;
            var callback = function(data) {
                self.showDataInList( data, list);
            }
            this.getDataWithCallback(callback);
        },

        getRootUI: function() {
            return $('#ui');
        },

        makeListElement: function(rootui) {
            var list = $("<ul />");
            list.appendTo(rootui);
            return list;
        },

        getDataWithCallback: function(callback) {
            // get JSON data from server, update view w/ data asynchronously
            var url = '/data/artists.json';
            console.log('get data from ' + url);
            $.getJSON(url, function (result) {
                console.log('REST call response data = ' + JSON.stringify(result));
                // use data...
                callback(result);
            })
            .error(function(jqXHR, textStatus, errorThrown) {
                console.log('json error: ' + textStatus + ', error thrown: ' + errorThrown + ', text = ' + jqXHR.responseText);
            });
        },

        showDataInList: function(data, list) {
            _.each(data, function(el) {
                $('<li />').text(el.name).appendTo(list);
            });
        },
    });

    var view = new ListMaker();
    view.makeUI();

});
