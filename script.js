const canvas1 = document.getElementById("GRAFICO_1");
if (canvas1) {
    const GRAFICO_1 = new Chart(canvas1, {
        type: "bar",
        data: {
            labels: [2021, 2022, 2023, 2024, 2025],
            datasets: [
                {
                    label: "Ecología, Materialidad y Futuros",
                    data: [0, 4, 16, 24, 24],
                    backgroundColor: "rgba(239, 243, 5, 1)", // Rosado/Rojo
                    borderColor: "#eff305",
                    borderWidth: 0
                },
                {
                    label: "Educación, Activismo y Género",
                    data: [0, 7, 18, 28, 19],
                    backgroundColor: "rgba(253, 204, 18, 1)", // Azul
                    borderColor: "#fdca12",
                    borderWidth: 0
                },
                {
                    label: "Salud, Cuidado y Neurodiversidad",
                    data: [0, 3, 14, 26, 35],
                    backgroundColor: "rgba(230, 146, 30, 1)", // Amarillo
                    borderColor: "#e6931e",
                    borderWidth: 0
                },
                {
                    label: "Tecnología, Interacción y Medios",
                    data: [1, 1, 12, 16, 25],
                    backgroundColor: "rgba(253, 75, 8, 1)", // Verde azulado
                    borderColor: "#fd4908",
                    borderWidth: 0
                },
                {
                    label: "Territorio, Identidad y Memoria",
                    data: [2, 6, 16, 14, 23],
                    backgroundColor: "rgba(243, 20, 45, 1)", // Morado
                    borderColor: "#f3142e",
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { 
                    display: true, 
                    position: "bottom",
                    labels: { font: { family: "'Georama', sans-serif", size: 11 } }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { color: "rgba(0,0,0,0.06)" },
                    ticks: { font: { family: "'Georama', sans-serif", size: 11 } }
                },
                y: {
                    stacked: true,
                    grid: { color: "rgba(0,0,0,0.06)" },
                    beginAtZero: true,
                    ticks: { font: { family: "'Georama', sans-serif", size: 11 } }
                }
            }
        }
    });
}


const canvas4 = document.getElementById("GRAFICO_4");
if (canvas4) {
    const GRAFICO_4 = new Chart(canvas4, {
        type: "bar",
        data: {
            labels: [
                'Pablo Domínguez González',
                'Leonardo Soto Calquín',
                'Jenny Abud Carrillo',
                'Sebastián Pagueguy Fenner',
                'Gabriela Pradenas Guentherodt'
            ],
            datasets: [
                {
                    label: 'Ecología Materialidad y Futuros',
                    data: [13, 2, 2, 2, 1],
                    backgroundColor: "rgba(239, 243, 5, 1)", // Rosado/Rojo
                    borderColor: "#eff305",
                    borderWidth: 0
                },
                {
                    label: 'Educación Activismo y Género',
                    data: [4, 5, 5, 1, 1],
                    backgroundColor: "rgba(253, 204, 18, 1)", // Azul
                    borderColor: "#fdca12",
                    borderWidth: 0
                },
                {
                    label: 'Salud Cuidado y Neurodiversidad',
                    data: [20, 3, 1, 3, 2],
                    backgroundColor: "rgba(230, 146, 30, 1)", // Amarillo
                    borderColor: "#e6931e",
                    borderWidth: 0
                },
                {
                    label: 'Tecnología Interacción y Medios',
                    data: [5, 1, 2, 3, 1],
                    backgroundColor: "rgba(253, 75, 8, 1)", // Verde azulado
                    borderColor: "#fd4908",
                    borderWidth: 0
                },
                {
                    label: 'Territorio Identidad y Memoria',
                    data: [1, 3, 1, 1, 1],
                    backgroundColor: "rgba(243, 20, 45, 1)", // Morado
                    borderColor: "#f3142e",
                    borderWidth: 0
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: { 
                    display: true, 
                    position: 'bottom',
                    
                },
            },
            scales: {
                x: { beginAtZero: true }
            }
        }
    });
}


            const t = document.querySelector("#este");
            const URL = "h##ttps://api.myjson.online/v1/records/28ff078f-e974-40ed-8f6e-b38b2285c538";

            fetch(URL)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        throw new Error("Error HTTP: " + respuesta.status);
                    }
                    return respuesta.json();
                })
                .then((datos) => {
                    var trabajo = datos.data;
                    console.log(trabajo);
                    trabajo.forEach((x) => {
                        t.innerHTML += `<tr style="${x.ok == 1 ? "background-color: var(--color-iluminadisimo); color: var(--color-oscurisimo)" : ""}"><td>${x.autor}</td><td><a href="${x.repositorio}" target="_blank">${x.proyecto}</a></td><td>${x.notafinal}</td><td>${x.enfoque}</td><td><a href="${x.portafolioacademico}" target="_blank">${x.profe}</a></td></tr>`;
                    });
                })
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });

          

                function sinAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filtrarTabla() {
    const texto = sinAcentos(document.getElementById("elInput").value.toLowerCase());
    const enfoque = document.getElementById("elSelectEnfoque").value;

    document.querySelectorAll("#este tr").forEach(function (fila) {
        const coincideTexto = sinAcentos(fila.textContent.toLowerCase()).includes(texto);
        const coincideEnfoque = enfoque === "" || fila.children[3].textContent.trim() === enfoque;
        fila.style.display = (coincideTexto && coincideEnfoque) ? "" : "none";
    });
}

document.getElementById("elInput").addEventListener("keyup", filtrarTabla);
document.getElementById("elSelectEnfoque").addEventListener("change", filtrarTabla);
