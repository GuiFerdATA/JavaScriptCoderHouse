function ir() {
    let c = 1234;
    let u = "JavaScript";
    if (document.form.password.value == c && document.form.login.value == u) {
        alert("Bienvenidos");
        window.location = "promedio.html";
    }
    else {
        alert("Por favor ingresa el nombre y usuario correcto.");
    }
}