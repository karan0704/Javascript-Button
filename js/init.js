let count = 0;

const clickbutton = document.getElementById("clickButton");
const countDisplay = document.getElementById("count");

clickbutton.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
  const confirmReset = confirm("Are you sure you want to reset the count?");
  if (confirmReset) {
  count = 0;
  countDisplay.textContent = count;
  }
});

const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", function () {
  
});

