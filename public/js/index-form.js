$('.client-balance input[type="submit"]').click( e => {
    if ($('.client-balance')[0].checkValidity()) {
        e.preventDefault();
        $.ajax({
            url: "post-client-data", 
            method: "POST",
            data: {
                'client-name': $('#form-client-name').val(),
                'account-balance': $('#form-account-balance').val()
            }
        })
        .done( function() {
            $('.client-balance')[0].reset();
            $('#message-container').text('Thank you for contacting us!'); 
        })
        .always( function(data) {
            console.log('Always');
            console.log(JSON.stringify(data));
        });
    }
});

