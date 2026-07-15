
$(document).ready(function() {
    $('.publication-block').mouseenter(function() {
        const video = $(this).find('.publication-mousecell video').get(0);
        $(this).find('.publication-mousecell video').css('display', 'block');
        $(this).find('.publication-mousecell img').css('display', 'none');
        if (video) {
            video.play().catch(function() {});
        }
    });
    $('.publication-block').mouseleave(function() {
        const video = $(this).find('.publication-mousecell video').get(0);
        $(this).find('.publication-mousecell video').css('display', 'none');
        $(this).find('.publication-mousecell img').css('display', 'block');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
})
