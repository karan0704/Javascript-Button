let count = 0;

const button = document.getElementById('clickButton');
const countDisplay = document.getElementById('count');

button.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
});