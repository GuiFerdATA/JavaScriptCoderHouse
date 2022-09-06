function ir() {
    let c = 1234;
    let u = "JavaScript";
    if (document.form.password.value == c && document.form.login.value == u) {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: '¡Usuario y contraseña exitoso!',
        })
            .then(function () {
                window.location = "promedio.html";
            })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingresa el nombre y usuario correcto.',
        })
    }
}
