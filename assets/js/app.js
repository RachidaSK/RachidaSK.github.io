
const sendEmail = function () {
    const form = $('#email-form');
    form.addClass('send').attr('action', "mailto:rachida.koco@gmail.com");
    form.attr("method", "post");
    form.attr("enctype", "text/plain");
};

$('#email').on('click', sendEmail);