
$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            name: $("#full_name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            address: $("#address").val(),
        };

        console.log(formData);
        $.ajax({
            type: "POST",
            url: "http://developers.gictsystems.com/api/dummy/submit/",
            data: formData,
            dataType: "json",
            encode: true,

            success: function (result) {

                alert(result.responseJSON.Message);
            },
            error: function (result) {
                alert(result.responseJSON.Message);
            }
        })

        event.preventDefault();
    });
});

