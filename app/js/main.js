$(window).on('load scroll', function() { 
    if ($(this).scrollTop() >= '1') {
        $('.header').css('background', 'orange');
    } else {
        $('.header').css('background', 'none');
    }
});
