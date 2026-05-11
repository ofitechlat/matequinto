const QuestionsBank = {
  level1: [
    {
      id: "fra-001",
      text: "Daniel dividió un tablero y pintó una pequeña sección verde. ¿Qué fracción del total representa la parte coloreada?",
      type: "visual-fraction",
      data: { n: 1, d: 16, style: "square" },
      options: ["1/4", "1/8", "1/16"],
      answer: 2,
      explanation: ["Si cuentas todos los cuadros del tablero, hay 16 en total.", "Solo hay 1 cuadro pintado de verde.", "Por lo tanto, la fracción es 1 de 16 (1/16)."]
    },
    {
      id: "fra-002",
      text: "Una pizza se cortó en 8 pedazos. Si las partes verdes son las que quedan, ¿qué fracción de la pizza sobra?",
      type: "visual-fraction",
      data: { n: 5, d: 8, style: "circle" },
      options: ["3/8", "5/8", "1/2"],
      answer: 1,
      explanation: ["Cuenta los trozos totales: el círculo está dividido en 8 partes.", "Cuenta las porciones verdes: hay 5.", "La fracción restante es 5/8."]
    },
    {
      id: "fra-003",
      text: "Observa la siguiente figura. ¿Qué fracción representa la parte sombreada en verde?",
      type: "visual-fraction",
      data: { n: 1, d: 8, style: "square" },
      options: ["1/2", "1/6", "1/8"],
      answer: 2,
      explanation: ["El rectángulo grande está dividido en 8 cuadritos iguales.", "Solo 1 está pintado.", "La respuesta es 1/8."]
    },
    {
      id: "fra-004",
      text: "Observa la siguiente fracción representada gráficamente (4/12). ¿Cuál es su forma simplificada más pequeña?",
      type: "visual-fraction",
      data: { n: 4, d: 12, style: "square" },
      options: ["1/3", "1/4", "2/6"],
      answer: 0,
      explanation: ["La imagen muestra 4 de 12 cuadritos pintados (4/12).", "Para simplificar, dividimos 4 y 12 entre 4.", "4÷4=1 y 12÷4=3. Resultado: 1/3."]
    },
    {
      id: "fra-005",
      text: "¿Qué fracción del círculo exacto está coloreada en verde?",
      type: "visual-fraction",
      data: { n: 3, d: 4, style: "circle" },
      options: ["1/2", "3/4", "1/3"],
      answer: 1,
      explanation: ["El círculo está dividido por líneas en 4 pedazos iguales.", "De esos 4 pedazos, 3 están verdes.", "La fracción es 3/4."]
    },
    {
      id: "fra-006",
      text: "Esta figura muestra 6 pedazos verdes de 9 en total (6/9). ¿Cuál de estas fracciones es equivalente a lo que ves?",
      type: "visual-fraction",
      data: { n: 6, d: 9, style: "square" },
      options: ["1/3", "2/3", "3/4"],
      answer: 1,
      explanation: ["La fracción visual es 6/9.", "Simplificamos dividiendo arriba y abajo entre 3.", "6÷3=2 y 9÷3=3.", "La fracción equivalente es 2/3."]
    }
  ],

  level2: [
    {
      id: "pem-001",
      text: "Calcula: 10 + 2 × 5",
      type: "icon",
      data: { icon: "🔢" },
      options: ["60", "20", "15"],
      answer: 1,
      explanation: ["Primero la multiplicación: 2 x 5 = 10.", "Luego la suma: 10 + 10 = 20."]
    },
    {
      id: "pem-002",
      text: "Resuelve: (8 + 2) × (5 - 3)",
      type: "icon",
      data: { icon: "🧮" },
      options: ["20", "10", "25"],
      answer: 0,
      explanation: ["Primero paréntesis: (8+2)=10 y (5-3)=2.", "Multiplicamos los resultados: 10 x 2 = 20."]
    },
    {
      id: "pem-003",
      text: "Calcula: 20 ÷ 4 + 3",
      type: "icon",
      data: { icon: "📏" },
      options: ["2", "8", "5"],
      answer: 1,
      explanation: ["Primero la división: 20 ÷ 4 = 5.", "Luego la suma: 5 + 3 = 8."]
    },
    {
      id: "pem-004",
      text: "Resuelve: 15 - 3 × 2 + 1",
      type: "icon",
      data: { icon: "📝" },
      options: ["25", "10", "12"],
      answer: 1,
      explanation: ["Primero multiplicación: 3 x 2 = 6.", "Luego restamos: 15 - 6 = 9.", "Finalmente sumamos: 9 + 1 = 10."]
    },
    {
      id: "pem-005",
      text: "Calcula: 100 ÷ (10 × 2)",
      type: "icon",
      data: { icon: "🧪" },
      options: ["5", "20", "50"],
      answer: 0,
      explanation: ["Resolvemos el paréntesis: 10 x 2 = 20.", "Dividimos: 100 ÷ 20 = 5."]
    },
    {
      id: "pem-006",
      text: "Resuelve: 4² - 6",
      type: "icon",
      data: { icon: "⚡" },
      options: ["2", "10", "16"],
      answer: 1,
      explanation: ["4² significa 4 x 4 = 16.", "Restamos 6: 16 - 6 = 10."]
    }
  ],

  level3: [
    {
      id: "bal-001",
      text: "¿Cuánto pesa un triángulo si 2 cubos y 1 triángulo pesan 20kg, y un cubo pesa 8kg?",
      type: "balance-challenge",
      data: { balances: [{ title: "Dato", left: { cubes: 2, triangles: 1 }, right: { weight: 20 } }] },
      options: ["4kg", "6kg", "2kg"],
      answer: 0,
      explanation: ["Sabemos que 1 Cubo = 8kg.", "Entonces 2 Cubos = 16kg.", "Si 16 + Triángulo = 20, entonces el Triángulo = 20 - 16 = 4kg."]
    },
    {
      id: "bal-002",
      text: "Balanza 1: 3 cubos = 24kg. Balanza 2: 1 cubo + 2 triángulos = 20kg. ¿Peso del triángulo?",
      type: "balance-challenge",
      data: { balances: [
        { title: "Balanza 1", left: { cubes: 3 }, right: { weight: 24 } },
        { title: "Balanza 2", left: { cubes: 1, triangles: 2 }, right: { weight: 20 } }
      ]},
      options: ["8kg", "4kg", "6kg"],
      answer: 2,
      explanation: ["B1: 3 Cubos = 24, entonces 1 Cubo = 24/3 = 8kg.", "B2: 8 + 2 Triángulos = 20.", "2 Triángulos = 20 - 8 = 12. Triángulo = 6kg."]
    },
    {
      id: "bal-003",
      text: "Si un cubo pesa lo mismo que 2 triángulos, y un cubo pesa 10kg, ¿cuánto pesa un triángulo?",
      type: "balance-challenge",
      data: { balances: [{ title: "Igualdad", left: { cubes: 1 }, right: { triangles: 2 } }] },
      options: ["5kg", "10kg", "2.5kg"],
      answer: 0,
      explanation: ["1 Cubo = 10kg.", "10kg = 2 Triángulos.", "Triángulo = 10 / 2 = 5kg."]
    },
    {
      id: "bal-004",
      text: "3 triángulos pesan 15kg. ¿Cuánto pesan 5 triángulos?",
      type: "balance-challenge",
      data: { balances: [{ title: "Grupo", left: { triangles: 3 }, right: { weight: 15 } }] },
      options: ["20kg", "25kg", "30kg"],
      answer: 1,
      explanation: ["3 Triángulos = 15, entonces 1 Triángulo = 5kg.", "Multiplicamos por 5: 5 x 5 = 25kg."]
    },
    {
      id: "bal-005",
      text: "Balanza A: 2 cubos = 10kg. Balanza B: 1 cubo + 1 triángulo = 12kg. ¿Peso del triángulo?",
      type: "balance-challenge",
      data: { balances: [
        { title: "A", left: { cubes: 2 }, right: { weight: 10 } },
        { title: "B", left: { cubes: 1, triangles: 1 }, right: { weight: 12 } }
      ]},
      options: ["5kg", "7kg", "10kg"],
      answer: 1,
      explanation: ["De A: 1 Cubo = 5kg.", "En B: 5 + Triángulo = 12.", "Triángulo = 12 - 5 = 7kg."]
    },
    {
      id: "bal-006",
      text: "Si 4 cubos pesan lo mismo que 2 esferas, y una esfera pesa 20kg, ¿cuánto pesa un cubo?",
      type: "balance-challenge",
      data: { balances: [{ title: "Equivalencia", left: { cubes: 4 }, right: { weight: 40 } }] },
      options: ["10kg", "5kg", "20kg"],
      answer: 0,
      explanation: ["2 esferas = 40kg (20+20).", "4 cubos = 40kg.", "1 cubo = 40 / 4 = 10kg."]
    }
  ],

  level4: [
    {
      id: "geo-001",
      text: "Traslada el punto (1,2) 3 unidades a la derecha y 4 arriba. ¿Dónde queda?",
      type: "grid-challenge",
      data: { points: [{x: 1, y: 2}], size: 8 },
      options: ["(4, 6)", "(3, 4)", "(5, 7)"],
      answer: 0,
      explanation: ["X: 1 + 3 = 4.", "Y: 2 + 4 = 6.", "Resultado: (4, 6)."]
    },
    {
      id: "geo-002",
      text: "¿Cuál es el perímetro de un cuadrado con vértices en (1,1) y (1,4)?",
      type: "grid-challenge",
      data: { points: [{x: 1, y: 1}, {x: 1, y: 4}], size: 5 },
      options: ["3 unidades", "12 unidades", "9 unidades"],
      answer: 1,
      explanation: ["La distancia entre los puntos es 4 - 1 = 3.", "Un cuadrado tiene 4 lados iguales.", "3 x 4 = 12 unidades."]
    },
    {
      id: "geo-003",
      text: "Si el punto (2,2) se mueve al (5,2), ¿cuántas unidades se desplazó?",
      type: "grid-challenge",
      data: { points: [{x: 2, y: 2}, {x: 5, y: 2}], size: 6 },
      options: ["2 unidades", "3 unidades", "5 unidades"],
      answer: 1,
      explanation: ["La coordenada Y no cambió.", "En X: 5 - 2 = 3.", "Se desplazó 3 unidades."]
    },
    {
      id: "geo-004",
      text: "Un punto en (0,0) sube 5 unidades. ¿Cuáles son sus nuevas coordenadas?",
      type: "grid-challenge",
      data: { points: [{x: 0, y: 0}], size: 6 },
      options: ["(5, 0)", "(0, 5)", "(5, 5)"],
      answer: 1,
      explanation: ["X se mantiene en 0.", "Y aumenta 5: 0 + 5 = 5.", "Resultado: (0, 5)."]
    },
    {
      id: "geo-005",
      text: "Identifica el punto simétrico de (1,3) respecto al eje Y.",
      type: "grid-challenge",
      data: { points: [{x: 1, y: 3}], size: 5 },
      options: ["(-1, 3)", "(1, -3)", "(-1, -3)"],
      answer: 0,
      explanation: ["Respecto al eje Y, la X cambia de signo.", "1 pasa a ser -1.", "El punto es (-1, 3)."]
    },
    {
      id: "geo-006",
      text: "¿Cuál es el área de un rectángulo con base de (1,1) a (5,1) y altura de (1,1) a (1,3)?",
      type: "grid-challenge",
      data: { points: [{x: 1, y: 1}, {x: 5, y: 1}, {x: 1, y: 3}], size: 6 },
      options: ["4 unidades²", "12 unidades²", "8 unidades²"],
      answer: 2,
      explanation: ["Base: 5 - 1 = 4.", "Altura: 3 - 1 = 2.", "Área = 4 x 2 = 8."]
    }
  ],

  level5: [
    {
      id: "seq-001",
      text: "Si una figura crece sumando 4 palitos en cada paso, y el paso 1 tiene 5 palitos, ¿cuántos tiene el paso 3?",
      type: "icon",
      data: { icon: "📈" },
      options: ["9", "13", "17"],
      answer: 1,
      explanation: ["Paso 1: 5.", "Paso 2: 5 + 4 = 9.", "Paso 3: 9 + 4 = 13."]
    },
    {
      id: "seq-002",
      text: "En una secuencia de triángulos pegados, el primer triángulo usa 3 palitos y cada nuevo triángulo suma 2 palitos. ¿Cuántos para 4 triángulos?",
      type: "icon",
      data: { icon: "🔺" },
      options: ["9", "11", "12"],
      answer: 0,
      explanation: ["T1: 3.", "T2: 3+2=5.", "T3: 5+2=7.", "T4: 7+2=9."]
    },
    {
      id: "seq-003",
      text: "¿Cuál es el número que sigue en la serie: 2, 5, 8, 11...?",
      type: "icon",
      data: { icon: "🔢" },
      options: ["13", "14", "15"],
      answer: 1,
      explanation: ["La serie suma 3 en cada paso.", "11 + 3 = 14."]
    },
    {
      id: "seq-004",
      text: "Para formar un cuadrado se usan 4 palitos. Para dos cuadrados pegados se usan 7. ¿Cuántos para 3 cuadrados?",
      type: "icon",
      data: { icon: "⏹️" },
      options: ["10", "11", "12"],
      answer: 0,
      explanation: ["C1: 4.", "C2: 4+3=7.", "C3: 7+3=10."]
    },
    {
      id: "seq-005",
      text: "Si el paso 10 de una secuencia tiene 41 palitos y la regla es sumar 4 en cada paso, ¿cuántos tenía el paso 9?",
      type: "icon",
      data: { icon: "🔙" },
      options: ["37", "45", "38"],
      answer: 0,
      explanation: ["Restamos el crecimiento: 41 - 4 = 37."]
    }
  ],

  level6: [
    {
      id: "adv-001",
      text: "Resuelve: [ (10 + 5) × 2 ] ÷ 3 + 4",
      type: "icon",
      data: { icon: "🏆" },
      options: ["14", "10", "15"],
      answer: 0,
      explanation: ["Paréntesis: 10 + 5 = 15.", "Multiplicación: 15 x 2 = 30.", "División: 30 / 3 = 10.", "Suma: 10 + 4 = 14."]
    },
    {
      id: "adv-002",
      text: "Calcula: 1/2 + 1/4 × 2",
      type: "icon",
      data: { icon: "🧪" },
      options: ["1", "3/4", "1 1/2"],
      answer: 0,
      explanation: ["Primero multiplicación: (1/4) x 2 = 2/4 = 1/2.", "Sumamos: 1/2 + 1/2 = 1."]
    },
    {
      id: "adv-003",
      text: "Si X + 15 = 2X - 5, ¿cuánto vale X?",
      type: "icon",
      data: { icon: "⚖️" },
      options: ["10", "20", "15"],
      answer: 1,
      explanation: ["Restamos X en ambos lados: 15 = X - 5.", "Sumamos 5 en ambos lados: 20 = X."]
    },
    {
      id: "adv-004",
      text: "Resuelve: 2 × ( 3² - 4 ) + 10 ÷ 2",
      type: "icon",
      data: { icon: "⚡" },
      options: ["15", "12", "20"],
      answer: 0,
      explanation: ["Potencia: 3² = 9.", "Paréntesis: 9 - 4 = 5.", "Multiplicación: 2 x 5 = 10.", "División: 10 / 2 = 5.", "Suma: 10 + 5 = 15."]
    },
    {
      id: "adv-005",
      text: "¿Cuál es el 25% de (40 + 60)?",
      type: "icon",
      data: { icon: "📊" },
      options: ["20", "25", "50"],
      answer: 1,
      explanation: ["Suma: 40 + 60 = 100.", "El 25% de 100 es 25."]
    }
  ],

  level7: [
    {
      id: "pos-001",
      text: "¿Cómo se escribe en números: 'Un millón doscientos mil cinco'?",
      type: "icon",
      data: { icon: "🖋️" },
      options: ["1,200,500", "1,200,005", "1,000,205"],
      answer: 1,
      explanation: ["Un millón: 1,000,000.", "Doscientos mil: 200,000.", "Cinco: 5.", "Sumamos: 1,200,005."]
    },
    {
      id: "pos-002",
      text: "¿Cuál es la notación desarrollada de 45,020?",
      type: "icon",
      data: { icon: "🧮" },
      options: ["4 DM + 5 UM + 2 D", "4 UM + 5 C + 2 U", "4 DM + 5 C + 2 D"],
      answer: 0,
      explanation: ["4 es Decena de Millar (40,000).", "5 es Unidad de Millar (5,000).", "2 es Decena (20)."]
    },
    {
      id: "pos-003",
      text: "¿Cómo se lee el número 2,000,030?",
      type: "icon",
      data: { icon: "🗣️" },
      options: ["Dos millones treinta", "Doscientos mil treinta", "Dos millones trescientos"],
      answer: 0,
      explanation: ["El primer 2 está en la posición de Unidades de Millón.", "El 30 está al final.", "Se lee: Dos millones treinta."]
    },
    {
      id: "pos-004",
      text: "Si tengo 15 centenas, ¿a cuántas unidades equivale?",
      type: "icon",
      data: { icon: "💰" },
      options: ["150 unidades", "1,500 unidades", "15,000 unidades"],
      answer: 1,
      explanation: ["Una centena son 100 unidades.", "15 x 100 = 1,500 unidades."]
    },
    {
      id: "pos-005",
      text: "¿Qué valor representa el 7 en el número 7,400,000?",
      type: "icon",
      data: { icon: "⭐" },
      options: ["7 Centenas de Millar", "7 Unidades de Millón", "7 Decenas de Millón"],
      answer: 1,
      explanation: ["El 7 está en la séptima posición de derecha a izquierda.", "Esa es la posición de las Unidades de Millón."]
    },
    {
      id: "pos-006",
      text: "En el número 5,678,901, ¿qué cifra ocupa las Unidades de Millar?",
      type: "icon",
      data: { icon: "📍" },
      options: ["8", "7", "6"],
      answer: 0,
      explanation: ["Unidades: 1, Decenas: 0, Centenas: 9, Unidades de Millar: 8."]
    }
  ]
};
