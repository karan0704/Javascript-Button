document.getElementById('clear-Btn').addEventListener('click', function (){
    document.getElementById('noteArea').value = '';
    localStorage.removeItem('myNote');
    updateDisplay('');
    alert('Note cleared!');
});