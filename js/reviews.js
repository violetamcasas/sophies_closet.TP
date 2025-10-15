let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

const form = document.getElementById("reviewForm");
const contenedor = document.getElementById("contenedorReviews");
const ordenarBtn = document.getElementById("ordenarBtn");

form.addEventListener("submit", e => {
    e.preventDefault();

    const nuevaReview = {
        nombre: document.getElementById("nombre").value,
        puntuacion: parseInt(document.getElementById("puntuacion").value),
        comentario: document.getElementById("comentario").value
    };

    reviews.push(nuevaReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    form.reset();
    mostrarReviews();
});

function mostrarReviews() {
    contenedor.innerHTML = "";
    reviews.forEach((r, i) => {
        const div = document.createElement("div");
        div.className = "review-card";
        div.innerHTML = `
        <h3>${r.nombre}</h3>
        <div class="estrellas">${"⭐".repeat(r.puntuacion)}</div>
        <p>${r.comentario}</p>
        <button class="eliminar-review" onclick="eliminarReview(${i})">Eliminar</button>
        `;
        contenedor.appendChild(div);
    });
}

function eliminarReview(i) {
    if (confirm("¿Querés eliminar esta review?")) {
        reviews.splice(i, 1);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        mostrarReviews();
    }
}

const ordenarSelect = document.getElementById("ordenarSelect");

ordenarSelect.addEventListener("change", () => {
    const valor = ordenarSelect.value;

    if (valor === "asc" || valor === "antiguas") {
        reviews.sort((a, b) => a.puntuacion - b.puntuacion);
    } 
    else if (valor === "desc" || valor === "recientes") {
        reviews.sort((a, b) => b.puntuacion - a.puntuacion);
    }

    mostrarReviews();
});

mostrarReviews();
