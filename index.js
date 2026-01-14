const images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.classList.add('grayscale');
  });

  image.addEventListener('mouseleave', () => {
    image.classList.remove('grayscale');
  });
});

window.addEventListener('keydown', function (event) {
  const body = document.body;

  if (event.key === '1') {
    body.classList.add('theme1');
  } else if (event.key === '2') {
    body.classList.add('theme2');
  } else if (event.key === '3') {
    body.classList.add('theme3');
  } else if (event.key === 'Escape') {
    body.classList.remove('theme1', 'theme2', 'theme3');
  }
});

const textInput = document.querySelector('input');
const submitButton = document.querySelector('button');

textInput.addEventListener('input', function () {
  // Büyük harfe çevir
  textInput.value = textInput.value.toUpperCase();

  // 5 karakterden AZ ise disabled
  submitButton.disabled = textInput.value.length < 5;
});

const form = document.querySelector('footer form');
const result = document.getElementById('submitResult');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Sonucu yaz
  result.textContent = `${textInput.value} başarı ile kaydedildi...`;

  // Input'u temizle
  textInput.value = '';

  // Butonu tekrar disabled yap
  submitButton.disabled = true;
});
