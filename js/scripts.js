
$(document).ready(function() {
  $("form").submit(function(event) {
    var userNameInput = $("input#userName").val();
    $(".name").text(userNameInput.toUpperCase());
    $(".letter").show();
    event.preventDefault();

    });






});
