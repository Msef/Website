<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $phone = test_input($_POST["phone"]);

  if (empty($name) || empty($phone)) {
    echo "Заполните все обязательные поля";
    return false;
  }

  if (!preg_match("/^[0-9]{11}$/", $phone)) {
    echo "Телефон должен состоять только из цифр и иметь длину 11 символов";
    return false;
  }

  // Сохранение данных в базу данных и отправка ответа об успешной отправке формы
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
