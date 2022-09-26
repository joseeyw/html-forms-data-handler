
var alertDiv = document.getElementById("alert");
var alertMessageSuccessColor = "green";
var alertMessageErrorColor = "yellow";

function showAlert(message, color) {
    var alertMessage = document.getElementById("alert-message");
    alertMessage.innerHTML = message;
    alertMessage.style.color = color;
    alertDiv.style.display = "block";

}
function closeDialog() {
    alertDiv.style.display = "none";
}

$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            fname: $("#full_name").val(),
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
                var message = result.responseJSON.Message;
                // alert(message);
                /*Custom alert to allow styling */
                showAlert(message, alertMessageSuccessColor);

            },
            error: function (result) {
                var message = result.responseJSON.Message;
                // alert(message);
                /*Custom alert to allow styling */
                showAlert(message, alertMessageErrorColor);

            }
        })

        event.preventDefault();
    });
});

function fetchStatus() {
    $.ajax({
        type: "POST",
        url: "http://developers.gictsystems.com/api/dummy/items/",
        dataType: "json",
        timeout: 5000,
        data: {},
        cors: true,
        contentType: 'application/json',
        secure: true,
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',

            "Authorization": "Bearer " + "ALDJAK23423JKSLAJAF23423J23SAD3"

        },

        success: function (result) {
            console.log(result);


        },
        error: function (result) {
            console.log(result);

        }


    })
}

window.addEventListener('load', function () {
    // Your document is loaded.
    var fetchInterval = 10000; // 5 seconds.

    // Invoke the request every 5 seconds.
    setInterval(fetchStatus, fetchInterval);
});