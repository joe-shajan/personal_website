
$(document).ready(function () {
  $('#namecheck').hide();
  $('#namecheck1').hide();
  $('#subjectcheck').hide();
  $('#messagecheck').hide();
  $('#emailcheck').hide();
  $('#emailcheck1').hide();

});
function validateName() {
  let nameValue = $('#name').val();
  var re = /^[A-Za-z]+$/;
  if (re.test(nameValue) == true) {
    $("#name").css("border", "2px solid green");
    $("#name").focus();
    return true;
  } else if (nameValue.length == '') {
    $('#namecheck').show();
    $("#name").css("border", "2px solid red");
    $("#name").focus();
    return false;
  } else {
    $('#namecheck').hide();
    $('#namecheck1').show();
    $("#name").css("border", "2px solid red");
    $("#name").focus();
    return false;
  }

}
function validateSubject() {
  let subjectValue = $('#subject').val();
  if (subjectValue.length == '') {
    $('#subjectcheck').show();
    $("#subject").css("border", "2px solid red");
    $("#subject").focus();
    return false;
  }
  $("#subject").css("border", "2px solid green");
    $("#subject").focus();
  return true;
}
function validateMessage() {
  let messageValue = $('#message').val();
  if (messageValue.length == '') {
    $('#messagecheck').show();
    $("#message").css("border", "2px solid red");
    $("#message").focus();
    return false;
  }
  $("#message").css("border", "2px solid green");
    $("#message").focus();
  return true;
}
function validateEmail() {
  let emailValue = $('#email').val();
  let regex =
    /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

  if (regex.test(emailValue) == true) {
    $("#email").css("border", "2px solid green");
    $("#email").focus();
    return true;
  } else if (emailValue.length == '') {
    $('#emailcheck').show();
    $("#email").css("border", "2px solid red");
    $("#email").focus();
    return false;
  } else {
    $('#emailcheck').hide();
    $('#emailcheck1').show();
    $("#email").css("border", "2px solid red");
    $("#email").focus();
    return false;
  }

}


$("#submit-form").submit((e) => {
  e.preventDefault();
  $('#namecheck').hide();
  $('#namecheck1').hide();
  $('#subjectcheck').hide();
  $('#messagecheck').hide();
  $('#emailcheck').hide();
  $('#emailcheck1').hide();
  if (validateName() == false || validateEmail() == false || validateSubject() == false || validateMessage() == false) {
    return;

  }
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzAEpLudP_bo6VkUAUIIHLid4Qg1utPcyVbizNVKmMrsPME5tRA92tGtz56BYQu8_8/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully")
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error")

    }
  });

});





