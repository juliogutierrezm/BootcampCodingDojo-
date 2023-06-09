
const addDefinitionButton = document.getElementById('addDefinitionButton');
addDefinitionButton.addEventListener('click', () => {
  addDefinitionButton.remove();
});


const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
  loginButton.textContent = 'Logout';
});


const likesButton = document.querySelectorAll('#likesButton');
likesButton.forEach(button => {
  button.addEventListener('click', () => {
    alert('Ninja was liked');
  });
});
