$(document).ready(function() {
$("#pass").click(function() {
var name = $("#reservation_name").val();
var email = $("#reservation_email").val();
var message = $("#message").val();
var contact = $("#reservation_phone").val();
var category = $("#reservation_cat").val();
var captcha = $("#g-recaptcha-response").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '' || contact == '' || message == '' || category == '' || captcha == '') {
$("#returnmessage").append("Please fill all inputs");
//alert("Porfavor llena todos los campos obligatorios");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("reservation.html", {
reservation_name: name,
reservation_email: email,
message: message,
reservation_phone: contact,
reservation_cat: category,
reservation_captcha: captcha
}, function(data) {
$("#returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Your message have been sent successfully. We will contact you as soon as possible.") {
$("#reservation")[0].reset(); // To reset form fields on success.
$("#captcha").attr("src", "captcha.html");
}
});
}
});

$("#subscribe").click(function() {
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var subscribeemail = $("#subscribeemail").val();
if(subscribeemail.match(mailformat))
{
$("#subscribemessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (subscribeemail == '') {
$("#subscribemessage").append("Please fill your email address");
//alert("Porfavor llena todos los campos obligatorios");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("subscribe.html", {
subscribeemail: subscribeemail
}, function(data) {
$("#subscribemessage").append(data); // Append returned message to message paragraph.
if (data == "done") {
$("#email-subscription")[0].reset(); // To reset form fields on success.
$("#captcha").attr("src", "captcha.html");
}
});
}
}
else
{
$("#subscribemessage").empty();
$("#subscribemessage").append("Pls enter a valid email address");
$("#subscribeemail").focus();
return false;
}

});

});

