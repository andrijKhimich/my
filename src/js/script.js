$(document).ready(function () {
  // const form = $('.form');

  // form.on('submit', function () {
  //   submitForm();
  // });

  function submitForm() {
    //Do validation and submit form
    $.ajax({
      url: "../mail.php",
      type: "POST",

    }).done(function (data) {
      alert(data);
      if (data == 1) {
        alert('Success');
        window.location.href = '/';
      } else {
        alert('Failed');
      }
    });
    return false;
  }
});