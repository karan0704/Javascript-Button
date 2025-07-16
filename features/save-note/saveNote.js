function updateDisplay(note){
    const display = document.getElementById('display-notes');
    display.textContent = note || '(No saved notes)';
}

document.getElementById('save-Btn').addEventListener('click', function (){
    const note = document.getElementById('noteArea').value;
    localStorage.setItem('myNotes', note);
    updateDisplay(note);
    alert('Note saved!');
});

