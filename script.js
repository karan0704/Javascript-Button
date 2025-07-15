let count = 0;

const clickbutton = document.getElementById("clickButton");
const countDisplay = document.getElementById("count");

clickbutton.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});
