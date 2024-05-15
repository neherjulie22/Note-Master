const imageUrls = [
    'C4.png',
    'D4.png',
    'E4.png',
    'F4.png',
    'G4.png',
];

const correctCombinations = {
    'C4.png': ['LT', 'L1', 'L2', 'L3'],
    'D4.png': ['LT', 'L1', 'L2'],
    'E4.png': ['LT', 'L1'],
    'F4.png': ['LT'],
    'G4.png': ['R1', 'R2', 'R3'],
};

const correctResponses = [
    'Well done!',
    'You got it right!',
    'Excellent job!',
    'Correct answer!',
    'Good work!',
    'Good Job!',
    'Nice!',
    'Awesome',
    'Wonderful',
];

const randomPhoto = document.getElementById('randomPhoto');
const buttons = document.querySelectorAll('.buttons button');
const responseElement = document.getElementById('response');
const scoreElement = document.getElementById('score');

let currentPhoto;
let clickedButtons = [];
let correctCount = 0;
let questionCount = 0;

function generateRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    randomPhoto.src = imageUrls[randomIndex];
    currentPhoto = imageUrls[randomIndex];
    clickedButtons = [];
    buttons.forEach((button) => button.classList.remove('clicked'));
    questionCount++;
}

function checkCorrectCombination() {
    const correctCombination = correctCombinations[currentPhoto];
    if (clickedButtons.length === correctCombination.length && correctCombination.every((id) => clickedButtons.includes(id))) {
        const randomResponseIndex = Math.floor(Math.random() * correctResponses.length);
        responseElement.textContent = correctResponses[randomResponseIndex];
        correctCount++;
    } else {
        responseElement.textContent = 'Incorrect.';
    }
    clickedButtons = [];
    buttons.forEach((button) => button.classList.remove('clicked'));
    const percentage = Math.floor((correctCount / questionCount) * 100);
    scoreElement.textContent = `${correctCount} / ${questionCount} - ${percentage}%`;
}

const combinedButton = document.getElementById('combinedButton');
combinedButton.addEventListener('click', () => {
  checkCorrectCombination();
  generateRandomPhoto();
});

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        button.classList.toggle('clicked');
        const buttonId =button.id;
        if (clickedButtons.includes(buttonId)) {
            const index = clickedButtons.indexOf(buttonId);
            clickedButtons.splice(index, 1);
        } else {
            clickedButtons.push(buttonId);
        }
    });
});

generateRandomPhoto();s
