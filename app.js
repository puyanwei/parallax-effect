$(window).scroll(function() {
    parallax();
});

function parallax() {
    let windowScroll = $(window).scrollTop();
    $('.hero-container').css(
        'background-position',
        'center ' + windowScroll * 0.7 + 'px'
    );
}
