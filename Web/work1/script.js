document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  let name = document.querySelector('input[name="name"]').value;
  let phone = document.querySelector('input[name="phone"]').value;
  if (!name) {
    alert('Введите имя');
    return;
  }
  if (!phone) {
    alert('Введите телефон');
    return;
  }
  let formData = new FormData(event.target);
  fetch('send.php', {
    method: 'POST',
    body: formData
  }).then(function (response) {
    if (response.ok) {
      alert('Ваша заявка отправлена');
      document.querySelector('form').reset();
    } else {
      alert('Ошибка при отправке заявки');
    }
  }).catch(function (error) {
    alert('Ошибка при отправке заявки');
  });
});
