
//primera parte 
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'y') {
        event.preventDefault();
        cambiarVista();
    }
});
setTimeout(() => {
    cambiarVista();
}, 5000);

//segunda 
function cambiarVista() {
    const vistaDiv = document.getElementById('vista');
    vistaDiv.textContent= "";
    const label = document.createElement('label');
    label.id = 'usu';
    label.textContent= 'Usuario';
    const br = document.createElement('br');
    const input = document.createElement('input');
    input.type='email';
    input.id='usuIm';
    
    const mostrarValidar= document.getElementById('validar');

   


    vistaDiv.appendChild(label);
    vistaDiv.appendChild(br);
    vistaDiv.appendChild(input);


    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            guardarUsuario(input.value.trim(), mostrarValidar);
        }
    }); 
  
}
function guardarUsuario(usu, men) {
 //  validar
    if (usu === "") {
        men.textContent = "Pon tu usuario";
        return;
    } else if (!usu.includes("@")) {
        men.textContent = "Tienes que poner un @";
        return;
    }
// revisar apuntes
    const key = "userData_" + usu;
    let userData = JSON.parse(localStorage.getItem(key));

    if (!userData) {
        userData = {
            // id ? 
            username: usu,
            preguntas: [],
            preferences: {
                theme: "light",
                language: "es"
            }
        };
    }

   
    localStorage.setItem(key, JSON.stringify(userData));
   
    localStorage.setItem("logUser", usu);

    men.textContent = "Usuario guardado, espere...";

    setTimeout(() => {
        window.location.href = "pant2.html";
    }, 1000);
}