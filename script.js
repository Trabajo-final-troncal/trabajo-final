

            new Chart(document.getElementById("dispersion"), {
                type: "scatter",
                data: {
                    datasets: [
                        {
                            label: "Scatter Dataset",
                            data: [
                                { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO - UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                                { name: "BACHILLERATO EN DISEÑO - UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                                { name: "DISEÑO - UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                                { name: "DISEÑO - UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                                { name: "DISEÑO - UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                                { name: "DISEÑO - UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                                { name: "DISEÑO - UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO - UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                                { name: "DISEÑO - UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                                { name: "DISEÑO - UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                                { name: "DISEÑO - UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                                { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS - UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  - UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO DE INTERIORES Y AMBIENTES  - UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4030000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                                { name: "DISEÑO DE MODA Y MANAGEMENT - UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO DE VESTUARIO Y TEXTIL - UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                                { name: "DISEÑO DE VIDEOJUEGOS - UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN ANIMACIÓN DIGITAL  - UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN COMUNICACIÓN VISUAL  - UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4763300 },
                                { name: "DISEÑO EN COMUNICACION VISUAL - UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                                { name: "DISEÑO EN INTERACCION DIGITAL  - UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO - PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                                { name: "DISEÑO - PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000},
                                { name: "DISEÑO - UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO - UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                                { name: "DISEÑO - UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                                { name: "DISEÑO - UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                                { name: "DISEÑO - UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO EN MARKETING DIGITAL - UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000},
                                { name: "DISEÑO GRÁFICO - UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                                { name: "DISEÑO GRÁFICO - UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                                { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA - UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO - UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                                { name: "DISEÑO INDUSTRIAL - UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                                { name: "DISEÑO INDUSTRIAL - UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000},
                                { name: "DISEÑO INDUSTRIAL - UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                                { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES - UNIVERSIDAD MAYOR", x: 5, y: 7214218},
                                { name: "DISEÑO MULTIMEDIA - UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                                { name: "DISEÑO TEATRAL - UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS - UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                                { name: "INGENIERIA EN DISEÑO - UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                                { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL - UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                                { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES - UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                            ],
                            backgroundColor: "rgba(241,142,45,.75)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        {
                            label: "Línea de referencia",
                            type: "line",
                            data: [
                                { x: 3, y: 4030000 },
                                { x: 7, y: 8080000 },
                            ],
                            borderColor: "rgba(102,102,102,.2)",
                            borderWidth: 1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            fill: false,
                            tension: 0,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return Number.isInteger(value) ? value + " años" : null;
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
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
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        point.name,
                                        "Universidad acreditada por " + point.x + " años",
                                        "Arancel $ " + point.y.toLocaleString("es-CL"),
                                    ];
                                },
                            },
                        },
                    },
                },
            });

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


