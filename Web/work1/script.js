$(document).ready(function() {
  $(".button").click(function() {
    validateForm();
  });
});

function validateForm() {
  var name = $("#name").val();
  var phone = $("#phone").val();

  if (name == "") {
    alert("Введите имя");
    return false;
  }
  if (phone == "") {
    alert("Введите телефон");
    return false;
  }
  if (!phone.match(/^\d{11}$/)) {
    alert("Телефон должен быть в формате 11 цифр");
    return false;
  }

  submitForm();
}

function submitForm() {
  // отправка формы
}
