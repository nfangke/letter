$(document).ready(function(){
  $("form").submit(event) {
    var userNameInput = $("input#userName").val();

    $(".name").text(userNameInput);

    $(".letter").show();
    $("form").hide();
    event.preventDefault();

    });






});
