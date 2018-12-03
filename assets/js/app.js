$(document).ready(function () {
    // This function changes the navbar bacground when on different sections of the website
    $('.thisScroll').scrollspy({ target: '#navbar-main' });

    const top1 = $('#no-bkg').offset().top;
    const about = $('#about').offset().top;
    const portfolio = $('#portfolio').offset().top;
    const contact = $('#contact').offset().top;

    $(document).scroll(function () {
        const scrollPos = $(document).scrollTop();
        if (scrollPos >= top1 && scrollPos < about) {
            $('#navbar-main').css('background', 'none');
        } else if (scrollPos >= about && scrollPos < portfolio) {
            $('#navbar-main').css('background-color', '#000000');
        } else if (scrollPos >= portfolio) {
            $('#navbar-main').css('background-color', '#ffffff');
        }
    });


    // This function handles button events

    const sendEmail = function () {
        const form = $('.email-form');
        form.addClass('send').attr('action', "mailto:rachida.koco@gmail.com");
        form.attr("method", "post");
        form.attr("enctype", "text/plain");
    };

    $('#email').on('click', sendEmail);
    $('#email-logo').on('click', sendEmail);
});




