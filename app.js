$(document).ready( function() {
    "use strict";

    $('#ui').text('hello there');


    var data = [
        { id:1, name:'DaVinci' },
        { id:2, name:'Michelangelo' },
        { id:3, name:'Cezanne' },
        { id:4, name:'Picasso' }
    ];

    var list = $("<ul />");
    list.appendTo("#ui");

    for (var i = 0; i < data.length; i++) {
        $('<li />').text(data[i].name).appendTo(list);
    }




});
