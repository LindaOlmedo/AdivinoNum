// Jugar
document.querySelector('.start').addEventListener('click', function () {
    displayMessage('¿Es el número que pensaste?');
});
const guess = Math.trunc(Math.random() * 100) + 1;

const guessNumber = () => {
    return Math.trunc(Math.random() * 100) + 1;
};
// Correcto
document.querySelector('.correct').addEventListener('click', function () {
    displayMessage("Sabía que pensabas en ese número!");
    document.querySelector('.start').textContent = 'Jugar de nuevo';
    document.querySelector('h1').style.marginBottom = '3rem';
    document.querySelector('img').style.filter = 'invert(5%) sepia(35%) saturate(850%) brightness(70%) contrast(80%)';

});
// Error
const incorrectOptions = [
    "Intentemos de nuevo",
    "No te desanimes, ya casi",
    "¿Logre adivinar?",
    "Sigue jugando",
    "¿No es divertido esto?"
];
let arrayNum = 0;

// Función
const displayMessage = (message) => {
    document.querySelector('.message').textContent= message;
};
document.querySelector('.incorrect').addEventListener('click', function () {
    document.querySelector('.guess').textContent = guessNumber();
    if (arrayNum === 4) {
        arrayNum = 0;
    } else {
        arrayNum++;
    }
    document.querySelector('h1').style.marginBottom = 'saturate(100%) 3rem';
    document.querySelector('img').style.filter = 'invert(5%) sepia(50%) saturate(100%) brightness(94%) contrast(100%)';
    displayMessage(incorrectOptions[arrayNum]);
});