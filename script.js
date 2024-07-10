const container = document.getElementById('box');
const registrarBtn = document.getElementById('registrar');
const loginBtn = document.getElementById('entrar');

registrarBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});