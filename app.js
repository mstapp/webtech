$(document).ready( function() {
    "use strict";

    $('#ui').text('hello there');

    var makeUI = function() {
        var list = makeListElement(getRootUI());
        var callback = function(data) {
            showDataInList( data, list);
        }
        getDataWithCallback(callback);
    };

    var getRootUI = function() {
        return $('#ui');
    };

    var makeListElement = function(rootui) {
        var list = $("<ul />");
        list.appendTo(rootui);
        return list;
    };

    var getDataWithCallback = function(callback) {
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
    };

    var showDataInList = function(data, list) {
        _.each(data, function(el) {
            $('<li />').text(el.name).appendTo(list);
        });
    };

    makeUI();

});
