
const logUser = localStorage.getItem("logUser");

if (!logUser) {
    window.location.href = "pant1.html";
}


const usuario = JSON.parse(localStorage.getItem("userData_" + logUser));

if (!usuario) {
    window.location.href = "pant1.html";
}

const bienvenida = document.getElementById("bienvenida");
const ultimo = document.getElementById("ultimo");
const btnPreg = document.getElementById("btnPreg");

bienvenida.textContent = `Bienvenido, ${usuario.username}`;
usuario.lastLogin = new Date().toLocaleString();
localStorage.setItem("userData", JSON.stringify(usuario));
// último inicio de sesión
ultimo.textContent = usuario.lastLogin;

// ir al 3
btnPreg.addEventListener("click", () => {
    window.location.href = "pant3.html";
});
