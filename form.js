
var alertDiv = document.getElementById("alert");

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
                var message = result.responseJSON.Message;
                // alert(message);
                /*Custom alert to allow styling */
                showAlert(message, "green");

            },
            error: function (result) {
                var message = result.responseJSON.Message;
                // alert(message);
                /*Custom alert to allow styling */
                showAlert(message, "red");

            }
        })

        event.preventDefault();
    });
});

