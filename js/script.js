//creamos variables y le pedimos al usuario que complete//
let nombreAlumno = prompt('Nombre Alumno');
let apellidoAlumno = prompt('Apellido Alumno');
let materiaAlumno = prompt('Materia')
alert('Hola ' + nombreAlumno);
alert('Ingresastes la materia ' + materiaAlumno)
alert('A continuacion ingresa las notas recibidas de ' + materiaAlumno)

//creasmos la funcion para calcular el promedio y que devuelva el valor//
function CalcularPromedio() {
    let n1 = document.getElementById("nota1").value;
    let n2 = document.getElementById("nota2").value;
    let n3 = document.getElementById("nota3").value;
    let n4 = document.getElementById("nota4").value;
    let n5 = document.getElementById("nota5").value;

    //Usamos los numeros con decimales//
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
        alert('Aprobado ' + nombreAlumno,);
    } else {
        if (pro >= 4) {
            alert('Regular ' + nombreAlumno,);
        } else {
            alert('Desaprobado ' + nombreAlumno,);
        }
    }

    //creamos un array dentro de la function//
    let datoAlumnos = ['direccion', 'telefono', 'ciudad', 'email'];
    function datoAdicionalAlumno() {
        const direccion = prompt("Ingresa tu direccion");
        const telefono = prompt("Ingresa el dni");
        const ciudad = prompt("Ingresa tu ciudad");
        const email = prompt("Ingresa tu e-mail");
    }
    //le pedimos al usuario datos adicionales alojados en nuestro array para continuar, en caso de que no quiera termina la operacion//
    let boolean = confirm(' desea ingresar datos adicionarles? ' + nombreAlumno);
    while (boolean) {
        datoAlumnos.push(datoAdicionalAlumno());
        boolean = confirm('Desea seguir agregando datos adicionales?' + nombreAlumno);
    }
}

//Agregamos eventos en nuestro hero, y devolvemos mediante un alert//
let hero = document.querySelector(".hero");

//registrando evento//
hero.addEventListener("mousedown", () => {
    alert('Estas por completar tus notas, muchos exitos ' + nombreAlumno);
})

//Agregamos otro evento, registramos la tecla ENTER y le pedimos al usuario que continue con las notas mediante un alert//
let inputAll = document.getElementsByClassName('.inputAll')
hero.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        alert('Precionaste ENTER, ingresa tu siguiente nota ' + nombreAlumno);
    }
})

