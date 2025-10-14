const famosas = [
    { nombre: "Pampita", estilo: "Elegante", fecha: "2022-12-06", descripcion: "Modelo, conductora y referente del mundo fashion en Argentina. Con estilo sofisticado y looks de pasarela, suele ser embajadora de marcas de lujo.", foto: "img/about.png" },
    { nombre: "Delfina Ferro", estilo: "Casual", fecha: "2023-09-5", descripcion: "Influencer argentina de bienestar y lifestyle, que integra moda cómoda con un mensaje de salud y autenticidad.", foto: "img/rosa.jpg" },
    { nombre: "Lolita La Torre", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Yanina La Torre", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Clara Sarkany", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Barbie Simons", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Chofa", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Stephanie Denmer", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Angie Landaburu", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Sofia Gonet", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Candelaria Tinelli", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
    { nombre: "Guillermina Valdes", estilo: "elegante", fecha: "2024-03-10", descripcion: "María aporta su toque de glamour con prendas de diseñador.", foto: "img/about.png" },
  // 👉 agregá acá las demás 10 famosas con este mismo formato
];

function mostrarFamosas(lista) {
    const contenedor = document.getElementById("lista-famosas");
    contenedor.innerHTML = "";

    lista.forEach(f => {
        const card = document.createElement("div");
        card.className = "famosa-card";
        card.innerHTML = `
        <div class="famosa-info">
            <h3>${f.nombre}</h3>
            <p><strong>Estilo:</strong> ${f.estilo}</p>
            <p><strong>Fecha de feria:</strong> ${f.fecha}</p>
            <p>${f.descripcion}</p>
        </div>
        <div class="famosa-img">
            <img src="${f.foto}" alt="${f.nombre}">
        </div>
        `;
    contenedor.appendChild(card);
    });
}

function filtrar() {
    const termino = document.getElementById("buscar").value.toLowerCase();
    const estilo = document.getElementById("filtro-estilo").value;
    const orden = document.getElementById("ordenar").value;

    let resultado = famosas.filter(f =>
        f.nombre.toLowerCase().includes(termino) &&
        (estilo === "" || f.estilo === estilo)
    );

    if (orden === "asc") resultado.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    if (orden === "desc") resultado.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    mostrarFamosas(resultado);
}

document.getElementById("buscar").addEventListener("input", filtrar);
document.getElementById("filtro-estilo").addEventListener("change", filtrar);
document.getElementById("ordenar").addEventListener("change", filtrar);

mostrarFamosas(famosas);
