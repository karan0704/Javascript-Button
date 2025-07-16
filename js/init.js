window.onload = function(){
  const savedNote = localStorage.getItem('myNote');
  if (savedNote) {
    document.getElementById('noteArea').value = savedNote;
  }
  updateDisplay(savedNote);
};

function updateDisplay(note){
  const display = document.getElementById('display-notes');
  display.textContent = note || '(No saved note)' ;
}