document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'y') {
        event.preventDefault();
        cambiarVista();
    }
});


function cambiarVista() {
    const vistaDiv = document.getElementById('vista');
    vistaDiv.textContent= "";
    const label = document.createElement('label');
    label.id = 'usu';
    label.textContent= 'Usuario';
    const br = document.createElement('br');
    const input = document.createElement('input');
    input.type='email';
    input.id='usu';
   


    vistaDiv.appendChild(label);
    vistaDiv.appendChild(br);
    vistaDiv.appendChild(input);

  
}
setTimeout(() => {
    cambiarVista();
}, 5000);
