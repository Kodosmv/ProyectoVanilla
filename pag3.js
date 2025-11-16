
const logUser = localStorage.getItem("logUser");

if (!logUser) {
    window.location.href = "pant1.html";
}

const usuario = JSON.parse(localStorage.getItem("userData_" + logUser));

if (!usuario) {
    window.location.href = "pant1.html";
}

const listaPreguntas = document.getElementById("lista");
const form = document.getElementById("formPreg");
const preguntaInput = document.getElementById("pregunta");
const puntuacionInput = document.getElementById("puntuacion");
const btnGuardar = document.getElementById("btnG");
const btnAtras = document.getElementById("btnV");
const estado = document.getElementById("estado");

let guardando = false;

function respuesta() {
    if (document.getElementById("respV").checked) {
        return "Verdadero";
    } 
    if (document.getElementById("respF").checked) {
        return "Falso";
    }
    return null;
}

function mostrarPreguntas() {
    
    listaPreguntas.innerHTML = ""; 
    usuario.preguntas.forEach((p) => {
        const li = document.createElement("li");
        li.innerHTML = `Pregunta : ${p.texto} <br>
            Respuesta:  ${p.respuesta} <br>
            Puntuación: ${p.puntos} <br> 
            Estado: ${p.estado} <hr>`;
        listaPreguntas.appendChild(li);
    });

}

const restraso = false;// cambiar a true si quieres esperar a que aperezcan las preguntas
if(restraso){
    listaPreguntas.innerHTML = "Cargando preguntas...";
    setTimeout(() => {
    mostrarPreguntas();
    }, 5000);
}else{
    mostrarPreguntas();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = preguntaInput.value.trim();
    const resp = respuesta();
    const puntos = Number(puntuacionInput.value);

    // validaciones
    if (texto === "") {
        alert("La pregunta no puede estar vacía");
        return;
    }

    if (!resp) {
        alert("Debes seleccionar Verdadero o Falso");
        return;
    }

    guardando = true;
    btnAtras.disabled = true;

    //  preguntas
    const gurdandoPregunta = {
        texto,
        respuesta: resp,
        puntos,
        estado: "guardando"
    };

    //falta el caso de  error
    usuario.preguntas.push(gurdandoPregunta);
    localStorage.setItem("userData_" + usuario.username, JSON.stringify(usuario));
    mostrarPreguntas();

    setTimeout(() => {
        gurdandoPregunta.estado = "OK";
        localStorage.setItem("userData_" + usuario.username, JSON.stringify(usuario));
        mostrarPreguntas();
        form.reset(); //si estoy a medias de crear una pregunta se borra :(
        guardando = false;
        btnGuardar.disabled = false;
        btnAtras.disabled = false;
    }, 5000);
});

// Volver a pant2
btnAtras.addEventListener("click", () => {
    if (guardando) return;
    window.location.href = "pant2.html";
});
