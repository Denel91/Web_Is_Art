/**
 * Registra un utente sul local storage del Browser
 * */
function clientRegister() {
  localStorage.utente = JSON.stringify({
    username: document.getElementById("inputUsername").value,
    email: document.getElementById("inputEmail").value,
    password: document.getElementById("inputPassword").value
  });

  var utente = JSON.parse(localStorage.utente);

  alert("Benvenuto " + utente.username);

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("utente", JSON.stringify(utente));
}
