const mathContent = {
  levels: [
    {
      id: "level1",
      title: "Nivel 1: Fracciones Básicas",
      description: "Identificación y sumas simples.",
      status: "unlocked",
      lessons: [
        {
          title: "¿Qué es una Fracción?",
          explanation: "Una fracción representa partes de un todo. El <b>Numerador</b> es cuántas partes tenemos. El <b>Denominador</b> es cuántas partes totales tiene el entero.",
          examples: [
            { text: "Daniel dividió un cuadrado en 4 partes iguales.", type: "fraction-square", n: 1, d: 4 }
          ]
        }
      ],
      challenges: [
        { question: "¿Qué fracción del cuadrado pintó Daniel si dividió una cuarta parte en 4 y pintó una?", options: ["1/4", "1/8", "1/16"], answer: 2, type: "visual-fraction", n: 1, d: 16 }
      ]
    },
    {
      id: "level2",
      title: "Nivel 2: Operaciones Combinadas",
      description: "Introducción a PEMDAS y jerarquía.",
      status: "locked",
      lessons: [
        {
          title: "Jerarquía de Operaciones",
          explanation: "La jerarquía nos dice qué resolver primero: 1. Paréntesis 2. Exponentes 3. Multiplicación y División 4. Adición y Sustracción.",
          examples: [
            { text: "2 + 3 × 4 = 2 + 12 = 14", icon: "📏" }
          ]
        }
      ],
      challenges: [
        { question: "Calcula: 10 + 2 × 5", options: ["60", "20", "15"], answer: 1 },
        { question: "Resuelve: (8 - 3) × 2", options: ["10", "2", "13"], answer: 0 }
      ]
    },
    {
      id: "level3",
      title: "Nivel 3: Desafío de Balanzas",
      description: "Ecuaciones visuales con masas.",
      status: "locked",
      lessons: [
        {
          title: "Equilibrio de Masas",
          explanation: "Si una balanza está en equilibrio, ambos lados pesan lo mismo. Usa esto para encontrar pesos desconocidos.",
          examples: [
            { 
              text: "Usa el peso total para deducir el valor de cada figura.", 
              type: "balance", 
              balances: [
                { title: "Balanza A", left: { cubes: 3 }, right: { weight: 30 } }
              ]
            }
          ]
        }
      ],
      challenges: [
        { 
          question: "Observa las dos balanzas. Si ambas están en equilibrio, ¿cuánto pesa un triángulo?", 
          options: ["5kg", "7kg", "4kg"], 
          answer: 2, 
          type: "balance-challenge",
          balances: [
            { title: "Balanza 1", left: { cubes: 3, triangles: 2 }, right: { weight: 32 } },
            { title: "Balanza 2", left: { cubes: 2, triangles: 1 }, right: { weight: 20 } }
          ]
        }
      ]
    },
    {
      id: "level4",
      title: "Nivel 4: Geometría OLCOMEP",
      description: "Coordenadas y perímetros complejos.",
      status: "locked",
      lessons: [
        {
          title: "El Plano de Coordenadas",
          explanation: "Los puntos se ubican con (x, y). 'x' es horizontal, 'y' es vertical.",
          examples: [
            { text: "Punto en (1, 2)", type: "grid", points: [{x: 1, y: 2}] }
          ]
        }
      ],
      challenges: [
        { 
          question: "Un paralelogramo tiene vértices en (1,2) y (6,4). Si se traslada el punto (1,2) al (4,6), ¿dónde queda el vértice opuesto?", 
          options: ["(9, 8)", "(10, 10)", "(7, 6)"], 
          answer: 0,
          type: "grid-challenge",
          points: [{x: 1, y: 2}, {x: 6, y: 4}]
        }
      ]
    },
    {
      id: "level5",
      title: "Nivel 5: Lógica de Secuencias",
      description: "Patrones de palitos y crecimientos.",
      status: "locked",
      lessons: [
        {
          title: "Patrones Visuales",
          explanation: "Observa cómo crece la figura paso a paso.",
          examples: [
            { text: "7 triángulos usan 15 palitos.", icon: "🔺" }
          ]
        }
      ],
      challenges: [
        { question: "¿Cuántos palitos se necesitan para 21 triángulos si 7 usan 15?", options: ["43", "45", "30"], answer: 0 }
      ]
    },
    {
      id: "level6",
      title: "Nivel 6: Maestro de PEMDAS",
      description: "Operaciones extremas de nivel olimpiada.",
      status: "locked",
      lessons: [
        {
          title: "El Desafío Final",
          explanation: "Combina todo lo aprendido: fracciones, PEMDAS y lógica.",
          examples: [
            { text: "1/2 × (4 + 6) = 5", icon: "🏆" }
          ]
        }
      ],
      challenges: [
        { question: "El número 34 aumentado en 57 es igual a un número X aumentado en 81. ¿Cuál es X?", options: ["10", "12", "15"], answer: 0 },
        { question: "Resuelve: 120,000 - (3/4 * 120,000) - (5/6 * sobrante)", options: ["5,000", "10,000", "25,000"], answer: 0 }
      ]
    },
    {
      id: "level7",
      title: "Nivel 7: Valor Posicional",
      description: "Unidades, Decenas, Centenas y hasta Millones.",
      status: "locked",
      lessons: [
        {
          title: "La Escalera de los Números",
          explanation: "Los números se agrupan de 3 en 3. <br>1. <b>Unidades (U, D, C)</b> <br>2. <b>Millares (UM, DM, CM)</b> <br>3. <b>Millones (UMM)</b>",
          examples: [
            { text: "1,234,567 = 1 Millón, 234 Mil, 567 Unidades.", icon: "🔢" }
          ]
        },
        {
          title: "Notación Desarrollada",
          explanation: "Podemos escribir un número sumando sus partes: <br>4,320 = 4,000 + 300 + 20 <br>O por su posición: 4 UM + 3 C + 2 D",
          examples: [
            { text: "5,002 = 5 UM + 2 U", icon: "📝" }
          ]
        }
      ]
    }
  ],
  training: {
    pemdas: {
      title: "Laboratorio PEMDAS",
      description: "Ingresa una operación y mira cómo se resuelve paso a paso.",
      steps: [
        "1. Paréntesis ( )",
        "2. Exponentes x²",
        "3. Multiplicación/División × ÷",
        "4. Suma/Resta + -"
      ]
    }
  }
};
