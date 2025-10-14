const famosas = [
    { nombre: "Pampita", estilo: "Elegante", fecha: "2022-12-06", descripcion: "Modelo, conductora y referente de la moda en Argentina. Con estilo sofisticado y looks de pasarela, embajadora de varias marcas de lujo.", foto: "img/pampita.jpg" },
    { nombre: "Delfina Ferro", estilo: "Casual", fecha: "2023-09-5", descripcion: "Influencer de bienestar y lifestyle, que integra la moda con un mensaje de salud y autenticidad.", foto: "img/delfi.png" },
    { nombre: "Lolita La Torre", estilo: "Urbano", fecha: "2021-11-21", descripcion: "Ícono de la moda de la nueva generación, con su estilo auténtico y cool.", foto: "img/lola.png" },
    { nombre: "Yanina La Torre", estilo: "Causal", fecha: "2024-03-17", descripcion: "Figura del mundo del espectáculo, con sus icónicos looks pulidos.", foto: "img/yani.png" },
    { nombre: "Clara Sarkany", estilo: "Boho", fecha: "2021-08-29", descripcion: "Con su apellido emblemático, se caracteriza por sus outfits modernos y arriesgados.", foto: "img/clara.png" },
    { nombre: "Barbie Simons", estilo: "Casual", fecha: "2025-01-14", descripcion: "Creadora de contenido que combina moda trendy con un tono relajado y juvenil.", foto: "img/barbie.png" },
    { nombre: "Chofa", estilo: "Urbano", fecha: "2024-07-30", descripcion: "Con mas de 1 millón de seguidores en redes, deslumbra con sus prendas originales y atrevidas.", foto: "img/chofa.png" },
    { nombre: "Stephanie Denmer", estilo: "Casual", fecha: "2022-05-08", descripcion: "Pionera influencer de Argentina, con su estilo romántico y casual.", foto: "img/steph.png" },
    { nombre: "Angie Landaburu", estilo: "Rock", fecha: "2023-12-02", descripcion: "Empresaria e influencer, combina lo glamuroso con toques audaces y sofisticados.", foto: "img/angie.png" },
    { nombre: "Sofia Gonet", estilo: "Elegante", fecha: "2022-10-27", descripcion: "Influencer de moda, viajes y lifestyle, usa prendas cómodas pero con detalles elegantes, mezclando tendencia con practicidad.", foto: "img/sofi.png" },
    { nombre: "Candelaria Tinelli", estilo: "Rock", fecha: "2021-04-11", descripcion: "Con fuerte impronta personal y arriesgada: mezcla cuero, estampas, elementos rocker y piezas llamativas.", foto: "img/cande.png" },
    { nombre: "Guillermina Valdes", estilo: "Elegante", fecha: "2019-07-06", descripcion: "Exmodelo y diseñadora, con una fuerte imprenta lujosa y sofisticada", foto: "img/guille.png" },
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
