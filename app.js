$(document).ready( function() {
    "use strict";

    $('#ui').text('hello there');

    var ListMaker = function(){
        this.foo = 1;
    };

    _.extend(ListMaker.prototype, {
        dataType: 'artists',
        list: undefined,


        makeUI: function() {
            this.makeListElement(this.getRootUI());
            this.fetchDataAndDisplay();
        },

        displayArtists: function() {
            this.dataType = 'artists';
            this.fetchDataAndDisplay();
        },

        displayCars: function() {
            this.dataType = 'cars';
            this.fetchDataAndDisplay();
        },


        // private api

        fetchDataAndDisplay: function() {
            var self = this;
            var callback = function(data) {
                self.showDataInList(data, self.list);
            }
            this.getDataWithCallback(callback);
        },

        getRootUI: function() {
            return $('#ui');
        },

        makeListElement: function(rootui) {
            this.list = $("<ul />");
            this.list.appendTo(rootui);
        },

        getDataWithCallback: function(callback) {
            // get JSON data from server, update view w/ data asynchronously
            var url = '/data/' + this.dataType + '.json';
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
            list.empty();
            _.each(data, function(el) {
                $('<li />').text(el.name).appendTo(list);
            });
        },
    });

    var view = new ListMaker();
    view.makeUI();


    $('#topics').on('change', function(e) {
        console.log(e.type + ' event from ' + e.target.value);
        if (e.target.value === 'artists')
            view.displayArtists();
        else
            view.displayCars();

    });

});
