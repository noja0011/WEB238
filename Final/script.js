//Nora Jaafar 12/8/2024
$(document).ready(function() {
    $('#learnMore').click(function() {
        $('#extraText').fadeIn(1000);
    });

    $('#expandNews').click(function() {
        $('#newsHeadlines').slideToggle(1000);
    });

    $('nav a').click(function(event) {
        event.preventDefault();
        var navigation = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(navigation).offset().top - 50
        }, 2000);
    });

    $('nav a').hover(function() {
        $(this).css('color', '#ffcc00');
    }, function() {
        $(this).css('color', '#66ccff');
    });

    $('.button').hover(function() {
        $(this).animate({
            opacity: 0.5,
            padding: '15px 25px'
        }, 200);
    }, function() {
        $(this).animate({
            opacity: 1,
            padding: '10px 20px'
        }, 200);
    });

    $('#moonImage').click(function() {
        $(this).toggleClass('zoom');
        $('#imageDetails').fadeIn(5000);
    });
});