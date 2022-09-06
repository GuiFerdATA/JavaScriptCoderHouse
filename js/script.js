function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.apellido = document.getElementById("apellido").value;
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tus datos se guardaron satisfactoriamente',
        showConfirmButton: false,
        timer: 1500
    })
}
function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.apellido != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " apellido: " + localStorage.apellido;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu apellido";

    }
}
//creamos la función para calcular el promedio y que devuelva el valor//
function CalcularPromedio() {
    let nombreAlumno = document.getElementById("nombre").value;
    let n1 = document.getElementById("nota1").value;
    let n2 = document.getElementById("nota2").value;
    let n3 = document.getElementById("nota3").value;
    let n4 = document.getElementById("nota4").value;
    let n5 = document.getElementById("nota5").value;
    //Usamos los números con decimales//
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    n4 = parseFloat(n4);
    n5 = parseFloat(n5);
    ///Sumamos las notas y la promediamos por la cantidad de notas ingresas//
    let pro = (n1 + n2 + n3 + n4 + n5) / 5;
    document.getElementById("promedio").innerHTML = pro;
    //Usamos IF o ELSE para determinar el resultado//
    if (pro >= 7) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Aprobado ' + nombreAlumno,
        })
    } else {
        if (pro >= 4) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Regular ' + nombreAlumno,
            })
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Desaprobado ' + nombreAlumno,
            })
        }
    }
    //creamos un array // 
    let datoAlumnos = ['telefono', 'email', 'direccion',];
    function datoAdicionalAlumno() {
        Swal.fire({
            title: 'Datos Adicionales',
            html:
                '<input id="swal-input1" class="swal2-input" placeholder="Email">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Teléfono">' +
                '<input id="swal-input3" class="swal2-input" placeholder="Dirección">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value
                ]
            }
        })
        if (formValues) {
            Swal.fire(JSON.stringify(formValues))
        }
    }
    //le pedimos al usuario datos adicionales alojados en nuestro array para continuar, en caso de que no quiera termina la operación//
    let boolean = confirm(' desea ingresar datos adicionarles? ' + nombreAlumno);
    while (boolean) {
        datoAlumnos.push(datoAdicionalAlumno());
        boolean = confirm('Desea seguir agregando datos adicionales?' + nombreAlumno);
    }
}

//Agregamos eventos en nuestro hero//
let hero = document.querySelector(".hero");
//registrando evento//
hero.addEventListener("mouseenter", () => {
    hero.style.backgroundColor = '#43cea233';
})

//Limpiar Formulario//
function limpiarFormulario() {
    document.getElementById("miForm").reset();
}



