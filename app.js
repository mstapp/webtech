$(document).ready( function() {
    "use strict";

    $('#ui').text('hello there');


    var makeUI = function() {
        var list = makeListElement(getRootUI());
        showDataInList( getData(), list);
    };

    var getRootUI = function() {
        return $('#ui');
    };

    var makeListElement = function(rootui) {
        var list = $("<ul />");
        list.appendTo(rootui);
        return list;
    };

    var getData = function() {
        return [
            { id:1, name:'DaVinci' },
            { id:2, name:'Michelangelo' },
            { id:3, name:'Cezanne' },
            { id:4, name:'Picasso' }
        ];
    };

    var showDataInList = function(data, list) {
        for (var i = 0; i < data.length; i++) {
            $('<li />').text(data[i].name).appendTo(list);
        }
    };

    makeUI();

});
