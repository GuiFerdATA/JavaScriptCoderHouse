// Fetch API desde un JSON (Objeto)
const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/equipo.json')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');
    let html = '';
    empleados.forEach(empleado => {
        const { id, nombre, apellido, puesto } = empleado;
        html += `
            <p>ID: ${id} </p>
            <p>Empleado: ${nombre} </p>
            <p>Apellido: ${apellido} </p>
            <p>Puesto: ${puesto} </p>
        `
    });
    contenido.innerHTML = html;
}