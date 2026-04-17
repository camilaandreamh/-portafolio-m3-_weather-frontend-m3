document.addEventListener('DOMContentLoaded', () => {

    const ciudades = [
        { nombre: "Antofagasta", temp: "22°C", estado: "Despejado", icono: "fas fa-sun text-warning" },
        { nombre: "La Serena", temp: "19°C", estado: "Nublado", icono: "fas fa-cloud text-secondary" },
        { nombre: "Viña del Mar", temp: "18°C", estado: "Parcial", icono: "fas fa-cloud-sun text-info" },
        { nombre: "Valparaíso", temp: "17°C", estado: "Viento", icono: "fas fa-wind text-primary" },
        { nombre: "Santiago", temp: "28°C", estado: "Soleado", icono: "fas fa-sun text-warning" },
        { nombre: "Rancagua", temp: "25°C", estado: "Despejado", icono: "fas fa-sun text-warning" },
        { nombre: "Talca", temp: "24°C", estado: "Despejado", icono: "fas fa-sun text-warning" },
        { nombre: "Concepción", temp: "16°C", estado: "Llovizna", icono: "fas fa-cloud-rain text-info" },
        { nombre: "Coronel", temp: "15°C", estado: "Nublado", icono: "fas fa-cloud text-secondary" },
        { nombre: "Temuco", temp: "14°C", estado: "Lluvia", icono: "fas fa-cloud-showers-heavy text-primary" },
        { nombre: "Puerto Montt", temp: "12°C", estado: "Chubascos", icono: "fas fa-cloud-meatball text-secondary" }
    ];

    const contenedor = document.getElementById('contenedor-clima');

    if (!contenedor) {
        console.error("No se encontró el ID 'contenedor-clima' en el HTML");
        return;
    }

    contenedor.innerHTML = '';

    ciudades.forEach(ciudad => {
        const cardHTML = `
            <div class="col">
                <article class="place-card">
                    <header class="place-card__header">
                        <h3 class="place-card__title">${ciudad.nombre}</h3>
                    </header>
                    <div class="place-card__body text-center">
                        <i class="${ciudad.icono} fa-3x my-3"></i>
                        <div class="place-card__temp">${ciudad.temp}</div>
                        <p class="place-card__status">${ciudad.estado}</p>
                    </div>
                    <div class="place-card__footer">
                        <a href="detalle.html?nombre=${encodeURIComponent(ciudad.nombre)}" class="btn btn-primary w-100">Ver detalle</a>
                    </div>
                </article>
            </div>
        `;
        contenedor.innerHTML += cardHTML;
    });
});