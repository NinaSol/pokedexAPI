
//agregar method post al form//
$(document).ready(function () {

    // get the form elements defined in your form HTML above


    var form = $("#my-form");
    var button = $("#my-form-button");
    var status = $("#my-form-status");





    // handle the form submission event

    form.submit(function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});


// helper function for sending an AJAX request


$.ajax({
    data: "JSON ",
    // Success and Error functions for after the form is submitted
    succes: function () {
        form.reset();
        button.style = "display: none ";
        status.append(`<h2>Thanks!</h2>`);
    },
    error: function () {
        status.append(`<h2>Oops! There was a problem.</h2>`);
    }
})

