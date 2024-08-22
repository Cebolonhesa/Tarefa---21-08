document.getElementById('btn-enviar')
.addEventListener('click', function(e) {
  e.preventDefault();
  let idade = document.getElementById('input-idade').value;
  let greeting = '';

  if (idade === '') {
    greeting = 'Por favor, insira uma idade válida.';
  } 
  else if (idade < 0) {
    greeting = 'Idade não pode ser negativa!';
  } 
  else if (idade >= 18) {
    greeting = 'Você é maior de idade!';
  } else {
    greeting = 'Você é menor de idade!';
  }

  document.getElementById("idade").innerText = greeting;
});
