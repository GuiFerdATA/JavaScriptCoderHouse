// Fetch API desde un JSON (Array)

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/equipo.json')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => {
            mostrarHTML(resultado);

        })
}

function mostrarHTML({ apellido, id, nombre, puesto }) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${apellido} </p>
        <p>Trabajo: ${puesto} </p>
    `
}