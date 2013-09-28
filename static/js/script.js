$(document).ready(function() {

    var currHeight = $(window).height();
    $('#sidebar, #content').css('height', currHeight);

    $(window).resize(function() {
        var currHeight = $(window).height();
        $('#sidebar, #content').css('height', currHeight);
    });

});