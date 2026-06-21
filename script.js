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
                    backgroundColor: "rgba(239, 243, 5, 0.7)", // Rosado/Rojo
                    borderColor: "#eff305",
                    borderWidth: 0
                },
                {
                    label: "Educación, Activismo y Género",
                    data: [0, 7, 18, 28, 19],
                    backgroundColor: "rgba(253, 204, 18, 0.7)", // Azul
                    borderColor: "#fdca12",
                    borderWidth: 0
                },
                {
                    label: "Salud, Cuidado y Neurodiversidad",
                    data: [0, 3, 14, 26, 35],
                    backgroundColor: "rgba(230, 146, 30, 0.7)", // Amarillo
                    borderColor: "#e6931e",
                    borderWidth: 0
                },
                {
                    label: "Tecnología, Interacción y Medios",
                    data: [1, 1, 12, 16, 25],
                    backgroundColor: "rgba(253, 75, 8, 0.7)", // Verde azulado
                    borderColor: "#fd4908",
                    borderWidth: 0
                },
                {
                    label: "Territorio, Identidad y Memoria",
                    data: [2, 6, 16, 14, 23],
                    backgroundColor: "rgba(243, 20, 45, 0.7)", // Morado
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
          new Chart(document.getElementById("dispersion2"), {
      type: "scatter",
  data: {
    datasets: [
      {
        label: "Con costo de titulación",
        data: [
          { name: "DISEÑO - UNIVERSIDAD FINIS TERRAE", x: 7320000, y: 335289 },
          { name: "DISEÑO DE MODA Y MANAGEMENT - UNIVERSIDAD FINIS TERRAE", x: 7320000, y: 335289 },
          { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO - UNIVERSIDAD FINIS TERRAE", x: 7200000, y: 328000 },
          { name: "DISEÑO EN COMUNICACION VISUAL - UNIVERSIDAD DE SANTIAGO DE CHILE", x: 6552000, y: 208000 },
          { name: "INGENIERIA EN DISEÑO DE PRODUCTOS - UNIVERSIDAD TECNICA FEDERICO SANTA MARIA", x: 6000000, y: 125000 },
          { name: "INGENIERIA EN DISEÑO DE PRODUCTOS - UNIVERSIDAD TECNICA FEDERICO SANTA MARIA", x: 6000000, y: 125000 },
          { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD BERNARDO O'HIGGINS", x: 5900000, y: 417252 },
          { name: "DISEÑO - UNIVERSIDAD AUSTRAL DE CHILE", x: 5887000, y: 254000 },
          { name: "DISEÑO - UNIVERSIDAD CATOLICA DE TEMUCO", x: 5276000, y: 138753 },
          { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL - UNIVERSIDAD TECNICA FEDERICO SANTA MARIA", x: 5180000, y: 125000 },
          { name: "DISEÑO GRAFICO MENCION DISEÑO ESTRATEGICO - UNIVERSIDAD DE ANTOFAGASTA", x: 5120000, y: 310000 },
          { name: "DISEÑO INDUSTRIAL - UNIVERSIDAD DE SANTIAGO DE CHILE", x: 4989000, y: 208000 },
          { name: "DISEÑO INDUSTRIAL - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4891000, y: 47500 },
          { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS - UNIVERSIDAD GABRIELA MISTRAL", x: 4814000, y: 481000 },
          { name: "DISEÑO DE VIDEOJUEGOS - UNIVERSIDAD GABRIELA MISTRAL", x: 4814000, y: 454000 },
          { name: "DISEÑO EN ANIMACION DIGITAL - UNIVERSIDAD GABRIELA MISTRAL", x: 4814000, y: 454000 },
          { name: "DISEÑO EN INTERACCION DIGITAL - UNIVERSIDAD GABRIELA MISTRAL", x: 4814000, y: 454000 },
          { name: "DISEÑO EN MARKETING DIGITAL - UNIVERSIDAD GABRIELA MISTRAL", x: 4814000, y: 454000 },
          { name: "DISEÑO EN COMUNICACION VISUAL - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4763300, y: 47500 },
          { name: "DISEÑO - UNIVERSIDAD DE LAS AMERICAS", x: 4730000, y: 198218 },
          { name: "COMUNICACION DIGITAL ESPECIALIDAD DISEÑO Y DESARROLLO DE VIDEOJUEGOS - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION - UNIACC", x: 4580000, y: 400000 },
          { name: "DISEÑO INDUSTRIAL - UNIVERSIDAD DEL BIO-BIO", x: 4434000, y: 55000 },
          { name: "DISEÑO GRAFICO - UNIVERSIDAD DEL BIO-BIO", x: 4307000, y: 55000 },
          { name: "DISEÑO - UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 4305000, y: 218000 },
          { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION - UNIACC", x: 4210000, y: 400000 },
          { name: "DISEÑO GRAFICO ESPECIALIDAD MULTIMEDIA - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION - UNIACC", x: 4210000, y: 400000 },
          { name: "DISEÑO DE INTERIORES Y AMBIENTES - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION - UNIACC", x: 4030000, y: 400000 },
        ],
        backgroundColor: "rgba(241,142,45,.75)",
        pointRadius: 5,
        pointHoverRadius: 5,
      },
      {
        label: "Sin costo de titulación",
        data: [
          { name: "BACHILLERATO EN DISEÑO - UNIVERSIDAD DEL DESARROLLO", x: 10364360, y: 0 },
          { name: "DISEÑO - UNIVERSIDAD DEL DESARROLLO", x: 9754692, y: 0 },
          { name: "INGENIERIA EN DISEÑO - UNIVERSIDAD ADOLFO IBAÑEZ", x: 9754692, y: 0 },
          { name: "DISEÑO - PONTIFICIA UNIVERSIDAD CATOLICA DE CHILE", x: 8080000, y: 0 },
          { name: "DISEÑO - UNIVERSIDAD DIEGO PORTALES", x: 7597000, y: 0 },
          { name: "DISEÑO MENCION INDUSTRIAL/GRAFICO/AMBIENTES - UNIVERSIDAD MAYOR", x: 7214218, y: 0 },
          { name: "DISEÑO DE VESTUARIO Y TEXTIL - UNIVERSIDAD ANDRES BELLO", x: 7148000, y: 0 },
          { name: "DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD ANDRES BELLO", x: 7136000, y: 0 },
          { name: "DISEÑO GRAFICO - UNIVERSIDAD ANDRES BELLO", x: 7065000, y: 0 },
          { name: "DISEÑO - PONTIFICIA UNIVERSIDAD CATOLICA DE VALPARAISO", x: 6915000, y: 0 },
          { name: "DISEÑO MULTIMEDIA - UNIVERSIDAD DE TARAPACA", x: 6555000, y: 0 },
          { name: "DISEÑO - UNIVERSIDAD DE CHILE", x: 6486700, y: 0 },
          { name: "DISEÑO - UNIVERSIDAD DEL DESARROLLO (CONCEPCION)", x: 6056038, y: 0 },
          { name: "DISEÑO - UNIVERSIDAD DE TALCA", x: 5887000, y: 0 },
          { name: "DISEÑO - UNIVERSIDAD DE VALPARAISO", x: 5713000, y: 0 },
          { name: "DISEÑO TEATRAL - UNIVERSIDAD DE CHILE", x: 5492400, y: 0 },
          { name: "DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD ANDRES BELLO (CONCEPCION)", x: 5069000, y: 0 },
          { name: "DISEÑO - UNIVERSIDAD DE VIÑA DEL MAR", x: 4277000, y: 0 },
          { name: "DISEÑO - UNIVERSIDAD DE LA SERENA", x: 4071000, y: 0 },
        ],
        backgroundColor: "rgba(102,102,102,.4)",
        pointRadius: 5,
        pointHoverRadius: 5,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min: 3500000,
        max: 11200000,
        grid: { color: "rgba(0,0,0,0.06)" },
        border: { color: "#ccc" },
        ticks: {
          font: { family: "'Georama', sans-serif", size: 11 },
          color: "#999",
          callback: function (value) {
            return "$ " + (value / 1000000).toFixed(1) + "M";
          },
        },
      },
      y: {
        min: -20000,
        max: 560000,
        grid: { color: "rgba(0,0,0,0.06)" },
        border: { color: "#bbb", dash: [4, 4] },
        ticks: {
          font: { family: "'Georama', sans-serif", size: 11 },
          color: "#999",
          callback: function (value) {
            return value >= 0 ? "$ " + value.toLocaleString("es-CL") : null;
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        titleColor: "#111",
        bodyColor: "#555",
        titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
        bodyFont: { family: "'Georama', sans-serif", size: 11 },
        padding: 10,
        filter: function (item) {
          return item.datasetIndex !== 2;
        },
        callbacks: {
          label: function (context) {
            const point = context.raw;
            return [
              point.name,
              "Arancel: $ " + point.x.toLocaleString("es-CL"),
              point.y > 0
                ? "Costo titulación: $ " + point.y.toLocaleString("es-CL")
                : "Sin costo de titulación",
            ];
          },
        },
      },
    },
  },
});
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
                    backgroundColor: "rgba(239, 243, 5, 0.7)", // Rosado/Rojo
                    borderColor: "#eff305",
                    borderWidth: 0
                },
                {
                    label: 'Educación Activismo y Género',
                    data: [4, 5, 5, 1, 1],
                    backgroundColor: "rgba(253, 204, 18, 0.7)", // Azul
                    borderColor: "#fdca12",
                    borderWidth: 0
                },
                {
                    label: 'Salud Cuidado y Neurodiversidad',
                    data: [20, 3, 1, 3, 2],
                    backgroundColor: "rgba(230, 146, 30, 0.7)", // Amarillo
                    borderColor: "#e6931e",
                    borderWidth: 0
                },
                {
                    label: 'Tecnología Interacción y Medios',
                    data: [5, 1, 2, 3, 1],
                    backgroundColor: "rgba(253, 75, 8, 0.7)", // Verde azulado
                    borderColor: "#fd4908",
                    borderWidth: 0
                },
                {
                    label: 'Territorio Identidad y Memoria',
                    data: [1, 3, 1, 1, 1],
                    backgroundColor: "rgba(243, 20, 45, 0.7)", // Morado
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
            const URL = "https://api.myjson.online/v1/records/80104370-a699-4e54-84a0-d3946662c31e";

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
                        t.innerHTML += `<tr style="${x.ok == 1 ? "background-color: var(--color-iluminadisimo); color: var(--color-oscurisimo)" : ""}"><td>${x.number}</td><td>${x.name}</td><td><a href="${x.repository}" target="_blank">${x.title}</a></td><td>${x.grade}</td><td>${x.category}</td><td>${x.tutor}</td></tr>`;
                    });
                })
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });

            function sinAcentos(str) {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }

            document.getElementById("elInput").addEventListener("keyup", function () {
                const valor = sinAcentos(this.value.toLowerCase());
                document.querySelectorAll("#este tr").forEach(function (fila) {
                    fila.style.display = sinAcentos(fila.textContent.toLowerCase()).includes(valor) ? "" : "none";
                });
            });