let inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];
let editIndex = null;

const form = document.getElementById("formInscripcion");
const tabla = document.querySelector("#tablaInscripciones tbody");

mostrarInscripciones();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nueva = {
        nombre: document.getElementById("nombre").value,
        dni: document.getElementById("dni").value,
        fechaNac: document.getElementById("fechaNac").value,
        telefono: document.getElementById("telefono").value,
        mail: document.getElementById("mail").value,
        horario: document.getElementById("horario").value
    };

    if (editIndex === null) {
        inscripciones.push(nueva);
    } else {
        inscripciones[editIndex] = nueva;
        editIndex = null;
    }

    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
    form.reset();
    mostrarInscripciones();
});

function mostrarInscripciones() {
    tabla.innerHTML = "";
    inscripciones.forEach((i, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${i.nombre}</td>
        <td>${i.dni}</td>
        <td>${i.fechaNac}</td>
        <td>${i.telefono}</td>
        <td>${i.mail}</td>
        <td>${i.horario}</td>
        <td>
            <button class="editar" onclick="editar(${index})">Editar</button>
            <button class="eliminar" onclick="eliminar(${index})">Eliminar</button>
        </td>
        `;
        tabla.appendChild(fila);
    });
}

function editar(index) {
    const i = inscripciones[index];
    document.getElementById("nombre").value = i.nombre;
    document.getElementById("dni").value = i.dni;
    document.getElementById("fechaNac").value = i.fechaNac;
    document.getElementById("telefono").value = i.telefono;
    document.getElementById("mail").value = i.mail;
    document.getElementById("horario").value = i.horario;
    editIndex = index;
}

function eliminar(index) {
    inscripciones.splice(index, 1);
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
    mostrarInscripciones();
}
